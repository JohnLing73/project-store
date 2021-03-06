export default {
  token(state) {
    return state.token;
  },
  userId(state) {
    return state.userId;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
  memId(state) {
    return state.memId;
  },
  memBirth(state) {
    return state.memBirth;
  },
  memEmail(state) {
    return state.memEmail;
  },
  memLocation(state) {
    return state.memLocation;
  },
  memCart(state) {
    return state.memCart;
  },
  memWishlist(state) {
    return state.memWishlist;
  }
}