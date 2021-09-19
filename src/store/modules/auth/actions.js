import axios from "axios"

export default { 
  async signup(context, payload) {
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj1MDW7MxO_PwZsqaR0lF6PNvMI_UYVjs',
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });
      console.log('action signup responsedata', response.data);
      context.dispatch('signupData', payload);
    }catch(error) {
      console.log(error.message);
    }
  },
  async signupData(_context, payload) {
    try {
      const response = await axios.post('https://resume-store-fd4de-default-rtdb.firebaseio.com/users.json',
      {
        email: payload.email,
        memberId: payload.memberId,
        birth: payload.birth,
        location: payload.location
      });
      console.log('ok',response);
    } catch (error) {
      console.log(error.message);
    }
  }

}