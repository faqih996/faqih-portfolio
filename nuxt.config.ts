// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  srcDir: "app/",

  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],

  app: {
    head: {
      title: "Faqih Syakir — Full Stack Web Developer",

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "images/icons/FSwebfavicon.png",
        },
      ],
    },
  },
});
