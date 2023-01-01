# Weather Card with Taiwan CWB Open Data

這是一個簡單可以讓你查詢當前天氣資訊的小 ReactJS 網頁應用，使用中央氣象局的公開資料。

## 使用

首先您需要先設置`.env`檔，並設置以下內容:

```env
REACT_APP_CWB_API_KEY=您註冊的API金鑰
```

 1. 使用`yarn`(或`npm install`)安裝依賴
 2. 使用`yarn start`(或`npm start`)啟動應用程式

## 建置

您可以使用`yarn build`(或`npm run build`)來建置這個React專案

## Github Page 建置

這個程式可以直接使用 Github Action 編譯並發布至你的 Github Page 上，如需投放您需要設定以下內容

 1. 至 Repository 的 Setting
 2. 找到 Security 目錄底下的 Secrets 選取 Actions
 3. 新增一個 Name 為`CWB_API_KEY`的密鑰，這是您申請的API金鑰，儲存
 4. 至 Code and automation 底下的 Pages
 5. 把 Source 改成 Github Actions，儲存
 6. 等 Github Actions 跑完，Github就會自動投放到你的 Github Pages 裡
