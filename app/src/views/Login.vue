<template>
  <div class="reg"> 
    <div class="register-wrapper"> 
      <div id="register">
        <p class="title">登录</p>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="demo-ruleForm"
        >
          <el-form-item prop="tel">
            <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="smscode" class="code">
            <el-input v-model="ruleForm2.smscode" placeholder="验证码"></el-input>
            <el-button type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</el-button>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">登录</el-button>
            <p class="log" @click="gotoLogin">没有账号？立即注册</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script> 
export default {
  name: "Login", 
  data() {
      const validateCode = (rule, value, callback) => {
            if (this.identifyCode !== value) {
                this.loginForm.code = ''
                this.refreshCode()
                callback(new Error('请输入正确的验证码'))
            } else {
                callback()
            }
        }

    // <!--验证手机号是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('手机号码不合法'))
      } else {
        callback()
      }
    }
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机验证码'))
      } else {
        callback()
      }
    }
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback()
      }
    }
    return {  
      ruleForm2: {
        pass: "",
        checkPass: "",
        tel: "",
        smscode: "",
        msg:'',
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        tel: [{ validator: checkTel, trigger: 'change' }],
        smscode: [{ validator: checkSmscode, trigger: 'change' }],
      },
      buttonText: '发送验证码',
      isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true
    }
  }, 

  methods: {
    // <!--发送验证码-->
    sendCode () {
      this.number=Math.floor(Math.random()*9999);
      console.log(this.number);
      let tel = this.ruleForm2.tel
      if (this.checkMobile(tel)) {
        console.log(tel)
        let time = 60
        this.buttonText = '已发送'
        this.isDisabled = true
        if (this.flag) {
          this.flag = false;
          let timer = setInterval(() => {
            time--;
            this.buttonText = time + ' 秒'
            if (time === 0) {
              clearInterval(timer);
              this.buttonText = '重新获取'
              this.isDisabled = false
              this.flag = true;
            }
          }, 1000)
        }
      }
    },
    // <!--提交登录-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            var obj={phone:this.ruleForm2.tel,upwd:this.ruleForm2.pass};
            this.axios.get("/login",{params:obj}).then(res=>{
                if(res.data.code==1){
                    sessionStorage.setItem("uname",this.ruleForm2.tel);
                    setTimeout(() => {
                    alert('登录成功');
                    this.$router.push({
                        path: "/index"
                    });
                    }, 400);
                }else{
                    setTimeout(() => {
                    alert('登录失败');
                    }, 400);
                }
            })
        
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    // <!--进入首页-->
    gotoLogin() {
      this.$router.push({
        path: "/register"
      });
    },
    // 验证手机号
    checkMobile(str) {
      let re = /^1\d{10}$/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    sessionStorage.removeItem("uname");
  }
};
</script>

<style scoped>
.reg{
  background-image:url('../assets/login.jpg');
  height:800px;
}
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.register-wrapper img {
  position: absolute;
  z-index: 1;
}
.register-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
#register {
  max-width: 400px;
  margin: 100px auto;
  background:rgba(50,50,50,0.5);
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
}
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: 500;
  margin: 10px;
  text-align: center;
  color:#fff;
}
.el-form-item {
  text-align: center;
}
.log {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
}
.login:hover {
  color: #2c2fd6;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
</style>