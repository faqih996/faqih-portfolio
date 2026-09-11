import { ref, onMounted, onUnmounted } from "vue";

export function useScrollProgress() {
  const progress = ref(0);

  const update = () => {
    const scrollTop = window.scrollY;

    const scrollHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    progress.value =
      scrollHeight <= 0
        ? 0
        : (scrollTop / scrollHeight) * 100;
  };

  onMounted(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", update);
  });

  return {
    progress,
  };
}