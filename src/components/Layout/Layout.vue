<template>
  <div class="common-layout h-full">
    <el-container class="h-full">
      <el-aside class="h-full">
        <Menu />
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Menu from '@/components/Menu/Menu.vue';
</script>
