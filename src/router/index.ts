import { createRouter, createWebHistory } from "vue-router";

//ログイン画面
import Login from "../views/Login.vue";

//検索画面
import Search from "../views/Search.vue";

//登録画面
import Submit from "../views/Submit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/Search",
      name: "Search",
      component: Search,
    },
    {
      path: "/Submit",
      name: "Submit",
      component: Submit,
    },
  ],
});

export default router;
