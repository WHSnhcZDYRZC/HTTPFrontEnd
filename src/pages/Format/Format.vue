<template>
  <el-table class="h-96" :data="tableData">
    <el-table-column align="center" prop="name" label="文件名称" />
    <el-table-column align="center" prop="hash" label="文件hash" />
    <el-table-column align="center" prop="status" label="下载地址">
      <template #default="scope">
        <el-link @click="downloadHandler(scope.row)" type="primary">{{ scope.row.fileUrl }}</el-link>
      </template>
    </el-table-column>
  </el-table>

  <el-divider content-position="left">Json</el-divider>
  <el-button @click="jsonRequestHandler">点击发送</el-button>
  <el-divider content-position="left">Image、Video、Audio、Xlsx ...</el-divider>
  <input type="file" @change="generalFileUpload" />
</template>

<script setup>
import '/spark-md5.min.js?url';
import { beforeUpdateFile, getFileList, getJson, mediumUpdateFile } from '@/api/api';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const jsonRequestHandler = async () => {
  const res = await getJson();
  ElMessage.success(res.data);
};

const downloadHandler = (v) => window.open(v.fileUrl)

const loading = ref(false);

const tableData = ref([]);

const openHandler = async () => {
  open.value = true;

  loading.value = true;
  const res = await getFileList();

  if (res.code === 200) {
    tableData.value = res.data.reverse();
  }

  loading.value = false;
};

openHandler();

const generalFileUpload = async file => {
  file = file.target.files[0];

  const result = await getFileSimple(file);
  if (result.state === ResFile.SUCCESS) {
    return ElMessage.success('文件上传成功');
  }

  const fm = new FormData();
  fm.append('file', file);
  fm.append('fileHash', result.hash);
  const { code, message: msg } = await mediumUpdateFile(fm);

  if (code === 200) {
    ElMessage.success(msg);
    openHandler();
  } else {
    ElMessage.error(msg);
  }
};

const ResFile = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const getFileSimple = async file => {
  const end = await readFileHandler(file);

  const { code, message } = await verifyFile({
    fileName: file.name,
    fileHash: end,
    fileSize: file.size,
  });

  return {
    state: message === '文件已存在' ? ResFile.SUCCESS : ResFile.ERROR,
    hash: end,
  };
};

const readFileHandler = file =>
  new Promise(resolve => {
    const spark = new SparkMD5.ArrayBuffer();
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = e => {
      spark.append(e.target?.result);
      resolve(spark.end());
    };
  });

const verifyFile = async ({ fileName, fileHash, fileSize }) => {
  const res = await beforeUpdateFile({
    fileName,
    fileHash,
    fileSize,
  });

  return res;
};
</script>
