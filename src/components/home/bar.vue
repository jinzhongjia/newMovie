<script setup lang="ts">
import { NIcon } from "naive-ui";
import { h } from "vue";
import { get_color, get_icon } from "../../composables/bar";

const props = defineProps<{
  name: string;
}>();

const Icon = () =>
  h(
    NIcon,
    {
      size: 35,
      color: get_color(),
    },
    h(get_icon())
  );
</script>
<template>
  <div class="bar-box">
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
    <Divider height="0px" />
  </div>
</template>

<style scoped>
.bar-box {
  padding: 10px 10px;
}
</style>
