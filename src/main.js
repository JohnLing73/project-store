import { createApp } from 'vue'
import store from './store/index.js';
import App from './App.vue'

import TheLogo from './ui/TheLogo.vue';
import BaseLoading from './ui/BaseLoading';

import TheHeader from './ui/TheHeader.vue';

import '@/assets/scss/main.scss';
const app  = createApp(App);

app.component('base-loading', BaseLoading);
app.component('the-logo', TheLogo);
app.component('the-header', TheHeader);

app.use(store);

app.mount("#app");