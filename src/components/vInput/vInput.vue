<template>
  <div class="vInputCom">
    <el-form
      ref="form"
      :model="form"
      label-width="0px"
      label-position="left" :inline="true"
      @submit.native.prevent>
        <el-form-item v-for="(item,index) in list" :key="index" :prop="item.props">

          <!-- date -->
          <el-date-picker
          v-if="item.type==='date'"
          v-model="form[item.props]"
          type="daterange"
          :style="item.style"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd HH:mm:ss"
          :default-time="['00:00:00', '23:59:59']"
          :placeholder="item.placeholder">
          </el-date-picker>

          <!-- select -->
          <el-select
          v-else-if="item.type==='select'"
          v-model="form[item.props]"
          :style="item.style"
          :placeholder="item.placeholder">
            <el-option
            v-for="child in item.options"
            :key="child.value"
            :label="child.label"
            :value="child.value">
            </el-option>
          </el-select>

          <!-- input -->
          <el-input
          v-else
          prefix-icon="el-icon-search"
          v-model="form[item.props]"
          :placeholder="item.placeholder"
          :style="item.style"
          >
          </el-input>

        </el-form-item>

      <span class="input_btn">
        <el-button
        class="search_btn"
        @click="search()"
        type="primary">查询</el-button>
        <el-button
        class="reset_btn"
        @click="reset()"
        type="primary">重置</el-button>
      </span>
        <!-- btnGroup -->
        <div>
          <el-button
          v-for="(item,index) in btn"
          :key="index"
          class="tool"
          :icon="item.icon"
          @click="btnMethods(item)"
          type="primary">{{item.name}}</el-button>
        </div>

    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    btn: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      form: {}
    }
  },
  mounted () {
    this.list.forEach(el => {
      this.$set(this.form, el.props, '')
    })
  },
  methods: {
    reset () {
      this.$refs['form'].resetFields()
      this.search()
    },
    search () {
      this.$emit('search', this.form, 1)
    },
    btnMethods (item) {
      this.$emit(item.method, item)
    }
  }
}
</script>

<style lang='scss'>
@import './vInput.scss';
</style>
