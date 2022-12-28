<script setup lang="ts">
import { get_json, get_post_json } from "../../composables/http";
import { MainCategory_url, Category_url } from "../../composables/base";
import { MainClass, MovieInfo, Movie } from "../../composables/type";
import { HomeMovieNum } from "../../composables/config";
import { ref, Ref } from "vue";

interface HomeMovie {
  category_id: number;
  name: string;
  movies: Movie[];
}

const status = ref(true);
const dataItems: Ref<HomeMovie[]> = ref([]);
get_json(MainCategory_url, {}, async (res: MainClass[]) => {
  for (const ele of res) {
    let tmp: HomeMovie = {
      category_id: ele.id,
      name: ele.name,
      movies: [],
    };

    await get_post_json(
      Category_url + "/" + ele.id,
      {
        pg: 1,
        num: HomeMovieNum,
      },
      (res: MovieInfo) => {
        tmp.movies = res.movies;
        dataItems.value.push(tmp);
        status.value = false;
      }
    );
  }
});
</script>
<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>

    <n-grid-item span="10 m:6 l:6">
      <template v-if="dataItems.length > 0 && !status">
        <template v-for="data in dataItems">
          <bar :name="data.name" :id="data.category_id" />
          <Child :movies="data.movies" />
        </template>
      </template>
      <template v-else-if="dataItems.length == 0 && !status">
        <div style="height: 20vh"></div>
        <n-result
          status="404"
          title="无分类"
          description="抱歉，当前站点似乎并不存在分类！"
        >
        </n-result>
      </template>
    </n-grid-item>
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>
  </n-grid>
</template>
