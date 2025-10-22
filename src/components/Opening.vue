<script setup>
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <section id="inicio" class="opening">
    <div class="opening-info">
      <h1>{{ t.opening.title }}</h1>
      <p>{{ t.opening.paragraph }}</p>
      <img src="../assets/images/apertura-1.png" alt="Presentación LR TECH">
    </div>
    <div class="container brands">
      <img src="../assets/images/CC.svg" alt="Central Cervecera">
      <img src="../assets/images/rcn.svg" alt="Noticias RCN">
      <img src="../assets/images/ntn.png" alt="NTN 24">
      <img src="../assets/images/win.svg" alt="Win Sports">
      <img src="../assets/images/lafm.svg" alt="La FM">
      <img src="../assets/images/lr.svg" alt="La República">
    </div>
  </section>
</template>