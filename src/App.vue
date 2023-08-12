<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useOsTheme, darkTheme } from "naive-ui";
const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>

<template>
  <n-config-provider :theme="theme">
    <n-scrollbar style="max-height: 100vh">
      <headed />
      <Divider height="10px" />

      <div style="margin-bottom: 20px">
        <router-view />
      </div>
      <div class="disclaimer">
        <div>
          本站所有视频和图片均来自互联网收集而来，版权归原创者所有，本网站只提供web页面服务，并不提供资源存储，也不参与录制、上传。
        </div>
        <div>
          若本站收录的节目无意侵犯了贵司版权，请发邮件至mail#nvimer.org（#换成@）
        </div>
      </div>
    </n-scrollbar>
    <n-global-style />
  </n-config-provider>
</template>

<style>
.header {
  background-color: gray;
  height: 60px;
}
.disclaimer {
  width: 100%;
  color: gray;
  /* position: fixed; */
  /* bottom: 5px; */
  text-align: center;
}
</style>
