let timer;

import axios from "axios"

export default { 
  async signup(context, payload) { //先上傳認證資料
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj1MDW7MxO_PwZsqaR0lF6PNvMI_UYVjs',
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });
      console.log(response);
      if(response.status !== 200) {
        return;
      }
      context.commit('setUser', {
        token: response.data.idToken,
        userId: response.data.localId,
        tokenExpiration: response.data.expiresIn
      });
      context.dispatch('signupData', payload);
    },
  async signupData(context, payload) { //再上傳基本資料
    const userId = context.rootGetters.userId;
    const token = context.getters.token;
    try {
      const response = await axios.put(`https://resume-store-fd4de-default-rtdb.firebaseio.com/users/${userId}.json?auth=` + token,
      {
        id: userId,
        email: payload.email,
        memberId: payload.memberId,
        birth: payload.birth,
        location: payload.location,
        orders: [],
        cart: [],
        wishlists: []
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  },
  async login(context, payload) {
    // try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj1MDW7MxO_PwZsqaR0lF6PNvMI_UYVjs',{
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      });
      const expiresIn = +response.data.expiresIn*1000;
      const expirationDate = new Date().getTime() + expiresIn;
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('userId', response.data.localId);
      localStorage.setItem('tokenExpiration', expirationDate);// 等等autologin會用來偵測

      timer = setTimeout(function() {
        context.dispatch('autoLogout')
      }, expiresIn);

      context.commit('setUser', {
        token: response.data.idToken,
        userId: response.data.localId,
      });
      if(response.status !== 200) {
        return;
      }
      await context.dispatch('loginGet');
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if(expiresIn < 0) {
      return;
    }

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    },expiresIn);

    if(token && userId) {
      context.commit('setUser',{
        token: token,
        userId: userId,
      });
      context.dispatch('loginGet');
    }
  },
  async loginGet(context) { // 登入成功便抓取資料ˋ
      const userId = context.rootGetters.userId;
      const token = context.getters.token;
      const response = await axios.get(`https://resume-store-fd4de-default-rtdb.firebaseio.com/users/${userId}.json?auth=` + token);
      if(response.data.cart && response.data.wishlist) {
        context.commit('userInfo', {
          memId: response.data.memberId,
          memBirth: response.data.birth,
          memEmail: response.data.email,
          memLocation: response.data.location,
          memCart: response.data.cart,
          memWishlist: response.data.wishlist
        });
      }else if(response.data.cart && !response.data.wishlist) {
        context.commit('userInfo', {
          memId: response.data.memberId,
          memBirth: response.data.birth,
          memEmail: response.data.email,
          memLocation: response.data.location,
          memCart: response.data.cart,
        });
      }else if(!response.data.cart && response.data.wishlist) {
        context.commit('userInfo', {
          memId: response.data.memberId,
          memBirth: response.data.birth,
          memEmail: response.data.email,
          memLocation: response.data.location,
          memWishlist: response.data.wishlist
        });
      }else {
        context.commit('userInfo', {
          memId: response.data.memberId,
          memBirth: response.data.birth,
          memEmail: response.data.email,
          memLocation: response.data.location,
        });
      }
  },
  async addList(context, payload) {
    const userId = context.rootGetters.userId;
    const type = payload.type;
    const token = context.getters.token;
    const newList = {
      prodName: payload.product.prodName,
      prodImg: payload.product.color[0].imgSrc,
      total: payload.product.price * payload.quantity,
      size: payload.size,
      color: payload.color,
      quantity: payload.quantity,
      prodId: payload.prodId
    };
    const response = await axios.post(`https://resume-store-fd4de-default-rtdb.firebaseio.com/users/${userId}/${type}.json?auth=` + token,{
      ...newList
    });
    console.log(newList);
    console.log(response);
  },
  async modifyList(context, payload) {
    const userId = context.rootGetters.userId;
    const type = payload;
    const token = context.getters.token;
    let data;
    if(type === 'cart') {
      data = context.rootGetters.memCart;
    }else {
      data = context.rootGetters.memWishlist;
    }
    const response = await axios.put(`https://resume-store-fd4de-default-rtdb.firebaseio.com/users/${userId}/${type}.json?auth=` + token, data );
    console.log(context.rootGetters.memCart);
    console.log(response);
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
    context.commit('userInfo',{
      memId: '',
      memBirth: '',
      memEmail: '',
      memLocation: '',
      memCart: [],
      memWishlist: []
    })
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
}