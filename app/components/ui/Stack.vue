<script setup lang="ts">
import { cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },

    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
  },

  defaultVariants: {
    gap: "md",
    align: "start",
  },
});

type Gap = "xs" | "sm" | "md" | "lg" | "xl";
type Align = "start" | "center" | "end" | "stretch";

const props = withDefaults(
  defineProps<{
    gap?: Gap;
    align?: Align;
    class?: string;
  }>(),
  {
    gap: "md",
    align: "start",
  }
);
</script>

<template>
  <div
    :class="
      cn(
        stackVariants({
          gap: props.gap,
          align: props.align,
        }),
        props.class
      )
    "
  >
    <slot />
  </div>
</template>