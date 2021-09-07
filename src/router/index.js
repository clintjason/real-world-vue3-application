import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EventCard from "@/components/EventCard";
import EventDetails from "@/views/EventDetails";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/events",
    name: "EventCard",
    component: EventCard,
    props: route => ({page: route.query.page ? parseInt(route.query.page) : 1})
  },
  {
    path: "/test/:page",
    name: "Test",
    props: (route) => ({ showExtra: route.query.e || false, page: route.params.page }),
    component: ()=> import("../views/Test.vue"),
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true, //This gives the prop access to the component
    component: EventDetails,
  },
  {
    path: "/about",
    name: "About",
    props: { showExtra: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
