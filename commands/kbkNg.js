// 這邊是做紅茶的回應 
import axios from 'axios'
import * as cheerio from 'cheerio'
import kbkTemplate from '../templates/kbk.js'
import fs from 'node:fs'

export default async (event) => {
// export const a  = async(event) => {

  try {
    const { data } = await axios.get('https://www.kebuke.com/product/')
    const $ = cheerio.load(data)
    const replies = []
    // 新的footer連結與按鈕文字
    const newFooterUri = "https://www.kebuke.com/menu/"
    const newFooterLabel = "我要自己查"
    // 新的R價格
    let pricesR = ["$60","$70","$65","$60","$60","$65"]
    // 新的L價格
    let pricesL = ["$65","$80","$75","$65","$65","$70"]
    // 中杯卡洛里
    let kclR = ["358kcl","376kcl","358kcl","358kcl","358kcl","358kcl"]
    // 大杯卡洛里
    let kclL = ["384kcl","432kcl","443kcl","384kcl","384kcl","384kcl"]
    // 簡介
    let info = ["淡花香的麗春跳入玫瑰雲蓋般的甜綿","娓娓道出的餅香炒糖韻跳入玫瑰雲蓋般的甜綿","茶底蘊與鮮奶的濃醇跳入玫瑰雲蓋般的甜綿","經典熟成紅茶跳入玫瑰雲蓋般的甜綿","春滿四溢的青山跳入玫瑰雲蓋般的甜綿","恬淡蜜桃果香跳入玫瑰雲蓋般的甜綿"]
    
    // 取出網站資料
    $('.archive-product__products-item-img').slice(9, 15).each(function (index) {
      // 取出圖片和標題
      const image = $(this).find('img').attr('src')
      // const imageUrl = new URL(image, 'https://wdaweb.github.io/') 圖片不是網站連結時才要用

      // 問老師為何不抓不到
      // const title = $(this).find('.archive-product__products-item-name').text().trim()
      const title2 = $(this).find('img').attr('src')
      // 抓一串字裡的中文字
      const chineseText = title2.match(/[\u4e00-\u9fa5]+/g).join('');
      console.log(chineseText);

      // 

      // 產生一個新回應訊息模板
      const template = kbkTemplate()
      // 修改模板內容
      template.hero.url = image 
  
      template.body.contents[0].text = chineseText
      template.body.contents[0].text = chineseText

      // 改中杯R價格
      // template.body.contents[1].contents[0].contents[1].text = "$20"
      template.body.contents[1].contents[0].contents[1].text = pricesR[index];
      // 改大杯Ｌ價格
      template.body.contents[1].contents[1].contents[1].text = pricesL[index]
      // 改中杯卡洛里
      template.body.contents[1].contents[0].contents[2].text = kclR[index];
      // 改大杯卡洛里
      template.body.contents[1].contents[1].contents[2].text = kclL[index];
      // 改介紹
      template.body.contents[2].text = info[index];
      // console.log(title)
   
      // 更新點擊按鈕後連結的網站
      // template.footer.contents.action.uri = KbkMenu 
      // template.footer.contents[0].action[2] = "https://www.kebuke.com/menu/"
      
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

