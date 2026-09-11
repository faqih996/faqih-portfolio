<script setup lang="ts">
import { cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

const headingVariants = cva("space-y-4", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
    },

    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },

  defaultVariants: {
    align: "left",
    size: "md",
  },
});

type Align = "left" | "center";
type Size = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    eyebrow?: string;
    subtitle?: string;
    align?: Align;
    size?: Size;
    class?: string;
  }>(),
  {
    align: "left",
    size: "md",
  }
);
</script>

<template>
  <div
    :class="
      cn(
        headingVariants({
          align: props.align,
          size: props.size,
        }),
        props.class
      )
    "
  >
    <p
      v-if="props.eyebrow"
      class="text-sm font-medium uppercase tracking-[0.3em] text-accent"
    >
      {{ props.eyebrow }}
    </p>

    <h2
      :class="{
        'text-h4': props.size === 'sm',
        'text-h3': props.size === 'md',
        'text-h2': props.size === 'lg',
      }"
      class="font-display font-bold text-foreground"
    >
      <slot />
    </h2>

    <p
      v-if="props.subtitle"
      class="max-w-2xl text-base text-muted"
      :class="{
        'mx-auto': props.align === 'center',
      }"
    >
      {{ props.subtitle }}
    </p>
  </div>
</template>