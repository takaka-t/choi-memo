import { createRouter, createWebHistory } from "vue-router";

//定数ファイル
import { ScreenNames } from "../constants/const";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //ログイン画面
      path: "/",
      name: ScreenNames.LOGIN,
      component: () => import("../views/Login.vue"),
    },
    {
      //登録画面
      path: "/Search",
      name: ScreenNames.SEARCH,
      component: () => import("../views/Search.vue"),
    },
    {
      path: "/Regist",
      name: ScreenNames.REGIST,
      component: () => import("../views/Regist.vue"),
    },
  ],
});

export default router;
