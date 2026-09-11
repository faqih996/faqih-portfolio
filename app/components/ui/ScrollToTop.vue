<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const visible = ref(false);

function handleScroll() {
  visible.value = window.scrollY > window.innerHeight * 0.8;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Transition name="scroll-top">
    <button
      v-if="visible"
      type="button"
      aria-label="Scroll to top"
      class="fixed bottom-8 right-8 z-40 flex size-12 items-center justify-center rounded-full border border-border bg-white/80 text-foreground shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-white"
      @click="scrollToTop"
    >
      <Icon name="lucide:arrow-up" class="size-5" />
    </button>
  </Transition>
</template>

<style scoped>
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
