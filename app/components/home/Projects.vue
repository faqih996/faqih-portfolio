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
        :words="['Selected Work', '制作したプロジェクト']"
        align="left"
      >
        PROJECTS
      </UiHeading>

      <!-- Overview -->
      <p class="mt-4 text-base leading-7 text-muted">
        A collection of selected projects I've built across web development,
        business systems, and digital products.
      </p>

      <!-- Featured Projects -->
      <div class="mt-16 space-y-8">
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
            <UiHeading
              :words="['Learning Project', '学習プロジェクト']"
              align="left"
            >
            </UiHeading>
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
