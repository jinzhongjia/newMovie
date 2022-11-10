<script setup lang="ts">
import { ClassItem } from "../../composables/class";
const items: ClassItem[] = [
  {
    name: "首页",
    url: "/",
  },
];
</script>
<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"></n-grid-item>
    <n-grid-item span="0 m:6 l:6">
      <n-grid cols="8" item-responsive responsive="screen">
        <n-grid-item span="1">
          <Logo />
        </n-grid-item>
        <n-grid-item span="4">
          <Class :items="items" />
        </n-grid-item>
        <n-grid-item span="3">
          <Searcher />
        </n-grid-item>
      </n-grid>
    </n-grid-item>
    <n-grid-item span="0 m:2 l:2"></n-grid-item>
  </n-grid>
</template>
