import wxshare from './module/wxshare.js'

/**
* 配置微信环境分享
* @param {Object} config 配置参数
* config.url 最终要分享的url (String)
* config.title 分享标题 (String)
* config.imgUrl 分享图片地址 (String)
* config.desc  分享描述 (String)
* config.callback 回调参数 (String)
* noUseTransfer 是否不转换成专有链接
*/
export function wxShareConfig (config, noUseTransfer) {
  var link
  if (noUseTransfer) {
    link  = config.url
  } else {
    link = window.location.origin + '/dev/transferlink/index.html?insto=' + encodeURIComponent(config.url)
  }
  var ua = navigator.userAgent.toLocaleLowerCase()
  if (ua.match(/micromessenger/)) {
    wxshare({
      title: config.title,
      imgUrl: config.imgurl || config.imgUrl,
      url: link,
      desc: config.desc,
      callback: config.callback
    })
  }
}
