import type { ItemModel } from "@/stores/masterStore";
// Vuetifyでexportされていないため(いつかしてほしい...)
// ValidationRuleはinteraceで強制的に関数にしてほしいので不要な型は削除
declare type ValidationResult = string | boolean;
// declare type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);
declare type ValidationRule = ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

/**
 * any型をundefinedかnullでない場合はstring型で返却
 * @param value
 * @returns (undefined || null) false
 */
const toStringFromAny = (value: any): string | false => {
  if (value === undefined || value === null) {
    return false;
  }
  return value as string;
};

/**
 * テキストフィールドRule定義
 */
interface TextFieldRules {
  /**
   * 入力必須
   */
  required: ValidationRule;
  /**
   * 文字数(最小)
   * @param minLength 最小文字数
   */
  limitLengthMin(minLength: number): ValidationRule;
  /**
   * 文字数(最大)
   * @param maxLength 最大文字数
   */
  limitLengthMax(maxLength: number): ValidationRule;
  /**
   * 文字数(最小,最大)
   * @param minLength
   * @param maxLength
   */
  limitLengthMinMax(minLength: number, maxLength: number): ValidationRule;
  /**
   * 数値範囲
   * @param minValue 最小値
   * @param maxValue 最大値
   */
  numericRange(minValue: number, maxValue: number): ValidationRule;
  /**
   * 正規表現
   * @param regExp 正規表現(/~~~/)
   * @param message 検証NGメッセージ
   */
  RegularExpression(regExp: RegExp, message: string): ValidationRule;
  /**
   * 正規表現
   * @param regExpTemplate 正規表現テンプレート
   */
  RegularExpressionFromTemplate(regExpTemplate: RegExpTemplate): ValidationRule;
}

/** 正規表現テンプレート定義 */
export const RegExpTemplate = {
  SingleByteNumber: "半角数字",
  SingleByteAlphaNumber: "半角英数字",
  HttpsUrl: "httpsから始まるURL",
  Email: "Email",
  TelWithHyphens: "ハイフンを含む電話番号",
  TelWithoutHyphens: "ハイフンを含まない電話番号",
} as const;
/** 正規表現テンプレート */
type RegExpTemplate = typeof RegExpTemplate[keyof typeof RegExpTemplate];

/**
 * テキストフィールドRule
 */
