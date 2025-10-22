<script setup>
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <section id="section1" class="container team">
    <div>
      <h2><span class="blue">{{ t.team.title }}</span> <span class="red">LR TECH?</span></h2>
      <p>{{ t.team.paragraph }}</p>
    </div>
    <div class="box-lr">
      <div class="box-txt">
        <h3>{{ t.team.title }}</h3>
        <p>{{ t.team.paragraph }}</p>
        <a href="#section3">CONOCER BENEFICIOS</a>
      </div>
      <div class="box-img">
        <img src="../assets/images/360.png" alt="La República 360">
      </div>
    </div>
  </section>
</template>