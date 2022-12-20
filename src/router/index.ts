import { createRouter, createWebHistory } from "vue-router";

//ログイン画面
import Login from "../views/Login.vue";

//検索画面
import Search from "../views/Search.vue";

//登録画面
import Regist from "../views/Regist.vue";

//定数ファイル
import { ScreenPath } from "../constants/const";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ScreenPath.LOGIN,
      name: "Login",
      component: Login,
    },
    {
      path: ScreenPath.SEARCH,
      name: "Search",
      component: Search,
    },
    {
      path: ScreenPath.REGIST,
      name: "Regist",
      component: Regist,
    },
  ],
});

export default router;
