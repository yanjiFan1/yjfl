// 移动端
export { scrollToElement } from './mobile.js' 

// pc
export  { 
	wxAgentBol,
	isIe,
	isUc
} from './user_agent.js'
export  { wxConfig, getWxAddress } from './share_config.js' // 未检测,暂不开放
export { 
	applicationEnv,
	myBrowser,
	addHandler, 
	preventDefault, 
	stopPropargation
} from './env.js'
export { 
	checkVersion,
	IEVersion
} from './check_version.js'

export { 
	getQueryString,
	queryString,
	getParams, 
	imgCompress, // 未检测,暂不开放
	deepCopy // 借鉴vue的深拷贝
} from './utils.js';
export { 
	onlyCn,
	includeCn,
	includeEn,
	onlyEn,
	includeEnAndCn,
	includeOtherVarchar,
	inputType,
	isIdNumber,
	isCardID,
	canInput,
	empty,
	emptyAll,
	isEmail,
	foreignIdNumber,
	isMobile,
	yj_debounce,
	yj_throttle
} from './utils_input.js'

export { 
	isObject,
	isPromise
} from './utils_dataType.js'
