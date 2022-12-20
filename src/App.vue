<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ちょいメモ</v-toolbar-title>
    </v-app-bar>

    <!--ナビゲーション-->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-subheader>もくじ</v-list-subheader>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :to="item.link"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="bg-grey-lighten-2">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

//定数ファイル
import { ScreenPath } from "./constants/const";

//スライダーの表示非表示フラグ
const drawer = ref<boolean>(false);

//ナビゲーションのもくじ
const items = ref([
  { text: "ちょいメモ検索", icon: "mdi-magnify", link: ScreenPath.SEARCH },
  { text: "ちょいメモ登録", icon: "mdi-note-edit", link: ScreenPath.REGIST },
]);
</script>
