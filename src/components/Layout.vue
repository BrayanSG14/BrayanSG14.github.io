<template>
  <div class="layout">
    <Navbar />
    <CustomCursor />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import CustomCursor from './CustomCursor.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

main { flex: 1; }
</style>