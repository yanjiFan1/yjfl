

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

  /*
    * 图片压缩(未检测)
    * file 文件
    * obj 文件信息
    * fun 回调函数
  */ 
  imgCompress(file, obj, fun) {
    var the = this;
    var ready = new FileReader();
    ready.readAsDataURL(file);
    ready.onload = function() {
      var path = this.result;
      var img = new Image();
      img.src = path;
      img.onload = function(){
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;      
        obj.width = w * 0.6; 
        w = obj.width || w;
        h = obj.height || (w / scale);
        var quality = 0.7;  // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if(obj.quality && obj.quality <= 1 && obj.quality > 0){
            quality = obj.quality;
        }
        var base64Data = canvas.toDataURL('image/jpeg', quality);//base64
        //console.log(base64Data);
        fun(the.dataURItoBlob(base64Data));
      }
    }
  },

  /**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */
  find (list, f) {
    return list.filter(f)[0]
  },

  /** 深拷贝
   * Deep copy the given object considering circular structure.
   * This function caches all nested objects and its copies.
   * If it detects circular structure, use cached copy to avoid infinite loop.
   *
   * @param {*} obj
   * @param {Array<Object>} cache
   * @return {*}
  */
  deepCopy (obj, cache) {
    if ( cache === void 0 ) cache = [];

    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    // if obj is hit, it is in circular structure
    var hit = find(cache, function (c) { return c.original === obj; });
    if (hit) {
      return hit.copy
    }

    var copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
      original: obj,
      copy: copy
    });

    Object.keys(obj).forEach(function (key) {
      copy[key] = deepCopy(obj[key], cache);
    });

    return copy
  }
}

    