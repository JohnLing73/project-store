import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home/HomePage.vue";
//Products and it children routes
import AllProducts from "./pages/Products/AllProducts.vue";
import ProductsMan from "./pages/Products/ProductsMan.vue";
import ProductsWoman from "./pages/Products/ProductsWoman.vue";
import ProductsOther from "./pages/Products/ProductsOther.vue";

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
    { path: "/allProducts", component: AllProducts },
    { path: "/manProducts", component: ProductsMan },
    { path: "/womanProducts", component: ProductsWoman },
    { path: "/otherProducts", component: ProductsOther },
    { path: "/sign", component: TheSign },
    { path: "/member", component: MemberPage },
    { path: "/cart", component: TheCart },
    { path: "/check", component: CheckOut },
    { path: "/about", component: AboutPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
