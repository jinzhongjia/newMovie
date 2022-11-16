<script setup lang="ts">
import { Movie } from "../../composables/type";
const props = defineProps<{
  movies: Movie[];
}>();
</script>
<template>
  <div class="child-box">
    <n-grid cols="3 s:6 l:6" item-responsive responsive="screen">
      <template v-for="movie in props.movies">
        <n-grid-item span="1">
          <Mv :name="movie.name" :url="movie.pic" :id="movie.id" />
        </n-grid-item>
      </template>
    </n-grid>
  </div>
</template>
<style scoped>
.child-box {
  padding: 10px;
}
</style>
