import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/",
        redirect: "/index"
      },
      {
        path: "/index",
        component: () => import("../components/Index.vue"),
        children: [
          {
            path: "/index",
            redirect: "/short"
          },
          {
            path: "/short",
            component: () => import("../components/index/Short.vue")
          },
          {
            path: "/fun",
            component: () => import("../components/index/Fun.vue")
          }
        ]
      },
      {
        path: "/adress",
        component: () => import("../components/Adress.vue")
      },
      {
        path: "/meet",
        component: () => import("../components/Meet.vue")
      },
      {
        path: "/community",
        component: () => import("../components/Community.vue")
      },
      {
        path: "/mine",
        component: () => import("../components/Mine.vue")
      }
    ]
  },
  {
    path: "/City",
    component: () => import("../components/index/City.vue")
  },
  {
    path: "*",
    component: () => import("../components/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
