import { createStore } from "vuex";

import normalModule from './modules/normal/index.js';
import memberModule from './modules/member/index.js';

const store = createStore({
    modules:{
        normal: normalModule,
        member: memberModule
    },
    

})

export default store;