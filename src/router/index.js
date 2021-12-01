import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Cars from "@/views/CategoryPages/Cars.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cars",
    name: "Cars",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cars,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
