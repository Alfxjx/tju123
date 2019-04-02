import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangStorage from "./lang"

Vue.use(VueI18n)

const i18n = new VueI18n({
  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  locale: LangStorage.getLang('zh'),
  // locale: 'zh', // 语言标识
  messages: {
    'zh': require('./zh'),
    'en': require('./en')
  }
})

export default i18n
