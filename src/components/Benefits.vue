<script setup>
// carrusel
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

// Importar imágenes
import img1 from '../assets/images/ntn-carrusel.png'
import img2 from '../assets/images/superlike-carrusel.png'
import img3 from '../assets/images/rcn-carrusel.png'
import img4 from '../assets/images/ccc-carrusel.png'
import img5 from '../assets/images/pyg-carrusel.png'
import img6 from '../assets/images/win-mobile.png'

// arreglo de imágenes
const images = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
  { id: 4, url: img4 },
  { id: 5, url: img5 },
  { id: 6, url: img6 }
]

const config = {
  height: 500,
  itemsToShow: 4,
  gap: 10,
  autoplay: 3000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  transition: 800,
  breakpoints: {
    320: { itemsToShow: 1, gap: 5 },
    640: { itemsToShow: 2, gap: 10 },
    1024: { itemsToShow: 3, gap: 15 },
    1280: { itemsToShow: 4, gap: 20 },
  },
}

// Idioma
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <section id="section3" class="benefits container">
    <!-- Título -->
    <div class="intro">
      <h2>{{ t.benefits.title }}</h2>
      <p>
        {{ t.benefits.paragraph }}
      </p>
    </div>

    <!-- Bloques de beneficios -->
    <div class="box-benefits">
      <div class="column-info">
        <div class="benefits-01"> <img src="../assets/images/benefics-01.svg" alt="Gestión-de-contenido" loading="lazy">
          <div class="info-txt">
            <h3>{{ t.benefits.content }}</h3>
            <ul>
              <li>{{ t.benefits.content1 }}</li>
              <li>{{ t.benefits.content2 }}</li>
              <li>{{ t.benefits.content3 }}</li>
            </ul>
          </div>
        </div>
        <div class="benefits-01"> <img src="../assets/images/benefits-02.svg" alt="Optimización" loading="lazy">
          <div class="info-txt">
            <h3>{{ t.benefits.optimization }}</h3>
            <ul>
              <li>{{ t.benefits.optimization1 }}</li>
              <li>{{ t.benefits.optimization2 }}</li>
              <li>{{ t.benefits.optimization3 }}</li>
            </ul>
          </div>
        </div>
        <div class="benefits-01"> <img src="../assets/images/benefits-03.svg" alt="Seo-tecnico">
          <div class="info-txt">
            <h3>{{ t.benefits.seo }}</h3>
            <ul>
              <li>{{ t.benefits.seo1 }}</li>
              <li>{{ t.benefits.seo2 }}</li>
              <li>{{ t.benefits.seo3 }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="phone"> <img src="../assets/images/phone.gif" alt="phone"> </div>
    </div>

    <!-- Carrusel de proyectos -->
    <div class="projects">
      <div class="projects-header">
        <h3>{{ t.benefits.projects }}</h3>
        <p>
          {{ t.benefits.projects1 }}
        </p>
      </div>

      <section class="carousel-wrapper">
        <Carousel v-bind="config">
          <Slide v-for="image in images" :key="image.id">
            <div class="slide">
              <img :src="image.url" :alt="`Proyecto ${image.id}`" />
            </div>
          </Slide>

          <!-- páginación  con addons inyección de contenido-->
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </section>
    </div>
  </section>
</template>
