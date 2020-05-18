<template>
  <div class="appPage">
    <template v-if="$route.name!=='login'">
    <v-nav @keyPath="keyPath" class="leftNav"></v-nav>
    <div class="view">
      <v-above></v-above>
      <div class="view-info">
        <v-bread :path="path" :nav="nav"></v-bread>
        <router-view />
      </div>
    </div>
    </template>
    <router-view v-else />
  </div>
</template>
<script>
export default {
  data () {
    return {
      path: '',
      nav: []
    }
  },
  mounted () {
  },
  methods: {
    keyPath (val, route) {
      this.path = val
      this.nav = route
    }
  },
  watch: {
    $route (to, from) {
      if (from.name === 'login') {
        this.$router.go(0)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.view{
  padding-left:210px;
}
</style>
