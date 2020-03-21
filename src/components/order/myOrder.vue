<template>
    <div class="main">
        <div class="user">
            <p style="font-size:22px;font-weight:bold">收货人信息</p>
            <table>
                <tr>
                    <td class="first">姓名:</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td class="first">手机号:</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td class="first">地区:</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td class="first">地址:</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td class="first">邮编:</td>
                    <td>123</td>
                </tr>
            </table>
        </div>
        <div class="order">
        <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
            prop="name"
            label="书名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="count"
            label="数量"
            width="180">
            </el-table-column>
            <el-table-column
            prop="date"
            label="日期"
            >
            </el-table-column>
        </el-table>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '计算机网络',
        count: 1
      }, {
        date: '2016-05-04',
        name: 'Javascript高级程序设计',
        count: 1
      }, {
        date: '2016-05-01',
        name: 'Javascript高级程序设计',
        count: 1
      }, {
        date: '2016-05-03',
        name: '计算机操作系统',
        count: 1
      }]
    }
  }
}
</script>

<style scoped>
.main {
    width: 65%;
    margin: auto;
}
table {
    width: 80%;
    border: 1px solid #ccc;
    border-collapse: collapse;
}
tr {
    height: 40px;
}

td{
    border: 1px solid #ccc;
    padding-left: 10px;
}

.first {
    width: 20%;
}
.user,.order {
    border: solid 1px #868686d7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: auto;
    margin-top: 20px;
    padding: 20px;
}

.el-table .warning-row {
    background: oldlace;
  }

.el-table .success-row {
    background: #f0f9eb;
  }
</style>
