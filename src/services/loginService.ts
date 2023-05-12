import { httpJson } from "@/commons/http";
import { useGlobalStore } from "@/stores/globalStore";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

/** ログイン関係のService */
export namespace LoginService {
  /** ログイン用のリクエストModel */
  export interface LoginRequestModel {
    /** パスワード */
    loginPassword: string;
  }
  /** ログイン用のレスポンスModel */
  export interface LoginResponseModel {
    /** パスワード */
    loginResult: boolean;
  }

  /**
   * ログイン処理
   * 結果はGlobalStoreに格納する
   * @param args 引数
   */
  export const login = async (args: LoginRequestModel): Promise<void> => {
    //mock
    // loadMockOrDBInLoginServie();

    // リクエスト作成
    const request: AxiosRequestConfig<LoginRequestModel> = { params: args };
    // 呼び出し レスポンス受け取り
    const response: AxiosResponse<LoginResponseModel> = await httpJson.post("Auth/Login", request);
    // ログイン結果はGlobalStoreに格納する
    const globalStore = useGlobalStore();
    globalStore.isLogin = response.data.loginResult;
  };

  /**
   * ログアウト処理
   */
  export const logOut = async (): Promise<void> => {
    //mock
    // loadMockOrDBInLoginServie();

    // 呼び出し レスポンス受け取り
    const response: AxiosResponse<LoginResponseModel> = await httpJson.get("Auth/Logout");
    // ログイン結果はGlobalStoreに格納する
    const globalStore = useGlobalStore();
    globalStore.isLogin = false;
  };
}
