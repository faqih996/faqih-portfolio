<script setup lang="ts">
import { navigation } from "~/constants/navigation";

const { scrolled } = useNavbar();
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <!-- Progress Bar -->
    <LayoutScrollProgress />

    <!-- Navbar -->
    <nav
      :class="[
        'transition-all duration-500',
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent',
      ]"
    >
      <UiContainer>
        <div
          :class="[
            'flex items-center justify-between transition-all duration-500',
            scrolled ? 'h-16' : 'h-20',
          ]"
        >
          <!-- Logo -->
          <NuxtLink to="/" class="font-display text-xl font-bold">
            FAQIH SYAKIR.
          </NuxtLink>

          <!-- Navigation -->
          <div class="hidden items-center gap-8 lg:flex">
            <NuxtLink
              v-for="item in navigation"
              :key="item.href"
              :to="item.href"
              class="text-sm font-medium text-muted transition hover:text-foreground"
            >
              {{ item.label }}
            </NuxtLink>
          </div>

          <!-- Social Media -->
          <div class="flex items-center gap-3">
            <a
              href="mailto:faqih.syakir11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              class="flex size-9 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-white"
            >
              <Icon name="simple-icons:gmail" class="size-4" />
            </a>

            <a
              href="https://github.com/faqih996"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="flex size-9 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-white"
            >
              <Icon name="simple-icons:github" class="size-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/faqihsyakir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="flex size-9 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-white"
            >
              <Icon name="simple-icons:linkedin" class="size-4" />
            </a>

            <a
              href="https://www.instagram.com/faqihsyakir_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="flex size-9 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-white"
            >
              <Icon name="simple-icons:instagram" class="size-4" />
            </a>
          </div>
        </div>
      </UiContainer>
    </nav>
  </header>
</template>
