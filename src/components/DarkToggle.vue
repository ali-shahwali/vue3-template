<script setup lang="ts">
  import { isDark, toggleDark } from "../composables/dark";
  import { SunIcon, MoonIcon } from "@heroicons/vue/solid";
</script>

<template>
  <component
    class="w-7"
    :class="isDark ? 'text-yellow-500' : 'text-violet-900'"
    :is="isDark ? SunIcon : MoonIcon"
    @click="toggleDark()"
  />
</template>
