import AreaSelect from './components/area-select.vue'

const areaPlugin = {
  install: function(Vue){
    Vue.component(AreaSelect.name, AreaSelect)
  }
}

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(areaPlugin)
}

export default areaPlugin;
