

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
<!-- * [wxShareConfig(配置微信环境分享)](#wxShareConfig)

| 参数      | 说明          | 类型      | 例子                           |
|--------- |-------------- |---------- |-----------------------------  |
| url | 最终要分享的url | string | `${location.href.slice(0,location.href.indexOf('index.html'))}index.html#/` |
| popdesc | app分享提示 | string | `app分享提示` |
| title | 分享标题 | string | `分享标题` |
| desc | 分享描述 | string | `分享描述` |
| imgUrl | 分享图片地址 | string | `分享图片地址` |
| callback | 回调参数 | function | () => {} | -->

env.js
* [applicationEnv(生产，测试环境判断)](#applicationEnv)

check_version.js
* [checkVersion(当前环境版本)](#checkVersion)

utils.js
* [getQueryString(获取当前url的某个查询key对应的值，参数为要想查询的键名)](#getQueryString)
* [queryString(获取当前url的某个查询key对应的值，参数为要想查询的键名)](#queryString)
* [getParams(获取当前url的某个查询key对应的值，参数为要想查询的键名)](#getParams)
* [cloneObj(对象深拷贝，参数为对象)](#cloneObj)

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

校验
* [isIdNumber(身份证校验)](#isIdNumber)
* [isEmail(判断是否是email)](#isEmail)
* [isForeignIdNumber(判断是否是外国身份证号)](#isForeignIdNumber)
* [isMobile(判断是否是手机号)](#isMobile)















