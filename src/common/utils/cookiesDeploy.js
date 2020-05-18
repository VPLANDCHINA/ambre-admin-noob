/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 19:27:30
 * @FilePath     : \ambre-admin-noob\src\common\utils\cookiesDeploy.js
 */
import Cookies from 'js-cookie'
export default {
  setCookies (res) {
    Cookies.set('AUTH', res.object, { expires: 36500, domain: '127.0.0.1' })
  },
  getCookies () {
    return Cookies.get('AUTH', { domain: '127.0.0.1' })
  },
  removeCookies () {
    Cookies.remove('AUTH', { domain: '127.0.0.1' })
  }
}
