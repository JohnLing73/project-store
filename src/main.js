//Import Essential settings
import { createApp, defineAsyncComponent } from 'vue';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue'

//Import Base Component
import TheLogo from './ui/TheLogo.vue';
import BaseLoading from './ui/BaseLoading';
// import BaseSlide from './ui/BaseSlide.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseCard from './ui/BaseCard.vue';
import BaseSlide from './ui/BaseSlide.vue';
import TheHeader from './ui/TheHeader.vue';
// import RecommendSlide from './pages/Home/RecommendSlide.vue';
import BriefSign from './components/BriefSign.vue';
import FingerIcon from './ui/FingerIcon.vue';
import FontIcon from './ui/FontIcon.vue';
// import BaseDialog from './ui/BaseDialog.vue';
import QuickLink from './ui/QuickLink.vue';
import PopBar from './ui/PopBar.vue';

import LandingPage from './components/homepage/LandingPage.vue';

import ProductsSide from './components/Products/ProductsSide.vue';
import ProductsMain from './components/Products/ProductsMain.vue';
import ProductsCard from './components/Products/ProductsCard.vue';

//Import Minor Component
import FontAwesomeBanner from './components/homepage/FontAwesomeBanner.vue';

//Import Other Packages
import '@/assets/scss/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTruck, faExchangeAlt, faPaperPlane, faStar, faUserCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Using Other Packages
library.add(faTruck, faExchangeAlt, faPaperPlane, faCreditCard, faInstagram, faTwitter, faFacebook, faCopyright, faStar, faUserCircle, faTrashAlt);


const RecommendSlide = defineAsyncComponent(() => import('./pages/Home/RecommendSlide.vue'));
const BaseDialog = defineAsyncComponent(() => import('./ui/BaseDialog.vue'));

const app  = createApp(App);

//Register Base Component
app.component('base-loading', BaseLoading);
app.component('the-logo', TheLogo);
app.component('the-header', TheHeader);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-slide', BaseSlide);
app.component('recommend-slide', RecommendSlide);
app.component('brief-sign', BriefSign);
app.component('finger-icon', FingerIcon);
app.component('font-icon', FontIcon);
app.component('base-dialog', BaseDialog);
app.component('quick-link', QuickLink);
app.component('pop-bar', PopBar);

app.component('products-side', ProductsSide);
app.component('products-main', ProductsMain);
app.component('product-card', ProductsCard);

app.component('landing-page', LandingPage);

//Register Minor Component 
app.component('font-awesome-banner', FontAwesomeBanner);

//Register Other Packages Component
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);

app.mount("#app");