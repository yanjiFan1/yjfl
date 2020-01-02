// 基础库-关于数据类型

module.exports = {

	// 是否是对象 
	isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	},

	// 是否是promise
	isPromise (val) {
	  return val && typeof val.then === 'function'
	}

}