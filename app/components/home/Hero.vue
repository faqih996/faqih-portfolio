<script setup lang="ts">
const { locale } = useLocale();
</script>

<template>
  <UiSection id="hero" spacing="md" class="relative overflow-hidden">
    <!-- Background -->

    <div
      class="absolute left-0 top-0 -z-10 h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[150px]"
    />

    <div
      class="absolute bottom-0 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[150px]"
    />

    <UiContainer>
      <div
        class="grid min-h-[calc(100vh-80px)] items-center gap-20 lg:grid-cols-2"
      >
        <!-- LEFT -->

        <div>
          <UiPill variant="outline" class="mb-4">
            🌏
            <UiAnimatedWord
              :words="[
                'Open to International Opportunities',
                '国際的な仕事を探しています',
              ]"
            />
          </UiPill>

          <UiHeading as="h1" size="md" class="max-w-xl">
            Building

            <span class="text-accent">
              <UiAnimatedWord :words="['Digital', 'デジタル']" />
            </span>

            Experiences.
          </UiHeading>

          <p class="mt-8 max-w-xl text-lg leading-8 text-muted">
            Hi, I'm
            <strong class="text-foreground"> Faqih Syakir Niam </strong>

            — a Software Engineer passionate about building scalable
            applications, automation workflows and modern digital products.
          </p>

          <UiInline class="mt-10 gap-4">
            <UiButton
              as="a"
              href="/cv/cv-faqihuddin-syakir-niam.pdf"
              download="CV - Faqihuddin Syakir Niam - Software Engineer.pdf"
              size="lg"
              variant="outline"
            >
              <Icon name="lucide:download" class="mr-2 size-4" />

              Download CV
            </UiButton>
          </UiInline>
        </div>

        <!-- RIGHT -->
        <div class="flex justify-end">
          <HomeHeroCard />
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>
