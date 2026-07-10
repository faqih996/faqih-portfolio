<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const tagVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "border",
    "font-medium",
    "transition-all duration-300",
    "select-none",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        soft: "",
        outline: "",
        solid: "",
      },

      color: {
        gray: "",
        blue: "",
        green: "",
        amber: "",
        red: "",
      },

      size: {
        sm: "h-6 px-2.5 text-xs",
        md: "h-7 px-3 text-xs",
      },
    },

    compoundVariants: [
      {
        variant: "soft",
        color: "gray",
        class: "bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200",
      },

      {
        variant: "soft",
        color: "blue",
        class: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
      },

      {
        variant: "soft",
        color: "green",
        class: "bg-green-50 border-green-200 text-green-700 hover:bg-green-100",
      },

      {
        variant: "soft",
        color: "amber",
        class: "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100",
      },

      {
        variant: "soft",
        color: "red",
        class: "bg-red-50 border-red-200 text-red-700 hover:bg-red-100",
      },

      {
        variant: "outline",
        color: "gray",
        class: "bg-transparent border-border text-foreground hover:bg-surface",
      },

      {
        variant: "solid",
        color: "gray",
        class: "bg-foreground border-foreground text-background",
      },
    ],

    defaultVariants: {
      variant: "soft",
      color: "gray",
      size: "md",
    },
  },
);

interface Props extends VariantProps<typeof tagVariants> {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <span :class="cn(tagVariants(props), props.class)">
    <slot />
  </span>
</template>
