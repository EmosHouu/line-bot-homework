// 機器人基本架構
import 'dotenv/config'
import linebot from 'linebot'
// ----------------------------
import kbk from './commands/kbk.js'
import kbkR from './commands/kbkR.js'
import kbkNg from './commands/kbkNg.js'
import kbkMix from './commands/kbkMix.js'
import kbkS from './commands/kbkS.js'
import kbkMenu from './commands/kbkMenu.js'
import mks from './commands/mks.js'







// 機器人基本架構
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})
// ----------------------------------------------

bot.on('message', event => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }

  if (event.message.type === 'text') {
    if (event.message.text === '可不可') {
      // kbk(event)
      event.reply({
        type:'text',
        text:'可不可以幫我加薪，老鐵想喝啥呢？',
        quickReply:{
          items:[
            {
              type:'action',
              action:{
                //傳訊習
                type:'message',
                // 傳送的文字
                text:'鮮奶茶',
                // 按鈕的文字
                label:'鮮奶茶'
              }
            },
            {
              type:'action',
              action:{
                //傳訊習
                type:'message',
                // 傳送的文字
                text:'單品茶',
                // 按鈕的文字
                label:'單品茶'
              }
            },
            {
              type:'action',
              action:{
                //傳訊習
                type:'message',
                // 傳送的文字
                text:'奶蓋',
                // 按鈕的文字
                label:'奶蓋'
              }
            },
            {
              type:'action',
              action:{
                //傳訊習
                type:'message',
                // 傳送的文字
                text:'特調',
                // 按鈕的文字
                label:'特調'
              }
            },
            {
              type:'action',
              action:{
                //傳訊習
                type:'message',
                // 傳送的文字
                text:'季節限定',
                // 按鈕的文字
                label:'季節限定'
              }
            }
            
          ]
        }
      }) 
    }else if(event.message.text === '鮮奶茶'){
      kbk(event)
    }else if(event.message.text === '單品茶'|| event.message.text === '紅茶'|| event.message.text === '冬瓜茶'){
      kbkR(event)
    }else if(event.message.text === '奶蓋'){
      kbkNg(event)
    }else if(event.message.text === '特調'){
      kbkMix(event)
    }else if(event.message.text === '季節限定'){
      kbkS(event)
    }else if(event.message.text === '123'){
      kbkMenu(event)
    }else if(event.message.text === '111'){
      mks(event)
    }
  }
})


// 機器人基本架構
bot.listen('/', process.env.PORT || 2000, () => {
  console.log('機器人啟動')
})
