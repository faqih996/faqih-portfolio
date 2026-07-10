<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const sectionVariants = cva("", {
  variants: {
    spacing: {
      none: "",
      sm: "py-16",
      md: "py-24",
      lg: "py-32",
      xl: "py-40",
    },

    background: {
      transparent: "",
      surface: "bg-surface",
      muted: "bg-zinc-50",
    },
  },

  defaultVariants: {
    spacing: "lg",
    background: "transparent",
  },
});

interface Props extends VariantProps<typeof sectionVariants> {
  id?: string;
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <section :id="id" :class="cn(sectionVariants(props), props.class)">
    <slot />
  </section>
</template>
