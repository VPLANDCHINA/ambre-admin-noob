export default {
  data () {
    return {
    }
  },
  methods: {
    page (val) {
      console.log(val, 'tablemixin')
      this.getList()
    }
  }
}
