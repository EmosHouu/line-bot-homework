// 這邊是做可不可另一個網站找價格與熱量加上單品茶的回應 
// 詢問因商品的價格與熱量在另一個網址https://www.kebuke.com/menu/，要怎引入並同時修改模板
// 價格的class：    menu-item__price

import axios from 'axios'
import * as cheerio from 'cheerio'
import kbkTemplate from '../templates/kbk.js'
import fs from 'node:fs'

export default async (event) => {
// export const a  = async(event) => {

  try {
    const { data } = await axios.get('https://www.kebuke.com/product/')
    const { dataMenu } = await axios.get('https://www.kebuke.com/menu/')
    const $ = cheerio.load(data)
    const $menu = cheerio.load(dataMenu)
    const replies = []
    // 新的footer連結與按鈕文字
    const newFooterUri = "https://www.kebuke.com/menu/"
    const newFooterLabel = "嫌爛自己查"

    
    // 取出網站資料
    $('.archive-product__products-item-img').slice(24, 33).each(function () {
      
      // 取出圖片和標題
      const image = $(this).find('img').attr('src')
      // const imageUrl = new URL(image, 'https://wdaweb.github.io/') 圖片不是網站連結時才要用

      // 問老師為何不抓不到
      // const title = $(this).find('.archive-product__products-item-name').text().trim()
      const title2 = $(this).find('img').attr('src')
      // 抓一串字裡的中文字
      const chineseText = title2.match(/[\u4e00-\u9fa5]+/g).join('');
      console.log(chineseText);
      // 抓價格
      const price = $(this).find('.menu-item__price').text().trim()
      console.log(price)

      // 產生一個新回應訊息模板
      const template = kbkTemplate()
      // 修改模板內容
      template.hero.url = image 
  
      template.body.contents[0].text = chineseText

      // console.log(title)
   
      
      // 修改模板中footer網站和按鈕
      template.footer.contents[0].action.uri = newFooterUri
      template.footer.contents[0].action.label = newFooterLabel

      // 傳到模板
      replies.push(template)

      if(process.env.DBUG === 'true'){
        fs.writeFileSync('./dump/kbk.json',JSON.stringify(template,null,2))
      }
    })


    //回傳訊息
    const result = await event.reply({
      type: 'flex',
      altText: '可不可',
      contents: {
        type: 'carousel',
        contents: replies
      }
    })
    console.log(result)

  } catch (error) {
    console.log(error)
  }
}

