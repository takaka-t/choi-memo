<script setup lang="ts">
import { ref } from "vue";

//定数ファイル
import { ScreenPath } from "./constants/const";
//store
import { globalStore } from "./stores/global";

//スライダーの表示非表示フラグ
const isShowSlider = ref<boolean>(false);

//storeインスタンス
const store = globalStore();

//ナビゲーションのもくじ
const items = ref([
  { text: "検索", icon: "mdi-magnify", link: ScreenPath.SEARCH },
  { text: "登録", icon: "mdi-note-edit", link: ScreenPath.REGIST },
]);
</script>

<template>
  <v-app id="inspire">
    <div v-if="store.isLogin">
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click="() => (isShowSlider = !isShowSlider)" color="primary"></v-app-bar-nav-icon>
        <v-toolbar-title>ちょいメモ</v-toolbar-title>
      </v-app-bar>

      <!--ナビゲーション-->
      <v-navigation-drawer v-model="isShowSlider" temporary>
        <v-list>
          <v-list-subheader>もくじ</v-list-subheader>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.link" active-color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
