<script setup lang="ts">
import { NIcon } from "naive-ui";
import { h, ref, watch, shallowRef } from "vue";
import { get_color, get_icon } from "../../composables/bar";
import { MoreSharp } from "@vicons/material";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps<{
  name: string;
  id: number;
}>();

const color = ref(get_color());
const icon = shallowRef(get_icon());

const Icon = () =>
  h(
    NIcon,
    {
      size: 35,
      color: color.value,
    },
    () => h(icon.value)
  );

const More = () =>
  h(
    NIcon,
    {
      size: 30,
      color: color.value,
    },
    () => h(MoreSharp)
  );

watch(
  () => route.params.id,
  () => {
    color.value = get_color();
    icon.value = get_icon();
  }
);
</script>
<template>
  <div class="bar-box">
    <n-space justify="space-between">
      <n-space>
        <Icon />
        <div
          style="
            height: 36px;
            display: flex;
            align-items: center;
            font-size: 1.125rem;
          "
        >
          <span>{{ props.name }}</span>
        </div>
      </n-space>

      <template v-if="route.name == 'home'">
        <router-link :to="'/Category/' + props.id + '/1'">
          <More />
        </router-link>
      </template>
    </n-space>
    <Divider height="0px" />
  </div>
</template>

<style scoped>
.bar-box {
  padding: 10px 10px;
}
</style>
