import { getUser } from "@/utils/localStorage";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/logout",
    name: "logout",
    redirect: { name: "home" },
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/layout/AdminView.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "request-list",
        name: "request-list",
        component: () => import("@/components/admin/RequestList.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "request/:id",
        name: "request-view",
        component: () => import("@/components/admin/RequestView.vue"),
        meta: {
          requiresAuth: true,
        },
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

router.beforeEach((to, from, next) => {
  let isAuthenticated = getUser();
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: "home" });
  } else if (to.meta.guest && isAuthenticated) {
    return next({ name: "request-list" });
  }
  next();
});

export default router;
