<script setup lang="ts">
import { cva } from "class-variance-authority";
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
  },

  defaultVariants: {
    spacing: "lg",
  },
});

type Spacing = "none" | "sm" | "md" | "lg" | "xl";

const props = withDefaults(
  defineProps<{
    id?: string;
    spacing?: Spacing;
    class?: string;
  }>(),
  {
    spacing: "lg",
  }
);
</script>

<template>
  <section
    :id="props.id"
    :class="
      cn(
        sectionVariants({
          spacing: props.spacing,
        }),
        props.class
      )
    "
  >
    <slot />
  </section>
</template>