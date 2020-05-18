/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 12:21:24
 * @FilePath     : \ambre-admin-noob\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import api from './common/api/api'
import ElementUI from 'element-ui'
import utils from './common/utils/utils'
import Cookies from 'js-cookie'

import VueCropper from 'vue-cropper'
import vNav from './components/vNav/vNav'
import vTable from './components/vTable/vTable'
import vInput from './components/vInput/vInput'
import vPager from './components/vPager/vPager'
import vAbove from './components/vAbove/vAbove'
import vBread from './components/vBread/vBread'
import cookiesDeploy from './common/utils/cookiesDeploy'

import './common/sass/common.scss'
import './common/font/iconfont.css'
import './permission.js'

Vue.use(ElementUI)
Vue.use(VueCropper)
Vue.use(Cookies)
Vue.use(vTable)
Vue.use(vInput)
Vue.use(vPager)
Vue.use(vAbove)
Vue.use(vBread)
Vue.use(vNav)

Vue.prototype.Cookies = Cookies
Vue.prototype.$cookies = cookiesDeploy
Vue.prototype.$auth = cookiesDeploy.getCookies()
Vue.prototype.$api = api
Vue.prototype.$utils = utils
Vue.prototype.$storeId = parseInt(localStorage.getItem('storeId')) || ''
Vue.prototype.$img = process.env.VUE_APP_IMG
Vue.prototype.$url = process.env.VUE_APP_API
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
