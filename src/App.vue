<script setup lang="ts">
  import DarkToggle from "./components/DarkToggle.vue";
</script>

<template>
  <div
    class="h-screen w-screen dark:bg-neutral-800 bg-white dark:text-gray-50 text-neutral-900"
  >
    <DarkToggle class="absolute right-5 top-5" />
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <router-view />
    </main>
  </div>
</template>
