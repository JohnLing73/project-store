import { createStore } from "vuex";

import normalModule from './modules/normal/index.js';
import memberModule from './modules/member/index.js';
import productsMoudule from './modules/products/index.js';

const store = createStore({
    modules:{
        normal: normalModule,
        member: memberModule,
        products: productsMoudule
    },
    state:{
        mainState:'mainState',
    }

})

export default store;