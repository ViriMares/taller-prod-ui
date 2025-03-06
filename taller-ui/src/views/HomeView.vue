<script setup>
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ContactSection from '../components/ContactSection.vue';
import Carousel from '../components/Carousel.vue'; // Importa el carrusel
</script>

<template>
  <main>
    <HeroSection />
    <Carousel /> <!-- Agregando el carrusel -->
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
