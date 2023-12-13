1. 打開終端機 --> Terminal > New Terminal
2. 呼叫資料夾 --> cd <foldername>
   - 也可以直接在資料夾按右鍵 > Open in Intergrated Terminal
3. 接受所有預設值產生 package.json --> npm init --yes
4. 安裝套件(Mac) --> sudo npm i -D eslint nodemon
5. 安裝套件(Mac) --> sudo npm i axios dotenv linebot
6. 初始化 eslint 設定 --> sudo npx eslint --init
   - (style,Javascript(esm), none, No, node, guide, standard, JSON, Yes, npm)
7. 在 package.json 物件最上面新增 --> "type": "module",
8. 將 package.json 物件中的 "scripts" 改成 --> "dev": "nodemon index.js"
9. 執行 index.js --> npm run dev
   10.sudo npm i cheerio
