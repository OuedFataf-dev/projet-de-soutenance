<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4 flex justify-center items-center">
    <div class="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg w-full max-w-3xl space-y-6">
      <h1 class="text-3xl font-bold text-center text-[#4B2DB3] dark:text-indigo-300 mb-6">
        ➕ Ajouter une question au quiz
      </h1>

      <!-- Question -->

      <div>

        
        <label class="text-gray-700 dark:text-gray-200 font-semibold"> resumer du cours :</label>
        <textarea
         v-model="newQuestion.title" 
          rows="3"
          class="w-full mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          placeholder="Saisir la question ici..."
        />
      </div>
      <div>

        
        <label class="text-gray-700 dark:text-gray-200 font-semibold">Question :</label>
        <textarea
          v-model="newQuestion.text"
          rows="3"
          class="w-full mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          placeholder="Saisir la question ici..."
        />
      </div>

      <!-- Réponses possibles -->
      <div>
        <label class="text-gray-700 dark:text-gray-200 font-semibold">Réponses possibles :</label>
        <div v-for="(opt, i) in newQuestion.options" :key="i" class="flex items-center mt-2 space-x-3">
          <input
            v-model="opt.value"
            class="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            :placeholder="`Réponse ${opt.label}`"
          />
        </div>
      </div>

      <!-- Réponse correcte -->
      <div>
        <label class="text-gray-700 dark:text-gray-200 font-semibold">Réponse correcte :</label>
        <select
          v-model="newQuestion.correct"
          class="w-full mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option disabled value="">-- Sélectionner la bonne réponse --</option>
          <option v-for="opt in newQuestion.options" :key="opt.label" :value="opt.label">
            {{ opt.label }} – {{ opt.value }}
          </option>
        </select>
      </div>

      <!-- Difficulté -->
      <div>
        <label class="text-gray-700 dark:text-gray-200 font-semibold">Difficulté :</label>
        <select
          v-model="newQuestion.difficulty"
          class="w-full mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        >
          <option disabled value="">-- Sélectionner une difficulté --</option>
          <option value="easy">Facile</option>
          <option value="medium">Moyen</option>
          <option value="hard">Difficile</option>
        </select>
      </div>

      <!-- Domaine (statique) -->
      <div>
        <label class="text-gray-700 dark:text-gray-200 font-semibold">Domaine :</label>
        <select
          v-model="newQuestion.domain"
          class="w-full mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option disabled value="">-- Sélectionner un domaine --</option>
          <option v-for="d in domainsStatic" :key="d" :value="d">{{ d }}</option>
        </select>
      </div>

      <!-- Bouton d'ajout -->
      <div class="text-center">
        <button
          @click="submitQuestion"
          class="bg-[#4B2DB3] hover:bg-[#3e25a1] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          ✅ Ajouter la question
        </button>
        <!-- Message d’erreur -->
<div v-if="errorMessage" class="text-red-600 text-center font-bold mt-4">
  {{ errorMessage }}
</div>

      </div>

      <!-- Message de confirmation -->
      <div v-if="success" class="text-green-600 text-center font-bold">
        🎉 Question ajoutée avec succès !
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_API_URL;

const CREATE_URL = `${API_URL}/api/quizzes/add`

const success = ref(false)
const errorMessage = ref('')

const domainsStatic = [
  "Deep learning", "Statistique", "React js", "Vue js", "Angular",
  "PhP", "Science de Données", "Python", "Flutter", "Kotlin",
  "ChatGPT", "Node js", "Machine learning", "Finance et Comptabilité",
  "Informatique et Logiciel", "Marketing"
]

const newQuestion = ref({
  text: '',
  options: [
    { label: 'A', value: '' },
    { label: 'B', value: '' },
    { label: 'C', value: '' },
    { label: 'D', value: '' }
  ],
   title:'',
  correct: '',
  difficulty: '',
  domain: ''
})

// ✅ Fonction de validation du formulaire
function isFormValid() {
  const q = newQuestion.value

  if (!q.text.trim()) {
    errorMessage.value = '❗ Veuillez saisir la question.'
    return false
  }

  if (!q.options.every(o => o.value.trim())) {
    errorMessage.value = '❗ Veuillez remplir toutes les réponses possibles.'
    return false
  }

  if (!q.correct) {
    errorMessage.value = '❗ Veuillez sélectionner la réponse correcte.'
    return false
  }

  const correctOption = q.options.find(opt => opt.label === q.correct)
  if (!correctOption || !correctOption.value.trim()) {
    errorMessage.value = '❗ La réponse correcte sélectionnée est vide.'
    return false
  }

  if (!q.difficulty) {
    errorMessage.value = '❗ Veuillez choisir une difficulté.'
    return false
  }

  if (!q.domain) {
    errorMessage.value = '❗ Veuillez choisir un domaine.'
    return false
  }

  errorMessage.value = ''
  return true
}

// ✅ Soumission de la question
async function submitQuestion() {
  if (!isFormValid()) return

  try {
    const payload = {
      title: ` ${newQuestion.value.title}`,
      difficulty: newQuestion.value.difficulty,
      domain: newQuestion.value.domain,
      questions: [
        {
          text: newQuestion.value.text,
          correct: newQuestion.value.correct,
          options: newQuestion.value.options
        }
      ]
    }

    console.log('📤 Payload envoyé à l’API :', JSON.stringify(payload, null, 2))

    const res = await axios.post(CREATE_URL, payload)

    if (res.status === 201) {
      success.value = true
      errorMessage.value = ''
      newQuestion.value = {
        text: '',
        options: [
          { label: 'A', value: '' },
          { label: 'B', value: '' },
          { label: 'C', value: '' },
          { label: 'D', value: '' }
        ],
        correct: '',
        difficulty: '',
        domain: ''
      }

      setTimeout(() => (success.value = false), 3000)
    } else {
      errorMessage.value = 'Erreur : la question n’a pas pu être ajoutée.'
    }
  } catch (err) {
    console.error('❌ Erreur API :', err)
    errorMessage.value = '❌ Une erreur est survenue lors de l’envoi au serveur.'
  }
}
</script>
