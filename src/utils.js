/**
 * 获取参数
 * @param name 查询字符串的键名
 * @returns {String} 某个查询字符串的值
 * 
 */
export function getQueryString (name) {
  var after =  window.location.search.substr(1) ||  window.location.hash.split("?")[1]
  if (after) { 
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    var r = after.match(reg)
    if (r != null) {
      return  decodeURIComponent(r[2])
    } else {
    return null
    }
  } else {
    return null
  }
}