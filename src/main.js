import Vue from 'vue'
import App from './App.vue'
import AreaSelectDavic from './index.js'

Vue.use(AreaSelectDavic)

new Vue({
  el: '#app',
  render: h => h(App)
})
