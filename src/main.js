import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入
import { globalRegister } from './global'

// 使用vConsole插件进行移动端调试 --开发环境
// import VConsole from 'vconsole'
// const vConsole = new VConsole()

Vue.use(globalRegister)
Vue.use(store)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
