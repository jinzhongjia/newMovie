<script setup lang="ts">
import logo from "../../assets/logo.png";
</script>

<template>
  <div class="header-logo-box">
    <img :src="logo" style="height: 40px" alt="" />
  </div>
</template>

<style scoped>
.header-logo-box {
  height: 60px;
  margin: 0 5px;
  display: flex;
  align-items: center;
}
</style>
