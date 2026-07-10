<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const cardVariants = cva(
  ["rounded-card", "border", "transition-all duration-300"],
  {
    variants: {
      variant: {
        default: "",
        elevated: "",
        outline: "",
        glass: "",
      },

      padding: {
        none: "",
        sm: "p-5",
        md: "p-8",
        lg: "p-10",
      },

      hover: {
        true: "",
        false: "",
      },
    },

    compoundVariants: [
      {
        variant: "default",
        class: "bg-background border-border shadow-card",
      },

      {
        variant: "elevated",
        class: "bg-background shadow-card-hover border-transparent",
      },

      {
        variant: "outline",
        class: "bg-background border-border",
      },

      {
        variant: "glass",
        class: "bg-white/70 backdrop-blur-xl border-white/40",
      },

      {
        hover: true,
        class: "hover:-translate-y-2 hover:shadow-card-hover",
      },
    ],

    defaultVariants: {
      variant: "default",
      padding: "md",
      hover: true,
    },
  },
);

interface Props extends VariantProps<typeof cardVariants> {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(cardVariants(props), props.class)">
    <slot />
  </div>
</template>
