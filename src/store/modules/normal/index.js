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
                imgs: [
                  {
                    category: 'Clothing',
                    src:require("../../../assets/images/homepage/manstyle1.jpg"),
                  },
                  {
                    category: 'Footwear',
                    src:require("../../../assets/images/homepage/manstyle2.jpg"),
                  },
                  {
                    category: 'Watches',
                    src:require("../../../assets/images/homepage/manstyle3.jpg"),
                  },
                  {
                    category: 'Bags & Luggage',
                    src:require("../../../assets/images/homepage/manstyle4.jpg"),
                  }
                ]
              },
              {
                id: 2,
                title: 'Styles for Women | Up to 70% off',
                imgs: [
                  {
                    category: 'Clothing',
                    src: require("../../../assets/images/homepage/womanstyle1.jpg"),
                  },
                  {
                    category: 'Footwear & HandBags',
                    src: require("../../../assets/images/homepage/womanstyle2.jpg"),
                  },
                  {
                    category: 'Watchers',
                    src: require("../../../assets/images/homepage/womanstyle3.jpg"),
                  },
                  {
                    category: 'Fashion Jewellery',
                    src: require("../../../assets/images/homepage/womanstyle4.jpg"),
                  }
                ]
              },
              {
                id: 3,
                title: 'Automotive stuff | Up to 60% off',
                imgs: [
                  {
                    category: 'Cleaning',
                    src: require("../../../assets/images/homepage/automotive1.jpg"),
                  },
                  {
                    category: 'Tire care',
                    src: require("../../../assets/images/homepage/automotive2.jpg"),
                  },
                  {
                    category: 'Helmets',
                    src: require("../../../assets/images/homepage/automotive3.jpg"),
                  },
                  {
                    category: 'Vacuum cleaner',
                    src: require("../../../assets/images/homepage/automotive4.jpg"),
                  }
                ]
              },
            ],
            fontIconData: [
              {
                icon: ['fas','truck'],
                title: "Free Shipping",
                description:"On all order over $250"
              },
              {
                icon: ['fas', 'exchange-alt'],
                title: "Money Guarantee",
                description:"30 day money back"
              },
              {
                icon: ['far', 'credit-card'],
                title: "Payment Secured",
                description:"Secure all your payments"
              },
              {
                icon: ['fas', 'paper-plane'],
                title: "Power Support",
                description:"Online Support 24/7"
              }
            ]
            
        }
    },
    getters,
    mutations,
    actions
}