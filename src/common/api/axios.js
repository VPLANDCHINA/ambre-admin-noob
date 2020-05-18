import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 30000
})

service.interceptors.request.use(
  config => {
    // config.data.from = 'web'
    if (!config.data.reqdata) {
      config.data.reqdata = {}
    }
    config.data.userid = parseInt(localStorage.getItem('storeId')) || ''
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return response.data
    } else {
      if (response.data.state === 146) {
      } else if (response.data.state !== 100 && response.data.state !== 102) {
        return response.data
      } else if (response.data.state === 102) {
        return response.data
      } else {
        return response.data
      }
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
