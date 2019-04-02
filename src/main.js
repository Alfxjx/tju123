import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import './plugins/element.js'
import store from './store'
import VueI18n from 'vue-i18n'
import './common/stylus/icon.styl'
import i18n from './common/lang/i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
