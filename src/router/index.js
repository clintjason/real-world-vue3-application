import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EventCard from "@/components/EventCard";
import EventDetails from "@/views/event/Details";
import EventRegister from "@/views/event/Register";
import EventEdit from "@/views/event/Edit";
import EventLayout from "@/views/event/Layout";
import NotFound from "@/views/NotFound";
import NProgress from "nprogress";
import EventService from "@/services/EventService.js";
import GStore from "@/store";

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
    path: "/events/:id",
    name: "EventLayout",
    props: true, //This gives the prop access to the component
    component: EventLayout,
    beforeEnter: to => {
      return EventService.getEvent(to.params.id)
      .then(response => {
        GStore.event = response.data;
        })
        .catch(error=>{ 
          console.error(error);
          if(error.response && error.response.Status == 404) {
              return {
                  name: '404Resource',
                  params: {resource: 'event'}
              }
          }
          return {name: 'NetworkError'}
      })
    },
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        meta: { requireAuth: true },
        component: EventEdit,
      },
    ]
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => ({ path: '/events/' + to.params.afterEvent})
  }
  /* {
    path: '/event/:id',
    redirect: {name: "EventDetails"},
    children: [
      {path:'register', redirect: {name: 'EventRegister'}},
      {path:'edit', redirect: {name: 'EventEdit'}},
    ]
  } */,
  
  {
    path: "/about-us",
    name: "About",
    props: { showExtra: true },
    //alias: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:'/about',
    redirect: { name: 'About'}
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    props: true,
    name: '404Resource',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: () => import('@/views/NetworkError')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) { // <----
      return savedPosition
    } else {
      return { top: 0 } // always scroll to top if there is not a saved position
    }
  }
});
// Before navigation starts and component route guard
router.beforeEach((to,from)=>{
  NProgress.start();
  const notAuthorized = true
  if (to.meta.requireAuth && notAuthorized) {
    GStore.flashMessage = 'Sorry, you are not authorized to view this page'

    setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)

    if (from.href) { // <--- If this navigation came from a previous page.
      return false
    } else {  // <--- Must be navigating directly
      return { path: '/' }  // <--- Push navigation to the root route.
    }
  }
})
// After navigation completes
router.afterEach(()=>{
  NProgress.done();
})

export default router;
