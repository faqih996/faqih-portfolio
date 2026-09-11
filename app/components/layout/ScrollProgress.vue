<script setup lang="ts">
const { progress } = useScrollProgress();
</script>

<template>
  <div class="h-[2px] w-full bg-transparent">
    <div
      class="h-full rounded-full bg-accent transition-[width] duration-150"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>