import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Feed from "../views/Feed.vue";
import { auth } from "../firebase"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: () => import(/* webpackChunkName: "userPages" */ "../views/Create"),
    meta: { requiresAuth: true }
    // beforeEnter: (to, from, next) => {
    //   if (!auth.currentUser) {
    //     return next("/");
    //   } else {
    //     return next();
    //   }
    // }
  },
  {
    path: "/meme/:memeId",
    name: "Details",
    component: Details,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/my-memes",
    name: "MyMemes",
    component: () => import(/* webpackChunkName: "userPages" */ "../views/MyMemes"),
    meta: { requiresAuth: true }
    // beforeEnter: (to, from, next) => {
    //   if (!auth.currentUser) {
    //     return next("/");
    //   } else {
    //     return next();
    //   }
    // }

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

//Before each route is hit checks to see if meta requires auth. If it does and they are not, bounces them to home
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.currentUser) {
      return next({
        path: "/",
        query: { unauthorized: true }
      });
    } else {
      return next();
    }
  }
  else return next();
});

export default router;
