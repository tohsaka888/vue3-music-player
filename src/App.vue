<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { reactive } from 'vue';
import MusicPlayer from './components/MusicPlayer.vue';

type MusicInfo = {
  musicId: number;
  src: string;
}

const getMusicUrl = async () => {
  const res = await fetch(`https://netease-cloud-music-api-tohsaka888.vercel.app/song/url?id=1824020871&realIP=116.25.146.177`);
  const data = await res.json()
  music.musicId = data.data[0].id
  music.src = data.data[0].url
  console.log(music.src)
}

getMusicUrl()

const music: MusicInfo = reactive({ musicId: 0, src: '' })

</script>

<template>
  <MusicPlayer :music-id="0" :src="music.src" />
</template>

<style>
html body {
  margin: 0px;
  padding: 0px;
}
</style>
