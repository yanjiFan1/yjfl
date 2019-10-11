/**
 * 判断当前运行环境
 * micromessenger 微信环境
 * 
 */

let ua = navigator.userAgent

// 移动端环境
const wx_useragent = 'micromessenger' // 微信

// PC环境
const IE_useragent = 'Trident' // IE
const UC_useragent = 'UCBrowser' // UC

module.exports = {
  // 移动端环境
  /**
   * 当前是否在微信中
   * 
   */
  wxAgentBol: () => {
    const ua = navigator.userAgent.toLocaleLowerCase()
    if (ua.match(wx_useragent)) {
      return true
    }
    return false
  },
  // PC环境
  isIe: () => window.navigator.userAgent.includes(IE_useragent),  
  isUc: () => window.navigator.userAgent.includes(UC_useragent)
}

 