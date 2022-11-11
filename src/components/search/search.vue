<script setup lang="ts">
import { Ref, ref, watchPostEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { get_post_json } from "../../composables/http";
import { Search_url } from "../../composables/base";
import { Movie, CategoryInfo } from "../../composables/type";

const route = useRoute();
const router = useRouter();

const page_count = ref(0);
const movies: Ref<Movie[]> = ref([]);
const keywords = ref("");
const page: Ref<number> = ref(
  route.params.pageNum
    ? isNaN(Number(route.params.pageNum as string))
      ? 1
      : Number(route.params.pageNum as string)
    : 1
);

function render() {
  keywords.value = route.params.keyword as string;
  get_post_json(
    Search_url,
    {
      keyword: keywords.value,
      pg: page.value,
      num: 12,
    },
    (res: CategoryInfo) => {
      movies.value = res.movies;
      page_count.value = res.pgCount;
      if (page.value > res.pgCount) {
        page.value = res.pgCount;
      }
    }
  );
}
watchPostEffect(render);

watchPostEffect(() => {
  router.push({
    name: "search-page",
    params: {
      keyword: keywords.value,
      pageNum: page.value,
    },
  });
});
</script>

<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>

    <n-grid-item span="10 m:6 l:6">
      <n-card hoverable>
        <template #header>《{{ keywords }}》搜索结果</template>
        <n-list>
          <template v-for="movie in movies">
            <searchItem
              :name="movie.name"
              :pic="movie.pic"
              :id="movie.id"
              :desc="movie.description"
              :actor="movie.actor"
              :director="movie.director"
            />
          </template>
        </n-list>
      </n-card>
      <div class="pagination">
        <template v-if="page_count > 1">
          <n-space justify="center">
            <n-pagination
              v-model:page="page"
              :page-count="page_count"
              :page-slot="7"
            />
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
  margin-left: 10px;
  margin-right: 10px;
}
</style>
