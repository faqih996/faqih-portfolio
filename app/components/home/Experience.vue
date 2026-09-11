<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { experiences } from "~/data/experiences";

const experienceRefs = ref<(HTMLElement | null)[]>([]);
const visibleItems = ref(experiences.map(() => false));

let observer: IntersectionObserver | null = null;

const timelineProgress = ref(0);
const activeIndex = ref(0);

function setExperienceRef(element: Element | null, index: number) {
  if (element instanceof HTMLElement) {
    experienceRefs.value[index] = element;
  }
}

function updateTimelineProgress() {
  const elements = experienceRefs.value.filter(
    (element): element is HTMLElement => element !== null,
  );

  if (elements.length === 0) {
    return;
  }

  const scrollPosition = window.scrollY + window.innerHeight * 0.5;

  const first = elements[0];
  const last = elements[elements.length - 1];

  const timelineTop = first.getBoundingClientRect().top + window.scrollY;

  const timelineBottom = last.getBoundingClientRect().top + window.scrollY;

  const progress =
    ((scrollPosition - timelineTop) / (timelineBottom - timelineTop)) * 70;

  timelineProgress.value = Math.min(100, Math.max(0, progress));

  // Cari experience yang paling dekat dengan tengah viewport
  let closestIndex = 0;
  let closestDistance = Infinity;

  elements.forEach((element, index) => {
    const elementCenter =
      element.getBoundingClientRect().top + element.offsetHeight / 2;

    const distance = Math.abs(elementCenter - window.innerHeight * 0.5);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  activeIndex.value = closestIndex;
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const index = experienceRefs.value.findIndex(
          (element) => element === entry.target,
        );

        if (index !== -1) {
          visibleItems.value[index] = true;

          observer?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  experienceRefs.value.forEach((element) => {
    if (element) {
      observer?.observe(element);
    }
  });

  updateTimelineProgress();

  window.addEventListener("scroll", updateTimelineProgress, { passive: true });

  window.addEventListener("resize", updateTimelineProgress, { passive: true });
});

onUnmounted(() => {
  observer?.disconnect();

  window.removeEventListener("scroll", updateTimelineProgress);

  window.removeEventListener("resize", updateTimelineProgress);
});
</script>

<template>
  <UiSection id="experience" spacing="lg">
    <UiContainer>
      <!-- Heading -->

      <UiHeading
        eyebrow="Career Journey"
        title="Experience"
        subtitle="My professional journey in web development and technology."
      />

      <!-- Timeline -->

      <div class="relative mx-auto mt-20 max-w-4xl">
        <!-- Timeline Line -->

        <div
          class="absolute left-6 top-0 hidden h-full w-px bg-border md:block"
        >
          <div
            class="w-full bg-accent transition-[height] duration-150"
            :style="{
              height: `${timelineProgress}%`,
            }"
          />
        </div>

        <div class="space-y-12">
          <!-- Experience -->

          <article
            v-for="(experience, index) in experiences"
            :key="experience.id"
            :ref="(element) => setExperienceRef(element, index)"
            class="relative grid gap-6 transition-all duration-700 md:grid-cols-[150px_1fr]"
            :class="
              visibleItems[index]
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            "
            :style="{
              transitionDelay: `${index * 150}ms`,
            }"
          >
            <!-- Date -->

            <div class="pt-1 text-sm font-medium text-muted md:text-right">
              <p>
                {{ experience.startDate }}
              </p>

              <p>
                {{ experience.endDate }}
              </p>
            </div>

            <!-- Content -->

            <div class="relative">
              <!-- Timeline Dot -->
              <div class="absolute -left-[157px] top-3 hidden md:flex">
                <div
                  class="flex size-4 items-center justify-center rounded-full border bg-background transition-colors duration-300"
                  :class="
                    activeIndex === index ? 'border-accent' : 'border-border'
                  "
                >
                  <div
                    class="size-2 rounded-full transition-colors duration-100"
                    :class="
                      activeIndex === index
                        ? 'bg-accent scale-110'
                        : 'bg-border'
                    "
                  />
                </div>
              </div>

              <!-- Card -->

              <div
                class="group rounded-[28px] border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl md:p-8"
              >
                <!-- Header -->

                <div
                  class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div class="flex items-start gap-4">
                    <!-- Company Logo -->
                    <div
                      class="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white"
                    >
                      <img
                        :src="experience.logo"
                        :alt="`${experience.company} logo`"
                        class="size-12 object-contain"
                      />
                    </div>

                    <!-- Position & Company -->
                    <div>
                      <h3
                        class="text-xl font-semibold text-foreground md:text-2xl"
                      >
                        {{ experience.position }}
                      </h3>

                      <p class="mt-2 font-medium text-accent">
                        {{ experience.company }}
                      </p>
                    </div>
                  </div>

                  <!-- Current -->

                  <div
                    v-if="experience.current"
                    class="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent"
                  >
                    <span
                      class="size-1.5 animate-pulse rounded-full bg-accent"
                    />

                    Current
                  </div>
                </div>

                <!-- Information -->

                <div
                  class="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted"
                >
                  <span>
                    {{ experience.employmentType }}
                  </span>

                  <span class="hidden sm:inline"> • </span>

                  <span>
                    {{ experience.location }}
                  </span>

                  <span class="hidden sm:inline"> • </span>

                  <span>
                    {{ experience.startDate }}
                    —
                    {{ experience.endDate }}
                  </span>
                </div>

                <!-- Description -->

                <p class="mt-6 max-w-2xl leading-7 text-muted">
                  {{ experience.description }}
                </p>

                <!-- Achievements -->

                <div v-if="experience.achievements?.length" class="mt-6">
                  <h4 class="mb-3 text-sm font-semibold text-foreground">
                    Key Achievements
                  </h4>

                  <ul class="space-y-2.5">
                    <li
                      v-for="achievement in experience.achievements"
                      :key="achievement"
                      class="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span
                        class="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />

                      <span>
                        {{ achievement }}
                      </span>
                    </li>
                  </ul>
                </div>

                <!-- Technologies -->

                <div class="mt-6 flex flex-wrap gap-2">
                  <UiTag
                    v-for="technology in experience.technologies"
                    :key="technology"
                  >
                    {{ technology }}
                  </UiTag>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>
