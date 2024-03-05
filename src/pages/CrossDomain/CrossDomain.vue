<template>
  <el-button @click="getTableData(METHODS.GET)">CORS 简单请求</el-button>
  <el-button @click="getTableData(METHODS.PUT)">CORS 非简单请求</el-button>
  <el-button @click="getTableDataJsonp">JSONP 获取数据</el-button>
  <el-button @click="clearTableData">清除数据</el-button>

  <el-table :data="tableData">
    <el-table-column align="center" prop="username" label="姓名" />
    <el-table-column align="center" prop="sex" label="性别" />
    <el-table-column align="center" prop="status" label="状态" />
  </el-table>
</template>

<script setup>
import { ref } from 'vue';
import { getUserData } from '@/api/api';
import { ElMessage } from 'element-plus';
import { METHODS } from '@/api';

const tableData = ref([]);

const getTableData = async method => {
  try {
    const res = await getUserData(method);
    tableData.value = res.data;
    ElMessage.success(res.message);
  } catch (error) {
    ElMessage.error(error.message);
  }
};

const clearTableData = () => {
  tableData.value = [];
};

const getTableDataJsonp = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `${import.meta.env.VITE_BASE_API}/api/test/cors-domain/getUserDataJsonp`;
  document.head.appendChild(script);
};

window.handleCallback = function (res) {
  tableData.value = res;
  ElMessage.success('JSONP 获取成功！');
};
</script>

<style lang="stylus" scoped></style>
