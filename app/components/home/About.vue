<script setup lang="ts">
import { computed, ref } from "vue";
import { aboutImages } from "~/data/about";

const currentIndex = ref(0);

const currentImage = computed(() => {
  return aboutImages[currentIndex.value];
});

const previousIndex = computed(() => {
  return currentIndex.value === 0
    ? aboutImages.length - 1
    : currentIndex.value - 1;
});

const nextIndex = computed(() => {
  return currentIndex.value === aboutImages.length - 1
    ? 0
    : currentIndex.value + 1;
});

function nextSlide() {
  currentIndex.value =
    currentIndex.value === aboutImages.length - 1 ? 0 : currentIndex.value + 1;
}

function previousSlide() {
  currentIndex.value =
    currentIndex.value === 0 ? aboutImages.length - 1 : currentIndex.value - 1;
}

function selectSlide(index: number) {
  currentIndex.value = index;
}

function formatNumber(number: number) {
  return String(number).padStart(2, "0");
}
</script>

<template>
  <UiSection id="about" spacing="lg" class="relative overflow-hidden">
    <!-- Background decoration -->

    <div
      class="absolute left-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]"
    />

    <UiContainer>
      <div class="grid items-center gap-20 lg:grid-cols-2">
        <!-- ==================== -->
        <!-- PHOTO CAROUSEL -->
        <!-- ==================== -->

        <div class="relative">
          <!-- Previous decorative card -->

          <div
            class="absolute left-0 top-8 hidden h-[420px] w-[70%] -translate-x-8 rotate-[-7deg] overflow-hidden rounded-[28px] border border-border opacity-40 md:block"
          >
            <img
              :src="aboutImages[previousIndex].src"
              :alt="aboutImages[previousIndex].title"
              class="h-full w-full object-cover"
            />
          </div>

          <!-- Next decorative card -->

          <div
            class="absolute right-0 top-10 hidden h-[400px] w-[70%] translate-x-6 rotate-[6deg] overflow-hidden rounded-[28px] border border-border opacity-40 md:block"
          >
            <img
              :src="aboutImages[nextIndex].src"
              :alt="aboutImages[nextIndex].title"
              class="h-full w-full object-cover"
            />
          </div>

          <!-- Main Image -->

          <div class="relative mx-auto max-w-md">
            <Transition mode="out-in" name="image">
              <div
                :key="currentImage.src"
                class="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-border bg-muted shadow-xl"
              >
                <img
                  :src="currentImage.src"
                  :alt="currentImage.title"
                  class="h-full w-full object-cover"
                />

                <!-- Gradient -->

                <div
                  class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"
                />

                <!-- Title -->

                <div class="absolute left-6 top-6">
                  <p
                    class="max-w-[200px] text-2xl font-medium italic leading-tight text-white"
                  >
                    {{ currentImage.title }}
                  </p>
                </div>

                <!-- Location -->

                <div
                  v-if="currentImage.location"
                  class="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-medium text-white"
                >
                  <span class="flex size-2 rounded-full bg-white" />

                  {{ currentImage.location }}
                </div>
              </div>
            </Transition>

            <!-- Previous Button -->

            <button
              type="button"
              aria-label="Previous image"
              class="absolute left-0 top-1/2 z-20 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-lg transition hover:scale-110 hover:bg-zinc-50"
              @click="previousSlide"
            >
              ←
            </button>

            <!-- Next Button -->

            <button
              type="button"
              aria-label="Next image"
              class="absolute right-0 top-1/2 z-20 flex size-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-lg transition hover:scale-110 hover:bg-zinc-50"
              @click="nextSlide"
            >
              →
            </button>
          </div>

          <!-- Thumbnails -->

          <div class="mt-8 flex justify-center gap-3">
            <button
              v-for="(image, index) in aboutImages"
              :key="image.src"
              type="button"
              :aria-label="`View ${image.title}`"
              class="relative size-16 overflow-hidden rounded-xl border transition md:size-20"
              :class="
                currentIndex === index
                  ? 'border-accent ring-2 ring-accent/20'
                  : 'border-border opacity-60 hover:opacity-100'
              "
              @click="selectSlide(index)"
            >
              <img
                :src="image.src"
                :alt="image.title"
                class="h-full w-full object-cover"
              />
            </button>
          </div>

          <!-- Counter -->

          <div class="mt-6 flex items-center justify-center gap-4">
            <span class="text-sm font-medium text-foreground">
              {{ formatNumber(currentIndex + 1) }}

              <span class="text-muted"> / </span>

              <span class="text-muted">
                {{ formatNumber(aboutImages.length) }}
              </span>
            </span>

            <!-- Progress -->

            <div class="h-px w-32 overflow-hidden bg-border">
              <div
                class="h-full bg-accent transition-all duration-500"
                :style="{
                  width: `${((currentIndex + 1) / aboutImages.length) * 100}%`,
                }"
              />
            </div>
          </div>
        </div>

        <!-- ==================== -->
        <!-- ABOUT CONTENT -->
        <!-- ==================== -->

        <div>
          <!-- Eyebrow -->

          <div class="mb-6 flex items-center gap-3">
            <span class="h-px w-10 bg-accent" />

            <span
              class="text-sm font-semibold uppercase tracking-[0.3em] text-accent"
            >
              About Me
            </span>
          </div>

          <!-- Heading -->

          <h2
            class="max-w-xl text-4xl font-bold leading-tight text-foreground md:text-5xl"
          >
            Turning ideas into

            <span class="text-accent"> real solutions. </span>
          </h2>

          <!-- Description -->

          <div
            class="mt-8 max-w-xl space-y-5 text-base leading-8 text-muted md:text-lg"
          >
            <p>
              I'm
              <strong class="text-foreground"> Faqihuddin Syakir Niam </strong>,
              a Full Stack Web Developer focused on building modern web
              applications and digital solutions.
            </p>

            <p>
              I enjoy working across both frontend and backend development —
              turning ideas into functional, scalable and user-friendly
              products.
            </p>

            <p>
              Outside of coding, I enjoy staying active, exploring new places,
              learning new things and continuously working toward becoming a
              better version of myself.
            </p>
          </div>

          <!-- Expertise -->

          <div
            class="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3"
          >
            <!-- Web Development -->

            <div>
              <div
                class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-xl text-accent"
              >
                &lt;/&gt;
              </div>

              <h3 class="font-semibold text-foreground">Web Development</h3>

              <p class="mt-3 text-sm leading-6 text-muted">
                Building modern and scalable web applications with clean
                architecture.
              </p>
            </div>

            <!-- Backend -->

            <div>
              <div
                class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-xl text-accent"
              >
                DB
              </div>

              <h3 class="font-semibold text-foreground">Backend Development</h3>

              <p class="mt-3 text-sm leading-6 text-muted">
                Designing APIs, databases and reliable backend systems.
              </p>
            </div>

            <!-- Automation -->

            <div>
              <div
                class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-xl text-accent"
              >
                ⚙
              </div>

              <h3 class="font-semibold text-foreground">Automation</h3>

              <p class="mt-3 text-sm leading-6 text-muted">
                Creating automated workflows that simplify repetitive processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>

<style scoped>
.image-enter-active,
.image-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.image-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.image-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
