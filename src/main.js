import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import './plugins/element.js'
import store from './store'
import VueI18n from 'vue-i18n'
import LangStorage from './common/lang/lang'
import './common/stylus/icon.styl'

Vue.use(VueI18n)
const i18n = new VueI18n({
  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  locale: LangStorage.getLang('zh'),
  // locale: 'zh', // 语言标识
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
