<script setup lang="ts">
import { ClassItem } from "../../../composables/type";
const props = defineProps<{
  items: ClassItem[];
}>();
</script>
<template>
  <n-grid cols="3 l:9" item-responsive responsive="screen">
    <template v-for="item in props.items">
      <n-grid-item span="1">
        <div class="class-box">
          <router-link :to="item.url">
            <span class="class-name">{{ item.name }}</span>
          </router-link>
        </div>
      </n-grid-item>
    </template>
  </n-grid>
</template>
<style scoped>
.class-box {
  height: 60px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
}
.class-box a {
  text-decoration: none;
  color: #333;
}
</style>
