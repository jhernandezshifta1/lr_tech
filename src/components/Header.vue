<script setup>

//composables para idioma
import { useI18n } from '../composables/useLanguage.js'

const { lang, toggleLanguage, t } = useI18n()

// toggle para
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header>
    <div class="menu">
      <!-- LOGO -->
      <a href="#inicio" class="logo">
        <img src="/src/assets/images/Logo.svg" alt="LR TECH" />
      </a>



      <!-- MENÚ PRINCIPAL -->
      <nav class="main-menu" :class="{ open: isMenuOpen }">
        <ul>
          <li><a href="#section1">{{ t.header.who }}</a></li>
          <li><a href="#section2">{{ t.header.products }}</a></li>
          <li><a href="#section3">{{ t.header.benefits }}</a></li>
          <li><a href="#section4">{{ t.header.customers }}</a></li>
          <li><a href="#section5">{{ t.header.technologies }}</a></li>
        </ul>
      </nav>

      <!-- ZONA DERECHA: idioma y botón -->
      <div class="btn-nav">
        <div class="language">
          <span class="material-symbols-outlined">language</span>
          <button class="btn-language" @click="toggleLanguage">
            <span :class="{ active: lang === 'es' }">ES</span>
            <span :class="{ active: lang === 'en' }">EN</span>
          </button>
        </div>

        <a href="#section6" class="btn-primary btn-desk">{{ t.header.contact }}</a>
      </div>
      <!-- BOTÓN HAMBURGUESA (solo móvil) -->
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-symbols-outlined">
          {{ isMenuOpen ? "close" : "menu" }}
        </span>
      </button>

    </div>

    <!-- OVERLAY para mobile -->
    <div class="overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
  </header>
</template>
