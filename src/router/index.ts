/*
 * @Author: shenhuanjie@live.cn
 * @Date: 2022-10-20 00:22:48
 * @LastEditors: shenhuanjie@live.cn
 * @LastEditTime: 2022-10-20 00:49:42
 * @FilePath: \src\router\index.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
