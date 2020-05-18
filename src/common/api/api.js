/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 15:51:31
 * @FilePath     : \ambre-admin-noob\src\common\api\api.js
 */
import axios from './axios'
export default {
  post (api, data) {
    return axios.post(api, data)
  }

}
