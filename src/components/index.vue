<template>
    <el-container>
        <!-- 导航栏 -->
        <el-header>
            <el-row>
                  <el-col :span="6"><div class="logo">网上书城</div></el-col>
                  <el-col :span="18">
                      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">主页</el-menu-item>
                        <el-menu-item index="2">购物车</el-menu-item>
                        <el-menu-item index="3">我的订单</el-menu-item>
                      </el-menu>
                  </el-col>
           </el-row>
        </el-header>
        <!-- 侧边栏和主体 -->
        <el-container class="main">
            <!-- 侧边栏 -->
            <el-aside width="200px">
                <el-row class="tac">
                    <h5>分类</h5>
                    <el-menu>
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">人文社科</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">小说</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-menu"></i>
                            <span slot="title">教育</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-menu"></i>
                            <span slot="title">文艺</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <i class="el-icon-menu"></i>
                            <span slot="title">生活</span>
                        </el-menu-item>
                        <el-menu-item index="6">
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
        { title: '人间失格', author: 'xxxx', price: '20.00', pic: require('../pic/books/1.jpg') },
        { title: '活着', author: '余华', price: '20.00', pic: require('../pic/books/2.jpg') },
        { title: '追风筝的人', author: 'xxxx', price: '20.00', pic: require('../pic/books/5.jpg') },
        { title: '朝花夕拾', author: '鲁迅', price: '20.00', pic: require('../pic/books/4.jpg') }
      ]
    }
  }
}
</script>

<style >
.logo {
    text-align: center;
    line-height: 60px;
}
.main {
    width: 75%;
    margin: auto;
}

.el-header {
    width: 100%;
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
