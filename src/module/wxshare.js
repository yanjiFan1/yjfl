import _JSON$stringify from 'babel-runtime/core-js/json/stringify'
// var wx = require('weixin-js-sdk')
var axios = require('axios')
/**
 * 微信分享配置
 * @param {*Object} opt 配置对象
 *
 */
export default function (opt) {
  var title = opt.title
  var imgUrl = opt.imgUrl
  var link = opt.url
  var desc = opt.desc
  var callback = opt.callback
  wx.ready(function () {
    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: title,
      imgUrl: imgUrl,
      link: link,
      success: function success (data) {
        if (callback) callback()
      },
      error: function error (errorType, _error) {}
    })
    // 分享到好友
    wx.onMenuShareAppMessage({
      title: title,
      imgUrl: imgUrl,
      desc: desc,
      link: link,
      success: function success (data) {
        console.log('succsss data', data);
        console.log('succsss callback', callback);
        if (callback) callback()
      },
      error: function error (errorType, _error2) {}
    })
  })
}
