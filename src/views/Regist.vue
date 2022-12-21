<template>
  <!-- 大div -->
  <div>
    <!-- タイトル -->
    <div>
      <label>URL登録画面</label>
    </div>

    <!-- 入力フォーム -->
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <vcol cols="12" md="6">
            <label>URL</label>
          </vcol>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="url"
              :rules="urlRules"
              :counter="2048"
              label="URL"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <vcol cols="12" md="6">
            <label>タイトル</label>
          </vcol>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="title"
              :rules="titleRules"
              :counter="100"
              label="タイトル"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <vcol cols="12" md="6"> <label>備考</label> </vcol>
          <v-col cols="12" md="6">
            <v-textarea
              v-model="remarks"
              :rules="remarksRules"
              :counter="150"
              label="備考"
              clearable
              clear-icon="mdi-close-circle"
              no-resize
            >
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <vcol cols="12" md="6"> <label>登録者</label> </vcol>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="registUser"
              :rules="registUserRules"
              :counter="20"
              label="登録者"
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <vcol cols="12" md="6">
            <label>アイコン</label>
          </vcol>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="nameRules"
              :counter="100"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <vcol cols="12" md="6">
            <label>タグ</label>
          </vcol>
          <v-col cols="12" md="6">
            <!-- シート使えそう？ -->
            <v-text-field
              v-model="email"
              :rules="nameRules"
              :counter="100"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <!-- 登録決定のボタン -->
    <v-btn> 登録 </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    url: "",
    title: "",
    remarks: "",
    registUser: "",
    urlRules: [
      (v) => !!v || "URLは必須です",
      (v) => v.length <= 2048 || "URLは2048文字以内でなければなりません",
    ],
    titleRules: [
      (v) => !!v || "タイトルは必須です",
      (v) => v.length <= 100 || "タイトルは100文字以内でなければなりません",
    ],
    remarksRules: [
      (v) => v.length <= 150 || "備考は150文字以内でなければなりません",
    ],
    registUserRules: [
      (v) => v.length <= 20 || "登録者は20文字以内でなければなりません",
    ],
  }),
};
</script>
