<template>
    <div class="loginContainer">
        <div class="loginBox">
            <!-- 头像框 -->
            <div class="avatarBox">
                <img src="../assets/logo.png">
            </div>
            <!-- 登录表单 -->
            <el-form label-width="70px"  class="formBox"  :model="loginForm" :rules="loginRules" ref="loginFormRefs">
                <el-form-item label="用户名"  prop="userName">
                    <el-input v-model="loginForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码"  prop="password">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item  class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button>注册</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      //    表示一个表单数据绑定对象
      loginForm: {
        userName: 'admin',
        password: 'sss123'
      },

      //    表单的验证规则对象
      loginRules: {
        //  验证用户名是否合法
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        //  验证密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
    //   this.$refs.loginFormRefs.validate(async valid => {
    //     if (valid) {
    //       //    向服务器提交用户名和密码
    //           const {data:res} = await this.$http.post('url', this.loginForm)
    //           if(res.meta.status !==200) {
    //           alert('用户名或者密码错误！')
    //          return  this.$message.err('登录失败')}
    //     }

      // } )
      this.$message.success('登录成功')
      this.$router.push('/index')
    }
  }
}
</script>

<style>
.loginContainer {
    height: 100%;
    background-color: #2b4b6b;
}

.loginBox {
    width: 450px;
    height: 300px;
    background-color: whitesmoke;
    border-radius: 5%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.avatarBox {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color:#eee;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    /* overflow: hidden; */
}

.avatarBox img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.formBox {
    width: 80%;
    position: absolute;
    bottom: 20px;
    left: 30px;
}

.btns {
    float:right;
}
</style>
