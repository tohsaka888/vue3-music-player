<template>
  <div class="container flex">
    <div class="controller-icon grid">
      <div class="button">
        <unicon name="pause" />
      </div>
      <div class="button" style="width: 36px; height: 36px;">
        
      </div>
      <div class="button">
        
      </div>
    </div>
    <VueSlider
      v-model="currentMusic.currentTime"
      :max="duration"
      :tooltip-formatter="formatedCurrentTime"
      drag-on-click
      @drag-end="onDragEnd"
      @change="onChange"
      @click="onDragEnd"
      style="cursor:pointer;flex: 1;"
      :dotOptions="{
        style: { cursor: 'grab' }
      }"
    />
  </div>
</template>
  
<script setup lang='ts'>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import moment from 'moment'
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

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
  
<style scoped>
.flex {
  display: flex;
  height: 100%;
  align-items: center;
}

.grid {
  display: grid;
  height: 100%;
  align-items: center;
}

.container {
  width: 100%;
}

.controller-icon {
  align-items: center;
  width: 120px;
  grid-auto-flow: column;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 2px 2px 10px #e3e3e3, 0px 0px 10px #ffffff;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.button:active {
  border-radius: 50%;
  background: #ffffff;
  box-shadow: inset 5px 5px 9px #ebebeb, inset -5px -5px 9px #ffffff;
  opacity: 0.8;
  border: none;
  user-select: none;
}
</style>