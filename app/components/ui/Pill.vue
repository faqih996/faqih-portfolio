<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const pillVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "font-medium",
    "transition-all duration-300",
    "border",
    "select-none",
  ],
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "bg-transparent",
        glass: "backdrop-blur-md",
      },

      color: {
        gray: "",
        blue: "",
        green: "",
        amber: "",
        red: "",
      },

      size: {
        sm: "h-8 px-3 text-xs gap-1.5",
        md: "h-10 px-4 text-sm gap-2",
        lg: "h-12 px-5 text-base gap-2",
      },
    },

    compoundVariants: [
      {
        variant: "soft",
        color: "gray",
        class: "bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200",
      },

      {
        variant: "soft",
        color: "blue",
        class: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
      },

      {
        variant: "soft",
        color: "green",
        class: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
      },

      {
        variant: "soft",
        color: "amber",
        class: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
      },

      {
        variant: "soft",
        color: "red",
        class: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100",
      },

      {
        variant: "outline",
        color: "gray",
        class: "border-zinc-300 text-zinc-700 hover:bg-zinc-50",
      },

      {
        variant: "solid",
        color: "gray",
        class: "bg-zinc-900 text-white border-zinc-900",
      },

      {
        variant: "glass",
        color: "gray",
        class: "bg-white/60 border-white/40 shadow-lg",
      },
    ],

    defaultVariants: {
      variant: "soft",
      color: "gray",
      size: "md",
    },
  },
);

interface Props extends VariantProps<typeof pillVariants> {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(pillVariants(props), props.class)">
    <slot />
  </div>
</template>
