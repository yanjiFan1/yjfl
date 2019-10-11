import wx from 'weixin-js-sdk'
import axios from 'axios'
/**
 * [wxConfig description]
 * url 当前页面url 根据url请求签名
 * title 分享标题
 * desc 分享描述
 * link 分享的地址
 * imgUrl 分享图片的地址
 * request {
    url: // 获取微信接口
    method: // 请求方式
 }
 *middlePage 中间页面地址
 * apiList 需要微信sdk的接口 默认是分享的'onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems'
 * type 2 注入分享 其他暂时未定
 *!!!! 只能在微信环境，其他环境不能分享，需做好引导，有必要可以用弹框引导
 *!!!2. 需要跳转中间页面
 *!!!3. 中间页面中内容  /buyer/wxredirect.html
     <script>
      var url = location.href.split('?')
      var pars = url[1].split('&')
      var data = {}
      pars.forEach((n, i) => {
        var p = n.split('=')
        data[p[0]] = p[1]
      })
      if (!!data.wxredirect) {
        location.href = decodeURIComponent(data.wxredirect)
      }
    </script>

 *eg:
    wxConfig({
      title: '小象买手',
      desc,
      imgUrl,
      link,
      request:{
        url:''
        method:'post'
      }
    })
 */
export default function wxConfig ({
  title,
  desc,
  link,
  imgUrl,
  request,
  middlePage = '/buyer/wxredirect.html',
  url = location.href.split('#')[0],
  apiList,
  type = 2,
}) {
  let uni = navigator.userAgent
  let isAndroid = uni.indexOf('Android') > -1 || uni.indexOf('Linux') > -1
  // 记录进入app时的url,用以解决iOS配置微信jssdk签名错误问题
  if (typeof window.entryUrl === 'undefined' || window.entryUrl === '') {
    window.entryUrl = location.href.split('#')[0]
  }
  let urlstr = isAndroid ? url : window.entryUrl
  axios({
    url: request.url,
    method: request.method || post,
    data: {
      url: urlstr
    }
  }).then(res => {
    const { appId, timestamp, nonceStr, signature } = res.data.body
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId, // 必填，公众号的唯一标识
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名
      jsApiList: [
        'updateAppMessageShareData', 'updateTimelineShareData', 'hideMenuItems', 'checkJsApi', 'openAddress'
      ] // 必填，需要使用的JS接口列表
    })
    if (type === -1) {
      wx.ready(() => {
        wx.hideMenuItems({
          menuList: [
            'menuItem:share:appMessage', // 发送给朋友
            'menuItem:share:timeline', // 分享到朋友圈
            'menuItem:share:qq', // 分享到QQ:
            'menuItem:share:weiboApp', // 分享到Weibo
            'menuItem:share:QZone', // 分享到 QQ 空间
            'menuItem:favorite', // 收藏
            'menuItem:share:facebook', // 分享到FB
            'menuItem:copyUrl', // 复制链接
            'menuItem:share:email', // 邮件
            'menuItem:originPage' // 原网页
          ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        })
      })
    }
    if (type === 2) {
      let shareLink = location.origin + middlePage + '?wxredirect=' + encodeURIComponent(link)
      wx.ready(() => {
        wx.hideMenuItems({
          menuList: [
            'menuItem:favorite',
            'menuItem:share:facebook',
            'menuItem:copyUrl',
            'menuItem:share:email'
          ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        })
        wx.updateAppMessageShareData({
          title, // 分享标题
          desc, // 分享描述
          link: shareLink, // 分享链接
          imgUrl // 分享图标
        })
        wx.updateTimelineShareData({
          title, // 分享标题
          link: shareLink, // 分享链接
          imgUrl // 分享图标
        })
      })
    }
  })
}

/**
 * [getWxAddr description]
 * 获取用户收获地址 和分享不同 这个是用户手动触发 不需要放到wx.ready回调
 * callback 用户确认微信里的地址后 触发success回调后调用callback给业务
 */
export function getWxAddress (callback) {
  wx.openAddress({
    success (res) {
      callback(res)
    },
    cancel (err) {
      console.log(err)
    }
  })
}
