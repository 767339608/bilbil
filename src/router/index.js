import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import mainer from '@/components/main'
import register from '@/components/register'
import media from '@/components/media'
Vue.use(Router)
Vue.config.devtools = true
export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: mainer
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/media/:id',
      name: 'media',
      component: media
    }
  ]
})
