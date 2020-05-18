/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 15:14:42
 * @FilePath     : \ambre-admin-noob\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // index
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  // accountManage
  {
    path: '/listStaff',
    name: 'listStaff',
    component: () => import('@/views/accountManage/listStaff.vue')
  },
  {
    path: '/addStaff',
    name: 'addStaff',
    component: () => import('@/views/accountManage/addStaff.vue')
  },
  {
    path: '/editStaff',
    name: 'editStaff',
    component: () => import('@/views/accountManage/editStaff.vue')
  },
  // error
  {
    path: '*',
    name: 'error',
    component: resolve => require(['@/views/error'], resolve)
  },
  // login
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  // redirect
  {
    path: '/',
    redirect: '/index'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
