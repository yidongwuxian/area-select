import Vue from 'vue'
import App from './App.vue'
import AreaSelectDavic from 'dist/area-select-davic.js'

Vue.use(AreaSelectDavic)

new Vue({
  el: '#app',
  render: h => h(App)
})
