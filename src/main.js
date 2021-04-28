import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify/lib'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vuetify)

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify(),
  store,
  render: h => h(App)
}).$mount('#app')
