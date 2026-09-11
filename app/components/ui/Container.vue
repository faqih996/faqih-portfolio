<script setup lang="ts">
import { cn } from "~/utils/cn";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    class="container"
    :class="cn(props.class)"
  >
    <slot />
  </div>
</template>