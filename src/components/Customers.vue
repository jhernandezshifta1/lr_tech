<script setup>
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <section id="section4" class="customers">
    <div class="container customers-info">
      <div>
        <h2>{{ t.customers.title }}</h2>
        <p>{{ t.customers.paragraph }}</p>
        <p>{{ t.customers.paragraph2 }}</p>
      </div>
      <div class="b-customers">
        <div class="box-customers"><img src="../assets/images/CC.svg" alt="cc"></div>
        <div class="box-customers"><img src="../assets/images/rcn.svg" alt="rcn"></div>
        <div class="box-customers"><img src="../assets/images/ntn.png" alt="ntn"></div>
        <div class="box-customers"><img src="../assets/images/win.svg" alt="win"></div>
        <div class="box-customers"><img src="../assets/images/lafm.svg" alt="lafm"></div>
        <div class="box-customers"><img src="../assets/images/lr.svg" alt="lr"></div>
        <div class="box-customers"><img src="../assets/images/alerta.svg" alt="alerta"></div>
        <div class="box-customers"><img src="../assets/images/antena.svg" alt="antena"></div>
        <div class="box-customers"><img src="../assets/images/periodicos.png" alt="periodicos"></div>
        <div class="box-customers"><img src="../assets/images/agronegocios.png" alt="agronegocios"></div>
        <div></div>
        <div class="box-customers"><img src="../assets/images/AL.svg" alt="al"></div>
        <div class="box-customers"><img src="../assets/images/pym.png" alt="pym"></div>
        <div class="box-customers"><img src="../assets/images/LogoSL.svg" alt="logos-sl"></div>
        <div></div>
      </div>
      <div class="testimonials">
        <div class="text-t">
          <h3>{{ t.customers.testimonials }}</h3>
          <p>{{ t.customers.text }}</p>
        </div>
        <div class="box-t">
          <div class="txt-box">"{{ t.customers.testimonial1 }}"</div>
          <div class="person">
            <img src="../assets/images/cliente-01.png" alt="Mauricio Aragón" loading="lazy">
            <div>
              <div class="name">{{ t.customers.name1 }}</div>
              <div class="post">{{ t.customers.role1 }}</div>
            </div>
          </div>
        </div>
        <div class="box-t">
          <div class="txt-box">"{{ t.customers.testimonial2 }}"</div>
          <div class="person">
            <img src="../assets/images/Cliente-03.png" alt="Lucero Martinez"loading="lazy">
            <div>
              <div class="name">{{ t.customers.name2 }}</div>
              <div class="post">{{ t.customers.role2 }}</div>
            </div>
          </div>
        </div>
        <div class="box-t">
          <div class="txt-box">"{{ t.customers.testimonial3 }}"</div>
          <div class="person">
            <img src="../assets/images/cliente02.png" alt="Leonardo González" loading="lazy">
            <div>
              <div class="name">{{ t.customers.name3 }}</div>
              <div class="post">{{ t.customers.name3 }}</div>
            </div>
          </div>
        </div>
        <div class="box-t">
          <div class="txt-box">"{{ t.customers.testimonial4 }}"</div>
          <div class="person">
            <img src="../assets/images/Cliente-04png.png" alt="Carlos Fernando Vega" loading="lazy">
            <div>
              <div class="name">{{ t.customers.name4 }}</div>
              <div class="post">{{ t.customers.name4 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

</template>