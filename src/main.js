import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import 'amfe-flexible'
// 导入 vant 组件库
import './plugins/vant.js'
// 全局样式
import '../src/assets/css/global.css'

axios.defaults.baseURL = 'http://www.liulongbin.top:8082/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
