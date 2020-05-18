<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 12:24:10
 * @FilePath     : \ambre-admin-noob\src\components\vBread\vBread.vue
--> 
<template>
  <div class="vBreadCom">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="home">{{first}}</el-breadcrumb-item>
      <el-breadcrumb-item class="select">{{last}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: () => '0-0'
    },
    nav: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      first: '',
      last: ''
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      let arr = this.path.split('-')
      let parent = arr[0]
      let child = arr[1]
      let parentName = []
      this.nav.forEach(item => {
        parentName.push({
          name: item.name,
          child: item.child
        })
      })
      this.first = parentName[parent].name
      this.last = parentName[parent].child[child].name
    }
  }
}
</script>

<style lang='scss'>
@import './vBread.scss';
</style>
