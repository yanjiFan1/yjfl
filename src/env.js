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

export { applicationEnv }