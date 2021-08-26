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
            ],
            flashData: [
              {
                name: 'Mi 11X 5G Cosmic Black 6GB RAM',
                price: 3000,
                brand: 'Mi',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale1.jpg'),
                color:[
                  {
                    colorName: 'silver',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img2.jpg')
                    }
                  },
                  {
                    colorName: 'white',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img3.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img3.jpg')
                    }
                  },
                ],
                views: 205,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Bruce',
                    rating: 5
                  },
                  {
                    memberId: 'Joane',
                    rating: 5
                  }
                ]
              },
              {
                name: 'iQOO Z3 5G',
                price: 2800,
                brand: 'Vivo',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale2.jpg'),
                color:[
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale2-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale2-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'blue',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale2-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale2-small-img2.jpg')
                    }
                  },
                ],
                views: 125,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Mary',
                    rating: 5
                  },
                  {
                    memberId: 'Anne',
                    rating: 5
                  }
                ]
              },
              {
                name: 'Sung-Sung bluetooth',
                price: 4300,
                brand: 'Samsung',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale3.jpg'),
                color:[
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale3-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale3-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'grey',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale3-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale3-small-img2.jpg')
                    }
                  },
                ],
                views: 1805,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Yoshitora Ryoko',
                    rating: 4
                  },
                  {
                    memberId: 'Takahashi Kitusgei',
                    rating: 3
                  },
                  {
                    memberId: 'Frank Thomas',
                    rating: 3
                  },
                ]
              },
              {
                name: 'Air Pods ',
                price: 5900,
                brand: 'Apple',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale4.jpg'),
                color:[
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale4-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale4-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'green',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale4-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale4-small-img2.jpg')
                    }
                  },
                ],
                views: 12305,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Nancy',
                    rating: 5
                  },
                  {
                    memberId: 'Chen Lee',
                    rating: 4
                  },
                  {
                    memberId: 'Steven James',
                    rating: 3
                  },
                  {
                    memberId: 'Lily Jordan',
                    rating: 4
                  },
                  {
                    memberId: 'Yamamoto Ichigo',
                    rating: 5
                  }
                ]
              },
              {
                name: 'DiSano Extra Virgin Olive Oil',
                price: 375,
                brand: 'DiSano',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale5.jpg'),
                color:[],
                views: 4505,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Amanda Peng',
                    rating: 5
                  },
                  {
                    memberId: 'Johnson Rodriguez',
                    rating: 4
                  },
                ]
              },
              {
                name: "Aspora Women's Embroidered Silk",
                price: 299,
                brand: 'Roboton',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale6.jpg'),
                color:[
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'blue',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-small-img2.jpg')
                    }
                  },
                  {
                    colorName: 'frozi',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-big-img3.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-small-img3.jpg')
                    }
                  },
                ],
                views: 355,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Holly Molly',
                    rating: 5
                  },
                  {
                    memberId: 'Sandy Wu',
                    rating: 4
                  },
                ]
              },
              {
                name: "Reebok Men's Walking Shoe",
                price: 2490,
                brand: 'Reebok',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale7.jpg'),
                color:[
                  {
                    colorName: 'navy',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'red',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-small-img2.jpg')
                    }
                  },
                  {
                    colorName: 'zebra',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-big-img3.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-small-img3.jpg')
                    }
                  },
                ],
                views: 355,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Daniel Wills',
                    rating: 5
                  },
                  {
                    memberId: 'Joe Robinson',
                    rating: 4
                  },
                ]
              },
              {
                name: 'Mi 11X 5G Cosmic Black 6GB RAM',
                price: 3000,
                brand: 'Mi',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale1.jpg'),
                color:[
                  {
                    colorName: 'silver',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img2.jpg')
                    }
                  },
                  {
                    colorName: 'white',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img3.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img3.jpg')
                    }
                  },
                ],
                views: 205,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Bruce',
                    rating: 5
                  },
                  {
                    memberId: 'Joane',
                    rating: 5
                  }
                ]
              },
              {
                name: 'iQOO Z3 5G',
                price: 2800,
                brand: 'Vivo',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale2.jpg'),
                color:[
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale2-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale2-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'blue',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale2-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale2-small-img2.jpg')
                    }
                  },
                ],
                views: 125,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Mary',
                    rating: 5
                  },
                  {
                    memberId: 'Anne',
                    rating: 5
                  }
                ]
              },
              {
                name: 'Sung-Sung bluetooth',
                price: 4300,
                brand: 'Samsung',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale3.jpg'),
                color:[
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale3-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale3-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'grey',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale3-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale3-small-img2.jpg')
                    }
                  },
                ],
                views: 1805,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Yoshitora Ryoko',
                    rating: 4
                  },
                  {
                    memberId: 'Takahashi Kitusgei',
                    rating: 3
                  },
                  {
                    memberId: 'Frank Thomas',
                    rating: 3
                  },
                ]
              },
              {
                name: 'Air Pods ',
                price: 5900,
                brand: 'Apple',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale4.jpg'),
                color:[
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale4-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale4-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'green',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale4-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale4-small-img2.jpg')
                    }
                  },
                ],
                views: 12305,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Nancy',
                    rating: 5
                  },
                  {
                    memberId: 'Chen Lee',
                    rating: 4
                  },
                  {
                    memberId: 'Steven James',
                    rating: 3
                  },
                  {
                    memberId: 'Lily Jordan',
                    rating: 4
                  },
                  {
                    memberId: 'Yamamoto Ichigo',
                    rating: 5
                  }
                ]
              },
              {
                name: 'DiSano Extra Virgin Olive Oil',
                price: 375,
                brand: 'DiSano',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale5.jpg'),
                color:[],
                views: 4505,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Amanda Peng',
                    rating: 5
                  },
                  {
                    memberId: 'Johnson Rodriguez',
                    rating: 4
                  },
                ]
              },
              {
                name: "Aspora Women's Embroidered Silk",
                price: 299,
                brand: 'Roboton',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale6.jpg'),
                color:[
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'blue',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-small-img2.jpg')
                    }
                  },
                  {
                    colorName: 'frozi',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-big-img3.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale6-small-img3.jpg')
                    }
                  },
                ],
                views: 355,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Holly Molly',
                    rating: 5
                  },
                  {
                    memberId: 'Sandy Wu',
                    rating: 4
                  },
                ]
              },
              {
                name: "Reebok Men's Walking Shoe",
                price: 2490,
                brand: 'Reebok',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale7.jpg'),
                color:[
                  {
                    colorName: 'navy',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'red',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-small-img2.jpg')
                    }
                  },
                  {
                    colorName: 'zebra',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-big-img3.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale7-small-img3.jpg')
                    }
                  },
                ],
                views: 355,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Daniel Wills',
                    rating: 5
                  },
                  {
                    memberId: 'Joe Robinson',
                    rating: 4
                  },
                ]
              },
              {
                name: 'Mi 11X 5G Cosmic Black 6GB RAM',
                price: 3000,
                brand: 'Mi',
                deadline: {
                  is: false,
                  leftTime: {}
                },
                imgSrc: require('../../../assets/images/homepage/flash-sale/flash-sale1.jpg'),
                color:[
                  {
                    colorName: 'silver',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img1.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img1.jpg')
                    }
                  },
                  {
                    colorName: 'black',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img2.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img2.jpg')
                    }
                  },
                  {
                    colorName: 'white',
                    imgs: {
                      bigImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-big-img3.jpg'),
                      smallImg: require('../../../assets/images/homepage/flash-sale/flash-sale1-small-img3.jpg')
                    }
                  },
                ],
                views: 205,
                productInfo:[
                  'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool',
                  'Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
                  'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology'
                ],
                feedback: [
                  {
                    memberId: 'Bruce',
                    rating: 5
                  },
                  {
                    memberId: 'Joane',
                    rating: 5
                  }
                ]
              },
              
            ],
            recommendData:[

            ]
            
        }
    },
    getters,
    mutations,
    actions
}