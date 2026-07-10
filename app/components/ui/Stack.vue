<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
      "2xl": "gap-16",
    },

    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
  },

  defaultVariants: {
    gap: "lg",
    align: "stretch",
  },
});

interface Props extends VariantProps<typeof stackVariants> {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(stackVariants(props), props.class)">
    <slot />
  </div>
</template>
