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
    path: "/admin",
    name: "admin-layout",
    component: () => import("@/layout/AdminView.vue"),
    children: [
      {
        path: "request-list",
        name: "request-list",
        component: () => import("@/components/admin/RequestList.vue"),
      },
      {
        path: "request",
        name: "request-item",
        component: () => import("@/components/admin/RequestItem.vue"),
      },
    ],
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
