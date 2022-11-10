<script setup lang="ts">
import { get_json, get_post_json } from "../../composables/http";
import { MainCategory_url, Category_url } from "../../composables/base";
import { MainClass, CategoryInfo, Movie } from "../../composables/type";
import { HomeMovieNum } from "../../composables/config";
import { ref, Ref } from "vue";

interface HomeMovie {
  category_id: number;
  name: string;
  movies: Movie[];
}

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
      (res: CategoryInfo) => {
        tmp.movies = res.movies;
        dataItems.value.push(tmp);
      }
    );
  }
});
</script>
<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>

    <n-grid-item span="0 m:6 l:6">
      <template v-for="data in dataItems">
        <bar :name="data.name" :id="data.category_id" />
        <Child :movies="data.movies" />
      </template>
    </n-grid-item>
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>
  </n-grid>
</template>
