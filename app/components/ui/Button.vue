<!-- <script setup lang="ts">
import { cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium rounded-full transition-all duration-300",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:-translate-y-0.5 hover:shadow-card-hover",

        secondary: "bg-surface text-foreground hover:bg-zinc-100",

        outline: "border border-border bg-background hover:bg-surface",

        ghost: "hover:bg-surface",

        danger: "bg-red-500 text-white hover:bg-red-600",
      },

      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-14 px-7 text-base",
        icon: "size-11",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    class?: string;
  }>(),
  {
    variant: "primary",
    size: "md",
  },
);
</script>

<template>
  <button
    :class="
      cn(
        buttonVariants({
          variant: props.variant,
          size: props.size,
        }),
        props.class,
      )
    "
  >
    <slot />
  </button>
</template> -->

<script setup lang="ts">
import { cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium rounded-full transition-all duration-300",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:-translate-y-0.5 hover:shadow-card-hover",
        secondary: "bg-surface text-foreground hover:bg-zinc-100",
        outline: "border border-border bg-background hover:bg-surface",
        ghost: "hover:bg-surface",
        danger: "bg-red-500 text-white hover:bg-red-600",
      },

      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-14 px-7 text-base",
        icon: "size-11",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    class?: string;

    as?: "button" | "a";
    href?: string;
    target?: string;
    download?: boolean | string;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "primary",
    size: "md",
    as: "button",
    type: "button",
  },
);
</script>

<template>
  <a
    v-if="props.as === 'a'"
    :href="props.href"
    :target="props.target"
    :download="props.download"
    :class="
      cn(
        buttonVariants({
          variant: props.variant,
          size: props.size,
        }),
        props.class,
      )
    "
  >
    <slot />
  </a>

  <button
    v-else
    :type="props.type"
    :class="
      cn(
        buttonVariants({
          variant: props.variant,
          size: props.size,
        }),
        props.class,
      )
    "
  >
    <slot />
  </button>
</template>
