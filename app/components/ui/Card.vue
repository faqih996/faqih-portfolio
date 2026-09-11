<script setup lang="ts">
import { cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

const cardVariants = cva(
  "rounded-card border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white border-border shadow-card",
        glass: "bg-white/70 backdrop-blur-xl border-white/30",
        outline: "border-border bg-transparent",
      },

      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "lg",
    },
  }
);

type Variant = "default" | "glass" | "outline";
type Padding = "none" | "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    padding?: Padding;
    class?: string;
  }>(),
  {
    variant: "default",
    padding: "lg",
  }
);
</script>

<template>
  <div
    :class="
      cn(
        cardVariants({
          variant: props.variant,
          padding: props.padding,
        }),
        props.class
      )
    "
  >
    <slot />
  </div>
</template>