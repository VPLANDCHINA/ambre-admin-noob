<template>
  <div class="vNavCom">
    <div class="logo">
      <img src="../../../public/img/logo.png" alt="">
    </div>
    <el-menu
      background-color="#2e2f4d"
      @select="handleSelect"
      text-color="#F1F1F1"
      active-text-color="#fff">
      <el-submenu v-for="(item,index) in route" :key="index" :index="`${index}`">
        <template slot="title">
          <span :class="'iconfont '+item.icon"></span>
          <span class="a_menu">{{item.name}}</span>
        </template>
        <el-menu-item
        v-for="(child,childIndex) in item.child"
        @click="$router.push({name:child.to})"
        :key="childIndex"
        :index="`${index}-${childIndex}`"
        :style="childIndex!==item.child.length-1?'margin-bottom: 15px':''">
          {{child.name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      route: [
        {
          name: '首页',
          to: '',
          icon: 'iconshangpinguanlix f-16',
          child: [
            {
              name: '测试页',
              to: 'index'
            }
          ]
        },
        {
          name: '账号管理',
          to: 'listStaff',
          icon: 'iconshangpinguanlix f-16',
          child: [
            {
              name: '新增管理员',
              to: 'addStaff'
            },
            {
              name: '修改管理员',
              to: 'editStaff'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.handleSelect('0-0', this.route)
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$emit('keyPath', key, this.route)
    }
  }
}
</script>

<style lang='scss' scoped>
@import './vNav.scss';
  /deep/.el-submenu__title i{
    color: #ffffff;
  }
</style>
