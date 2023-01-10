import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/layout/AdminView.vue"),
    children: [
      {
        path: "request-list",
        name: "request-list",
        component: () => import("@/components/admin/RequestList.vue"),
      },
      {
        path: "request/:id",
        name: "request-view",
        component: () => import("@/components/admin/RequestView.vue"),
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

let authenticated = store.getters["users/getLoginUser"];

router.beforeEach((to, from, next) => {
  if (to.name != "home" && authenticated) {
    next({ name: "home" });
  } else next();

  // if (to.name == "home" && store.getters["users/getLoginUser"]) {
  //   next({ name: "admin" });
  // } else next();
});

export default router;
