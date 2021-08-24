import getters from  './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
export default {
    state() {
        return {
            colorTheme: 'dark',
            wrapData: [
                {
                  id: "01",
                  src: require('../../../assets/images/homepage/slideshow1.jpg'),
                },
                {
                  id: "02",
                  src: require("../../../assets/images/homepage/slideshow2.jpg"),
                },
                {
                  id: "03",
                  src: require("../../../assets/images/homepage/slideshow3.jpg"),
                },
                {
                  id: "04",
                  src: require("../../../assets/images/homepage/slideshow4.jpg"),
                },
                {
                  id: "05",
                  src: require("../../../assets/images/homepage/slideshow5.jpg"),
                },
              ],
            profileIcon: require("../../../assets/images/homepage/profile_plain.svg"),
            cartIcon: require('../../../assets/images/homepage/cart_plain.svg')
        }
    },
    getters,
    mutations,
    actions
}