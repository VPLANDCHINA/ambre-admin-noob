/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 19:29:52
 * @FilePath     : \ambre-admin-noob\src\permission.js
 */
import router from './router'
import cookiesDeploy from './common/utils/cookiesDeploy'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (cookiesDeploy.getCookies() && JSON.parse(cookiesDeploy.getCookies()).managerid) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
