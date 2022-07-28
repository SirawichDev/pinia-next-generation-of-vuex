<script setup>
import { ref } from "vue";
const open = ref(false);
</script>

<template>
  <div class="modals">
    <button @click="open = true">Open Modal</button>
    <teleport to=".modal-container">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.modals {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
.modal {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: antiquewhite;
}
</style>
