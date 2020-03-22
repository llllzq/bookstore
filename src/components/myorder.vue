<template>
   <el-container>
      <el-header>
        <el-row>
          <el-col :span="3">
            <div class='demo-type'>
              <div>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
              <el-menu-item index="order/unfinished">进行中</el-menu-item>
              <el-menu-item index="order/finished">已完成</el-menu-item>
              </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <!--侧边栏和主体-->
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="收件人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="图书"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="支付方式">
          </el-table-column>
          <el-table-column
            prop="address"
            label="支付金额">
          </el-table-column>
          <el-table-column
            prop="address"
            label="下单时间">
          </el-table-column>
        </el-table>
        </el-main>
      </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
