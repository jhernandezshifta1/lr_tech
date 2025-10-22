<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

// Importar imágenes
import img1 from '../assets/images/noticias-rcn.png'
import img2 from '../assets/images/ntn-24mobile.png'
import img3 from '../assets/images/andina.png'
import img4 from '../assets/images/win-mobile.png'

// arreglo de imágenes
const images = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
  { id: 4, url: img4 }
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
</script>

<template>
  <section id="section3" class="benefits container">
    <!-- Título -->
    <div class="intro">
      <h2>Beneficios</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci in tortor non amet ultrices eu
        aliquam senectus massa.
      </p>
    </div>

    <!-- Bloques de beneficios -->
    <div class="box-benefits"> <div class="column-info"> <div class="benefits-01"> <img src="../assets/images/benefics-01.svg" alt=""> <div class="info-txt"> <h3>Gestión de Contenido Digital (CMS Headless)</h3> <ul> <li>Flujos editoriales eficientes.</li> <li>Mayor rapidez en la publicación.</li> <li>Escalabilidad para grandes volúmenes de información.</li> </ul> </div> </div> <div class="benefits-01"> <img src="../assets/images/benefits-02.svg" alt=""> <div class="info-txt"> <h3>Gestión de Contenido Digital (CMS Headless)</h3> <ul> <li>Flujos editoriales eficientes.</li> <li>Mayor rapidez en la publicación.</li> <li>Escalabilidad para grandes volúmenes de información.</li> </ul> </div> </div> <div class="benefits-01"> <img src="../assets/images/benefits-03.svg" alt="CMS Headless"> <div class="info-txt"> <h3>Gestión de Contenido Digital (CMS Headless)</h3> <ul> <li>Flujos editoriales eficientes.</li> <li>Mayor rapidez en la publicación.</li> <li>Escalabilidad para grandes volúmenes de información.</li> </ul> </div> </div> </div> <div class="phone"> <img src="../assets/images/phone.png" alt="phone"> </div> </div>

    <!-- Carrusel de proyectos -->
    <div class="projects">
      <div class="projects-header">
        <h3>Proyectos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci in tortor non amet ultrices eu
          aliquam senectus massa.
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


