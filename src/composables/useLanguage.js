import { ref, computed, provide, inject } from 'vue'
import es from '../locales/es.json'
import en from '../locales/en.json'

const translations = { es, en }

export function useLanguage() {
  const currentLang = ref(localStorage.getItem('lang') || 'es')

  // Hacer que las traducciones empiecen con idioma actual
  const t = computed(() => translations[currentLang.value])

  // Cambia idioma
  function toggleLanguage() {
    currentLang.value = currentLang.value === 'es' ? 'en' : 'es'
    localStorage.setItem('lang', currentLang.value)
  }

  // Hacer disponible en toda la app
  provide('lang', currentLang)
  provide('t', t)
  provide('toggleLanguage', toggleLanguage)

  return { currentLang, t, toggleLanguage }
}

// Para usar en componentes hijos con librerí I18n
export function useI18n() {
  const lang = inject('lang')
  const t = inject('t')
  const toggleLanguage = inject('toggleLanguage')
  return { lang, t, toggleLanguage }
}
