<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 19:27:42
 * @FilePath     : \ambre-admin-noob\src\views\login.vue
-->
<template>
  <div class="loginPage">
    <div
      class="login"
    >
        <!-- login-title -->
        <div class="login-title">
          <el-button type="text" style="margin-right: 33px" class="select-btn">密码登录</el-button>
        </div>
        <!-- pwd -->
        <div class="pwd-login">
          <el-form
            :model="loginForm"
            :rules="pwdRules"
            ref="pwdLogin"
            label-width="0"
          >
            <el-form-item prop="loginname">
              <el-input
                v-model="loginForm.loginname"
                name="loginname"
                type="tel"
                autocomplete="new-password"
                placeholder="请输入账号"
              >
                <span slot="prefix" class="iconfont iconshouji"></span>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                name="password"
                @keyup.enter.native="login"
                autocomplete="new-password"
                placeholder="请输入密码"
              >
                <span slot="prefix" class="iconfont iconmima"></span>
              </el-input>
            </el-form-item>
          </el-form>
        </div>

        <div class="login-footer">
          <el-button class="login-btn" @click="login">登录</el-button>
        </div>
      </div>
    <!--</div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        loginname: '',
        password: ''
      },
      pwdRules: {
        loginname: [{ required: true, trigger: 'blur', message: '请输入账号' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }, { min: 3, message: '请输入正确的密码', trigger: 'blur' }]
      }
    }
  },
  mounted () {
  },
  methods: {
    // 登陆
    login () {
      this.$refs['pwdLogin'].validate(res => {
        if (res) {
          const { loginname, password } = this.loginForm
          this.$api.post('/admin/sys/login', {
            reqdata: {
              loginname,
              password
            }
          }).then(res => {
            console.log(res)
            this.$message.success({ message: '登陆成功' })
            this.$cookies.setCookies(res)
            let time = setTimeout(() => {
              location.reload()
              clearTimeout(time)
            }, 1000)
          })
        }
      })
    }
  }
}
</script>
