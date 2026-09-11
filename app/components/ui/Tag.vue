<script setup lang="ts">
import { cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

const tagVariants = cva(
  "inline-flex items-center rounded-full border font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-surface border-border",
        outline: "bg-transparent border-border",
        accent: "bg-accent text-white border-accent",
      },

      size: {
        sm: "px-2.5 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type Variant = "default" | "outline" | "accent";
type Size = "sm" | "md";

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    class?: string;
  }>(),
  {
    variant: "default",
    size: "md",
  }
);
</script>

<template>
  <span
    :class="
      cn(
        tagVariants({
          variant: props.variant,
          size: props.size,
        }),
        props.class
      )
    "
  >
    <slot />
  </span>
</template>