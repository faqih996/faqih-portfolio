<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const inlineVariants = cva("flex", {
  variants: {
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },

    justify: {
      start: "justify-start",
      center: "justify-center",
      between: "justify-between",
      end: "justify-end",
      around: "justify-around",
      evenly: "justify-evenly",
    },

    gap: {
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },

    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },

  defaultVariants: {
    align: "center",
    justify: "start",
    gap: "md",
    wrap: false,
  },
});

interface Props extends VariantProps<typeof inlineVariants> {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(inlineVariants(props), props.class)">
    <slot />
  </div>
</template>
