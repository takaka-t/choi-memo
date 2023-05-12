import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore(
  "global",
  () => {
    /** ログインしているか */
    const isLogin = ref(false);

    /** ローディングを表示するかのフラグ */
    const isLoadingFlag = ref(false);
    /** ローディングを表示するか */
    const isLoading = computed((): boolean => isLoadingFlag.value);
    /** ローディング開始 */
    const loadingStart = (): void => {
      isLoadingFlag.value = true;
    };
    /** ローディング終了 */
    const loadingFinish = (): void => {
      isLoadingFlag.value = false;
    };

    return {
      isLogin,
      isLoading,
      loadingStart,
      loadingFinish,
    };
  },
  { persist: true }
);
