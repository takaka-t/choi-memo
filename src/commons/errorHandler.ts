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
  alert(
    `エラーが発生しました。\n通信状況を確認して画面を再読み込みしてください。`
  );

  //   if (err instanceof MissingConnectionError) {
  //     alert(err.message)
  //     // retry、画面再読み込みなど
  //   } else if (err instanceof 自作のエラークラス) {
  //     // ...
  //   } else if (err instanceof CustomError) {
  //     console.info('CustomError')
  //     // エラー後の共通の処理(モーダル出すとか)
  //   } else if (err instanceof Error) {
  //     console.error('Error')
  //     // エラー後の共通の処理（5xxエラー画面飛ばすとか）
  //   }
};

// // メッセージの内容はenumで定義しておく
// const ErrorMessage = {
//     MISSING_CONNECTION: '通信エラーが発生しました。',
//   } as const
//   type ErrorMessage = typeof ErrorMessage[keyof typeof ErrorMessage]

//   interface CustomErrorInterface {
//     message: string
//     name: string
//   }

//   class CustomError extends Error implements CustomErrorInterface {
//     constructor(message: string) {
//       super(message)
//       this.name = 'CustomError'
//     }
//   }

//   // 自作のエラーはCustomErrorを拡張。命名としてErrorをつけるようにしている
//   class MissingConnectionError extends CustomError {
//     constructor() {
//       super(ErrorMessage.MISSING_CONNECTION)
//       this.name = 'MissingConnectionError'
//     }
//   }
