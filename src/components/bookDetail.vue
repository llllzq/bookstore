<template>
    <el-container>
        <!-- 导航栏 -->
        <el-header>
            <el-row>
                  <el-col :span="6"><div class="logo">网上书城</div></el-col>
                  <el-col :span="18">
                      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
                        <el-menu-item index="1" @click="goHome">主页</el-menu-item>
                        <el-menu-item index="2" @click="goCart">购物车</el-menu-item>
                        <el-menu-item index="3">我的订单</el-menu-item>
                      </el-menu>
                  </el-col>
           </el-row>
        </el-header>
        <el-main>
            <!-- 书籍介绍 -->
            <div class="book">
                <span style="font-size:26px;font-weight:bold">{{book.title}}</span>
                <hr>
                <div class="bookContainer">
                    <div class="bookPic">
                        <img :src="getImageUrl(book.id)" width="300px">
                    </div>
                    <div class="bookOther">
                        <p>售价：{{book.price}}</p>
                        <p>作者：{{book.author}}</p>
                        <hr>
                        <p>页数:{{book.page}}</p>
                        <p>出版社:{{book.publisher}}</p>
                        <p>出版日期:{{book.publish_date}}</p>
                        <hr>
                        <p>分类：{{book.category}}</p>
                        <p>销售量：{{total}}</p>
                        <hr>
                        <el-button type="primary" @click="cartAdd" icon="el-icon-shopping-cart-2" >加入购物车</el-button>
                    </div>
                </div>
            </div>
            <!-- 内容简介 -->
            <div class="content book">
                <span style="font-size:26px">内容简介</span>
                <hr>
                <p>{{ book.content }}</p>
            </div>
            <!-- 作者简介 -->
            <div class="authorIntro book">
                <span style="font-size:26px">作者简介</span>
                <hr>
                <p>{{ book.author_intro }}</p>
            </div>
            <!-- 书的目录 -->
            <div class="book">
                <span style="font-size:26px">目录</span>
                <hr>
                <p>{{ book.catalogue }}</p>
            </div>
            <!-- 评论 -->
            <div class="book">
                <span style="font-size:26px">评论</span>
                <hr>
                <div class="comments" v-for="item in book.comment" :key="item.customer">
                  <p>{{ item.content}}</p>
                  <p>发布者：{{ item.customer}}</p>
                  <hr>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      book: {},
      queryInfo: {
        query: 0 // 查询参数：不为空的时候代表根据书名查找
      },
      total: 0 // 书本总数
    }
  },
  methods: {
    // 根据路径中的id获取对应书本的其他数据
    async getBook () {
      var bookid = this.$route.params.id
      // axios.get('api/book').then(response => {
      //   if (response.data) {
      //     this.book = response.data[bookId - 1]
      //   }
      // })
      this.queryInfo.query = bookid
      const { data: res } = await this.$http.get('books', { params: this.queryInfo })
      if (res.meta.status === 200) {
        //  this.book = res.data.books[0]
        this.book = res.data.books[bookid - 1]
        this.total = res.data.total
      } else {
        this.$message.err('err!')
        console.log(res)
      }
    },
    // 获取书本封面图片
    getImageUrl (id) {
      return require('../pic/books/' + id + '.jpg')
    },
    // 加入购物车
    async cartAdd () {
      // 将对应的商品编号和用户编号发给服务器
      var userid = window.sessionStorage.getItem('userid')
      var data = {
        userid: userid,
        books: {
          bookid: this.book.id,
          count: 1
        }
      }
      // axios.post('/api/addgoods', data).then(response => {
      //   if (response.data) {
      //     if (response.data.code === 200) this.$message.success('成功加入购物车')
      //     // console.log('res=>', response)
      //     else {
      //       console.log(response.data.code)
      //       alert('商品加入购物车出现错误')
      //     }
      //   }
      // })
      const { data: res } = await this.$http.post('purchase/add', data)
      if (res.meta.status === 200) this.$message.success('成功加入购物车')
      else {
        console.log(res)
        this.$message.err('出现错误')
      }
    },
    // 返回主页
    goHome () {
      this.$router.push('/index')
    },
    goCart () {
      this.$router.push('/cart')
    }
  },
  created () {
    this.getBook()
  }
}
</script>

<style scoped>
.book {
    width: 60%;
    border: solid 1px #868686d7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: auto;
    margin-top: 20px;
    padding: 20px;
}

.bookContainer {
    display: flex;
}

.bookOther {
    width: 60%;
}

.el-button{
  float: right;
}
</style>
