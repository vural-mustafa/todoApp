import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  //Sayfalarimiz icin gerekli yonlendrme yaptigimiz alan.
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"), //Bu kodun yazma amaci performans 
    //icin onemli sadece sayfa yonlenince calisiyor.
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
