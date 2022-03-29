<template>
  <VueSlider
    v-model="currentMusic.currentTime"
    :max="duration"
    :tooltip-formatter="formatedCurrentTime"
    drag-on-click
    @drag-end="onDragEnd"
    @change="onChange"
    @click="onDragEnd"
  />
</template>
  
<script setup lang='ts'>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import moment from 'moment'
import { useStore } from 'vuex';
import { computed, ref, Ref } from 'vue';

const { audioRef } = defineProps<{ audioRef: HTMLAudioElement }>()

const store = useStore()
const currentMusic = store.state.CurrentMusic
const dragValue = ref<number>(0)

const formatedCurrentTime = computed(() => moment(currentMusic.currentTime * 1000).format('mm:ss'))
const duration = computed(() => +currentMusic.duration.toFixed(0))

const onDragEnd = () => {
  audioRef.currentTime = dragValue.value
}

const onChange = (value: number) => {
  dragValue.value = value
}

</script>
  
<style>
</style>