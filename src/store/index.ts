import { createStore } from "vuex";
import { RootState } from "./type";
import CurrentMusic from "./modules/CurrentMusic";

const store = createStore<RootState>({
  modules: {
    CurrentMusic,
  },
});

export default store;
