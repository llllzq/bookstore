<template>
    <el-container>
        <!-- 导航栏 -->
        <el-header>
            <el-row>
                  <el-col :span="6"><div class="logo">网上书城</div></el-col>
                  <el-col :span="18">
                      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                      :router="true" >
                        <el-menu-item index="index">主页</el-menu-item>
                        <el-menu-item index="cart">购物车</el-menu-item>
                        <el-menu-item index="3">我的订单</el-menu-item>
                      </el-menu>
                  </el-col>
           </el-row>
        </el-header>
        <el-main>
            <!-- 书籍介绍 -->
            <div class="book">
                <span style="font-size:26px;font-weight:bold">{{book.name}}</span>
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
                        <p>出版社:{{book.publish}}</p>
                        <p>出版日期:{{book.publish_date}}</p>
                        <hr>
                        <p>存货量：{{book.rest}}</p>
                        <p>销售量：{{book.sale}}</p>
                        <hr>
                        <el-button type="primary" @click="add">加入购物车</el-button>
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
        </el-main>
    </el-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      book: {}
    }
  },
  methods: {
    // 根据路径中的id获取对应书本的其他数据
    getBook () {
      var bookId = this.$route.params.id
      axios.get('api/book').then(response => {
        if (response.data) {
          this.book = response.data[bookId - 1]
          // console.log(this.book)
        }
      })
    },
    getImageUrl (id) {
      return require('../pic/books/' + id + '.jpg')
    },
    // 加入购物车
    add () {

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

</style>
