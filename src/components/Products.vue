<script setup>
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <section id="section2" class="products">
    <div class="container products-info">
      <div>
        <h2>{{ t.products.title }}</h2>
        <p>{{ t.products.paragraph }}</p>
      </div>
      <div class="product-01">
        <img src="../assets/images/product-01.png" alt="Multiplataforma" loading="lazy">
        <div class="product-txt">
          <h3>{{ t.products.monetization}}</h3>
          <ul>
            <li>{{ t.products.monetization1}}</li>
            <li>{{ t.products.monetization2}}</li>
            <li>{{ t.products.monetization3}}</li>
          </ul>
        </div>
      </div>
      <div class="product-01">
        <img src="../assets/images/product-02.png" alt="Multiplataforma" loading="lazy">
        <div class="product-txt">
          <h3>{{ t.products.support}}</h3>
          <ul>
            <li>{{ t.products.support1}}</li>
            <li>{{ t.products.support2}}</li>
            <li>{{ t.products.support3}}</li>
          </ul>
        </div>
      </div>
      <div class="product-01">
        <img src="../assets/images/product-03.png" alt="Multiplataforma" loading="lazy">
        <div class="product-txt">
          <h3>{{ t.products.infrastructure}}</h3>
          <ul>
            <li>{{ t.products.infrastructure1}}</li>
            <li>{{ t.products.infrastructure2}}</li>
            <li>{{ t.products.infrastructure3}}</li>
          </ul>
        </div>
      </div>
      <div class="product-01">
        <img src="../assets/images/product-04.png" alt="Multiplataforma" loading="lazy">
        <div class="product-txt">
          <h3>{{ t.products.productivity}}</h3>
          <ul>
            <li>{{ t.products.productivity1}}</li>
            <li>{{ t.products.productivity2}}</li>
            <li>{{ t.products.productivity3}}</li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>