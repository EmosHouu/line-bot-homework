// 這邊是做迷客夏單品茶的回應 
import axios from 'axios'
import * as cheerio from 'cheerio'
import kbkTemplate from '../templates/kbk.js'
import fs from 'node:fs'

export default async (event) => {
// export const a  = async(event) => {

  try {
    const { data } = await axios.get('https://www.85cafe.com/Product.php?datatid=9')
    const $ = cheerio.load(data)
    const replies = []
    // 新的footer連結與按鈕文字
    const newFooterUri = "https://www.85cafe.com/Product.php?datatid=9"
    const newFooterLabel = "我要自己查"

    // 新的R價格
    // let pricesR = ["$65","$45","$75","$65"]
    // 新的L價格
    // let pricesL = ["$75","$50","$85","$75"]
    // 中杯卡洛里
    // let kclR = ["201.1kcl","195kcl","292kcl","297.5kcl"]
    // 大杯卡洛里
    // let kclL = ["281.4kcl","221kcl","338.1kcl","320.9kcl"]
    // 簡介
    // let info = ["草莓波登搭配鮮切檸檬甜中帶酸愈喝愈濃烈","帶有草莓花果調性的日常茶飲","以低脂可可搭配經典歐蕾夾帶一絲草莓香氣","草莓紅茶與鮮切檸檬酸甜滋味搭配Q軟菓玉滿足嚼慾"]
    
    // 取出網站資料
    $('.example-image').each(function () {
      
      // 取出圖片和標題
      const image = $(this).attr('src')
      // const imageUrl = new URL(image, 'https://www.milksha.com/products_detail.php?cID=8') 

      
      // const title = $(this).find('.L8_PD_list_PDname').text().trim()
      // const title2 = $(this).find('img').attr('src')
      // 抓一串字裡的中文字
      // const chineseText = title2.match(/[\u4e00-\u9fa5]+/g).join('');
      // console.log(title);

      
      

      // 產生一個新回應訊息模板
      const template = kbkTemplate()
      // 修改模板內容
      template.hero.url = image
  
      template.body.contents[0].text = 'title'

      // 改中杯R價格
      // template.body.contents[1].contents[0].contents[1].text = "$20"
      // template.body.contents[1].contents[0].contents[1].text = pricesR[index];
      // 改大杯Ｌ價格
      // template.body.contents[1].contents[1].contents[1].text = pricesL[index]
       // 改中杯卡洛里
      //  template.body.contents[1].contents[0].contents[2].text = kclR[index];
       // 改大杯卡洛里
      //  template.body.contents[1].contents[1].contents[2].text = kclL[index];
       // 改介紹
      // template.body.contents[2].text = info[index];
       
 
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


