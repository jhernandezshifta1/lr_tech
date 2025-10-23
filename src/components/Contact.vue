<script setup>
import { ref, onMounted } from 'vue'

const name = ref('')
const email = ref('')
const number = ref('')
const comment = ref('')
const messages = ref([])

const API_URL = 'https://68f3d5a1fd14a9fcc429fee6.mockapi.io/api/v1/message'

// Enviar mensaje al MockAPI
const handleSubmit = async () => {
  if (!name.value || !email.value || !number.value || !comment.value) {
    alert('Por favor completa todos los campos.')
    return
  }

  // Validar número (solo dígitos, mínimo 7 y máximo 15)
  const phoneRegex = /^[0-9]{7,15}$/
  if (!phoneRegex.test(number.value)) {
    alert('Por favor ingresa un número de teléfono válido (solo dígitos).')
    return
  }

  const newMessage = {
    name: name.value,
    email: email.value,
    number: number.value,
    comment: comment.value,
    date: new Date().toLocaleString(),
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMessage),
    })

    if (!res.ok) throw new Error('Error al guardar el mensaje')

    const savedMessage = await res.json()
    messages.value.push(savedMessage)

    // Limpiar formulario
    name.value = ''
    email.value = ''
    number.value = ''
    comment.value = ''
    alert('Mensaje enviado correctamente')
  } catch (err) {
    console.error('Error al enviar el mensaje:', err)
    alert('Error al enviar el mensaje.')
  }
}

// Cargar mensajes al montar el componente
onMounted(async () => {
  try {
    const res = await fetch('https://68f3d5a1fd14a9fcc429fee6.mockapi.io/api/v1/message')
    messages.value = await res.json()
  } catch (err) {
    console.error('Error al cargar mensajes:', err)
  }
})
// Idioma
import { useI18n } from '../composables/useLanguage.js'

const { t } = useI18n()
</script>

<template>
  <section id="section6" class="container">
    <div class="contact">
      <form @submit.prevent="handleSubmit" class="inspiration-form">
        <h2>Contáctenos </h2>
        <!-- Nombre -->
        <label for="nombre">{{ t.contact.name }}</label>
        <input type="text" v-model="name" name="nombre" placeholder="Pepito Perez" required>

        <!-- Email -->
        <label for="email">{{ t.contact.email }}</label>
        <input type="email" v-model="email" name="email" placeholder="john@email.com" required>

        <!-- Número -->
        <label for="numero">{{ t.contact.number }}</label>
        <input type="tel" v-model="number" name="numero" placeholder="543210987" required>

        <!-- Mensaje -->
        <label for="mensaje">{{ t.contact.message }}</label>
        <textarea v-model="comment" name="mensaje" placeholder="" rows="5" required></textarea>

        <!-- Botón -->
        <button type="submit" class="button">{{ t.contact.send }}</button>
      </form>
      <img src="../assets/images/contact-image.png" alt="contact-image" loading="lazy">
    </div>
  </section>
</template>