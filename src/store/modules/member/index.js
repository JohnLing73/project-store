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
                                    prodSize: '128G',
                                    productEachPrice: 250,
                                    productQuantity:1,
                                },
                                {
                                    prodName:'MI Watch 5',
                                    prodColor:'pink',
                                    prodSize: '1',
                                    productEachPrice: 30,
                                    productQuantity:2,  
                                }
                            ],
                            orderDate:'2021-09-05',
                            orderState: 'Order established!',//三種狀態'Shipping Status' 'Delivery'
                            shippingWay:'Home Delivery',//'In-Store-Pickup'
                            pay:'Credit Card',//'Cash'
                        },
                        {   //一筆訂單
                            orderId: 'order1',
                            orderItems:[
                                {   // 該筆訂單中的一項商品
                                    prodName:'Moblie Phone ASUS',
                                    prodColor:'black',
                                    prodSize: '128G',
                                    productEachPrice: 250,
                                    productQuantity:1,
                                },
                                {
                                    prodName:'MI Watch 5',
                                    prodColor:'pink',
                                    prodSize: '1',
                                    productEachPrice: 30,
                                    productQuantity:2,  
                                }
                            ],
                            orderDate:'2021-09-05',
                            orderState: 'Order established!',//三種狀態'Shipping Status' 'Delivery'
                            shippingWay:'Home Delivery',//'In-Store-Pickup'
                            pay:'Credit Card',//'Cash'
                        }
                    ],
                    wishlists:[ //一份願望清單
                        {   //願望清單中的商品
                            wishProductName:'Bentley Continental GT',
                            wishProductUrl:'',
                            wishProductColor: 'skyblue',
                            wishProductPrice: 3500000,
                            wishProductThumbnail:'' //商品縮圖
                        },
                    ],
                    cart:[
                        {   //購物車中第一個商品內容
                            cartProductName: 'Audi Rs7 Sportback',
                            cartProductUrl:'',
                            cartProductColor:'silver',
                            cartProductPrice: 805000,
                            cartProductThumbnail:'' //商品縮圖
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