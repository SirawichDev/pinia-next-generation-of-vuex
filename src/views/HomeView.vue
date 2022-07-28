<script setup lang="ts">
import { useNormalCounter } from "@/use/useCounter";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();

/**
 * * normal vue state
 */
const { numCheck, normalCounter, normalDec, normalInc } = useNormalCounter();
</script>

<template>
  <div>
    <img class="pinia" width="150" src="@/assets/pinia.svg" />
    <main>
      <div class="main-container">
        <h1 ref="header">{{ normalCounter.title }}</h1>
        <div class="counter-container">
          <button @click="normalDec">-</button>
          <p>Value: {{ normalCounter.count }}</p>
          <button @click="normalInc">+</button>
        </div>
        <h1 class="text-center">{{ numCheck }}</h1>
      </div>
      <div class="main-container">
        <h1>{{ counter.piniaTitle }}</h1>
        <div class="counter-container">
          <button @click="normalDec">-</button>
          <p>Value: {{ normalCounter.count }}</p>
          <button @click="normalInc">+</button>
        </div>
        <h1 class="text-center">{{ numCheck }}</h1>
      </div>
    </main>
  </div>
</template>

<style scoped>
.pinia {
  position: absolute;
  top: 0;

  transform: rotate(-220deg);
}
main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-container {
  box-shadow: 0.5rem 0.2rem black;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
}
.counter-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
button {
  border: none;
  background-color: transparent;
  width: 40px;
  font-size: 20px;
}
button:hover {
  cursor: pointer;
}
.text-center {
  text-align: center;
}
</style>
