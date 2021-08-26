import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/Home/HomePage.vue';
import AllProducts from './pages/Products/AllProducts.vue';
import TheSign from './pages/SignPage/TheSign.vue';
import MemberPage from './pages/member/MemberPage.vue';
import TheCart from './pages/check/TheCart.vue';
import CheckOut from './pages/check/CheckOut.vue';
import AboutPage from './pages/AboutPage/AboutPage.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/allproducts', component: AllProducts },
    { path: '/sign', component: TheSign },
    { path: '/member', component: MemberPage },
    { path: '/cart', component: TheCart },
    { path: '/check', component: CheckOut },
    { path: '/about', component: AboutPage },
    { path: '/:notFound(.*)', component: NotFound } 
  ]
})

export default router;