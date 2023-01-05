<template>
  <h1
    style="width: 20%"
    class="display-1 py-4 mx-auto mt-10 text-center font-weight-light"
  >
    ちょいメモ
  </h1>
  <v-card style="width: 20%; height: 25%" class="ma-auto">
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="mdi-account-circle"
          label="ユーザ名"
        /><v-text-field
          prepend-icon="mdi-lock"
          append-icon="mdi-eye-off"
          label="パスワード"
        />
        <v-card-actions>
          <v-btn color="info" variant="flat" class="ml-auto">ログイン</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style>
.v-toolbar__content {
  display: none !important;
}
.v-main {
  padding-top: 0 !important;
}
</style>

<script setup lang="ts"></script>
