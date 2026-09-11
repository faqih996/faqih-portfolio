<script setup lang="ts">
import type { Project } from "~/types";

const props = defineProps<{
  project: Project;
  index: number;
}>();

const { target, visible } = useReveal();

const reverse = computed(() => props.index % 2 !== 0);
</script>

<template>
  <article
    ref="target"
    :class="[
      'group relative overflow-hidden rounded-[36px] border border-border bg-background',
      'transition-all duration-700',
      'hover:-translate-y-2 hover:shadow-2xl',
      visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
    ]"
  >
    <!-- Glow -->
    <div
      class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/5 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100"
    />

    <div
      :class="[
        'grid lg:grid-cols-2',
        reverse ? 'lg:[&>*:first-child]:order-2' : '',
      ]"
    >
      <!-- IMAGE -->
      <div class="overflow-hidden">
        <img
          :src="project.thumbnail"
          :alt="project.title"
          class="aspect-video h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <!-- CONTENT -->
      <div class="flex flex-col justify-center p-8 lg:p-12">
        <!-- Year -->
        <span
          class="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent"
        >
          {{ project.year }}
        </span>

        <!-- Title -->
        <h3
          class="text-3xl font-bold transition-colors duration-300 group-hover:text-accent md:text-4xl"
        >
          {{ project.title }}
        </h3>

        <!-- Role -->
        <p v-if="project.role" class="mt-2 text-lg font-medium text-muted">
          {{ project.role }}
        </p>

        <!-- Description -->
        <p class="mt-6 leading-8 text-muted">
          {{ project.description }}
        </p>

        <!-- Technologies -->
        <div class="mt-8 flex flex-wrap gap-3">
          <UiTag
            v-for="tech in project.technologies"
            :key="tech"
            class="transition duration-300 group-hover:border-accent"
          >
            {{ tech }}
          </UiTag>
        </div>

        <!-- Actions -->
        <div
          v-if="project.website || project.github"
          class="mt-10 flex flex-wrap gap-4"
        >
          <UiButton
            v-if="project.website"
            as="a"
            :href="project.website"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </UiButton>

          <UiButton
            v-if="project.github"
            variant="outline"
            as="a"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </UiButton>
        </div>
      </div>
    </div>
  </article>
</template>
