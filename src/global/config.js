// 1.方式一: 手动的切换不同的环境(不推荐)
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'james'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

let BASE_URL = ''
let BASE_DOMAIN = ''
let BASE_COMNAME = ''
let BASE_TO_HREF = ''
const TIME_OUT = 10000

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  BASE_URL = ''
  BASE_DOMAIN = ''
  BASE_COMNAME = ''
} else if (process.env.NODE_ENV === 'production') {
  // ################打包测试环境########################
  // BASE_URL = ''
  // BASE_DOMAIN = ''
  // BASE_COMNAME = ''
  // BASE_TO_HREF = ''
  // ################打包生产环境 #######################
  // BASE_URL = ''
  // BASE_DOMAIN = ''
  // BASE_COMNAME = ''
  // BASE_TO_HREF = ''
} else {
  BASE_URL = ''
  BASE_DOMAIN = ''
  BASE_COMNAME = ''
}

console.log('BASE_URL', BASE_URL)

export { BASE_URL, BASE_DOMAIN, BASE_COMNAME, BASE_TO_HREF, TIME_OUT }
