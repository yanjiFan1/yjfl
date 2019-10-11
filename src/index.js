export  { 
	wxAgentBol,
	isIe,
	isUc
} from './user_agent.js'
export  { wxConfig, getWxAddress } from './share_config.js' // 未检测,暂不开放
export { applicationEnv } from './env.js'
export { checkVersion } from './check_version.js'
export { 
	getQueryString,
	queryString,
	getParams, 
	cloneObj,
	imgCompress // 未检测,暂不开放
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
	isMobile
} from './utils_input.js'
