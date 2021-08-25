import getters from  './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
export default {
    state() {
        return {
            colorTheme: 'dark',
            profileIconDark: require("../../../assets/images/homepage/profile_plain.svg"),
            profileIconLight: require("../../../assets/images/homepage/profile_white.svg"),
            cartIconDark: require('../../../assets/images/homepage/cart_plain.svg'),
            cartIconLight: require('../../../assets/images/homepage/cart_white.svg'),
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
            cardData: [
              {
                id: 1,
                title: 'Styles for Man | Up to 70% off',
                src: [
                  require("../../../assets/images/homepage/manstyle1.jpg"),
                  require("../../../assets/images/homepage/manstyle2.jpg"),
                  require("../../../assets/images/homepage/manstyle3.jpg"),
                  require("../../../assets/images/homepage/manstyle4.jpg")
                ],
                categories: ['Clothing', 'Footwear', 'Watches', 'Bags & Luggage']
              },
              {
                id: 2,
                title: 'Styles for Women | Up to 70% off',
                src: [
                  require("../../../assets/images/homepage/womanstyle1.jpg"),
                  require("../../../assets/images/homepage/womanstyle2.jpg"),
                  require("../../../assets/images/homepage/womanstyle3.jpg"),
                  require("../../../assets/images/homepage/womanstyle4.jpg")
                ],
                categories: ['Clothing', 'Footwear & HandBags', 'Watchers', 'Fashion Jewellery']
              }
            ]
            
        }
    },
    getters,
    mutations,
    actions
}