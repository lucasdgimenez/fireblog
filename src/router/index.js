import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Teste from "../views/Teste.vue";
import Blogs from "../views/Blogs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
  },
  {
    path: "/teste",
    name: "teste",
    component: Teste,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
