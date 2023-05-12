import type { App } from "vue";

export const errorHandler = {
  install: (app: App<Element>) => {
    // Vueのエラー
    app.config.errorHandler = (err: unknown) => {
      handler(err);
    };

    // Vue以外のエラー
    window.addEventListener("error", (event) => {
      handler(event.error);
    });

    // Promise経由で呼び出されるエラー(Promise.reject)
    window.addEventListener("unhandledrejection", (event) => {
      handler(event.reason);
    });
  },
};

const handler = (err: unknown) => {
  console.log("エラーハンドル", err);
  // alert(`エラーハンドル : ${err}`);
  alert(`エラーが発生しました。\n通信状況を確認して画面を再読み込みしてください。`);
};
