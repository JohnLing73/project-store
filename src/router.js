import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home/HomePage.vue";
//Products and it children routes
import ProductsMan from "./pages/Products/ProductsMan.vue";
import ProductsWoman from "./pages/Products/ProductsWoman.vue";
import ProductsOther from "./pages/Products/ProductsOther.vue";
import ProductDetail from './components/Products/ProductDetail.vue';

import TheSign from "./pages/SignPage/TheSign.vue";
import MemberPage from "./pages/member/MemberPage.vue";
import TheCart from "./pages/check/TheCart.vue";
import CheckOut from "./pages/check/CheckOut.vue";
import AboutPage from "./pages/AboutPage/AboutPage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/manProducts", component: ProductsMan, name:'manProducts' },
    { path: "/womanProducts", component: ProductsWoman, name:'womanProducts' },
    { path: "/otherProducts", component: ProductsOther, name:'otherProducts' },

    // 待刪
    { path: '/productDetail', component: ProductDetail },

    { path: "/sign", component: TheSign, name:'sign' },
    { path: "/member", component: MemberPage, name: 'member',meta: { needsAuth: true}},
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
