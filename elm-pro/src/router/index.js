import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '@/pages/home/Index.vue'
import Search from '@/pages/Search/Index.vue'
import Order from '@/pages/Order/Index.vue'
import Mine from '@/pages/Mine/Index.vue'

export default new Router({
  routes: [
    {
     path:'/home',
     name:'home',
     component:Home
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/',     
      directives:Home
    }
  ]
})
