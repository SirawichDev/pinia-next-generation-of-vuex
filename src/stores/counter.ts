import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "coutery",
  state: () => ({
    piniaTitle: "Counter(With Piania)",
    counter: 0 as number,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    decreasement() {
      this.counter--;
    }
  },
});
