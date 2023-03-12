import { defineStore } from "pinia";
import { ref } from "vue";

export const globalStore = defineStore("global", () => {
  ///ログインしているどうか
  const isLogin = ref<boolean>(true);

  return { isLogin };
});
