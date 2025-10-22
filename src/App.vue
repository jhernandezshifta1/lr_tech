<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Opening from './components/Opening.vue';
import Team from './components/Team.vue';
import Products from './components/Products.vue';
import Benefits from './components/Benefits.vue';
import Customers from './components/Customers.vue';
import Technologies from './components/Technologies.vue';
import Contact from './components/Contact.vue';
import 'vue3-carousel/carousel.css'
import { useLanguage } from './composables/useLanguage.js'
useLanguage() // Inicia el sistema de idiomas
</script>

<template>
  <div id="app">
    <Header />
    <Opening />
    <Team />
    <Products />
    <Benefits />
    <Customers />
    <Technologies />
    <Contact />
  <Footer />
  </div>
  <router-view />
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 620px) {
    gap: 1rem;
  }
}
</style>