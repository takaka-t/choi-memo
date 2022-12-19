# ベースimage指定
FROM node:18

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# expressインストール
# RUN npx express-generator --view=ejs .
# RUN npm install nodemon
# RUN npm install

# EXPOSE 3000