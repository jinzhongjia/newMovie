<script setup lang="ts">
import { get_post_json } from "../../composables/http";
import { Category_url } from "../../composables/base";
import { MovieInfo, Movie } from "../../composables/type";
import { useCategoryStore } from "../../composables/store";
import { ref, Ref, watch, watchPostEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const categoryStore = useCategoryStore();
const route = useRoute();
const router = useRouter();
const page: Ref<number> = ref(
  route.params.pageNum
    ? isNaN(Number(route.params.pageNum as string))
      ? 1
      : Number(route.params.pageNum as string)
    : 1
);
const page_count = ref(0);
const movies: Ref<Movie[]> = ref([]);
const name = ref("");
const status = ref(true);

function render() {
  name.value = categoryStore.Id_to_name(Number(route.params.id as string));
  get_post_json(
    Category_url + "/" + route.params.id,
    {
      pg: page.value,
      num: 30,
    },
    (res: MovieInfo) => {
      page_count.value = res.pgCount;
      movies.value = res.movies;
      if (page.value > page_count.value) {
        page.value = page_count.value > 1 ? page_count.value : 1;
      }
      status.value = false;
    }
  );
}

watchPostEffect(render);
watchPostEffect(() => {
  if (page.value > 0) {
    router.push({
      name: "category-page",
      params: {
        id: route.params.id,
        pageNum: page.value,
      },
    });
  }
});

watch(
  () => route.params.id,
  () => {
    page.value = 1;
  }
);
</script>
<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>

    <n-grid-item span="10 m:6 l:6">
      <template v-if="movies.length > 0 && !status">
        <bar :name="name" :id="Number(route.params.id)" />
        <Child :movies="movies" />
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
      </template>
      <template v-else-if="movies.length == 0 && !status">
        <div style="height: 20vh"></div>
        <n-result
          status="404"
          title="分类不存在"
          description="你所寻找的分类不存在，去别的地方找找吧"
        >
        </n-result>
      </template>
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
