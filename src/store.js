import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './common/lang/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseColor: '#22658c',
    local: i18n.locale,
    lists: [
      i18n.t('main.school.sub'),
      i18n.t('main.course.sub'),
      i18n.t('main.office.sub'),
      i18n.t('main.research.sub')
    ],
    canEdit: false,
    showUserLink: false,
    userLink: []
  },
  mutations: {
    toBsColor(state) {
      if (state.baseColor === '') {
        state.baseColor = '#22658c'
      }
    },
    changeLocale(state) {
      state.local === 'zh' ? state.local = 'en' : state.local = 'zh'
    },
    switchEdit(state) {
      state.canEdit = !state.canEdit
    },
    showUserLink(state) {
      state.showUserLink = true
    },
    addToUser(state, payload) {
      state.userLink.push(payload)
    },
    delEdit(state, payload) {
      // TODO
      let pos = 0
      for (let i = 0; i < state.userLink.length; i++) {
        if (state.userLink[i].name === payload.name) {
          pos = i
        }
      }
      state.userLink.splice(pos, 1)
    }
  },
  actions: {}

})
