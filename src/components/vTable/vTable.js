import vTableComponent from './vTable.vue'
const vTable = {
  install: function (Vue) {
    Vue.component('vTable', vTableComponent)
  }
}

export default vTable
