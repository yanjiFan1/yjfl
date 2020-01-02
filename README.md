

## ##烟祭web前端公共函数库

此项目为前端公共的函数库，一些常用的功能大家可以向这里面添加。个人的私有仓库中，通过`npm`安装使用。

## 基本使用

通过`npm`安装后， `import { getQueryString } from yjfl`,便可以使用了。

<a name="document"></a>

## 文档

user_agent.js
移动端
* [wxAgentBol(当前环境是否是wx)](#wxAgentBol)
PC
* [isIe(当前环境是否是ie)](#isIe)
* [isUC(当前环境是否是uc)](#isUC)

share_config.js
<!-- * [wxConfig(配置微信环境分享)](#wxConfig)

| 参数      | 说明          | 类型      | 例子                           |
|--------- |-------------- |---------- |-----------------------------  |
| url | 最终要分享的url | string | `${location.href.slice(0,location.href.indexOf('index.html'))}index.html#/` |
| popdesc | app分享提示 | string | `app分享提示` |
| title | 分享标题 | string | `分享标题` |
| desc | 分享描述 | string | `分享描述` |
| imgUrl | 分享图片地址 | string | `分享图片地址` |
| callback | 回调参数 | function | () => {} |
 -->
env.js
* [applicationEnv(生产，测试环境判断)](#applicationEnv)
* [myBrowser(浏览器环境判断)](#myBrowser)
* [addHandler(addHandler兼容判断)](#addHandler)
* [preventDefault(preventDefault兼容判断)](#preventDefault)
* [stopPropargation(stopPropargation兼容判断)](#stopPropargation)

check_version.js
* [checkVersion(当前环境版本)](#checkVersion)
* [IEVersion(IE版本判断)](#IEVersion)

utils.js
* [getQueryString(获取当前url的某个查询key对应的值，参数为要想查询的键名)](#getQueryString)
* [queryString(获取当前url的某个查询key对应的值，参数为要想查询的键名)](#queryString)
* [getParams(获取当前url的某个查询key对应的值，参数为要想查询的键名)](#getParams)
* [imgCompress(图片压缩)](#imgCompress)
* [deepCopy(对象深拷贝，参数为对象)](#deepCopy)

utils_input.js
* [onlyCn(只包含中文,和空格)](#onlyCn)
* [includeCn(包含中文)](#includeCn)
* [includeEn(包含英文)](#includeEn)
* [onlyEn(全部是英文 和空格)](#onlyEn)
* [includeEnAndCn(包括中文和英文)](#includeEnAndCn)
* [includeOtherVarchar(对象深拷贝，参数为对象)](#includeOtherVarchar)
* [canInput(只允许输入英文字母、数字、空格、中文（=@#）)](#canInput)
* [empty(去除一头一尾)](#empty)
* [emptyAll(去除所有空格)](#emptyAll)
* [isIdNumber(身份证校验)](#isIdNumber)
* [isCardID(身份证校验(准确点))](#isCardID)
* [isEmail(验证邮箱)](#isEmail)
* [foreignIdNumber(判断是否是外国身份证号)](#foreignIdNumber)
* [isMobile(验证手机号)](#isMobile)
* [yj_debounce(防抖，连续触发之后，直到停止之后，再执行func)](#yj_debounce)
* [yj_throttle(节流 触发频率， 一定时间内只会触发一次)](#yj_throttle)

utils_dataType.js
* [isObject(判断是否是对象)](#isObject)
* [isPromise(判断是否是promise)](#isPromise)
###0.0.4










