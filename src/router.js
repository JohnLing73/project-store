import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home/HomePage.vue";
//Products Routes
import ProductDetail from './pages/Products/ProductDetail.vue';
import ProductsDemo from './pages/Products/ProductsDemo.vue';

//Members Routes
import MemberProfile from './pages/member/MemberProfile.vue';
import MemberOrders from './pages/member/MemberOrders.vue';
import MemberCart from './pages/member/MemberCart.vue';
import MemberWishlists from './pages/member/MemberWishlists.vue';
import NewMemberPage from './pages/member/NewMemberPage.vue'

import TheSign from "./pages/SignPage/TheSign.vue";
import MemberPage from "./pages/member/MemberPage.vue"; //待刪
import TheCart from "./pages/check/TheCart.vue";
import CheckOut from "./pages/check/CheckOut.vue";
import AboutPage from "./pages/AboutPage/AboutPage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: '/products/:mainPage', component: ProductsDemo, props:true, name:'mainProduct' },
    { path: '/productDetail/:prodId', component: ProductDetail, name: 'productDetail', props:true },

    { path: '/member/:memId', redirect:'/member/:memId/profile', component: NewMemberPage, name: 'member-page', meta: { needsAuth: true},
      children: [
        { path: '/member/:memId/profile', component: MemberProfile, name: 'member-profile' },
        { path: '/member/:memId/orders', component: MemberOrders, name: 'member-orders' },
        { path: '/member/:memId/cart', component: MemberCart, name: 'member-cart' },
        { path: '/member/:memId/wishlists', component: MemberWishlists, name: 'member-wishlists' },
      ]
    },
    { path: "/member", component: MemberPage, name: 'member',meta: { needsAuth: true}},


    { path: "/sign", component: TheSign, name:'sign' },
    { path: "/cart", component: TheCart },
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

  // router.beforeEach(function(to, _from, next) {
  //     if(to.meta.needsAuth){
  //       alert('needs Auth');
  //       next('sign');
  //     }else{
  //       next();
  //     }
  // });
export default router;
