<template>
  <v-form
    style="background-color: white; width: 50%; height: 87%"
    class="mx-auto mt-10"
  >
    <h1 style="text-align: center">登録</h1>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field label="URL"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field label="タイトル"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field label="備考"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field label="登録者"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-img src="https://picsum.photos/id/20/1920/1080?blur=5"></v-img>
        </v-col>
        <v-col cols="1" align-self="end">
          <v-btn color="primary">選択</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8"
          ><v-card variant="outlined" height="100"></v-card
        ></v-col>
        <v-col cols="1" align-self="end">
          <v-btn color="primary">選択</v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-btn color="primary" large>登録</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts"></script>
