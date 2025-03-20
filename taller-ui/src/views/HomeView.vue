<script setup>
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ContactSection from '../components/ContactSection.vue';
import Carousel from '../components/Carousel.vue';
</script>

<template>
  <main class="home">
    <HeroSection />
    <Carousel />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </main>
</template>

<style scoped>
.home {
  width: 100vw; /* Ocupa toda la pantalla horizontalmente */
  min-height: 100vh; /* Ocupa toda la altura de la pantalla */
  display: fluid;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f0f0f0; /* Fondo de prueba */
}
</style>
