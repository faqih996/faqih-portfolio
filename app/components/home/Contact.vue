<script setup lang="ts">
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/faqihsyakir/",
    icon: "simple-icons:linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/faqih996",
    icon: "simple-icons:github",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/faqihsyakir_",
    icon: "simple-icons:instagram",
  },
  {
    label: "Email",
    href: "mailto:faqih.syakir11@gmail.com",
    icon: "simple-icons:gmail",
  },
];
</script>

<template>
  <UiSection id="contact" spacing="lg">
    <UiContainer>
      <div
        class="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16"
      >
        <!-- Decorative -->
        <div
          class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div
          class="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/5 blur-3xl"
        />

        <div class="relative mx-auto max-w-3xl">
          <p
            class="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-600"
          >
            Contact
          </p>

          <h2
            class="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
          >
            Have a project in mind?
          </h2>

          <p
            class="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg"
          >
            I'm always open to discussing new opportunities, interesting
            projects, or simply connecting with people in tech.
          </p>

          <div
            class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <UiButton href="mailto:your@email.com" size="lg">
              Let's talk
              <Icon name="lucide:arrow-up-right" class="size-4" />
            </UiButton>
          </div>

          <div class="flex items-center justify-center gap-3 mt-10">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-900"
            >
              <Icon :name="social.icon" class="size-5" />
            </a>
          </div>
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>
