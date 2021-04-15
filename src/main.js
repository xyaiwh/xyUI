import Vue from 'vue'
import App from './App.vue'
import XyUI from '@/libs/xy-ui'

Vue.use(XyUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
