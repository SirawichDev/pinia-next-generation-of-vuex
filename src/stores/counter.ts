import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "coutery",
  state: () => ({
    piniaTitle: "Counter(With Piania)",
    counter: 0 as number,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    numCheck(state) {
      if (state.counter % 2 === 0) return "even";
      return "odd";
    }
  },
  actions: {
    increment() {
      this.counter++;
    },
    decreasement() {
      this.counter === 0 ? 0 : this.counter--;
    },
  },
});
