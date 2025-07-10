<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 p-6">
    <div class="bg-white dark:bg-gray-900 shadow-2xl rounded-xl px-10 py-8 w-full max-w-3xl">
      <h1 class="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-6">🎯 Quiz Challenge</h1>

      <!-- Sélection de la difficulté -->
      <div class="mb-8">
        <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">📊 Choisir la difficulté :</label>
        <select v-model="selectedDifficulty" class="w-full px-4 py-3 border rounded-md text-gray-800 dark:text-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-400">
          <option disabled value="">-- Sélectionner une difficulté --</option>
          <option value="facile">Facile</option>
          <option value="moyen">Moyen</option>
          <option value="difficile">Difficile</option>
        </select>
      </div>

      <!-- Questions -->
      <transition name="fade">
        <div v-if="selectedDifficulty">
          <div v-for="(question, index) in selectedQuestions" :key="index" class="mb-6 p-6 rounded-lg bg-indigo-50 dark:bg-gray-800 shadow-md">
            <p class="mb-3 font-semibold text-indigo-800 dark:text-indigo-300 text-lg">📖 Question {{ index + 1 }}</p>
            <p class="mb-4 text-gray-700 dark:text-gray-200">{{ question.text }}</p>

            <div class="space-y-2">
              <label
                v-for="(option, i) in question.options"
                :key="i"
                class="flex items-center space-x-2 bg-white dark:bg-gray-700 p-3 rounded-md cursor-pointer hover:bg-indigo-100 dark:hover:bg-gray-600 transition"
              >
                <input
                  type="radio"
                  :name="'question-' + index"
                  :value="option"
                  v-model="userAnswers[index]"
                  class="accent-indigo-600"
                />
                <span class="text-gray-800 dark:text-gray-200">{{ option }}</span>
              </label>
            </div>
          </div>

          <button
            @click="submitAnswers"
            class="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition mt-4 shadow-lg"
          >
            ✅ Soumettre mes réponses
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Données de quiz simulées
const allQuestions = [
  { text: '2 + 2 = ?', difficulty: 'facile', options: ['3', '4', '5'], answer: '4' },
  { text: 'Couleur du ciel ?', difficulty: 'facile', options: ['Bleu', 'Vert', 'Rouge'], answer: 'Bleu' },
  { text: 'Combien de jours dans une semaine ?', difficulty: 'facile', options: ['5', '7', '10'], answer: '7' },
  { text: 'Capital du Burkina Faso ?', difficulty: 'facile', options: ['Bobo', 'Koudougou', 'Ouagadougou'], answer: 'Ouagadougou' },
  { text: '5 x 6 = ?', difficulty: 'moyen', options: ['30', '25', '35'], answer: '30' },
  { text: 'Quel est le continent de l’Égypte ?', difficulty: 'moyen', options: ['Afrique', 'Asie', 'Europe'], answer: 'Afrique' },
  { text: 'Langue officielle du Brésil ?', difficulty: 'moyen', options: ['Espagnol', 'Portugais', 'Français'], answer: 'Portugais' },
  { text: 'Résultat de 12 × 12 ?', difficulty: 'difficile', options: ['144', '121', '132'], answer: '144' },
  { text: 'Quel est le plus long fleuve du monde ?', difficulty: 'difficile', options: ['Niger', 'Nil', 'Amazone'], answer: 'Amazone' },
  { text: 'Dans quelle année la 2e guerre mondiale a-t-elle commencé ?', difficulty: 'difficile', options: ['1939', '1945', '1920'], answer: '1939' }
]

const selectedDifficulty = ref('')
const userAnswers = ref([])

const selectedQuestions = computed(() => {
  const filtered = allQuestions.filter(q => q.difficulty === selectedDifficulty.value)
  return filtered.slice(0, 4)
})

function submitAnswers() {
  let score = 0
  selectedQuestions.value.forEach((q, index) => {
    if (userAnswers.value[index] === q.answer) score++
  })
  alert(`✨ Score obtenu : ${score}/4`)
}
</script>

<style>
/* Petite animation lors de l'affichage */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
