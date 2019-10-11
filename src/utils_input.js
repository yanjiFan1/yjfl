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


  // 判断是否是email
  isEmail: email => /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i.test(email),

  // 外国身份证号判断
  isForeignIdNumber: str => !!(str.length < 18),

  // 判断是否是手机号
  isMobile: mobile => /^(1)\d{10}$/.test(mobile)
}
  