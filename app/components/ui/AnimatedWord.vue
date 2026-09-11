<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
  words: string[];
  interval?: number;
}

const props = withDefaults(defineProps<Props>(), {
  interval: 2500,
});

const index = ref(0);

let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  timer = setInterval(() => {
    index.value = (index.value + 1) % props.words.length;
  }, props.interval);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <Transition
    name="word"
    mode="out-in"
  >
    <span :key="index">
      {{ words[index] }}
    </span>
  </Transition>
</template>

<style scoped>
.word-enter-active,
.word-leave-active {
  transition: all .35s ease;
}

.word-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.word-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>