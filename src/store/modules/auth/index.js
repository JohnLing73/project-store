import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js'

export default {
  state() {
    return {
      userId: null, //firebase automatically created
      token: null,
      tokenExpiration: null,

      memId: '', // user setting
      memBirth: '',
      memEmail: '',
      memLocation: ''
    }
  },
  getters,
  mutations,
  actions
}