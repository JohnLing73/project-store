import axios from "axios"

export default { 
  async signup(_context, payload) {
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj1MDW7MxO_PwZsqaR0lF6PNvMI_UYVjs',
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });
      console.log('action signup responsedata', response.data);
    }catch(error) {
      console.log(error.message);
    }
  }

}