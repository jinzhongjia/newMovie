<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useOsTheme, darkTheme } from "naive-ui";
const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>

<template>
  <n-config-provider :theme="theme">
    <n-scrollbar style="max-height: 100vh">
      <headed />
      <Divider height="10px" />

      <router-view />
    </n-scrollbar>
    <n-global-style />
  </n-config-provider>
</template>

<style>
.header {
  background-color: gray;
  height: 60px;
}
</style>
