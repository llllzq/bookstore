<template>
    <el-container>
        <!-- 导航栏 -->
        <el-header>
            <el-row>
                  <el-col :span="6">
                      <div class="logo">网上书城</div>
                  </el-col>
                  <el-col :span="12">
                      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                      :router="true" >
                        <el-menu-item index="index" >主页</el-menu-item>
                        <el-menu-item index="cart">购物车</el-menu-item>
                        <el-menu-item index="myorder">我的订单</el-menu-item>
                      </el-menu>
                  </el-col>
                  <el-col :span="6" class="info">
                      <div class="infoText">{{time}},{{username}}</div>
                      <el-button @click="logout" class="infoBtn">退出</el-button>
                  </el-col>
           </el-row>
        </el-header>
        <!-- 侧边栏和主体 -->
        <el-container class="main">
            <!-- 侧边栏 -->
            <el-aside width="200px">
                <el-row class="tac">
                    <h5>分类</h5>
                    <el-menu :router="true">
                        <el-menu-item index="../category/cultural">
                            <i class="el-icon-menu"></i>
                            <span slot="title">人文社科</span>
                        </el-menu-item>
                        <el-menu-item index="../category/novel">
                            <i class="el-icon-menu"></i>
                            <span slot="title">小说</span>
                        </el-menu-item>
                        <el-menu-item index="../category/education">
                            <i class="el-icon-menu"></i>
                            <span slot="title">教育</span>
                        </el-menu-item>
                        <el-menu-item index="../category/art">
                            <i class="el-icon-menu"></i>
                            <span slot="title">文艺</span>
                        </el-menu-item>
                        <el-menu-item index="../category/live">
                            <i class="el-icon-menu"></i>
                            <span slot="title">生活</span>
                        </el-menu-item>
                        <el-menu-item index="../category/child">
                            <i class="el-icon-menu"></i>
                            <span slot="title">儿童书籍</span>
                        </el-menu-item>
                    </el-menu>
                </el-row>
            </el-aside>

            <!-- 主体 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
      carouselList: [
        { id: 1, picPath: require('../pic/carousel/1.jpg') },
        { id: 2, picPath: require('../pic/carousel/2.jpg') },
        { id: 3, picPath: require('../pic/carousel/3.png') },
        { id: 4, picPath: require('../pic/carousel/4.png') }
      ],
      books: [
      ],
      userid: 0,
      username: '',
      time: ''
    }
  },
  methods: {
    // 获取登录用户的id,保存
    getInfo () {
      var name = window.sessionStorage.getItem('username')
      var id = window.sessionStorage.getItem('id')
      this.username = name
      this.userid = id
      // console.log(this.userid)
      // console.log(this.username)
    },
    // 获取时间
    getTime () {
      var day = new Date()
      var hour = day.getHours()
      if (hour > 6 && hour < 12) this.time = '早上好'
      else if (hour >= 12 && hour < 18) this.time = '下午好'
      else this.time = '晚上好'
    },
    // 退出登录
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  },
  created () {
    this.getInfo()
    this.getTime()
  }
}
</script>

<style >
.logo {
    text-align: center;
    line-height: 60px;
    border-color: #868686;
}
.main {
    margin: auto;
    width: 80%;
}

.el-header {
    width: 100%;
}

.info {
    display: flex;
    line-height: 60px;
}
.infoBtn {
    width: 80px;
    height: 40px;
}
.newBook {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.author {
   font-size: 12px;
   color: gray;
   line-height: 10px;
}

</style>
