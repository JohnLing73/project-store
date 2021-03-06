export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  userInfo(state,payload) {
    state.memId = payload.memId;
    state.memBirth = payload.memBirth;
    state.memEmail = payload.memEmail;
    state.memLocation = payload.memLocation;
    state.memCart = []; // 這兩個都要reset 不然會multiple push array
    state.memWishlist = []; // 這兩個都要reset 不然會multiple push array
    if(payload.memCart) {
      for(const keyCart in payload.memCart) {
        if(payload.memCart[keyCart]) {
          state.memCart.push({
            id: keyCart,
            color: payload.memCart[keyCart].color,
            prodImg: payload.memCart[keyCart].prodImg,
            prodName: payload.memCart[keyCart].prodName,
            quantity: payload.memCart[keyCart].quantity,
            size: payload.memCart[keyCart].size,
            total: payload.memCart[keyCart].total,
            prodId: payload.memCart[keyCart].prodId
          });
        }
      }
    }
    if(payload.memWishlist) {
      for(const keyWishlist in payload.memWishlist) {
        state.memWishlist.push({
          id: keyWishlist,
          color: payload.memWishlist[keyWishlist].color,
          prodImg: payload.memWishlist[keyWishlist].prodImg,
          prodName: payload.memWishlist[keyWishlist].prodName,
          quantity: payload.memWishlist[keyWishlist].quantity,
          size: payload.memWishlist[keyWishlist].size,
          total: payload.memWishlist[keyWishlist].total,
          prodId: payload.memWishlist[keyWishlist].prodId
        });
      }
    }
  },
  mutateCart(state, payload) {
    state.memCart.splice(payload, 1);
  },
  mutateWishlist(state, payload) {
    state.memWishlist.splice(payload, 1);
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
}