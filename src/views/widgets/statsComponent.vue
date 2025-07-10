<template>
  <!-- Page principale -->
  <div class="min-h-screen bg-gray-100 p-4 flex flex-col items-center">

    <!-- Bandeau d’introduction -->
    <div class="text-xl font-bold max-w-5xl text-center leading-relaxed mb-8">
      <span class="text-red-600 text-4xl font-bold">L</span> {{ title }}
      <br><br>
      <strong>Voir aussi :</strong> 
      <em>100 Exercices Corrigés En Algorithme avec les Organigrammes.</em>
    </div>

    <!-- Sélection de la difficulté -->
    <div class="mb-8 w-full max-w-md">
      <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
        📊 Choisir la difficulté :
      </label>
     <select 
  v-model="selectedDifficulty" 
  class="w-full px-4 py-3 border rounded-md text-gray-800 dark:text-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-400"
  @change="loadQuiz"
>
  <option disabled value="">-- Sélectionner une difficulté --</option>
  <option value="easy">Facile</option>
  <option value="medium">Moyen</option>
  <option value="hard">Difficile</option>
</select>



    </div>

    <!-- Section Quiz -->
    <div v-if="quiz" class="flex flex-col items-center justify-center p-4 w-full">
      <!-- Carte de question -->
      <div 
        v-if="currentQuestion"
        class="bg-[#4B2DB3] text-white rounded-3xl shadow-lg p-6 sm:p-8 w-full max-w-2xl relative"
      >
        <!-- Numéro de la question -->
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-[#4B2DB3] px-4 py-1 rounded-full font-bold text-sm shadow">
          QUESTION {{ currentIndex + 1 }} / {{ quiz.Questions.length }}
        </div>

        <!-- Texte de la question -->
        <div class="text-center text-lg sm:text-xl font-semibold mb-6 mt-2">
          {{ currentQuestion.text }}
        </div> 

        <!-- Options de réponses -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            v-for="(option, index) in currentQuestion.Options"
            :key="index"
            class="flex items-center justify-start px-4 py-3 rounded-full font-semibold shadow transition w-full"
            :class="getOptionClass(option.label)"
            @click="selectOption(option.label)"
            :disabled="validated"
          >
            <span class="mr-3 w-8 h-8 flex items-center justify-center bg-[#4B2DB3] text-white rounded-full">
              {{ option.label }}
            </span>
            {{ option.value }}
          </button>
        </div>
      </div>

      <!-- Contrôles (Valider / Suivant / Terminé) -->
      <div 
        v-if="currentQuestion"
        class="mt-6 flex flex-col sm:flex-row gap-4 items-center"
      >
        <!-- Bouton de validation -->
        <button
          v-if="!validated"
          @click="validateAnswer"
          class="bg-[#D13661] text-white px-20 sm:px-8 py-4 sm:py-3 rounded-full w-full sm:w-64 md:w-72 lg:w-80 font-semibold shadow hover:bg-[#bf2e58] transition text-lg sm:text-base"
          :disabled="!selected"
        >
          Valider <span class="ml-2">✔</span>
        </button>

        <!-- Bouton question suivante -->
        <button
          v-if="validated && currentIndex < quiz.Questions.length - 1"
          @click="nextQuestion"
          class="bg-green-500 text-white px-6 py-3 rounded-full w-full sm:w-auto font-semibold shadow hover:bg-green-600 transition"
        >
          Question suivante
        </button>

        <!-- Message de fin -->
        <div
          v-if="validated && currentIndex === quiz.Questions.length - 1"
          class="text-[#4B2DB3] font-bold text-lg text-center"
        >
          🎉 Quiz terminé !
        </div>
      </div>
    </div>

    <!-- Champ Commentaire -->
<div class="mt-10 w-full max-w-2xl">
  <h3 class="text-lg font-semibold mb-4 text-gray-800">💬 Laissez un commentaire sur ce quiz</h3>

  <form @submit.prevent="ajouterCommentaire" class="space-y-4">
    <input
      v-model="nouveauCommentaire.nom"
      type="text"
      placeholder="Votre nom"
      class="w-full border px-4 py-2 rounded"
      required
    />

    <textarea
      v-model="nouveauCommentaire.texte"
      placeholder="Votre commentaire"
      class="w-full border px-4 py-3 rounded"
      required
    ></textarea>

    <button
      type="submit"
      class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    >
      Envoyer
    </button>
  </form>

  <div v-if="commentaires.length" class="mt-6">
    <h4 class="text-md font-bold mb-2">📚 Commentaires précédents :</h4>
    <ul class="space-y-2">
      <li v-for="(commentaire, index) in commentaires" :key="index" class="bg-white p-4 rounded shadow">
        <strong>{{ commentaire.nom }}</strong>
        <p class="text-gray-700">{{ commentaire.texte }}</p>
      </li>
    </ul>
  </div>
</div>


    <!-- Message de chargement ou d'erreur -->
    <div v-if="loading" class="text-center py-8">
      Chargement du quiz...
    </div>
    <div v-if="error" class="text-center text-red-500 py-8">
      {{ error }}
    </div>
  </div>



  <!-- Icône de chat flottante -->
<div class="fixed bottom-6 right-6 z-50">
  <button
    class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
    @click="openChat"
  >
    <!-- Icône de chat (SVG ou Heroicons) -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.84l-4 1 1.1-3.3A7.993 7.993 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  </button>
</div>



</template>




<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'

// Props
const props = defineProps({
  categoreContenu: String,
  QuizData: Array
})

// Réactifs
const quiz = ref({ Questions: [] })
const selectedDifficulty = ref('easy')
const loading = ref(false)
const error = ref(null)
const currentIndex = ref(0)
const selected = ref(null)
const validated = ref(false)
const commentaires = ref([])
const title=ref(null)

const nouveauCommentaire = ref({
  nom: '',
  texte: ''
})

const domain = props.categoreContenu || 'Informatique et Logiciel'

// Fonctions
const ajouterCommentaire = async () => {
  if (nouveauCommentaire.value.nom && nouveauCommentaire.value.texte) {
    try {
      const response = await axios.post('http://localhost:5000/api/quizzes/addComent', {
        nom: nouveauCommentaire.value.nom,
        texte: nouveauCommentaire.value.texte
      })
      commentaires.value.push(response.data)
      nouveauCommentaire.value.nom = ''
      nouveauCommentaire.value.texte = ''
    } catch (err) {
      console.error('Erreur lors de l’ajout du commentaire :', err)
    }
  } else {
    alert('Merci de remplir le nom et le commentaire.')
  }
}

const currentQuestion = computed(() => quiz.value.Questions[currentIndex.value] || null)

const selectOption = (optionLabel) => {
  if (!validated.value) selected.value = optionLabel
}

const validateAnswer = () => {
  validated.value = true
}

const nextQuestion = () => {
  if (currentIndex.value < quiz.value.Questions.length - 1) {
    currentIndex.value++
    selected.value = null
    validated.value = false
  }
}

const getOptionClass = (label) => {
  if (!validated.value) {
    return selected.value === label
      ? 'bg-yellow-400 text-[#4B2DB3]'
      : 'bg-white text-[#4B2DB3]'
  }
  if (validated.value) {
    if (label === currentQuestion.value.correct) return 'bg-green-500 text-white'
    if (label === selected.value) return 'bg-yellow-400 text-[#4B2DB3]'
    return 'bg-white text-[#4B2DB3]'
  }
}


const loadQuiz = async () => {
  if (!selectedDifficulty.value) return;
  loading.value = true;
  error.value = null;

  try {
    const encodedDomain = encodeURIComponent(domain);
    const response = await axios.get(
      `http://localhost:5000/api/quizzes/domain/${encodedDomain}?difficulty=${selectedDifficulty.value}`
    );

    const quizzesFound = response.data.quizzes;
    const firstQuiz = quizzesFound[0];

    // ✅ Titre du premier quiz
    title.value = firstQuiz?.title || 'Quiz par défaut';

    if (quizzesFound.length > 0) {
      const allQuestions = quizzesFound.flatMap(q => q.Questions || []);
      if (allQuestions.length > 0) {
        quiz.value = { Questions: allQuestions };
        currentIndex.value = 0;
        selected.value = null;
        validated.value = false;
      } else {
        error.value = "Aucune question trouvée pour cette difficulté.";
      }
    } else {
      error.value = "Aucun quiz trouvé pour cette difficulté.";
    }
  } catch (err) {
    console.error('❌ Erreur lors du chargement du quiz :', err);
    error.value = "Erreur serveur lors du chargement du quiz";
  } finally {
    loading.value = false;
  }
};

watch(selectedDifficulty, loadQuiz)
onMounted(loadQuiz)
</script>

<style scoped>
/* Ajoute ici des styles personnalisés si besoin */
</style>