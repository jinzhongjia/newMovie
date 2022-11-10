<template>
  <headed />
  <Divider height="10px" />
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>

    <n-grid-item span="0 m:6 l:6"><bar name="电影" /><Child /> </n-grid-item>
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>
  </n-grid>
</template>
