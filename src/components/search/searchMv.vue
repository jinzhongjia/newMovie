<script setup lang="ts">
import qs from "qs";
import { ref, Ref, watchPostEffect } from "vue";
import { get_img } from "../../composables/http";
import { ProxyImg_url } from "../../composables/base";
const props = defineProps<{
  url: string;
  id: number;
}>();
const source: Ref<string> = ref("");
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
const ok: Ref<boolean> = ref(true);
</script>
<template>
  <div>
    <n-spin :show="ok">
      <div class="img"></div>
    </n-spin>
  </div>
</template>
<style scoped>
.img {
  width: 130px;
  padding-bottom: 148%;
  background-image: v-bind("'url('+source+')'");
  background-size: 100%;
  border-radius: 10px;
}
</style>
