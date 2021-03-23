<template>
  <div>
    <el-table
    :data="tableData"
    style="width: 1000px"
    :border="true"
    :cell-style="setBgc"
    :header-cell-style="setTitleBgc">
      <el-table-column
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="150">
      </el-table-column>
      <el-table-column
        label="地区"
        width="200">
        <el-table-column
          prop="province"
          label="省份"
          width="100">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="100">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  mounted () {
    console.log(this.$parent)
  },
  methods: {
    setBgc ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 2 || columnIndex === 3) {
        return 'background: #DCDFE6;'
      }
    },
    setTitleBgc ({ row, column, rowIndex, columnIndex }) {
      // eslint-disable-next-line eqeqeq
      if (rowIndex == 0 && columnIndex == 2) {
        return 'background: #EBD4B1; textAlign: center'
      }
      if (rowIndex === 1 && (columnIndex === 0 || columnIndex === 1)) {
        return 'background: #EBD4B1'
      }
    }
  }
}
</script>
