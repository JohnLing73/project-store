import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home/HomePage.vue";
//Products Routes
import ProductDetail from './pages/Products/ProductDetail.vue';
import ProductsDemo from './pages/Products/ProductsDemo.vue';

import TheSign from "./pages/SignPage/TheSign.vue";
import CheckOut from "./pages/check/CheckOut.vue";
import AboutPage from "./pages/AboutPage/AboutPage.vue";
import NotFound from "./pages/NotFound.vue";

import store from './store/index.js';

//Members Routes to lazy loading route
const NewMemberPage = () => import('./pages/member/NewMemberPage.vue');
const MemberProfile = () => import('./pages/member/MemberProfile.vue');
const MemberOrders = () => import('./pages/member/MemberOrders.vue');
const MemberCart = () => import('./pages/member/MemberCart.vue');
const MemberWishlists = () => import('./pages/member/MemberWishlists.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: '/products/:mainPage', component: ProductsDemo, props:true, name:'mainProduct' },
    { path: '/productDetail/:prodId', component: ProductDetail, name: 'productDetail', props:true },

    { path: '/member/:memId', redirect:'/member/:memId/profile', component: NewMemberPage, name: 'member-page', 
      meta: { needsAuth: true},
      children: [
        { path: '/member/:memId/profile', component: MemberProfile, name: 'member-profile' },
        { path: '/member/:memId/orders', component: MemberOrders, name: 'member-orders' },
        { path: '/member/:memId/cart', component: MemberCart, name: 'member-cart' },
        { path: '/member/:memId/wishlists', component: MemberWishlists, name: 'member-wishlists' },
      ]
    },


    { path: "/sign", component: TheSign, name:'sign' },
    { path: "/check", component: CheckOut },
    { path: "/about", component: AboutPage, name: 'about' },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkExactActiveClass: 'exact-router-link',
  scrollBehavior(_to, _from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0};
  }
});

  router.beforeEach(function(to, _from, next){
    if(to.meta.needsAuth && !store.getters.isAuthenticated) {
      next('/sign');
    }else {
      next();
    }
  });
export default router;
