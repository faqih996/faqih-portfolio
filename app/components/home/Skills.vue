<script setup lang="ts">
import { computed, ref } from "vue";
import { skillCategories } from "~/data/skills";

type Filter = "All" | "Frontend" | "Backend" | "Tools & Workflow";

const activeFilter = ref<Filter>("All");

const filters: Filter[] = ["All", "Frontend", "Backend", "Tools & Workflow"];

const filteredCategories = computed(() => {
  if (activeFilter.value === "All") {
    return skillCategories;
  }

  return skillCategories.filter(
    (category) => category.title === activeFilter.value,
  );
});

const skillIcons: Record<string, string> = {
  // Frontend
  Alphine: "simple-icons:alpinedotjs",
  Livewire: "simple-icons:livewire",
  Vue: "simple-icons:vuedotjs",
  Nuxt: "simple-icons:nuxtdotjs",
  React: "simple-icons:react",
  Next: "simple-icons:nextdotjs",
  "Tailwind CSS": "simple-icons:tailwindcss",
  JavaScript: "simple-icons:javascript",
  TypeScript: "simple-icons:typescript",

  // Backend
  Laravel: "simple-icons:laravel",
  PHP: "simple-icons:php",
  Express: "simple-icons:express",
  Node: "simple-icons:nodedotjs",
  MySQL: "simple-icons:mysql",
  MongoDB: "simple-icons:mongodb",
  "REST API": "mdi:api",

  // Tools
  GitHub: "simple-icons:github",
  Docker: "simple-icons:docker",
  Postman: "simple-icons:postman",
  Notion: "simple-icons:notion",
  Slack: "simple-icons:slack",
  Claude: "simple-icons:claude",
  n8n: "simple-icons:n8n",
};

function getSkillIcon(skill: string) {
  return skillIcons[skill] ?? "mdi:code-tags";
}
</script>

<template>
  <UiSection id="skills" spacing="lg">
    <UiContainer>
      <!-- Heading -->

      <UiHeading
        eyebrow="Expertise"
        title="Skills"
        subtitle="Technologies and tools I use to build digital products."
      />

      <!-- Skill Count -->

      <p class="mt-6 text-center text-sm text-muted">
        {{
          skillCategories.reduce(
            (total, category) => total + category.skills.length,
            0,
          )
        }}
        skills across
        {{ skillCategories.length }}
        categories
      </p>

      <!-- Filter -->

      <div
        class="mx-auto mt-8 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-border bg-surface p-2"
      >
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          class="rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300"
          :class="
            activeFilter === filter
              ? 'bg-foreground text-white shadow-sm'
              : 'text-muted hover:bg-background hover:text-foreground'
          "
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Categories -->

      <div class="mt-8 space-y-4">
        <TransitionGroup name="skills" tag="div" class="space-y-6">
          <article
            v-for="category in filteredCategories"
            :key="category.title"
            class="group relative overflow-hidden rounded-[28px] border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-10"
          >
            <!-- Background glow -->

            <div
              class="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />

            <div class="relative">
              <!-- Category title -->

              <div class="text-center">
                <p
                  class="text-sm font-medium uppercase tracking-[0.25em] text-muted"
                >
                  {{ category.title }}
                </p>
              </div>

              <!-- Skills -->

              <div class="mt-7 flex flex-wrap justify-center gap-3">
                <div
                  v-for="skill in category.skills"
                  :key="skill"
                  class="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-background hover:shadow-md"
                >
                  <Icon :name="getSkillIcon(skill)" class="size-5" />

                  <span>
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Description -->

              <p
                class="mx-auto mt-7 max-w-3xl text-center leading-7 text-muted"
              >
                {{ category.description }}
              </p>
            </div>
          </article>
        </TransitionGroup>
      </div>
    </UiContainer>
  </UiSection>
</template>

<style scoped>
.skills-enter-active,
.skills-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.skills-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.skills-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.skills-move {
  transition: transform 0.4s ease;
}
</style>
