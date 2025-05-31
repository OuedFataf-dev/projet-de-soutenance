

  <template>
    <div class="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <!-- Bandeau haut -->

      <div class="text-xl text-bold">
  <span class="text-red-600 text-4xl font-bold">L</span>es algorithmes, les structures de données et la complexité sont des concepts fondamentaux en <br> 
  informatique, essentiels pour concevoir des systèmes performants et efficaces. Que vous soyez <br> 
  étudiant, professionnel en développement logiciel ou passionné par l’informatique, comprendre ces <br> 
  notions est crucial pour résoudre des problèmes complexes et optimiser les performances des <br>  
  applications. Dans cet article, nous vous proposons un QCM (Questionnaire à Choix Multiples) couvrant  <br> 
  ces trois domaines clés. À travers ce test, vous pourrez évaluer vos connaissances en matière de <br> 
  conception d’algorithmes, de choix de structures de données appropriées et d’analyse de la complexité <br> 
  des algorithmes. Que vous soyez débutant ou confirmé, ce QCM vous aidera à tester vos compétences <br> 
  et à améliorer votre compréhension de ces concepts fondamentaux.
  <br><br>
  <strong>Voir aussi :</strong> <em>100 Exercices Corrigés En Algorithme avec les Organigrammes.</em>
</div>

      

         <div class="flex flex-col gap-2">
 
          <div class="ml-180 mt-60 ">
            <div class="bg-white rounded-xl shadow-md p-6 w-full max-w-xs text-center">
    <h2 class="text-xl font-bold text-purple-800 mb-4">Devenez membre</h2>
    <ul class="text-sm text-gray-700 text-left space-y-2 mb-6">
      <li class="flex items-center">
        <span class="text-yellow-500 mr-2">✔️</span> Enregistrez vos scores
      </li>
      <li class="flex items-center">
        <span class="text-yellow-500 mr-2">✔️</span> Gagnez des points
      </li>
      <li class="flex items-center">
        <span class="text-yellow-500 mr-2">✔️</span> Comparez-vous aux autres joueurs
      </li>
    </ul>
    <button class="bg-purple-800 text-white py-2 px-4 rounded-md w-full hover:bg-purple-900 transition">
      Créer mon compte
    </button>
  </div>
     </div>
          <div class="-ml-26 -mt-80">


<img 
  class="w-200"
src="https://www.culturequizz.com/wp-content/uploads/2025/05/Quiz-finistere-2.jpg.webp" alt="">




  
</div>


         </div>
         

      <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div v-if="currentQuestion" class="bg-[#4B2DB3] text-white rounded-3xl shadow-lg p-8 w-230  relative">
      <!-- Numéro de la question -->
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#4B2DB3] px-4 py-1 rounded-full font-bold text-sm shadow">
        QUESTION {{ currentIndex + 1 }} / {{ questions.length }}
      </div>

      <!-- Texte de la question -->
      <div class="text-center text-xl font-semibold mb-6 mt-2">
        {{ currentQuestion.text }}
      </div>

      <!-- Options -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          class="flex items-center justify-start px-4 py-3 rounded-full font-semibold shadow transition"
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

    <!-- Boutons de contrôle -->
    <div v-if="currentQuestion" class="mt-6 flex gap-4 items-center">
      <button
        v-if="!validated"
        @click="validateAnswer"
        class="bg-[#D13661] text-white px-8 py-3 rounded-full w-200 font-semibold shadow hover:bg-[#bf2e58] transition"
        :disabled="!selected"
      >
        Valider <span class="ml-2">✔</span>
      </button>

      <button
        v-if="validated && currentIndex < questions.length - 1"
        @click="nextQuestion"
        class="bg-green-500 text-white px-6 py-3 rounded-full w-200 font-semibold shadow hover:bg-green-600 transition"
      >
        Question suivante
      </button>

      <div
        v-if="validated && currentIndex === questions.length - 1"
        class="text-[#4B2DB3] font-bold text-lg"
      >
        🎉 Quiz terminé !
      </div>
    </div>
  </div>
    
    </div>
  </template>

<script setup>
import { ref, computed } from 'vue'

const questions = ref([
  {
    text: "Quelle est la résidence officielle des souverains britanniques à Londres ?",
    options: [
      { label: 'A', value: 'Tour de Londres' },
      { label: 'B', value: 'Palais de Buckingham' },
      { label: 'C', value: 'Château de Balmoral' },
      { label: 'D', value: 'Palais de Kensington' }
    ],
    correct: 'B'
  },
  {
    text: "Les instructions d’entrée/sortie, d’opération arithmétique et d’affectation de variable sont de quel type de structure ?",
    options: [
      { label: 'A', value: 'Boucle' },
      { label: 'B', value: 'Séquentiel' },
      { label: 'C', value: 'Tableau' },
      { label: 'D', value: 'Sélection' },
      { label: 'E', value: 'Répétition' }
    ],
    correct: 'B'
  },
  {
    text: "Max ← 5 et var ← 2 sont des exemples d’ _________ ?",
    options: [
      { label: 'A', value: 'Affectation de variables' },
      { label: 'B', value: 'Opérations arithmétiques' },
      { label: 'C', value: 'Sortie' },
      { label: 'D', value: 'Entrée' }
    ],
    correct: 'A'
  },
  {
    text: "Lequel des mots suivants ne serait pas utilisé dans une structure de sélection ?",
    options: [
      { label: 'A', value: 'Sinon' },
      { label: 'B', value: 'Alors' },
      { label: 'C', value: 'Si' },
      { label: 'D', value: 'Répéter' }
    ],
    correct: 'D'
  },
  {
    text: "Dans un organigramme, le diamant est utilisé pour _______ ?",
    options: [
      { label: 'A', value: 'Marquer le début et la fin' },
      { label: 'B', value: 'Entrée et sortie' },
      { label: 'C', value: 'Les décisions' },
      { label: 'D', value: 'Traitement' }
    ],
    correct: 'C'
  },
  {
    text: "Qu’est-ce qui manque ? (indice: condition binaire)",
    options: [
      { label: 'A', value: 'Allumé / éteint' },
      { label: 'B', value: 'Oui / Non' },
      { label: 'C', value: 'Vrai / Faux' },
      { label: 'D', value: 'On / Off' }
    ],
    correct: 'C'
  }
])


const currentIndex = ref(0)
const selected = ref(null)
const validated = ref(false)

const currentQuestion = computed(() => questions.value[currentIndex.value])

const selectOption = (optionLabel) => {
  if (!validated.value) {
    selected.value = optionLabel
  }
}

const validateAnswer = () => {
  validated.value = true
}

const nextQuestion = () => {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
    selected.value = null
    validated.value = false
  }
}

// Classes dynamiques selon la sélection et correction
const getOptionClass = (label) => {
  if (!validated.value) {
    return selected.value === label
      ? 'bg-yellow-400 text-[#4B2DB3]'
      : 'bg-white text-[#4B2DB3]'
  }

  if (validated.value) {
    if (label === currentQuestion.value.correct) {
      return 'bg-green-500 text-white'
    }

    if (label === selected.value) {
      return 'bg-yellow-400 text-[#4B2DB3]'
    }

    return 'bg-white text-[#4B2DB3]'
  }
}
</script>