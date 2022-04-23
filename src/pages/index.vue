<script setup lang="ts">
  import { useCounterStore } from "../stores";
  import Button from "../components/Button.vue";

  const counter = useCounterStore();
</script>

<template>
  <div>
    <p class="text-7xl">{{ counter.count }}</p>
    <div class="flex-row space-y-2 md:space-x-5 mt-10">
      <Button @click="counter.count++" class="bg-green-400 hover:bg-green-500"
        >Increment</Button
      >
      <Button @click="counter.count--" class="bg-red-500 hover:bg-red-600"
        >Decrement</Button
      >
    </div>
  </div>
</template>
