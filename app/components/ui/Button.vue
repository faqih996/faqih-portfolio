<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./../../utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium",
    "rounded-full",
    "transition-all duration-300 ease-out",
    "select-none",
    "cursor-pointer",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20",
  ],
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        outline: "",
        ghost: "",
        danger: "",
      },

      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-14 px-7 text-base",
        icon: "size-11",
      },
    },

    compoundVariants: [
      {
        variant: "primary",
        class:
          "bg-foreground text-background hover:-translate-y-0.5 hover:shadow-card-hover",
      },

      {
        variant: "secondary",
        class: "bg-surface text-foreground hover:bg-zinc-100",
      },

      {
        variant: "outline",
        class: "border border-border bg-background hover:bg-surface",
      },

      {
        variant: "ghost",
        class: "hover:bg-surface",
      },

      {
        variant: "danger",
        class: "bg-red-500 text-white hover:bg-red-600",
      },
    ],

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface Props extends VariantProps<typeof buttonVariants> {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button :class="cn(buttonVariants(props), props.class)">
    <slot />
  </button>
</template>
