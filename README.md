

## ##烟祭web前端公共函数库

此项目为前端公共的函数库，一些常用的功能大家可以向这里面添加。个人的私有仓库中，通过`npm`安装使用。

## 基本使用

通过`npm`安装后， `import { getQueryString } from yjfl`,便可以使用了。

<a name="document"></a>

## 文档

* [getQueryString(获取当前url的某个查询key对应的值，参数为要想查询的键名)](#getQueryString)
* [wxAgentBol(当前环境是否是wx)](#wxAgentBol)
* [wxShareConfig(配置微信环境分享)](#wxShareConfig)

| 参数      | 说明          | 类型      | 例子                           |
|--------- |-------------- |---------- |-----------------------------  |
| url | 最终要分享的url | string | `${location.href.slice(0, location.href.indexOf('index.html'))}index.html#/` |
| popdesc | app分享提示 | string | `app分享提示` |
| title | 分享标题 | string | `分享标题` |
| desc | 分享描述 | string | `分享描述` |
| imgUrl | 分享图片地址 | string | `分享图片地址` |
| callback | 回调参数 | function | () => {} |

* [applicationEnv(生产，测试环境判断)](#applicationEnv)
* [checkVersion(当前环境版本)](#checkVersion)

