<script setup>
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ContactSection from '../components/ContactSection.vue';
</script>

<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>