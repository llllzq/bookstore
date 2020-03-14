<template>
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
        </el-form-item>
    </el-form>
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

</style>
