<script setup lang="ts">
import type { Project } from "~/types";

interface Props {
  project: Project;
}

defineProps<Props>();
</script>

<template>
  <article
    class="group overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
  >
    <!-- Thumbnail -->
    <div class="relative aspect-[16/10] overflow-hidden bg-muted/30">
      <img
        :src="project.thumbnail"
        :alt="project.title"
        class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <!-- Year -->
      <div
        class="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-md"
      >
        {{ project.year }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3
        class="text-xl font-semibold text-foreground transition group-hover:text-accent"
      >
        {{ project.title }}
      </h3>

      <p class="mt-3 line-clamp-3 text-sm leading-6 text-muted">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="mt-6 flex flex-wrap gap-2">
        <UiTag
          v-for="technology in project.technologies"
          :key="technology"
          size="sm"
        >
          {{ technology }}
        </UiTag>
      </div>

      <!-- Footer -->
      <div
        v-if="project.website || project.github"
        class="mt-6 flex items-center gap-4"
      >
        <a
          v-if="project.website"
          :href="project.website"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-foreground transition hover:text-accent"
        >
          Live Demo
        </a>

        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-muted transition hover:text-foreground"
        >
          Source Code
        </a>
      </div>
    </div>
  </article>
</template>
