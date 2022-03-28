import { Ref } from "vue";
import { Module, ModuleTree, MutationTree } from "vuex";
import { Music } from "../../type";
import { RootState } from "../type";

// initialState
const state: Music = {
  currentTime: 0,
  duration: 0,
  playing: false,
  id: 0,
};

// mutations
const mutations: MutationTree<Music> = {
  pauseMusic(state, payload: { audioRef: Ref<HTMLAudioElement> }) {
    const audioRef = payload.audioRef;
    state.playing = false;
    audioRef.value.pause();
  },
  playMusic(state, payload: { audioRef: Ref<HTMLAudioElement> }) {
    const audioRef = payload.audioRef;
    state.playing = true;
    audioRef.value.play();
  },
  setCurrentTime(state, payload: { audioRef: Ref<HTMLAudioElement> }) {
    const audioRef = payload.audioRef;
    state.currentTime = audioRef.value.currentTime;
  },
};

export default {
  namespaced: true,
  mutations,
  state,
} as Module<Music, RootState>;
