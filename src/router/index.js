import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login-page",
    component: () =>
      import(/* webpackChunkName: "login-page" */ "@/views/LoginPage.vue"),
  },
  {
    path: "*",
    name: "notfound",
    component: () => import("@/views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
