<template>
  <div>
    <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    stripe
    style="width: 100%"
    >
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" width="180" label="门牌号"></el-table-column>
    </el-table>
    <el-pagination background  layout="prev, pager, next" @current-change="change" :total="50"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
        total:50, // 默认数据总数
        pagesize:3, // 每页的数据条数 可以设置下拉选项  
        currentPage:1, //默认开始页面
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "马帅强",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "刘铭",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "梁钊",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-02",
          name: "赖凌峰",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "周广鹏",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "陈玉林",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "杨幂",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司"
        }
      ]
    };
  },
  methods: {
    indexMethod(index) {
      return index * 1;
    },
    change(currentPage){
      this.currentPage = currentPage;
    }
  },
  created(){
      this.total = this.tableData.length;
  },
  
};
</script>

<style scoped>
</style>