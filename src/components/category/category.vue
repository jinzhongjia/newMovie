<script setup lang="ts">
import { get_post_json } from "../../composables/http";
import { Category_url } from "../../composables/base";
import { CategoryInfo, Movie } from "../../composables/type";
import { useCategoryStore } from "../../composables/store";
import { ref, Ref, watchPostEffect } from "vue";
import { useRoute } from "vue-router";

const categoryStore = useCategoryStore();
const router = useRoute();
const page = ref(1);
const page_count = ref(0);
const movies: Ref<Movie[]> = ref([]);
const name = ref("");

function render() {
  name.value = categoryStore.Id_to_name(Number(router.params.id as string));
  get_post_json(
    Category_url + "/" + router.params.id,
    {
      pg: page.value,
      num: 30,
    },
    (res: CategoryInfo) => {
      page_count.value = res.pgCount;
      movies.value = res.movies;
    }
  );
}

watchPostEffect(render);
</script>
<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>

    <n-grid-item span="0 m:6 l:6">
      <bar :name="name" :id="Number(router.params.id)" />
      <Child :movies="movies" />
      <div class="pagination">
        <template v-if="page_count > 1">
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
  margin-bottom: 40px;
}
</style>
