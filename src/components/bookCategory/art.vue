<template>
    <div>
        <!-- 导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文艺</el-breadcrumb-item>
          </el-breadcrumb>
        <!-- 布局 -->
        <el-row >
            <el-col :span="9">
                <!-- 搜索框 -->
                <el-input placeholder="请输入内容" v-model="queryInfo.query">
                <el-button slot="append" icon="el-icon-search" @click="searchBook"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <!-- 卡片视图区 -->
        <el-row :gutter="1" :span="10" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
            <el-col :span="5" v-for="book in booklist" :key="book.id" offset="1">
              <el-card :body-style="{ padding: '0px' }">
                <!-- <div > -->
                  <img :src="getImageUrl(book.id)" class="image">
                  <div style="padding: 14px; text-align: center;">
                    <li @click="getBookUrl(book.id)">{{ book.name }}</li>
                    <!-- <div class="bottom clearfix"> -->
                    <!-- <el-button type="text" class="button">加入购物车</!-->
                    <!-- </div> -->
                  </div>
                <!-- </div> -->
              </el-card>
            </el-col>
          </el-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 获取书籍列表的参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      booklist: [],
      total: 0
    }
  },
  created () {
    this.getBookList()
  },
  methods: {
    // 获取数据
    getBookList () {
      axios.get('/api/book').then(response => {
        if (response.data) {
          for (var i = 0; i < response.data.length; i++) {
            var book = response.data[i]
            this.booklist.push(book)
          }
          console.log(this.booklist)
        }
      })
    },
    // 搜索书籍
    async searchBook () {
      const { data: res } = await this.$http.get('/api/book', {
        params: this.queryInfo
      })
      this.booklist = res
      console.log(res)
    },
    // 跳转到书本详情页
    getBookUrl (id) {
      // console.log(id)
      var url = '/book/' + id
      this.$router.push(url)
    },
    // 获取图片路径
    getImageUrl (id) {
      return require('../../pic/books/' + id + '.jpg')
    }
  }
}
</script>

<style>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
