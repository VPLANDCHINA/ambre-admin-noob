import router from './router'
import cookiesDeploy from './common/utils/cookiesDeploy'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (cookiesDeploy.getCookies() && JSON.parse(cookiesDeploy.getCookies()).id) {
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
