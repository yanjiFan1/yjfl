/**
 * 生产，测试环境判断
 * 依赖依据 目前所有项目在OSS上dev目录下，为测试环境。 在prod目录下为生产环境
 * 
 */

let currHref = location.href
let applicationEnv
if (currHref.indexOf('/prod/') !== -1) {
  applicationEnv = 'prod'
} else {
  applicationEnv = 'dev'
}

// 判断是浏览器内核
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
    	return "Chrome";
	}
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}



// pc事件兼容
//Notice: type is not include 'on', for example: click mouseover mouseout and so on
function addHandler(element, type, handler){
    if (element.addEventListener){
        element.addEventListener(type, handler, false);
    } else if(element.attachEvent){
        element.attachEvent('on'+type, handler);
    } else {
        element['on'+type] = handler;
    }
},

function preventDefault(event){
    if(event.preventDefault){
        event.preventDefault();
    } else{
        event.returnValue = false;
    }
},
function stopPropargation(event){
    event = event || window.event;
    if(event && event.stopPropagation) {
        event.stopPropagation();    // W3C标准
    } else {
        event.cancelBubble = true;  //ie678
    }
}

export { applicationEnv, myBrowser, addHandler, preventDefault, stopPropargation }