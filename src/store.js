import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseColor: '#1DC3F5'
  },
  mutations: {
    toBsColor(state) {
      if (state.baseColor === '') {
        state.baseColor = '#1DC3F5'
      }
    }
  }

})