export const textFieldRules: TextFieldRules = {
  required: function (value: any): ValidationResult {
    // stringに変換
    const stringValue = toStringFromAny(value);
    // 未入力の場合は検証NG
    if (stringValue === false || value === "") {
      return "必須です。";
    }

    // 検証OK
    return true;
  },
  limitLengthMin: function (minLength: number): ValidationRule {
    return (value: any) => {
      // stringに変換
      const stringValue = toStringFromAny(value);
      // 未入力の場合は検証しない
      if (stringValue === false || stringValue === "") {
        return true;
      }

      // 指定の最小文字数より小さい場合は検証NG
      if (stringValue.length < minLength) {
        return `${minLength}文字以上で入力してください`;
      }
      // 検証OK
      return true;
    };
  },
  limitLengthMax: function (maxLength: number): ValidationRule {
    return (value: any) => {
      // stringに変換
      const stringValue = toStringFromAny(value);
      // 未入力の場合は検証しない
      if (stringValue === false || stringValue === "") {
        return true;
      }
      // 指定の最大文字数より大きい場合は検証NG
      if (stringValue.length > maxLength) {
        return `${maxLength}文字以下で入力してください`;
      }

      // 検証OK
      return true;
    };
  },
  limitLengthMinMax: function (minLength: number, maxLength: number): ValidationRule {
    return (value: any) => {
      // stringに変換
      const stringValue = toStringFromAny(value);
      // 未入力の場合は検証しない
      if (stringValue === false || stringValue === "") {
        return true;
      }

      // 指定の最小文字数より小さい または 指定の最大文字数より大きい 場合は検証NG
      if (stringValue.length < minLength || stringValue.length > maxLength) {
        return `${minLength}文字以上 ${maxLength}文字以下 で入力してください`;
      }
      // 検証OK
      return true;
    };
  },
  numericRange: function (minValue: number, maxValue: number): ValidationRule {
    return (value: any) => {
      // stringに変換
      const stringValue = toStringFromAny(value);
      // 未入力の場合は検証しない
      if (stringValue === false || stringValue === "") {
        return true;
      }

      // 数値かどうか
      if (Number.isFinite(stringValue) === false) {
        return `数値で入力してください`;
      }
      // 数値型に変換
      const numValue = Number(stringValue);

      // 指定の最小文字数より小さい または 指定の最大文字数より大きい 場合は検証NG
      if (numValue < minValue || numValue > maxValue) {
        return `${minValue}以上 ${maxValue}以下 で入力してください`;
      }
      // 検証OK
      return true;
    };
  },
  RegularExpression: function (regExp: RegExp, message: string): ValidationRule {
    return (value: any) => {
      // stringに変換
      const stringValue = toStringFromAny(value);
      // 未入力の場合は検証しない
      if (stringValue === false || stringValue === "") {
        return true;
      }

      // 正規表現に合致するか
      if (regExp.test(stringValue) === false) {
        return message;
      }
      // 検証OK
      return true;
    };
  },
  RegularExpressionFromTemplate: function (regExpTemplate: RegExpTemplate): ValidationRule {
    // 指定したテンプレートごとに分岐(基幹処理呼び出し)
    switch (regExpTemplate) {
      case RegExpTemplate.SingleByteNumber:
        return this.RegularExpression(/^[0-9]+$/, "半角数字で入力してください");
      case RegExpTemplate.SingleByteAlphaNumber:
        return this.RegularExpression(/^[a-zA-Z\d]+$/, "半角英数字で入力してください");
      case RegExpTemplate.HttpsUrl:
        return this.RegularExpression(/^https:\/\/.+$/, "httpsから始まる正しいURLを入力してください");
      case RegExpTemplate.Email:
        return this.RegularExpression(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/, "正しいメールアドレスを入力してください");
      case RegExpTemplate.TelWithHyphens:
        return this.RegularExpression(/^0[0-9]{1,4}-[0-9]{1,4}-[0-9]{3,4}$/, "ハイフンを含む正しい電話番号を入力してください");
      case RegExpTemplate.TelWithoutHyphens:
        return this.RegularExpression(/^0[0-9]{9,10}$/, "ハイフンを含まない正しい電話番号を入力してください");
      default:
        throw new Error("引数 regExpTemplate を正しく指定してください");
    }
  },
};

/**
 * any型をundefinedかnullでない場合はFile[]型で返却
 * @param value
 * @returns (undefined || null) false
 */
const toFileArrayFromAny = (value: any): File[] | false => {
  if (value === undefined || value === null) {
    return false;
  }
  return value as File[];
};

/**
 * ファイル選択Rule定義
 */
interface FileInputRules {
  /**
   * 選択必須
   */
  required: ValidationRule;
  /**
   * 拡張子
   * @param extensions 拡張子文字列の配列(.は含まない)
   */
  fileExtensions(extensions: string[]): ValidationRule;
}

/**
 * ファイル選択Rule
 */
export const fileInputRules: FileInputRules = {
  required: function (value: any): ValidationResult {
    // File[]に変換
    const fileArrayValue = toFileArrayFromAny(value);

    // 未選択の場合は検証NG
    if (fileArrayValue === false || fileArrayValue.length === 0) {
      return true;
    }

    // 検証OK
    return true;
  },
  fileExtensions: function (extensions: string[]): ValidationRule {
    return (value: any): ValidationResult => {
      // File[]に変換
      const fileArrayValue = toFileArrayFromAny(value);
      // 未選択の場合は検証しない
      if (fileArrayValue === false || fileArrayValue.length === 0) {
        return true;
      }

      // 正規表現を用いて指定の拡張子を持つファイル名か検証
      const regExpString = `\\.(${extensions.join("|")})$`;
      const regExp = new RegExp(regExpString, "i"); // "i" 大文字小文字を区別しない
      // 選択されているファイルをループして確認
      for (const file of fileArrayValue) {
        // ファイル名が正規表現にマッチしない場合は検証NG
        if (regExp.test(file.name) === false) {
          return `ファイル形式が不正です (${extensions.join(",")})のみ`;
        }
      }

      // 検証OK
      return true;
    };
  },
};
