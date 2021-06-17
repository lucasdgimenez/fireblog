import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Teste from "../views/Teste.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/teste",
    name: "teste",
    component: Teste,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
