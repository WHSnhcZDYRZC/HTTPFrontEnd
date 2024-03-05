<template>
  <el-divider content-position="left">HTTP1.1</el-divider>
  <el-button @click="getTableData">点击获取</el-button>
  <el-divider content-position="left">HTTP2</el-divider>
  <el-button @click="getTableDataH2">点击获取</el-button>
  <!-- <el-button @click="test">点击获取123</el-button> -->

  <el-divider content-position="left" />

  <el-button @click="clearTableData">点击清除</el-button>

  <div class="flex flex-wrap justify-around" v-loading="loading">
    <el-table-v2 class="mt-2.5" v-for="o in tableDataOptions" :key="o.title" :columns="o.columns" :width="600" :height="200" :data="o.data.value" fixed />
  </div>

</template>

<script setup>
import {
  getBookList,
  getBookListH2,
  getEmployeeList,
  getEmployeeListH2,
  getFavoritesList,
  getFavoritesListH2,
  getFinancialList,
  getFinancialListH2,
  getGameList,
  getGameListH2,
  getMovieList,
  getMovieListH2,
  getMusicList,
  getMusicListH2,
  getPhoneList,
  getPhoneListH2,
  getRecipeList,
  getRecipeListH2,
  getWorkList,
  getWorkListH2,
  servicePush,
} from '@/api/api';
import { ref } from 'vue';
const loading = ref(false);
const employeeList = ref([]);
const movieList = ref([]);
const bookList = ref([]);
const phoneList = ref([]);
const favoritesList = ref([]);
const workList = ref([]);
const gameList = ref([]);
const recipeList = ref([]);
const musicList = ref([]);
const financialList = ref([]);

const getTableData = async () => {
  loading.value = true;
  const res = await Promise.all([getEmployeeList, getMovieList, getBookList, getPhoneList, getFavoritesList, getWorkList, getGameList, getMusicList, getFinancialList, getRecipeList].map(v => v()));

  setDataHandler(res);
  loading.value = false;
};

const test = async () => {
  const res = await servicePush();
};

const getTableDataH2 = async () => {
  loading.value = true;
  const res = await Promise.all(
    [getEmployeeListH2, getMovieListH2, getBookListH2, getPhoneListH2, getFavoritesListH2, getWorkListH2, getGameListH2, getRecipeListH2, getMusicListH2, getFinancialListH2].map(v => v())
  );

  setDataHandler(res);
  loading.value = false;
};

const dataList = [employeeList, movieList, bookList, phoneList, favoritesList, workList, gameList, recipeList, musicList, financialList];

const setDataHandler = list => {
  list.forEach((v, i) => (dataList[i].value = v.data));
}

const clearTableData = () => {
  dataList.map(v => (v.value = []));
};

const tableDataOptions = [
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '姓名',
        width: 200,
      },
      {
        dataKey: 'sex',
        key: 'sex',
        title: '性别',
        width: 200,
      },
      {
        dataKey: 'age',
        key: 'age',
        title: '年龄',
        width: 200,
      },
    ],
    title: '员工表',
    data: employeeList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '电影名',
        width: 200,
      },
      {
        dataKey: 'author',
        key: 'author',
        title: '作者',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '出版时间',
        width: 200,
      },
    ],
    title: '电影表',
    data: movieList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '书名',
        width: 200,
      },
      {
        dataKey: 'author',
        key: 'author',
        title: '作者',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '出版时间',
        width: 200,
      },
    ],
    title: '书籍表',
    data: bookList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '手机名称',
        width: 200,
      },
      {
        dataKey: 'brand',
        key: 'brand',
        title: '品牌',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '出厂时间',
        width: 200,
      },
    ],
    title: '手机表',
    data: phoneList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '藏品名称',
        width: 200,
      },
      {
        dataKey: 'brand',
        key: 'brand',
        title: '品牌',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '出厂时间',
        width: 200,
      },
    ],
    title: '收藏表',
    data: favoritesList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '任务名称',
        width: 200,
      },
      {
        dataKey: 'employee',
        key: 'employee',
        title: '员工名称',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '完成时间',
        width: 200,
      },
    ],
    title: '任务表',
    data: workList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '游戏名称',
        width: 200,
      },
      {
        dataKey: 'brand',
        key: 'brand',
        title: '品牌',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '出版时间',
        width: 200,
      },
    ],
    title: '游戏表',
    data: gameList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '菜谱名称',
        width: 200,
      },
      {
        dataKey: 'author',
        key: 'author',
        title: '作者',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '出版时间',
        width: 200,
      },
    ],
    title: '菜谱表',
    data: recipeList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '音乐名称',
        width: 200,
      },
      {
        dataKey: 'author',
        key: 'author',
        title: '作者',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '出版时间',
        width: 200,
      },
    ],
    title: '音乐表',
    data: musicList,
  },
  {
    columns: [
      {
        dataKey: 'name',
        key: 'name',
        title: '项目名称',
        width: 200,
      },
      {
        dataKey: 'author',
        key: 'author',
        title: '负责人',
        width: 200,
      },
      {
        dataKey: 'time',
        key: 'time',
        title: '完成时间',
        width: 200,
      },
    ],
    title: '财务表',
    data: financialList,
  },
];
</script>
