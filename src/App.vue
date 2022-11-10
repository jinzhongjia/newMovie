<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <n-scrollbar style="max-height: 100vh">
    <headed />
    <Divider height="10px" />

    <router-view />
  </n-scrollbar>
</template>

<style>
.header {
  background-color: gray;
  height: 60px;
}
</style>
