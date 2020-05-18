<template>
  <div class="vTableCom">
    <el-table
      :data="tableList"
      header-row-class-name="tableHeader"
      header-cell-class-name="tableHeader"
      @selection-change="handleSelectionChange"
      style="width: 100%">

      <!-- selection -->
      <el-table-column
        v-if="table.selection"
        align="center"
        type="selection"
        width="55">
      </el-table-column>

      <!-- column -->
      <el-table-column
        align="center"
        :width="item.width"
        :prop="item.props"
        :label="item.label"
        v-for="(item,index) in table.column"
        :key="index">
        <template slot-scope="scope">

          <!-- slot 自定义插槽 可以用一个变量来接受item和scope (在订单列表中有使用，可以查看使用方法)-->
          <slot v-if="item.type==='slot'" name="slot" :item="item" :scope="scope.row"></slot>

          <!-- date -->
          <span v-else-if="item.type==='date'">
            <span v-if="item.format==='YMD'">{{$utils.formatYMD(scope.row[item.props])}}</span>
            <span v-else>{{$utils.format(scope.row[item.props])}}</span>
          </span>

          <!-- pic -->
          <el-popover
            placement="left"
            v-else-if="item.type==='pic'"
            width="200"
            trigger="hover">
            <img slot="reference" class="img" :src="$img+scope.row[item.props]" alt="">
            <img class="w-100" :src="$img+scope.row[item.props]" alt="">
          </el-popover>

          <!-- option -->
          <span v-else-if="item.options">{{item.options[scope.row[item.props]]}}</span>

          <!-- normal -->
          <span v-else>{{scope.row[item.props]}}</span>

        </template>
      </el-table-column>

      <!-- handle -->
      <el-table-column
      label="操作"
      width="320"
      v-if="table.handle"
      align="center">
        <template slot-scope="scope">
          <div
          class="handelBtn"
          v-for="(item,index) in table.handle"
          :key="index">
            <el-button
              class="btn"
              type="primary"
              v-if="scope.row[item.props]===item.key"
              @click="handleMethods(scope.$index, scope.row, item)">
              {{item.title}}
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
      default: () => []
    },
    tableList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
    handleMethods (index, item, v) {
      this.$emit(v.method, item, index)
    },
    handleSelectionChange (val) {
      this.$emit('selection-change', val)
    }
  }
}
</script>

<style lang='scss' scoped>
@import './vTable.scss';
</style>
