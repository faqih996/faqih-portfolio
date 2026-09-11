import { ref, onMounted, onUnmounted } from "vue";

export function useNavbar() {
  const scrolled = ref(false);

  const update = () => {
    scrolled.value = window.scrollY > 40;
  };

  onMounted(() => {
    update();
    window.addEventListener("scroll", update, {
      passive: true,
    });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", update);
  });

  return {
    scrolled,
  };
}