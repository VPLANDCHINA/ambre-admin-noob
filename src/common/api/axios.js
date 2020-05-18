/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 19:21:24
 * @FilePath     : \ambre-admin-noob\src\common\api\axios.js
 */
import axios from 'axios'
import { Message } from 'element-ui'
let api = ''

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 30000
})

service.interceptors.request.use(
  config => {
    if (!config.data.reqdata) {
      config.data.reqdata = {}
    }
    api = config.url
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  res => {
    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        if (res.data.state !== 100) {
          Message({
            message: res.data.msg,
            type: 'error',
            duration: 5 * 1000
          })
          const whiteList = ['test', 'production']
          if (whiteList.indexOf(process.env.NODE_ENV) !== -1) {
            let url = `http://monitor.info666.com/monitor/alert?projectAbbr=feiduoduo-test&errorMsg=接口：${api}(${res.data.msg})&logPath=前端开发环境(${process.env.NODE_ENV})`
            axios.get(url)
          }
          reject(res.data.msg)
        } else {
          resolve(res.data)
        }
      } else {
        Message({
          message: '服务器异常',
          type: 'error',
          duration: 5 * 1000
        })
        reject(res)
      }
    })
  },
  error => {
    Message({
      message: '请求异常' + error,
      type: 'error',
      duration: 5 * 1000
    })
  }
)
export default service
