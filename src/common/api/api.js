import axios from './axios'
export default {
  // ======================================== 官网首页 ========================================
  Login (data) {
    return axios.post('/admin/user/loginstore', data)
  },
  // 获取手机验证码
  GetCode (data) {
    return axios.post('/sendSms/sendSmsLogin', data)
  },
  // 获取注册手机验证码
  sendsms (data) {
    return axios.post('/admin/user/sendsms', data)
  },
  // 注册
  resuser (data) {
    return axios.post('/admin/user/resuser', data)
  },
  // 获取图片验证码
  GetImgCode (data) {
    return axios.post('/mobile/verificationCodeController/getRandomVerificationCode', data)
  },
  // 校验图片验证码
  CheckCode (data) {
    return axios.post('/mobile/verificationCodeController/checkVerificationCode', data)
  },
  queryWebsiteRecommendBuyGoods (data) {
    // 首页颜品直采
    return axios.post('/websiteGoods/queryWebsiteRecommendBuyGoods', data)
  },
  ListCommodities (data) {
    return axios.post('/admin/store/getstoreinfo', data)
  },
  queryskin (data) {
    return axios.post('/admin/store/queryskin', data)
  },
  submitUpload (data) {
    // 上传图片
    return axios.post('/paint/uploadFile', data)
  },
  Updatestoreinfo (data) {
    return axios.post('/admin/store/updatestoreinfo', data)
  },
  Shoplist (data) {
    // 商品列表
    return axios.post('/admin/ebGoods/queryEbGoodsPage', data)
  },
  Querystor (data) {
    // 订单列表
    return axios.post('/admin/order/querystoreorder', data)
  },
  RemoveOrder (data) {
    // 删除订单
    return axios.post('/admin/order/updateorder', data)
  },
  removeshop (data) {
    // 删除商品
    return axios.post('/admin/ebGoods/delgoods', data)
  },
  removeclass (data) {
    // 删除分类
    return axios.post('/admin/goodsclass/delgoodsclass', data)
  },
  ShopStatus (data) {
    // 商品上下架
    return axios.post('/admin/ebGoods/updateGoodsStatus', data)
  },
  Shopclass (data) {
    // 商品分类
    return axios.post('/admin/goodsclass/querygoodsclass', data)
  },
  addclass (data) {
    // 添加商品分类
    return axios.post('/admin/goodsclass//addgoodsclass', data)
  },
  updateClass (data) {
    // 更新商品分类
    return axios.post('/admin/goodsclass/updategoodsclass', data)
  },
  AddingGoods (data) {
    // 添加商品
    return axios.post('/admin/ebGoods/saveorupdate', data)
  },
  GoodsDetail (data) {
    // 商品详情
    return axios.post('/admin/ebGoods/getgoodsdetail', data)
  },
  deleteSKU (data) {
    // 删除商品sku
    return axios.post('/admin/ebGoods/delsku', data)
  },
  delImg (data) {
    // 删除商品图片
    return axios.post('/admin/ebGoods/delimg', data)
  }

}
