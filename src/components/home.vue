<template>
    <div>
        <!-- 轮播图 -->
        <div class="block">
            <el-carousel height="400px">
                <el-carousel-item v-for="item in carouselList" :key="item.id">
                    <img :src="item.picPath">
                </el-carousel-item>
                </el-carousel>
            </div>
        <!-- 新书上架 -->
        <h3>新书上架</h3>
        <hr>
        <div class="newBook">
            <!-- <input type="button" value="获取新书"> -->
            <div v-for="book in books" :key="book.id">
                <img :src="getImageUrl(book.id)" width="140px" height="140px">
                <!-- 书籍相关信息 -->
                <div>
                      <li @click="getBookUrl(book.id)" >{{ book.name }} </li>
                      <span class="author">{{ book.author }} </span>
                      <br><span class="price">{{ book.price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      carouselList: [
        { id: 1, picPath: require('../pic/carousel/1.jpg') },
        { id: 2, picPath: require('../pic/carousel/2.jpg') },
        { id: 3, picPath: require('../pic/carousel/3.png') },
        { id: 4, picPath: require('../pic/carousel/4.png') }
      ],
      books: []
    }
  },
  methods: {
    getBooks () {
      axios.get('/api/book').then(response => {
        if (response.data) {
          for (var i = 0; i < response.data.length; i++) {
            var book = response.data[i]
            this.books.push(book)
          }
          console.log(this.books)
        }
      })
    },
    // 获取图片路径
    getImageUrl (id) {
      return require('../pic/books/' + id + '.jpg')
    },
    // 跳转到书本详情页
    getBookUrl (id) {
      // console.log(id)
      var url = '/book/' + id
      this.$router.push(url)
    }
  },
  created () {
    this.getBooks()
  }
}
</script>

<style >
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

li {
  list-style: none;
  cursor: pointer;
  color: rgb(82, 148, 224);
}

</style>
