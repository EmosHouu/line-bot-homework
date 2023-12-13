node.js notes

<dependencies & devDependencies>
[link-id]: https://medium.com/itsems-frontend/nodejs-npm-dependencies-devdependencies-8934f641c8ef
<axios>
[link-id]: https://hackmd.io/@_FqBW8dGS8a5ZqhdMwvpuA/rJZvsIvzw
[link-id]: https://mini-ghost.dev/posts/axios-source-code-1/


Terminal > New Terminal  <!-- 打開終端機 -->

npm => Node Package Manager，套件管理工具
       npm is the package manager for the Node JavaScript platform.

npx => 執行 npm 套件，結束後刪掉

<Package套件介紹>
eslint  => 檢查JavaScript程式碼是否符合規則
nodemon => 監視程式碼有無的任何更改並自動重新啟動服務
linebot => LINE Messaging API for Node.js
dotenv  => 隱藏敏感資訊，讓 Node.js 讀取環境設定檔 -> .env
axios   => 用 promise 發送 HTTP 請求，可在 Browser、Node.js 運行

<!-- ============================================= -->

npm init         <!-- 專案初始化（建立 package.json） -->
npm init --yes   <!-- --yes, 接受所有預設值產生 package.json -->

npm install <packageName>            <!-- 套件安裝 -->
= npm i
= (Mac) sudo npm i

npm install --save <packageName>     <!-- 套件安裝在 dependencies -->
= npm i -S
= (Mac) sudo npm i -S

npm install --save-dev <packageName> <!-- 套件安裝在 devDependencies -->
= npm i -D
= (Mac) sudo npm i -D

<!-- dev => develop -->
<!-- devDependencies 只用於開發環境 -->
<!-- dependencies    實際要使用的套件 -->

npm install --global <packageName>   <!-- 套件全域安裝 -->
= npm i -g
= (Mac) sudo npm i -g

npm uninstall <packageName>          <!-- 解除安裝 -->
= npm un
= (Mac) sudo npm un

npm run <pakage.json> => "scripts"
ex: <pakage.json> ↓ ↓ ↓
  "scripts": {
    "dev": "nodemon index.js"
  }
---> npm run dev  <!-- 執行 index.js 檔案 -->

npx eslint --init <!-- 初始化 eslint 設定 -->
= (Mac) sudo npx eslint --init
=> 接著是一堆選擇題(style,Javascript(esm), none, No, node, guide, standard, JSON)

npm ls            <!-- 顯示本地資料夾位置 -->

<!-- 呼叫資料夾，從目前資料夾的下一個層級依序寫 -->
cd <folderName> / <folderName> / ...
也可以直接在資料夾按右鍵 > Open in Intergrated Terminal

cd ../            <!-- 回到上層資料夾 -->

node index.js     <!-- 呼叫檔案 index.js -->

<!-- ============================================= -->

<!-- 小撇步 -->

直接按上下鍵 ↑ ↓    <!-- 提取同檔案之前執行的指令 -->

快捷鍵:ctrl+C      <!-- 取消目前執行動作 -->