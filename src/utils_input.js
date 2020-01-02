module.exports = {

	// 只包含中文,和空格
  onlyCn: str => /^[\u4e00-\u9fa5\s]+$/.test(str),
  
  // 包含中文
  includeCn: function(str) {
    if(!str) return false;
    if(str.search(/[\u4e00-\u9fa5]+/)>-1)  
        return true
    return false
  }, 

  // 包含英文
  includeEn: function(str) {
    if(!str) return false;
    if(str.search(/[a-zA-Z]+/)>-1)  
        return true
    return false
  },

  // 全部是英文 和空格
  onlyEn: str => /^[A-Za-z\s]+$/.test(str),

  // 包括中文和英文
  includeEnAndCn: str => !/^[\u4e00-\u9fa5\s]+$/.test(str) && !/^[A-Za-z\s]+$/.test(str)&&!/[^a-zA-z\s\u4e00-\u9fa5]+/.test(str),

  includeOtherVarchar: str => /[^a-zA-z\s\u4e00-\u9fa5]+/.test(str),

  // 只允许输入英文字母、数字、空格、中文（=@#）
  canInput: str => str.replace(/[^\w=@#^\u4E00-\u9FA5 ]/ig,""),

  // 去除一头一尾
  empty: str => str.replace(/^\s+|\s+$/g,""),
  
  // 去除所有空格
  emptyAll: str => str.replace(/\s/g,''),


  /**校验***/
  // 身份证校验
  isIdNumber: str => /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/.test(str),

	 // 校验身份证
  isCardID(sId) {
    var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
    var iSum=0 ;
    var info="" ;
    if(!/^\d{17}(\d|x)$/i.test(sId)) return false;// 你输入的身份证长度或格式错误
    sId = sId.replace(/x$/i,"a");
    if(aCity[parseInt(sId.substr(0,2))]==null) return false;//"你的身份证地区非法"
    var sBirthday = sId.substr(6,4) + "-" + Number(sId.substr(10,2)) + "-" + Number(sId.substr(12,2));
    var d = new Date(sBirthday.replace(/-/g,"/")) ;
    if(sBirthday != (d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate())) return false; // "身份证上的出生日期非法"
    for(var i = 17;i >= 0;i--) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
    if(iSum % 11 != 1) return false; //"你输入的身份证号非法"
    //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
    return true;
  },

  // 判断是否是email
  isEmail: email => /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i.test(email),

  // 外国身份证号判断
  isForeignIdNumber: str => !!(str.length < 18),

  // 判断是否是手机号
  isMobile: mobile => /^(1)\d{10}$/.test(mobile),


  /**
 * 防抖，连续触发之后，直到停止之后，再执行func
 * 
 * @param func
 * @param wait
 * @returns
 */
  yj_debounce(func, wait) {
    if(typeof func !== 'function') {
      throw new TypeError('need a function');
    }
    wait = +wait || 0;
    var timeId = null;
    return function() {
      var self = this;
      var args = arguments;
      if(timeId) {
          clearTimeout(timeId);   // 清除定时器，重新设定一个新的定时器
      }
      timeId =  setTimeout(function(){
          func.apply(self, args); // arguments 是传给函数的参数，这里是 event 对象
      }, wait);
    }
  }

  /**
   * 节流 触发频率， 一定时间内只会触发一次
   * 
   * @param func
   * @param gapTime
   * @returns
   */
  yj_throttle(func, gapTime){
    if(typeof func !== 'function') {
      throw new TypeError('need a function');
    }
    gapTimeGlobal = +gapTime || 0;
    lastTimeGlobal = 0;
    
    return function() {
      var time = + new Date();
      if(time - lastTimeGlobal > gapTimeGlobal || !lastTimeGlobal) {
        func.call(this);
        lastTimeGlobal = time;
      }
    }
  }
}
  