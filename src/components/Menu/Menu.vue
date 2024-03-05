<template>
  <el-menu class="h-full" :default-active="activeIndex" router>
    <el-menu-item class="text-center block text-[16px]" v-for="o of routes[0].children" :index="o.path" :key="o.path">{{ o.label }}</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import routes from '@/router/routes';

const route = useRoute();
const activeIndex = ref(route.path);
</script>
