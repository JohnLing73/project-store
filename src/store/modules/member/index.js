import getters from  './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
    state() {
        return {
            theFinalMembers:[   
                {   //第一位 User
                    memId: 'John Ling',
                    email: 'johnling@mail.com',
                    birth: '1991-07-03',
                    location: 'Taiwan',
                    orders:[
                        {   //一筆訂單
                            orderId: 'order1',
                            orderItems:[
                                {   // 該筆訂單中的一項商品
                                    prodName:'Moblie Phone ASUS',
                                    prodColor:'black',
                                    prodImgUrl:'https://m.media-amazon.com/images/I/41nLUYqSvLL.jpg',
                                    prodSize: '128G',
                                    prodEachPrice: 250,
                                    prodQuantity: 1,
                                },
                                {
                                    prodName:'MI Watch 5',
                                    prodColor:'pink',
                                    prodSize: '1',
                                    prodImgUrl:'https://m.media-amazon.com/images/I/41nLUYqSvLL.jpg',
                                    prodEachPrice: 30,
                                    prodQuantity: 2,  
                                }
                            ],
                            orderDate:'2021-09-05',
                            orderState: 'Order established',//三種狀態'Shipping Status' 'Already delivery'
                            shippingWay:'Home Delivery',//'In-Store-Pickup'
                            pay:'Credit Card',//'Cash'
                        },
                        {   //一筆訂單
                            orderId: 'order2',
                            orderItems:[
                                {   // 該筆訂單中的一項商品
                                    prodName:'Moblie Phone ASUS',
                                    prodColor:'black',
                                    prodImgUrl:'https://m.media-amazon.com/images/I/41nLUYqSvLL.jpg',
                                    prodSize: '128G',
                                    prodEachPrice: 250,
                                    prodQuantity: 2,
                                },
                                {
                                    prodName:'MI Watch 5',
                                    prodColor:'pink',
                                    prodImgUrl:'https://m.media-amazon.com/images/I/41nLUYqSvLL.jpg',
                                    prodSize: '1',
                                    prodEachPrice: 30,
                                    prodQuantity: 5,  
                                }
                            ],
                            orderDate:'2021-09-05',
                            orderState: 'Shipping status',//三種狀態'Shipping Status' 'Delivery'
                            shippingWay:'Home Delivery',//'In-Store-Pickup'
                            pay:'Credit Card',//'Cash'
                        }
                    ],
                    wishlists:[ //一份願望清單
                        {   //願望清單中的商品
                            wishProductName:'Bentley Continental GT',
                            wishProductUrl:'https://m.media-amazon.com/images/I/914o5xV1+8L._SL1500_.jpg',
                            wishProductColor: 'skyblue',
                            wishProductPrice: 3500000,
                            wishProductThumbnail:'' //商品縮圖
                        },
                    ],
                    cart:[
                        {   //購物車中第一個商品內容
                            cartProductName: 'Audi Rs7 Sportback',
                            cartProductUrl:'https://m.media-amazon.com/images/I/914o5xV1+8L._SL1500_.jpg',
                            cartProductColor:'silver',
                            cartProductPrice: 155000,
                            cartProductSize:'4.0L',
                            cartProductThumbnail:'https://i3.zi.org.tw/incar/2020/08/1596777995-c40ea4a2ce35e031938ea6903f69b326.jpg' //商品縮圖
                        },
                        {   //購物車中第二個商品內容
                            cartProductName: 'Bentley Continental GT',
                            cartProductUrl:'https://www.sanjinoir.com/wp-content/uploads/1-528.jpg',
                            cartProductColor:'silver',
                            cartProductPrice: 805000,
                            cartProductSize:'6.0L',
                            cartProductThumbnail:'https://www.sanjinoir.com/wp-content/uploads/1-528.jpg' //商品縮圖
                        }
                    ]
                },
                {   //第二位 user

                }
            ],
            members:[
                {
                    memberId:'',
                    
                }
            ]
        }
    },
    getters,
    mutations,
    actions
}