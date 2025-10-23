<script setup>
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <footer>
    <div class="f-info container">
      <a href="#inicio" class="logo-white"><img src="../assets/images/logo-white.svg" alt="Lr-tech"></a>

      <div class="phone"><a href="tel:+576014227600">(+57) 601 4227600</a></div>
      <div class="address"><a
          href="http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003">Carrera
          13A # 37 - 32, Bogotá - Colombia</a></div>
      <span>{{ t.footer.rights }}</span>

    </div>
  </footer>
</template>