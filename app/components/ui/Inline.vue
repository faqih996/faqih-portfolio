<script setup lang="ts">
import { cva } from "class-variance-authority";
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

type Align = "start" | "center" | "end" | "stretch";
type Justify =
  | "start"
  | "center"
  | "between"
  | "end"
  | "around"
  | "evenly";
type Gap = "xs" | "sm" | "md" | "lg" | "xl";

const props = withDefaults(
  defineProps<{
    align?: Align;
    justify?: Justify;
    gap?: Gap;
    wrap?: boolean;
    class?: string;
  }>(),
  {
    align: "center",
    justify: "start",
    gap: "md",
    wrap: false,
  }
);
</script>

<template>
  <div
    :class="
      cn(
        inlineVariants({
          align: props.align,
          justify: props.justify,
          gap: props.gap,
          wrap: props.wrap,
        }),
        props.class
      )
    "
  >
    <slot />
  </div>
</template>