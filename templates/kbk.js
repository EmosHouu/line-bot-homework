// 此資料夾內是模板 在line documentation flex message simulator
// jason 轉js
export default () => {
  return{
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
    "size": "full",
    "aspectRatio": "20:13",
    "aspectMode": "cover",
    "action": {
      "type": "uri",
      "uri": "https://linecorp.com"
    }
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "action": {
      "type": "uri",
      "uri": "https://linecorp.com"
    },
    "contents": [
      {
        "type": "text",
        "text": "Brown's Burger",
        "size": "xl",
        "weight": "bold"
      },
      {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "icon",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png"
              },
              {
                "type": "text",
                "text": "$55",
                "weight": "bold",
                "margin": "sm",
                "flex": 0
              },
              {
                "type": "text",
                "text": "400kcl",
                "size": "sm",
                "align": "end",
                "color": "#aaaaaa"
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "icon",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
              },
              {
                "type": "text",
                "text": "$40",
                "weight": "bold",
                "margin": "sm",
                "flex": 0
              },
              {
                "type": "text",
                "text": "550kcl",
                "size": "sm",
                "align": "end",
                "color": "#aaaaaa"
              }
            ]
          }
        ]
      },
      {
        "type": "text",
        "text": "Sauce, Onions, Pickles, Lettuce & Cheese",
        "wrap": true,
        "color": "#aaaaaa",
        "size": "xxs"
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "color": "#905c44",
        "margin": "xxl",
        "action": {
          "type": "uri",
          "label": "Add to Cart",
          "uri": "https://linecorp.com"
        }
      }
    ]
  }
}
}