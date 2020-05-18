<template>
  <div class="vPagerCom">
    <el-pagination
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange"
      @prev-click="handleCurrentChange"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: () => 0
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleCurrentChange (val) {
      // this.$emit('page', val)
    }
  },
  watch: {
    currentPage (val) {
      this.$emit('page', val)
    }
  }
}
</script>

<style lang='scss'>
@import './vPager.scss';
</style>
