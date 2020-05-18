import Cookies from 'js-cookie'
export default {
  setCookies (res) {
    Cookies.set('AUTH', res.object, { expires: 36500, domain: 'draw-together.com' })
    Cookies.set('AUTH', res.object, { expires: 36500, domain: '127.0.0.1' })
    Cookies.set('AUTH', res.object, { expires: 36500, domain: 'info666.com' })
  },
  getCookies () {
    return Cookies.get('AUTH', { domain: 'draw-together.com' }) || Cookies.get('AUTH', { domain: '127.0.0.1' }) || Cookies.get('AUTH', { domain: 'info666.com' })
  },
  removeCookies () {
    Cookies.remove('AUTH', { domain: 'draw-together.com' })
    Cookies.remove('AUTH', { domain: '127.0.0.1' })
    Cookies.remove('AUTH', { domain: 'info666.com' })
  }
}
