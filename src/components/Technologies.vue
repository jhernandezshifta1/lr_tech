<script setup>
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <section id="section5" class="technologies">
    <div class="container tech-info">
      <div>
        <h2>{{ t.technologies.title }}</h2>
        <p>{{ t.technologies.paragraph }}</p>
        <p>{{ t.technologies.paragraph2 }}</p>
      </div>
      <div class="group-tech-01">
        <div class="box-tech"><img src="../assets/images/amazon.png" alt="amazon"></div>
        <div class="box-tech"><img src="../assets/images/google.png" alt="google"></div>
        <div class="box-tech"><img src="../assets/images/net.png" alt="net"></div>
        <div class="box-tech"><img src="../assets/images/fastly.png" alt="fastly"></div>
      </div>
      <div class="group-tech-02">
        <div class="box-tech"><img src="../assets/images/react.svg" alt="react">
          <h4>React</h4>
        </div>
        <div class="box-tech"><img src="../assets/images/vue.svg" alt="vue">
          <h4>Vue</h4>
        </div>
        <div class="box-tech"><img src="../assets/images/node.svg" alt="node">
          <h4>Node JS</h4>
        </div>
        <div class="box-tech"><img src="../assets/images/next.svg" alt="next">
          <h4>Next JS</h4>
        </div>
      </div>
    </div>

  </section>
</template>