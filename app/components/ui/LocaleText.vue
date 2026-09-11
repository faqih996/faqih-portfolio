<script setup lang="ts">
const props = defineProps<{
  en: string
  jp: string
}>()

const { locale } = useLocale()
</script>

<template>
  <Transition
    mode="out-in"
    name="fade"
  >
    <span :key="locale">
      {{ locale === "en" ? props.en : props.jp }}
    </span>
  </Transition>
</template>