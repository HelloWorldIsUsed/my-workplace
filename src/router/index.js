import Vue from 'vue'
import Router from 'vue-router'
import XSlideCon from '@/container/XSlideCon'
import XLeftNavCon from '@/container/XLeftNavCon'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/XSlideCon',
      name: 'XSlideCon',
      component: XSlideCon
    },
    {
      path: '/XLeftNavCon',
      name: 'XLeftNavCon',
      component: XLeftNavCon
    }
  ]
})
