<script setup lang="ts">
import { ref } from "vue";

const page = ref(5);
const page_count = ref(10);
</script>
<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>

    <n-grid-item span="0 m:6 l:6">
      <bar name="电影" />
      <Child />
      <div class="pagination">
        <template v-if="page_count > 0">
          <n-space justify="center">
            <n-pagination v-model:page="page" :page-count="page_count" />
          </n-space>
        </template>
      </div>
    </n-grid-item>
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>
  </n-grid>
</template>
<style scoped>
.pagination {
  margin-top: 20px;
}
</style>
