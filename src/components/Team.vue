<script setup>
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <section id="section1" class="container team">
    <div>
      <h2><span class="blue">{{ t.team.title }}</span> <span class="red">{{ t.team.lr }}</span></h2>
      <p>{{ t.team.paragraph }}</p>
    </div>
    <div class="box-lr">
      <div class="box-txt">
        <h3>{{ t.team.team }}</h3>
        <p>{{ t.team.text }}</p>
        <a href="#section3">{{ t.team.button}}</a>
      </div>
      <div class="box-img">
        <img src="../assets/images/360.png" alt="La República 360" loading="lazy">
      </div>
    </div>
  </section>
</template>