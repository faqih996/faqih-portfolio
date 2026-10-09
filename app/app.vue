<style>
html {
  scroll-behavior: smooth;
}
</style>

<script setup lang="ts">
const siteUrl = "https://faqihsyakir.com";
const ogImage = `${siteUrl}/images/og-portfolio.png`;

useSeoMeta({
  title: "Faqih Syakir | Software Engineer",
  description:
    "Software Engineer specializing in front-end and back-end development, building responsive interfaces and secure, reliable web applications..",
  keywords:
    "Faqih Syakir, Software Engineer, Backend Developer, Laravel Developer, Javascript Developer, Web Developer, Nuxt, React, JavaScript",
  author: "Faqih Syakir",
  robots: "index, follow",

  ogTitle: "Faqih Syakir | Software Engineer",
  ogDescription:
    "Explore my software engineering portfolio, projects, and technical expertise.",
  ogType: "website",
  ogUrl: siteUrl,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Faqih Syakir — Front-end and Back-end Development",
  ogSiteName: "Faqih Syakir Portfolio",
  ogLocale: "en_US",

  twitterCard: "summary_large_image",
  twitterTitle: "Faqih Syakir | Software Engineer",
  twitterDescription: "Explore my software engineering portfolio and projects.",
  twitterImage: ogImage,
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
