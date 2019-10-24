import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui'

import '@/assets/css/reset.css'
// import 'element-ui/lib/theme-chalk/index.css'

import axios from '@/utils/axios.js'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$a = axios
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
