<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 15:16:54
 * @FilePath     : \ambre-admin-noob\src\components\vAbove\vAbove.vue
-->
<template>
  <div class="vAboveCom">
    <div class="avator">
      <div class="img">
        <img fit="cover" :src="$img + headImg"/>
      </div>
      <el-dropdown trigger="click">
        <i class="el-icon-caret-bottom"></i>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headImg: ''
    }
  },
  mounted () {
    this.$auth = this.$cookies.getCookies()
    if (this.$auth) {
      this.headImg = JSON.parse(this.$auth).storePortrait
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('storeId')
      this.$cookies.removeCookies()
      location.reload()
    }
  }
}
</script>

<style lang='scss' scoped>
@import './vAbove.scss';
</style>
