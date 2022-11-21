<script setup lang="ts">
import qs from "qs";
import { Ref, ref, watchPostEffect } from "vue";
import { get_img } from "../../composables/http";
import { ProxyImg_url } from "../../composables/base";
import { useRouter } from "vue-router";

const props = defineProps<{
  name: string;
  url: string;
  id: number;
}>();

const ok: Ref<boolean> = ref(true);
const source: Ref<string> = ref("");
const router = useRouter();

function render() {
  ok.value = true;
  get_img(
    ProxyImg_url +
      qs.stringify({
        url: props.url,
      }),
    (param: string) => {
      ok.value = false;
      source.value = param;
    }
  );
}
watchPostEffect(render);
function go(id: number) {
  router.push({
    name: "video-num",
    params: {
      id: id,
      num: 1,
    },
  });
}
</script>
<template>
  <div class="mv-box">
    <n-spin :show="ok">
      <div class="post" @click="go(props.id)"></div>
    </n-spin>
    <div class="mv-bottom" @click="go(props.id)">
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
  cursor: pointer;
}
.mv-bottom {
  cursor: pointer;
  padding: 6px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: inherit;
  text-align: center;
}
</style>
