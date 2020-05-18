<template>
  <div class="indexPage">
    <v-input
    :btn="btn"
    :list="list"
    @add="add"
    @search="search"
    >
    </v-input>

    <v-table
    :table="table"
    :tableList="tableList"
    @edit="edit"
    @del="del"
    ></v-table>

    <v-pager
    @page="page"
    ></v-pager>
  </div>
</template>

<script>
import mock from '../common/mock/mock.json'
import table from '../common/mixins/table'
export default {
  mixins: [table],
  data () {
    return {
      tableList: [],
      list: [
        {
          placeholder: '请输入',
          props: 'input'
        },
        {
          placeholder: '测试',
          type: 'select',
          props: 'test',
          options: [
            {
              label: '第一项',
              value: '1'
            }
          ]
        },
        {
          placeholder: '请输入',
          type: 'date',
          props: 'date'
        }
      ],
      btn: [
        {
          name: '添加新品',
          icon: 'el-icon-circle-plus',
          method: 'add'
        }
      ],
      table: {
        selection: true,
        column: [
          {
            label: '日期',
            props: 'date',
            type: 'date'
          },
          {
            label: '姓名',
            props: 'name'
          },
          {
            label: '头像',
            props: 'avator',
            type: 'pic'
          },
          {
            label: '地址',
            props: 'address'
          }
        ],
        handle: [
          {
            title: '编辑',
            method: 'edit'
          },
          {
            title: '删除',
            method: 'del'
          }
        ]
      }
    }
  },
  mounted () {
    this.getList()
    console.log(this.$auth)
  },
  methods: {
    getList () {
      this.tableList = mock.list
    },
    search (form) {
      console.log(form)
    },
    add (item) {
      console.log('add', item)
    },
    edit (index, item) {
      console.log('edit', item, index)
    },
    del (index, item) {
      console.log('del', item, index)
    }
  }
}
</script>
