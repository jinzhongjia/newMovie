<script setup lang="ts">
import { ClassItem } from "../../../composables/type";
import { useCategoryStore } from "../../../composables/store";
import { computed } from "vue";

const store = useCategoryStore();
const items = computed(() => {
  let tmp: ClassItem[] = [];
  tmp.push({
    name: "首页",
    url: "/",
  });
  for (let index = 0; index < store.AllCategory.length && index < 10; index++) {
    const ele = store.AllCategory[index];
    tmp.push({
      name: ele.name,
      url: "/Category/" + ele.id + "/1",
    });
  }
  return tmp;
});
</script>
<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"></n-grid-item>
    <n-grid-item span="10 m:6 l:6">
      <n-grid cols="8" item-responsive responsive="screen">
        <n-grid-item span="3 l:1">
          <!-- <router-link to="/"> -->
          <a href="https://github.com/jinzhongjia/movie-getter" target="_blank">
            <Logo />
          </a>
          <!-- </router-link> -->
        </n-grid-item>
        <n-grid-item span="2 l:5">
          <Class :items="items" />
        </n-grid-item>
        <n-grid-item span="3 l:2">
          <Searcher />
        </n-grid-item>
      </n-grid>
    </n-grid-item>
    <n-grid-item span="0 m:2 l:2"></n-grid-item>
  </n-grid>
</template>
