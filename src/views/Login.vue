<script setup lang="ts">
import { ref } from "vue";

//パスワードが見えるかどうか
const isShowPasword = ref<boolean>(false);
</script>

<template>
  <v-card class="mx-auto mt-10" width="300">
    <v-toolbar color="primary text-center">
      <v-toolbar-title>ちょいメモ</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field label="UserName"></v-text-field>
        <v-text-field
          label="Password"
          :type="isShowPasword ? 'text' : 'password'"
          :append-inner-icon="isShowPasword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="() => (isShowPasword = !isShowPasword)"
        ></v-text-field>
        <v-btn size="large" block color="primary" type="submit">ログイン</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
