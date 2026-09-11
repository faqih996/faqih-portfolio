<script setup lang="ts">
const year = new Date().getFullYear();

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "lucide:linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: "lucide:github",
  },
];
</script>

<template>
  <footer class="border-t border-zinc-200">
    <UiContainer>
      <div
        class="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <!-- Brand -->
        <div>
          <a href="#" class="text-lg font-bold tracking-tight text-zinc-900">
            FAQIH SYAKIR<span class="text-blue-600">.</span>
          </a>

          <p class="mt-2 text-sm text-zinc-500">
            Software Engineer · Backend Developer
          </p>
        </div>

        <!-- Social -->
        <div class="flex items-center gap-3">
          <div
            class="flex flex-col gap-2 border-t border-zinc-100 py-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© {{ year }} Faqihuddin Syakir Niam. All rights reserved.</p>

            <p>Built with Nuxt & Vue</p>
          </div>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>
