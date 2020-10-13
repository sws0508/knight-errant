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
        component: () => import("../components/Adress.vue"),
        children: [
          {
            path: "/adress",
            redirect: "/adress/reservation"
          },
          {
            path: "/adress/reservation",
            component: () => import("../components/adress/Reservation.vue")
          },
          {
            path: "/adress/tourism",
            component: () => import("../components/adress/Tourism.vue")
          },
          {
            path: "/adress/strategy",
            component: () => import("../components/adress/Strategy.vue")
          },
          {
            path: "/adress/travel",
            component: () => import("../components/adress/Travel.vue")
          },
          {
            path: "/adress/video",
            component: () => import("../components/adress/Video.vue")
          }
        ]
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
        component: () => import("../components/Mine.vue"),
        meta: { needLogin: true }
      }
    ]
  },
  {
    path: "/City",
    component: () => import("../components/index/City.vue")
  },
  {
    path: "/Login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "*",
    component: () => import("../components/NotFound.vue")
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:()=>import('../views/Detail.vue')
  },
];

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   // 判断页面是否需要登录
//   if (to.meta.needLogin) {
//     // 说明这个页面需要登录
//     if (localStorage.getItem("token")) {
//       next();
//     } else {
//       next("/login");
//     }
//   } else {
//     next();
//   }
// });

export default router;
