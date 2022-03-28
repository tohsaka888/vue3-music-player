<template>
  <audio
    controls
    autoplay
    :src="props.src"
    @play="onPlay"
    ref="audioRef"
    @canplay="onCanPlay"
    @pause="onPause"
  />
  <MusicController />
  <div>{{ currentMusic.duration }}</div>
</template>
  
<script setup lang='ts'>
import { ref } from "vue";
import { useStore } from "vuex";
import MusicController from "./MusicController.vue";

export type Player = {
  src?: string;
  picUrl?: string;
  musicName?: string;
  artists?: string[];
  nextPlayEvent?: Function;
  prevPlayEvent?: Function;
  pauseEvent?: Function;
  playEvent?: Function;
  autoPlay?: boolean;
  musicId: number;
  defaultFavourState?: boolean;
  likeEvent?: Function;
  unLikeEvent?: Function;
  addPlaylistEvent?: Function;
};

const intervalRef = ref<number>(0)
const audioRef = ref<HTMLAudioElement>()

const props = defineProps<Player>()
const store = useStore()
const currentMusic = store.state.CurrentMusic

const onPlay = () => {
  intervalRef.value = window.setInterval(() => {
    if (audioRef.value) {
      currentMusic.currentTime = audioRef.value.currentTime
    }
  }, 100)
}

const onPause = () => {
  window.clearInterval(intervalRef.value)
  store.commit({ type: 'CurrentMusic/pauseMusic', audioRef })
}

const onCanPlay = () => {
  currentMusic.duration = audioRef.value?.duration
}

</script>
  
<style>
</style>