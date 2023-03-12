<script setup lang="ts"></script>
<template>
  <v-container>
    <v-form>
      <v-text-field>URL</v-text-field>
      <v-text-field>タイトル</v-text-field>
      <v-text-field>備考</v-text-field>
      <v-text-field>登録者</v-text-field>

      <div class="d-flex flex-row align-end">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" width="200" />
        <v-btn size="large" color="primary">選択</v-btn>
      </div>
      <div class="d-flex flex-row mt-7">
        <div style="width: 60%; outline: 1px solid black" class="mr-5"></div>

        <v-btn size="large" color="primary">選択</v-btn>
      </div>
      <div class="mx-auto mt-7" style="width: 10%">
        <v-btn size="large" color="primary" type="submit" width="100%">登録</v-btn>
      </div>
    </v-form>
  </v-container>
</template>
