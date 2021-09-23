export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
  userInfo(state,payload) {
    state.memId = payload.memId;
    state.memBirth = payload.memBirth;
    state.memEmail = payload.memEmail;
    state.memLocation = payload.memLocation;
    for(const keyCart in payload.cart) {
      state.memCart.push(payload.cart[keyCart]);
    }
    for(const keyWishlist in payload.wishlist) {
      state.memWishlist.push(payload.wishlist[keyWishlist]);
    }
    console.log(state.memId);
    console.log(state.memBirth);
    console.log(state.memEmail);
    console.log(state.memLocation);
    console.log(state.memCart);
    console.log(state.memWishlist);
  }
}