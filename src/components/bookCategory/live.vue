<template>
    <div>
        <!-- 导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>生活</el-breadcrumb-item>
          </el-breadcrumb>
        <!-- 布局 -->
        <el-row >
            <el-col :span="9">
                <!-- 搜索框 -->
                <el-input placeholder="请输入内容" v-model="queryInfo2.query" clearable @clear="getBookList">
                <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <!-- 卡片视图区 -->
        <el-row :span="10" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
            <el-col :span="5" v-for="book in booklist" :key="book.id" offset="1">
              <el-card :body-style="{ padding: '0px' }">
                <!-- <div  v-for="book in booklist" :key="book.id"> -->
                  <img :src="getImageUrl(book.id)" class="image">
                  <div style="padding: 14px; text-align: center;">
                    <li @click="getBookUrl(book.id)">{{ book.title }}</li>
                    <!-- <div class="bottom clearfix">
                    <el-button type="text" class="button">加入购物车</el-button>
                    </div> -->
                  </div>
                <!-- </div> -->
              </el-card>
            </el-col>
          </el-row>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      // 获取书籍列表的参数对象
      queryInfo: {
        id: 4
        // 这里重复使用了
      },
      queryInfo2: {
        query: ''
      },
      booklist: [],
      total: 0
    }
  },
  created () {
    this.getBookList()
  },
  methods: {
    async getBookList () {
      const { data: res } = await this.$http.get('books/category', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取失败')
      }
      this.booklist = res.data.books
      console.log(res)
      for (var i = 0; i < res.data.length; i++) {
        var book = res.data.books[i]
        this.booklist.push(book)
      }
    },
    // 搜索书籍
    async searchBook () {
      const { data: res } = await this.$http.get('books', {
        params: this.queryInfo2
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取失败')
      }
      this.total = res.data.total
      this.booklist = res.data.books
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
