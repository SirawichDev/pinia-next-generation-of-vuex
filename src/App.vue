<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/modals">Modal</RouterLink>
</nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
