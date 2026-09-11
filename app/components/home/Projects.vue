<script setup lang="ts">
import { computed } from "vue";
import { projects } from "~/data/projects";

const featuredProjects = computed(() =>
  projects.filter((project) => project.featured),
);

const learningProjects = computed(() =>
  projects.filter((project) => !project.featured),
);
</script>

<template>
  <UiSection id="projects" spacing="lg">
    <UiContainer>
      <UiHeading
        eyebrow="Featured Projects"
        title="Projects"
        subtitle="List of featured portfolio."
      />

      <!-- Featured Projects -->
      <div class="mt-20 space-y-10">
        <HomeProjectCard
          v-for="project in featuredProjects"
          :key="project.slug"
          :project="project"
        />
      </div>

      <!-- Learning Projects -->
      <div v-if="learningProjects.length" class="mt-28">
        <div class="mb-10">
          <p
            class="text-sm font-medium uppercase tracking-[0.25em] text-accent"
          >
            Learning Journey
          </p>

          <h3 class="mt-3 text-2xl font-bold text-foreground">
            Projects Built While Learning
          </h3>

          <p class="mt-3 max-w-2xl text-muted">
            A collection of projects created while exploring new technologies
            and improving my development skills.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <HomeLearningProjectCard
            v-for="project in learningProjects"
            :key="project.slug"
            :project="project"
          />
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>
