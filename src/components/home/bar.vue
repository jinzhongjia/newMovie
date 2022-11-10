<script setup lang="ts">
import { NIcon } from "naive-ui";
import { h } from "vue";
import { get_color, get_icon } from "../../composables/bar";
import { MoreSharp } from "@vicons/material";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps<{
  name: string;
  id: number;
}>();

const color = get_color();

const Icon = () =>
  h(
    NIcon,
    {
      size: 35,
      color: color,
    },
    () => h(get_icon())
  );
const More = () =>
  h(
    NIcon,
    {
      size: 30,
      color: color,
    },
    () => h(MoreSharp)
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
        <router-link :to="'/category/' + props.id">
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
