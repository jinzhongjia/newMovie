<script setup lang="ts">
import { Ref, ref } from "vue";
import { get_img } from "../../composables/http";

const bb: Ref<boolean> = ref(true);
const source: Ref<string> = ref("");
get_img(
  "http://127.0.0.1:8000/img/proxy?url=https://img.tx-xhzy.com/upload/vod/20220928-10/712a3e7efc43a7eccc3fd697796bd34d.jpg",
  (param: string) => {
    source.value = param;
    bb.value = false;
  }
);
</script>
<template>
  <div class="mv-box">
    <n-spin :show="bb">
      <div class="post"></div>
    </n-spin>
    <div class="mv-bottom">
      <n-ellipsis :line-clamp="1" :tooltip="false"> 电灯熄灭 </n-ellipsis>
    </div>
  </div>
</template>
<style scoped>
.mv-box {
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}
.post {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 0;
  padding-bottom: 148%;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: v-bind("'url('+source+')'");
}
.mv-bottom {
  padding: 6px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #f5f5f5;
  text-align: center;
}
</style>
