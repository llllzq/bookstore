<template>
            <!-- 注册表单 -->
            <el-form label-width="70px"  class="formBox"  :model="registerForm" :rules="regRules">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="registerForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item  class="btns">
                    <el-button type="primary">注册</el-button>
                </el-form-item>
            </el-form>
</template>

<script>
export default {
  data () {
    return {
      //    表示一个表单数据绑定对象
      registerForm: {
        userName: '',
        password: ''
      },

      //    表单的验证规则对象
      regRules: {
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
  }
}
</script>

<style>

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
