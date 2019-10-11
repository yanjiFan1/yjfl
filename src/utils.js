

module.exports = {

  queryString: () => {
      let _queryString = {};
      const _query = window.location.search.substr(1);
      const _vars = _query.split('&');
      _vars.forEach((v, i) => {
        const _pair = v.split('=');
        if (!_queryString.hasOwnProperty(_pair[0])) {
            _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
        } else if (typeof _queryString[_pair[0]] === 'string') {
            const _arr = [ _queryString[_pair[0]], decodeURIComponent(_pair[1])];
            _queryString[_pair[0]] = _arr;
        } else {
            _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
        }
      });
      return _queryString;
  },

  /**
   * 获取参数
   * @param name 查询字符串的键名
   * @returns {String} 某个查询字符串的值
   * 
   */
  getQueryString: (name) => {
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
  },
  
  //获取url中的参数
  getParams: function (url) {
      var reg = /(\w+)=([^&]+)/g,
          params = {},
          result = [];

      url = (url.split('?')[1] || '');

      while(result = reg.exec(url)) {
          params[result[1]] = result[2];
      }
      return params;
  },

  /* 对象深拷贝 */
  cloneObj: (obj) => {  
    let newObj = {}
    if (obj instanceof Array) {  
        newObj = [] 
    }  
    for (let key in obj) {  
        let val = obj[key]
        newObj[key] = typeof val === 'object' ? this.cloneObj(val): val
    }  
    return newObj 
  }
}

    