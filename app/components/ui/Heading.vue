<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

const headingVariants = cva("", {
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
    align: "center",
    size: "md",
  },
});

interface Props extends VariantProps<typeof headingVariants> {
  eyebrow?: string;

  title: string;

  subtitle?: string;

  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn('space-y-4', headingVariants(props), props.class)">
    <p
      v-if="eyebrow"
      class="uppercase tracking-[0.3em] text-sm text-accent font-medium"
    >
      {{ eyebrow }}
    </p>

    <h2 class="text-h2 font-bold text-foreground">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="max-w-2xl mx-auto text-muted text-base">
      {{ subtitle }}
    </p>
  </div>
</template>
