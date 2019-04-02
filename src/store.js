import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './common/lang/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseColor: '#1DC3F5',
    local: i18n.locale,
    lists: [
      i18n.t('main.school.sub'),
      i18n.t('main.course.sub'),
      i18n.t('main.office.sub'),
      i18n.t('main.research.sub')
    ]
  },
  mutations: {
    toBsColor(state) {
      if (state.baseColor === '') {
        state.baseColor = '#1DC3F5'
      }
    },
    changeLocale(state) {
      state.local === 'zh' ? state.local = 'en' : state.local = 'zh'
    }
  },
  actions: {}

})
