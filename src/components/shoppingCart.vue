<template>
    <div>
        购物车
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="图片" width="230">
                    <img src="../pic/books/1.jpg" width="140px">
                </el-table-column>
                <el-table-column prop="name" label="信息" width="120">
                </el-table-column>
                <el-table-column prop="price" label="单价" width="120"></el-table-column>
                <el-table-column prop="sum" label="数量" width="200"></el-table-column>
                <el-table-column prop="price" label="小计(元)" width="200"></el-table-column>
                <el-table-column label="操作" width="200">
                    <el-button type="primary" @click="login">删除</el-button>
                </el-table-column>
        </el-table>
    </div>
</template>

<script>
// 商品加入购物车逻辑实现：通过get请求获取用户对应的商品信息
export default {
  data () {
    return {
      tableData: [{
        name: '人间失格',
        price: 20
      },
      {
        name: '追风筝的人',
        price: 50
      }],
      multipleSelection: []
    }
  },
  methods: {
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
    }
  }
}
</script>
