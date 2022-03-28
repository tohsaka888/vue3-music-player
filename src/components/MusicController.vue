<template>
  <VueSlider v-model="currentMusic.currentTime" :max="+currentMusic.duration.toFixed(0)" />
</template>
  
<script setup lang='ts'>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import { useStore } from 'vuex';

const store = useStore()
const currentMusic = store.state.CurrentMusic

</script>
  
<style>
</style>