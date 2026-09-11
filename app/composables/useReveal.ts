import { ref, onMounted, onBeforeUnmount } from "vue";

export function useReveal() {
  const target = ref<HTMLElement | null>(null);

  const visible = ref(false);

  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!target.value) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible.value = true;

          observer?.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(target.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return {
    target,
    visible,
  };
}
