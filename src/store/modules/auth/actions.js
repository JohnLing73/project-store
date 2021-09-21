import axios from "axios"

export default { 
  async signup(context, payload) { //先上傳認證資料
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj1MDW7MxO_PwZsqaR0lF6PNvMI_UYVjs',
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });
      console.log('action signup responsedata', response.data);
      context.commit('setUser', {
        token: response.data.idToken,
        userId: response.data.localId,
        tokenExpiration: response.data.expiresIn
      });
      // console.log('userId', response.data.localId);
      console.log('getter userId', context);
      console.log('getter userId', context.getters.userId);
      console.log('getter userId', context.rootGetters.userId);
      context.dispatch('signupData', payload);
    }catch(error) {
      console.log(error);
      throw error;
    }
  },
  async signupData(context, payload) { //再上傳基本資料
    const userId = context.rootGetters.userId;
    try {
      const response = await axios.put(`https://resume-store-fd4de-default-rtdb.firebaseio.com/users/${userId}.json`,
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
      console.log('ok',response);
    } catch (error) {
      console.log(error.message);
    }
  },
  async login(context, payload) {
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj1MDW7MxO_PwZsqaR0lF6PNvMI_UYVjs',{
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      });
      context.commit('setUser', {
        token: response.data.idToken,
        userId: response.data.localId,
        tokenExpiration: response.data.expiresIn
      });
      await context.dispatch('loginGet');
    }catch(error) {
      console.log(error.messagee);
      throw error;
    }
  },
  async loginGet(context) {
      const userId = context.rootGetters.userId;
      const response = await axios.get(`https://resume-store-fd4de-default-rtdb.firebaseio.com/users/${userId}.json`);
      context.commit('userInfo', {
        memId: response.data.memberId
      })
  }

}