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
          <li><a href="#section1">Quiénes somos</a></li>
          <li><a href="#section2">Productos</a></li>
          <li><a href="#section3">Beneficios</a></li>
          <li><a href="#section4">Clientes</a></li>
          <li><a href="#section5">Tecnologías</a></li>
          <li><a href="#section6" class="btn-primary">CONTÁCTENOS</a></li>
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

        <a href="#section6" class="btn-primary btn-desk">CONTÁCTENOS</a>
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

<style scoped lang="scss">
.language {
  display: flex;
  align-items: center;
  gap: 10px;

  .btn-language {
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 50px;
    display: flex;
    overflow: hidden;
    cursor: pointer;

    span {
      padding: 8px 12px;
      transition: background 0.3s;
    }

    .active {
      background: #222;
      color: #fff;
    }
  }
}
</style>
