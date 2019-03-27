import Vue from 'vue'
import Router from 'vue-router'
import daohang from './views/daohang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: daohang
    }
  ]
})
