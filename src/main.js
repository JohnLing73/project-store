import { createApp } from 'vue'
import router from './router.js';
import store from './store/index.js';
import App from './App.vue'

import TheLogo from './ui/TheLogo.vue';
import BaseLoading from './ui/BaseLoading';
import BaseSlide from './ui/BaseSlide.vue';

import TheHeader from './ui/TheHeader.vue';

import '@/assets/scss/main.scss';
const app  = createApp(App);

app.component('base-loading', BaseLoading);
app.component('the-logo', TheLogo);
app.component('the-header', TheHeader);


app.component('base-slide', BaseSlide );

app.use(store);
app.use(router);

app.mount("#app");