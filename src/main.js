import Vue from 'vue'
import App from './App.vue'
import AreaSelectKirin from 'dist/area-select-kirin.js'

Vue.use(AreaSelectKirin)

new Vue({
  el: '#app',
  render: h => h(App)
})
