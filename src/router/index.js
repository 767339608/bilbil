import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import mainer from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: mainer
    }
  ]
})
