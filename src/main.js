//Import Essential settings
import { createApp } from 'vue'
import router from './router.js';
import store from './store/index.js';
import App from './App.vue'

//Import Base Component
import TheLogo from './ui/TheLogo.vue';
import BaseLoading from './ui/BaseLoading';
import BaseSlide from './ui/BaseSlide.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseCard from './ui/BaseCard.vue';
import TheHeader from './ui/TheHeader.vue';
import PromoteSlide from './ui/PromoteSlide.vue';

//Import Minor Component
import FontAwesomeBanner from './components/homepage/FontAwesomeBanner.vue';

//Import Other Packages
import '@/assets/scss/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTruck, faExchangeAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Using Other Packages
library.add(faTruck, faExchangeAlt, faPaperPlane, faCreditCard);


const app  = createApp(App);

//Register Base Component
app.component('base-loading', BaseLoading);
app.component('the-logo', TheLogo);
app.component('the-header', TheHeader);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-slide', BaseSlide);
app.component('promote-slide', PromoteSlide);

//Register Minor Component 
app.component('font-awesome-banner', FontAwesomeBanner);

//Register Other Packages Component
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);

app.mount("#app");