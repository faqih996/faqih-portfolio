<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-4xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-none",
    },

    padding: {
      none: "",
      sm: "px-4",
      md: "px-6",
      lg: "px-8 lg:px-12",
    },
  },

  defaultVariants: {
    size: "xl",
    padding: "lg",
  },
});

interface Props extends VariantProps<typeof containerVariants> {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(containerVariants(props), props.class)">
    <slot />
  </div>
</template>
