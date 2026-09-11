<script setup lang="ts">
import { cn } from "~/utils/cn";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <hr
    :class="
      cn(
        'border-border',
        props.class
      )
    "
  >
</template>