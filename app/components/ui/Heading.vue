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
    words?: string[];
    subtitle?: string;
    align?: Align;
    size?: Size;
    class?: string;
    as?: "h1" | "h2" | "h3" | "h4";
  }>(),
  {
    align: "left",
    size: "md",
    as: "h2",
  },
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
        props.class,
      )
    "
  >
    <!-- Animated Word -->
    <div
      v-if="props.words?.length"
      class="text-sm font-medium uppercase tracking-[0.3em] text-accent"
    >
      <UiAnimatedWord :words="props.words" />
    </div>

    <!-- Existing Eyebrow -->
    <p
      v-else-if="props.eyebrow"
      class="text-sm font-medium uppercase tracking-[0.3em] text-accent"
    >
      {{ props.eyebrow }}
    </p>

    <!-- Title -->
    <component
      :is="props.as"
      :class="[
        {
          'text-h4': props.size === 'sm',
          'text-h3': props.size === 'md',
          'text-h2': props.size === 'lg',
        },
        'font-display font-bold text-foreground',
      ]"
    >
      <slot />
    </component>

    <!-- Subtitle -->
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
