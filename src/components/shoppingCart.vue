<template>
    <div class="tableContainer">
      <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="selected">
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column label="商品图片" width="200">
        <template scope="scope">
          <div style="margin-left: 50px">
            <img :src="scope.row.img" style="height: 100px;width: 100px">
          </div>
        </template>
      </el-table-column>
      <el-table-column label="名称" width="200" prop="name"></el-table-column>
      <el-table-column label="单价" width="150" prop="price"></el-table-column>
      <el-table-column label="数量" width="200">
        <template scope="scope">
          <div>
            <el-input v-model="scope.row.number">
              <el-button slot="prepend" @click="del(scope.row)"><i class="el-icon-minus"></i></el-button>
              <el-button slot="append" @click="add(scope.row)"><i class="el-icon-plus"></i></el-button>
            </el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="小计" width="150" prop="goodTotal"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">
          删除<i class="el-icon-delete2 el-icon--right"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-button type="warning" plain class="btnTotal">{{"商品总价：" + moneyTotal}}</el-button>
    <el-button type="primary" style="float:right" @click="buy">立刻购买</el-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      tableData: [{
        img: require('../pic/books/1.jpg'),
        name: 'book1',
        price: 149,
        number: 1,
        goodTotal: 149
      },
      {
        img: require('../pic/books/2.jpg'),
        name: 'book2',
        price: 29,
        number: 1,
        goodTotal: 29
      }],
      multipleSelection: [],
      num: 1,
      moneyTotal: 0
    }
  },
  methods: {
    // table默认方法
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 获取商品列表
    getGoods () {
      axios.get('/api/cart').then(response => {
        console.log(response.data)
      })
    },
    // 删除商品
    handleDelete (index, row) {
      this.$confirm('确定删除该商品？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
      // 删除数组中指定的元素
        this.tableData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 增加数量并更新小计
    add (addGood) {
      // 输入框输入值变化时会变为字符串格式返回到js
      if (typeof addGood.number === 'string') {
        addGood.number = parseInt(addGood.number)
      }
      addGood.number += 1
      addGood.goodTotal = (addGood.number * addGood.price).toFixed(1)
      this.selected(this.multipleSelection)
    },
    // 数量减少
    del (delGood) {
      if (typeof delGood.number === 'string') {
        delGood.number = parseInt(delGood.number)
      }
      if (delGood.number > 1) {
        delGood.number -= 1
      }
      delGood.goodTotal = (delGood.number * delGood.price).toFixed(1)
      this.selected(this.multipleSelection)
    },
    // 计算商品总价
    // 参数selection为选中行对应的对象
    selected (selection) {
      this.multipleSelection = selection
      this.moneyTotal = 0
      // 此处不支持forEach循环，只能用原始方法
      for (var i = 0; i < selection.length; i++) {
        // 判断返回的值是否是字符串
        if (typeof selection[i].goodTotal === 'string') {
          selection[i].goodTotal = parseInt(selection[i].goodTotal)
        }
        this.moneyTotal += selection[i].goodTotal
      }
    },
    // 购买选中商品
    buy () {
      var userid = window.sessionStorage.getItem('id')
      this.$router.push('/' + userid + '/create')
    }
  },
  created () {
    this.getGoods()
  }
}

</script>

<style scoped>
.tableContainer {
  width: 70%;
  margin: auto;
}

.btnTotal {
  position: fixed;
  right: 0;
  top: 100px;
}
</style>
