/**
 * 检测用户APP的版本是否在某个版本(包括)以上
 * @param {String} env 项目环境
 * @param {Number} v1 主版本号
 * @param {Number} v2 次版本号
 * @param {Number} v3 修订版本号
 * 
 */
export function checkVersion (env, v1, v2, v3) {
  let ua = navigator.userAgent
  let reg = `/${env}\/(\d+)\.(\d+)\.(\d+)/`,
    rets = ua.match(reg)
    if (rets) {
      let rev1 = Number(rets[1])
      let rev2 = Number(rets[2])
      let rev3 = Number(rets[3])
      console.log('rev1 === v1 && rev2 === v2 && rev3 >= v3', rev1 === v1 && rev2 === v2 && rev3 >= v3)
      if(rev1 > v1) { // 主版本号大于3
        return true
      } else if (rev1 === v1 && rev2 > v2) { // 主版本号等于3且次版本号大于5 都可以
        return true
      } else if (rev1 === v1 && rev2 === v2 && rev3 >= v3) { // 修订版本号大于等于2 也ok
        return true
      }
    }
    return false
}

// 获取IE版本号
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }   
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11  
    } else{
        return -1;//不是ie浏览器
    }
}