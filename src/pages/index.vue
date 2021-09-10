<script setup lang="ts">
  import { useCounterStore } from "../stores";

  const counter = useCounterStore();
</script>

<template>
  <div>
    <p class="text-7xl">{{ counter.count }}</p>
    <button
      @click="counter.count++"
      class="
        mt-20
        mr-5
        py-3
        px-6
        text-white
        rounded-lg
        bg-purple-600
        shadow-lg
        block
        transform
        transition
        animation-duration-200
        md:inline-block
        focus:outline-none
        hover:translate-y-1.2
      "
    >
      Increment
    </button>
    <button
      @click="counter.count--"
      class="
        mt-20
        py-3
        px-6
        text-white
        rounded-lg
        bg-red-500
        shadow-lg
        block
        transform
        transition
        animation-duration-200
        md:inline-block
        focus:outline-none
        hover:translate-y-1.2
      "
    >
      Decrement
    </button>
  </div>
</template>
