// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filters from '@/filter/index.js'

Vue.use(filters)

Vue.config.productionTip = false

Vue.prototype.$center=new Vue();

new Vue({
  el: '#app',
  router,
 render: h=>h(App)
})
