<template>
  <el-divider content-position="left">Web Socket</el-divider>
  <el-input @keyup.enter="sendMessage" v-model="message" placeholder="回车发送" />
  <div class="h-96 text-[12px] text-stone-400 mt-2.5 overflow-auto" v-html="divHtml" />

  <el-divider content-position="left">SSE</el-divider>
  <el-button @click="sseHandler">{{ isStart ? '停止' : '开始' }} </el-button>
  <p class="h-80 text-[12px] text-stone-400 mt-2.5 overflow-auto" v-html="pHtml"></p>
</template>

<script setup>
import { Socket, uuid } from '@/utils';
import { ref } from 'vue';

const message = ref('');
const divHtml = ref('');
const isStart = ref(false);

Socket.installOnmessage('chat', (e, data) => {
  divHtml.value += `<p>${data.name}: ${data.message}</p>`;
});

const sendMessage = () => {
  Socket.sendMessage(message.value);
  message.value = '';
};

const pHtml = ref('');
const eventSource = ref();

const sseHandler = () => {
  if (!isStart.value) {
    // http://localhost:8787/api/test/sse/
    // /api/test/sse/
    eventSource.value = new EventSource(`${import.meta.env.VITE_BASE_API}/api/test/sse/${uuid(5, 16)}?message=测试`);

    eventSource.value.onmessage = e => {
      console.log('e', e);
      // pHtml.value += JSON.parse(e.data);
      pHtml.value += e.data;
    };
  } else {
    eventSource.value.close();
  }

  isStart.value = !isStart.value;
};
</script>
