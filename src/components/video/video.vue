<script setup lang="ts">
import { computed, onMounted, ref, Ref, watchPostEffect } from "vue";
import DPlayer from "dplayer";
import Hls from "hls.js";
import { Play_url } from "../../composables/base";
import { get_json } from "../../composables/http";
import { Play, PlayNum } from "../../composables/type";
import { useRoute, useRouter } from "vue-router";
import { Handle_play_url } from "../../composables/play";

const route = useRoute();
const router = useRouter();

const ok: Ref<boolean> = ref(false);
const player = ref<HTMLInputElement | null>(null);
const play_info = ref<Play>();
let dp: DPlayer;
const play_nums: Ref<PlayNum[]> = ref([]);
const id = ref(route.params.id);
const num = computed(() => {
  return isNaN(Number(route.params.num)) ? 0 : Number(route.params.num) - 1;
});

watchPostEffect(() => {
  get_json(Play_url + "/" + id.value, {}, (res: Play) => {
    play_info.value = res;
    play_nums.value = Handle_play_url(res.url);
    ok.value = true;
  });
});
function go(goal: number) {
  router.push({
    name: "video-num",
    params: {
      id: id.value,
      num: goal,
    },
  });
}
watchPostEffect(() => {
  go(num.value + 1);
});

onMounted(() => {
  watchPostEffect(() => {
    if (play_nums.value.length != 0) {
      if (play_nums.value.length <= num.value) {
        go(1);

        return;
      }

      dp = new DPlayer({
        container: player.value,
        video: {
          url: play_nums.value[num.value].url,
          type: "customHls",
          customType: {
            customHls: function (video: HTMLVideoElement, player: DPlayer) {
              const hls = new Hls();
              hls.loadSource(video.src);
              hls.attachMedia(video);
            },
          },
        },
      });
    }
  });
});
</script>
<template>
  <n-grid cols="10" item-responsive responsive="screen">
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>

    <n-grid-item span="10 m:6 l:6">
      <n-spin :show="!ok">
        <div class="player-box" :class="ok ? '' : 'player-box-not-ready'">
          <div class="play" ref="player" :show="!ok"></div>
          <div class="play-info" :show="!ok"></div>
        </div>
        <div>
          <n-card>
            <template #header>{{ play_info?.name }} </template>
            <div class="director" v-if="play_info?.director != ''">
              导演：{{ play_info?.director }}
            </div>
            <div class="actor" v-if="play_info?.actor != ''">
              主演：{{ play_info?.actor }}
            </div>
            <template v-if="play_info?.description != ''" #footer>
              简介：{{ play_info?.description }}
            </template>
            <template #action>
              <n-grid cols="12" item-responsive responsive="screen">
                <template v-for="play_num in play_nums">
                  <n-grid-item span="3 m:1 l:1">
                    <div class="episode">
                      <n-button @click="go(play_num.id)">
                        {{ play_num.name }}
                      </n-button>
                    </div>
                  </n-grid-item>
                </template>
              </n-grid>
            </template>
          </n-card>
        </div>
      </n-spin>
    </n-grid-item>
    <n-grid-item span="0 m:2 l:2"> </n-grid-item>
  </n-grid>
</template>
<style scoped>
.player-box-not-ready {
  padding-bottom: 50%;
  border: solid 1px #8080805e;
}
.player-box {
  margin-top: 10px;
}
.episode {
  margin: 4px 6px;
}
</style>
