<template>
  <h1
    style="width: 20%"
    class="display-1 py-4 mx-auto mt-10 text-center font-weight-light"
  >
    ちょいメモ
  </h1>
  <v-card style="width: 20%; height: 33%" class="ma-auto">
    <v-card-text>
      <v-form>
        <v-text-field
          class="my-5"
          prepend-icon="mdi-account-circle"
          label="ユーザ名"
          v-model="name"
        />
        <v-text-field
          class="mb-5"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          label="パスワード"
          v-model="password"
        />
        <v-card-actions>
          <v-btn color="info" variant="flat" class="ml-auto" @click="Submit"
            >ログイン</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { ScreenNames } from "../constants/const";

//パスワードを見せるかどうか
const showPassword = ref<boolean>(false);
//ユーザー名
const name = ref<String>("");
//パスワード
const password = ref<String>("");

//ログインボタン押下時処理
const Submit = () => {
  //ログイン成功後、検索画面へ遷移
  router.push(ScreenNames.SEARCH);
};
</script>
