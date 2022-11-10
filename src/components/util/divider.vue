<script setup lang="ts">
const props = defineProps<{
  height: string;
}>();
</script>
<template>
  <div class="divider"></div>
</template>
<style>
.divider {
  height: v-bind("props.height");
  border-bottom: 1px solid rgba(239, 239, 245, 1);
}
</style>
