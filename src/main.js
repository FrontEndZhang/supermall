import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
Vue.config.productionTip = false
// vue实例作为bus总线
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
