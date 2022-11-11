<script setup lang="ts">
const props = defineProps<{
  pic: string;
  id: number;
  name: string;
  actor: string;
  director: string;
  desc: string;
}>();
</script>
<template>
  <n-list-item>
    <template #prefix>
      <searchMv :url="props.pic" :id="props.id" />
    </template>
    <n-thing>
      <template #header>
        <div class="search-title">{{ props.name }}</div>
      </template>
      <template #description>
        <div class="search-director">
          <n-ellipsis :line-clamp="2" :tooltip="false">
            导演：{{ props.director }}
          </n-ellipsis>
        </div>
        <div class="search-actor">
          <n-ellipsis :line-clamp="3" :tooltip="false">
            主演：{{ props.actor }}
          </n-ellipsis>
        </div>
      </template>
      <div class="search-desc">
        <n-ellipsis :line-clamp="3" :tooltip="false">
          简介：{{ props.desc }}
        </n-ellipsis>
      </div>
    </n-thing>
  </n-list-item>
</template>
<style scoped>
.search-title {
  font-size: 1.125rem;
  font-weight: bold;
}
.search-actor-title,
.search-director-title,
.search-desc-title {
  font-size: 1rem;
}
</style>
