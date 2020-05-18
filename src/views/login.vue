<template>
  <div class="loginPage">
    <div
      class="login"
      :style="isReg?'width:686px;':''"
    >
      <!--<div class="content_login">-->
        <div class="login-title">
          <el-button v-show="!isReg" type="text" @click="switchBtn(true, 'codeLogin')" style="margin-right: 33px" :class="selectFlag?'select-btn':'unselect-btn'">密码登录</el-button>
          <!-- <el-button v-show="!isReg" type="text" @click="switchBtn(false, 'pwdLogin')" style="margin-left: 0" :class="!selectFlag?'select-btn':'unselect-btn'">验证码登陆</el-button> -->
          <el-button v-show="isReg" type="text" @click="switchBtn(true, 'codeLogin')" style="margin-left: 0" class="select-btn">注册</el-button>
        </div>
        <!-- pwd -->
        <div v-show="selectFlag&&!isReg" class="pwd-login">
          <el-form
            :model="loginForm"
            :rules="pwdRules"
            ref="pwdLogin"
            label-width="0"
          >
            <el-form-item prop="accountPhone">
              <el-input
                v-model="loginForm.accountPhone"
                name="accountPhone"
                type="tel"
                autocomplete="new-password"
                placeholder="请输入手机号"
              >
                <span slot="prefix" class="iconfont iconshouji"></span>
              </el-input>
            </el-form-item>
            <el-form-item prop="accountPwd">
              <el-input
                type="password"
                v-model="loginForm.accountPwd"
                name="accountPwd"
                @keyup.enter.native="login"
                autocomplete="new-password"
                placeholder="请输入密码"
              >
                <span slot="prefix" class="iconfont iconmima"></span>
              </el-input>
            </el-form-item>
            <el-form-item prop="accountCode">
              <el-input
                @focus="codeFocus"
                v-model="loginForm.accountCode"
                name="accountCode"
                autocomplete="off"
                @keyup.enter.native="login"
                placeholder="请输入图形验证码"
              >
                <span slot="prefix" class="iconfont iconyanzhengma"></span>
                <img slot="suffix" @click="getImgCode" class="code-img" v-if="picUrl" :src="`${$url}/code/${picUrl}.jpg`">
              </el-input>
              <p v-if="errMsgFlag" class="error-code">{{errMsg}}</p>
            </el-form-item>
          </el-form>
        </div>
        <!-- code -->
        <div v-show="!selectFlag" class="code-login">
          <el-form
            :model="codeForm"
            :rules="codeRules"
            ref="codeLogin"
            label-width="0"
          >
            <el-form-item prop="accountPhone">
              <el-input
                v-model="codeForm.accountPhone"
                name="accountPhone"
                type="tel"
                autocomplete="new-password"
                placeholder="请输入手机号"
              >
                <span slot="prefix" class="iconfont iconshouji"></span>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                v-model="codeForm.code"
                name="accountCode"
                autocomplete="off"
                @keyup.enter.native="login"
                placeholder="请输入验证码"
              >
                <span slot="prefix" class="iconfont iconyanzhengma"></span>
              </el-input>
              <!--<el-button class="get-code" @click="getCode">{{btnMsg}}</el-button>-->
              <el-button class="get-code" @click="sendMsg">{{btnMsg}}</el-button>
            </el-form-item>
          </el-form>
        </div>

        <!-- isreg -->
        <div v-show="isReg" class="pwd-reg">
          <el-form
            :model="regForm"
            :rules="regRules"
            ref="pwdReg"
            label-width="0"
          >

            <el-form-item prop="accountName">
              <el-input
                v-model="regForm.accountName"
                name="accountName"
                placeholder="请输入公司名称"
              >
                <span slot="prefix" class="iconfont iconshouye"></span>
              </el-input>
            </el-form-item>

            <el-form-item prop="contact">
              <el-input
                v-model="regForm.contact"
                name="contact"
                placeholder="请输入企业联系人"
              >
                <span slot="prefix" class="iconfont iconef-zhanghao"></span>
              </el-input>
            </el-form-item>

            <el-form-item prop="accountPhone">
              <el-input
                v-model="regForm.accountPhone"
                name="accountPhone"
                type="tel"
                autocomplete="new-password"
                placeholder="请输入手机号"
              >
                <span slot="prefix" class="iconfont iconshouji"></span>
              </el-input>
            </el-form-item>

            <el-form-item prop="email">
              <el-input
                v-model="regForm.email"
                name="email"
                autocomplete="new-password"
                placeholder="请输入企业邮箱"
              >
                <span slot="prefix" class="iconfont iconmima"></span>
              </el-input>
            </el-form-item>

            <el-form-item prop="accountCode">
              <el-input
                @focus="codeFocus"
                v-model="regForm.accountCode"
                name="accountCode"
                autocomplete="off"
                placeholder="请输入图形验证码"
              >
                <span slot="prefix" class="iconfont iconyanzhengma"></span>
                <img slot="suffix" @click="getImgCode" class="code-img" v-if="picUrl" :src="`${$url}/code/${picUrl}.jpg`">
              </el-input>
              <p v-if="errMsgFlag" class="error-code">{{errMsg}}</p>
            </el-form-item>

            <el-form-item prop="code">
              <el-input
                v-model="regForm.code"
                name="code"
                autocomplete="off"
                placeholder="请输入短信验证码"
              >
                <span slot="prefix" class="iconfont iconyanzhengma"></span>
              </el-input>
              <!--<el-button class="get-code" @click="getCode">{{btnMsg}}</el-button>-->
              <el-button class="get-code" @click="sendReg">{{btnMsg}}</el-button>
            </el-form-item>

            <el-form-item prop="accountPwd">
              <el-input
                type="password"
                v-model="regForm.accountPwd"
                name="accountPwd"
                @keyup.enter.native="login"
                autocomplete="new-password"
                placeholder="请输入密码（8-20位密码，字母数字组合）"
              >
                <span slot="prefix" class="iconfont iconmima"></span>
              </el-input>
            </el-form-item>

          </el-form>
        </div>

        <div class="login-footer">
          <el-button v-if="!isReg" class="login-btn" @click="login">登录</el-button>
          <el-button v-else class="login-btn" @click="reg">立即注册</el-button>
          <div class="login-option">
            <el-checkbox v-show="!isReg" class="check-box" v-model="remember" label="下次自动登录"></el-checkbox>
            <div class="forget">
              <!-- <span v-show="!isReg" @click="forgetPwd">忘记密码</span> -->
              <!-- <span v-show="!isReg" style="padding-left:19px;" @click="isReg=true">企业注册</span> -->
              <span v-show="isReg" @click="isReg=false">去登录</span>
            </div>
          </div>
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
        accountPhone: '',
        accountPwd: '',
        accountCode: ''
      },
      codeForm: {
        accountPhone: '',
        code: ''
      },
      regForm: {
        accountName: '',
        accountPhone: '',
        accountPwd: '',
        code: '',
        contact: '',
        email: ''
      },
      pwdRules: {
        accountPhone: [{ required: true, trigger: 'blur', message: '请输入手机号码' }, { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }],
        accountPwd: [{ required: true, trigger: 'blur', message: '请输入密码' }, { min: 3, message: '请输入正确的密码', trigger: 'blur' }],
        accountCode: [{ required: true, trigger: 'blur', message: '请输入图形验证码' }]
      },
      codeRules: {
        accountPhone: [{ required: true, trigger: 'blur', message: '请输入用户名' }, { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }],
        code: [{ required: true, trigger: 'blur', message: '请输入手机验证码' }, { min: 6, max: 6, message: '请输入正确的验证码', trigger: 'blur' }]
      },
      regRules: {
        accountName: [{ required: true, trigger: 'blur', message: '请输入公司名称' }],
        contact: [{ required: true, trigger: 'blur', message: '请输入企业联系人' }],
        email: [{ required: true, trigger: 'blur', message: '请输入正确的企业邮箱' }],
        accountPhone: [{ required: true, trigger: 'blur', message: '请输入手机号码' }, { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }],
        accountPwd: [{ required: true, trigger: 'blur', message: '请输入密码' }, { min: 8, max: 20, message: '密码需由8-20位密码，字母数字组合', trigger: 'blur' }],
        accountCode: [{ required: true, trigger: 'blur', message: '请输入正确的图形验证码' }],
        code: [{ required: true, trigger: 'blur', message: '请输入正确的短信验证码' }, { min: 6, max: 6, message: '请输入正确的短信验证码', trigger: 'blur' }]
      },
      selectFlag: true,
      errMsgFlag: false,
      isReg: false,
      remember: true,
      errMsg: '',
      btnMsg: '获取验证码',
      picUrl: ''
    }
  },
  mounted () {
    this.getImgCode()
  },
  methods: {
    // 切换登录方式
    switchBtn (flag, ref) {
      this.selectFlag = flag
      this.$refs[ref].clearValidate()
    },
    // 获取验证码
    getCode () {
      this.$refs.codeLogin.validateField('accountPhone', res => {
        if (!res) {
          if (this.btnMsg === '获取验证码') {
            this.$api.GetCode({ reqdata: { phone: this.codeForm.accountPhone } }).then(res => {
              if (res.state === 100) {
                this.$message.success('发送成功')
                let num = 60
                this.btnMsg = num + '秒后重发'
                let time = setInterval(() => {
                  if (num > 1) {
                    num -= 1
                    this.btnMsg = num + '秒后重发'
                  } else {
                    this.btnMsg = '获取验证码'
                    window.clearInterval(time)
                  }
                }, 1000)
              }
            })
          }
        }
      })
    },
    // 获取图片验证码
    getImgCode () {
      this.$api.GetImgCode({}).then(res => {
        this.picUrl = res ? res.object : ''
      })
    },
    // 登陆
    login () {
      let ref = this.selectFlag ? 'pwdLogin' : 'codeLogin'
      let form = this.selectFlag ? 'loginForm' : 'codeForm'
      this.$refs[ref].validate(res => {
        if (res) {
          // 密码登陆校验验证码
          this.$api.CheckCode({ reqdata: { code: this.loginForm.accountCode, imageName: this.picUrl } }).then(res => {
            if (res.state === 100 || !this.selectFlag) {
              this.$api.Login({ reqdata: {
                accountPhone: this[form].accountPhone,
                accountPwd: this[form].accountPwd,
                code: this[form].code
              } }).then(res => {
                if (res.state === 100) {
                  this.$message.success({ message: '登陆成功' })
                  this.$cookies.setCookies(res)
                  localStorage.setItem('storeId', res.object.id)
                  let time = setTimeout(() => {
                    location.reload()
                    clearTimeout(time)
                  }, 1000)
                } else if (res.state === 213 || res.state === 216) {
                  this.$message.error('账号或密码不正确')
                } else {
                  this.$message.error(res.msg)
                }
              })
            } else {
              this.errMsg = '请输入正确的验证码'
              this.errMsgFlag = true
              return false
            }
          })
        }
      })
    },
    reg () {
      this.$refs['pwdReg'].validate(res => {
        if (res) {
          // if () {
          this.$api.CheckCode({ reqdata: { code: this.regForm.accountCode, imageName: this.picUrl } }).then(res => {
            if (res.state === 100) {
              this.$api.resuser({
                reqdata: this.regForm
              }).then(res => {
                if (res.state === 100) {
                  this.$message.success({ message: '注册成功' })
                  this.$api.Login({ reqdata: {
                    accountPhone: this.regForm.accountPhone,
                    accountPwd: this.regForm.accountPwd
                  } }).then(res => {
                    if (res.state === 100) {
                      this.$cookies.setCookies(res)
                      localStorage.setItem('storeId', res.object.id)
                      let time = setTimeout(() => {
                        location.reload()
                        clearTimeout(time)
                      }, 1000)
                    } else if (res.state === 213 || res.state === 216) {
                      this.$message.error('账号或密码不正确')
                    } else {
                      this.$message.error(res.msg)
                    }
                  })
                } else {
                  this.$message.warning(res.msg)
                }
              })
            } else {
              this.$message.warning(res.msg)
            }
          })
          // } else {
          //   this.$message.warning('请阅读并同意《DRAWTOGETHER 企业用户协议》及《平台隐私政策》')
          // }
        }
      })
    },
    // 手机验证码未开通，给提示
    sendMsg () {
      this.$message.warning('暂未开通改服务哦~~请亲耐心等待')
    },
    sendReg () {
      this.$refs.pwdReg.validateField('accountPhone', res => {
        if (!res) {
          if (this.btnMsg === '获取验证码') {
            this.$api.sendsms({ reqdata: { accountPhone: this.regForm.accountPhone } }).then(res => {
              if (res.state === 100) {
                this.$message.success('发送成功')
                let num = 60
                this.btnMsg = num + '秒后重发'
                let time = setInterval(() => {
                  if (num > 1) {
                    num -= 1
                    this.btnMsg = num + '秒后重发'
                  } else {
                    this.btnMsg = '获取验证码'
                    window.clearInterval(time)
                  }
                }, 1000)
              }
            })
          }
        }
      })
    },
    codeFocus () {
      this.errMsg = ''
      this.errMsgFlag = false
    }
    // 忘记密码
    // forgetPwd () {
    //   location.assign('http://web.draw-together.com/forget')
    // }
  }
}
</script>
