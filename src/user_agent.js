/**
 * 判断当前运行环境
 * instalment 小象优品APP环境
 * micromessenger 微信环境
 * 
 */

let ua = navigator.userAgent
const wx_useragent = 'micromessenger'

/**
 * 当前是否在微信中
 * 
 */
export function wxAgentBol() {
  const ua = navigator.userAgent.toLocaleLowerCase()
  if (ua.match(wx_useragent)) {
    return true
  }
  return false
}