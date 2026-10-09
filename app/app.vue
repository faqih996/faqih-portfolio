<style>
html {
  scroll-behavior: smooth;
}
</style>

<script setup lang="ts">
const siteUrl = "https://DOMAIN-KAMU.com";

useSeoMeta({
  title: "Faqih Syakir | Software Engineer",
  description:
    "Software Engineer specializing in Laravel, TypeScript, JavaScript and modern web development. Explore my projects, technical skills, and experience building practical digital solutions.",
  keywords:
    "Faqih Syakir, Software Engineer, Backend Developer, Laravel Developer, Javascript Developer, Web Developer, Nuxt, React, JavaScript",
  author: "Faqih Syakir",
  robots: "index, follow",

  ogTitle: "Faqih Syakir | Software Engineer",
  ogDescription:
    "Explore my portfolio, technical skills, and projects in modern web development.",
  ogType: "website",
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/images/og-portfolio.png`,
  ogImageAlt: "Faqih Syakir Software Engineer Portfolio",
  ogSiteName: "Faqih Syakir Portfolio",
  ogLocale: "en_US",

  twitterCard: "summary_large_image",
  twitterTitle: "Faqih Syakir | Software Engineer",
  twitterDescription:
    "Building practical digital solutions with modern web technologies.",
  twitterImage: `${siteUrl}/images/og-portfolio.png`,
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "canonical",
      href: siteUrl,
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
