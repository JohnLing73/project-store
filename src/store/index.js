import { createStore } from "vuex";

import normalModule from './modules/normal/index.js';
import memberModule from './modules/member/index.js';
import productsMoudule from './modules/products/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules:{
        normal: normalModule,
        member: memberModule,
        products: productsMoudule,
        auth: authModule
    },
    state:{
        mainState:'mainState',
    }

})

export default store;