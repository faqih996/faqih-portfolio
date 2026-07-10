<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const dividerVariants = cva("w-full shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-px",
      vertical: "w-px self-stretch",
    },

    variant: {
      solid: "",
      dashed: "border-dashed",
    },

    color: {
      border: "bg-border",
      muted: "bg-zinc-200",
      accent: "bg-accent/20",
    },
  },

  compoundVariants: [
    {
      orientation: "horizontal",
      variant: "dashed",
      class: "border-t border-border bg-transparent",
    },

    {
      orientation: "vertical",
      variant: "dashed",
      class: "border-l border-border bg-transparent",
    },
  ],

  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
    color: "border",
  },
});

interface Props extends VariantProps<typeof dividerVariants> {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(dividerVariants(props), props.class)" />
</template>
