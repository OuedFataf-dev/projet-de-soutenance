<template>
  <StatsComponent
    categoreContenu="vuejs"
    :QuizData="quiz"
  />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

import axios from 'axios'
import StatsComponent from './statsComponent.vue'
const API_URL = import.meta.env.VITE_APP_API_URL;
// Props
const props = defineProps({
  QuizData: Array,
  categoreContenu: String
})

// Références réactives
const quiz = ref({ Questions: [] })
const currentIndex = ref(0)
const selected = ref(null)
const validated = ref(false)
const selectedDifficulty = ref('Facile') // Valeur par défaut
const loading = ref(false)
const error = ref(null)

// Chargement initial
onMounted(() => {
  if (props.QuizData && props.QuizData.length > 0) {
    quiz.value = { Questions: props.QuizData }
    currentIndex.value = 0
    selected.value = null
    validated.value = false
  } else {
    loadQuiz()
  }
})

// Recharger quand la difficulté change
watch(selectedDifficulty, () => {
  if (!(props.QuizData && props.QuizData.length > 0)) {
    loadQuiz()
  }
})

// Fonction de chargement
const loadQuiz = async () => {
  if (!selectedDifficulty.value) return

  loading.value = true
  error.value = null

  try {
    const encodedDomain = encodeURIComponent(props.categoreContenu || 'Vue js')
    const response = await axios.get(
      `${API_URL}/api/quizzes/domain/${encodedDomain}?difficulty=${selectedDifficulty.value}`
    )

    const quizzesFound = response.data.quizzes

    if (quizzesFound.length > 0) {
      const allQuestions = quizzesFound.flatMap(q => q.Questions || [])

      if (allQuestions.length > 0) {
        quiz.value = { Questions: allQuestions }
        currentIndex.value = 0
        selected.value = null
        validated.value = false
      } else {
        error.value = "Aucune question trouvée pour cette difficulté."
      }
    } else {
      error.value = "Aucun quiz trouvé pour cette difficulté."
    }
  } catch (err) {
    console.error('❌ Erreur lors du chargement du quiz :', err)
    error.value = "Erreur serveur lors du chargement du quiz"
  } finally {
    loading.value = false
  }
}
</script>
