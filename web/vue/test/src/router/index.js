import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TextBinding from "../views/TextBinding.vue";
import ListBinding from "../views/ListBinding.vue";
import ComponentBinding from "../views/ComponentBinding.vue";
import ApiGet from "../views/api/apiget.vue";
import ApiPost from "../views/api/apipost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/textbinding",
    name: "textbinding",
    component: TextBinding
  },
  {
    path: "/listbinding",
    name: "listbinding",
    component: ListBinding
  },
  {
    path: "/component-binding",
    name: "ComponentBinding",
    component: ComponentBinding
  },
  {
    path: "/api-get",
    name: "ApiGet",
    component: ApiGet
  },
  {
    path: "/api-post",
    name: "ApiPost",
    component: ApiPost
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
