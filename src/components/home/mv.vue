<script setup lang="ts">
import qs from "qs";
import { Ref, ref } from "vue";
import { get_img } from "../../composables/http";
import { proxyImg_url } from "../../composables/base";

const props = defineProps<{
  name: string;
  url: string;
}>();

const bb: Ref<boolean> = ref(true);
const source: Ref<string> = ref("");
get_img(
  proxyImg_url +
    qs.stringify({
      url: props.url,
    }),
  (param: string) => {
    bb.value = false;
    source.value = param;
  }
);
</script>
<template>
  <div class="mv-box">
    <n-spin :show="bb">
      <div class="post"></div>
    </n-spin>
    <div class="mv-bottom">
      <n-ellipsis :line-clamp="1" :tooltip="false">
        {{ props.name }}
      </n-ellipsis>
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
