/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 12:23:53
 * @FilePath     : \ambre-admin-noob\src\components\vBread\vBread.js
 */
import vBreadComponent from './vBread.vue'
const vBread = {
  install: function (Vue) {
    Vue.component('vBread', vBreadComponent)
  }
}

export default vBread
