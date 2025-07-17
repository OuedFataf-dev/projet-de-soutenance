<template>

<div class="flex justify-center items-center w-full h-300 bg-blue-400">
  <form @submit.prevent="submitForm" class="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
    <h2 class="text-2xl font-bold mb-4">Créer un cours</h2>

    <!-- Informations générales -->
    <div class="space-y-4">
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Titre*</label>
        <input id="title" type="text" v-model="title" placeholder="Entrez le titre" required
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="categories">
    Catégories
  </label>
  <select id="categories" v-model="categories" multiple class="block w-full border rounded px-3 py-2">
    <option value="new">New</option>
    <option value="popular">Popular</option>
    <option value="trending">Trending</option>
  </select>
</div>

      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">URL de l'image</label>
        <input id="image" type="text" v-model="image" placeholder="https://example.com/image.jpg"
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="badge">Badge</label>
        <input id="badge" type="text" v-model="badge" placeholder="ex: Nouveau, Best Seller"
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="author">Auteur*</label>
        <input id="author" type="text" v-model="author" placeholder="Nom de l'auteur" required
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
    </div>

    <!-- Notes et avis -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="rating">Note</label>
        <input id="rating" type="number" step="0.1" min="0" max="5" v-model="rating" placeholder="ex: 4.5"
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="reviews">Nombre d'avis</label>
        <input id="reviews" type="number" min="0" v-model="reviews" placeholder="ex: 120"
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
    </div>

    <!-- Prix -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Prix*</label>
        <input id="price" type="number" step="0.01" min="0" v-model="price" placeholder="ex: 29.99" required
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="originalPrice">Prix original</label>
        <input id="originalPrice" type="number" step="0.01" min="0" v-model="originalPrice" placeholder="ex: 59.99"
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description*</label>
  <input id="description" type="text" v-model="description" placeholder="Entrez la description" required
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>

<div>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="list1">List1*</label>
  <input id="list1" type="text" v-model="list1" placeholder="Entrez la première liste" required
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>

<div>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="list2">List2</label>
  <input id="list2" type="text" v-model="list2" placeholder="Entrez la deuxième liste"
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>

<div>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="list3">List3*</label>
  <input id="list3" type="text" v-model="list3" placeholder="Entrez la troisième liste" required
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>



<div>
  <label for="list3" class="block text-gray-700 text-sm font-bold mb-2">
    Vidéo (optionnelle) :
  </label>

  <!-- Affichage d’une vidéo si disponible -->
  <video v-if="list3" :src="list3" controls class="mb-2 w-full max-h-64 rounded shadow"></video>

  <!-- Champ de sélection de fichier vidéo -->
  
   <input type="file" accept="video/*" @change="handleVideoUpload" />

</div>


    </div>

    <!-- Domaine et Sous-domaine -->
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2">Domaine*</label>
      <select v-model="selectedDomaine" required
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400">
        <option value="" disabled>-- Sélectionnez un domaine --</option>
        <option v-for="(sousDomaines, domaine) in domaines_info" :key="domaine" :value="domaine">
          {{ domaine }}
        </option>
      </select>
    </div>

    <!-- Sous-domaine (masqué si onlyDomain est vrai) -->
    <div v-if="!onlyDomain && subdomains.length > 0">
      <label class="block text-gray-700 text-sm font-bold mb-2 mt-4">Sous-domaine</label>
      <select v-model="selectedSousDomaine"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400">
        <option value="">-- Sélectionnez un sous-domaine --</option>
        <option v-for="sousDomaine in subdomains" :key="sousDomaine" :value="sousDomaine">
          {{ sousDomaine }}
        </option>
      </select>
    </div>

    <!-- Sous-sous-domaine (masqué si onlyDomain est vrai) -->
    <div v-if="!onlyDomain && sousSousDomaines.length > 0">
      <label class="block text-gray-700 text-sm font-bold mb-2 mt-4">Catégorie du domaine</label>
      <select v-model="selectedSousSousDomaine"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400">
        <option value="">-- Sélectionnez une catégorie --</option>
        <option v-for="sousSousDomaine in sousSousDomaines" :key="sousSousDomaine" :value="sousSousDomaine">
          {{ sousSousDomaine }}
        </option>
      </select>
    </div>

    <!-- Cases à cocher -->
    <div class="flex items-center mt-4">
      <input type="checkbox" v-model="onlyDomain" id="onlyDomain" 
             class="h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" />
      <label for="onlyDomain" class="text-sm font-bold text-gray-700 ml-2">
        Ajouter uniquement au domaine (pas de sous-domaines)
      </label>
    </div>

    <div class="flex items-center mt-4">
      <input type="checkbox" v-model="enableSecondSubdomain" id="enableSecondSubdomain"
             class="h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" />
      <label for="enableSecondSubdomain" class="text-sm font-bold text-gray-700 ml-2">
        Ajouter un deuxième sous-domaine
      </label>
    </div>

    <!-- Deuxième sous-domaine (visible si enableSecondSubdomain est vrai) -->
    <div v-if="enableSecondSubdomain && selectedDomaine && subdomains.length > 0">
      <label class="block text-gray-700 text-sm font-bold mb-2 mt-4">Deuxième sous-domaine</label>
      <select v-model="selectedSecondSubdomain"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400">
        <option value="">-- Sélectionnez un deuxième sous-domaine --</option>
        <option v-for="sousDomaine in subdomains" 
                :key="'second-'+sousDomaine" 
                :value="sousDomaine"
                :disabled="sousDomaine === selectedSousDomaine">
          {{ sousDomaine }}
        </option>
      </select>
    </div>

    <!-- Bouton Submit -->
    <div>
      <button type="submit"
              class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
              :disabled="!submitForm">Créer le cours</button>
    </div>
  </form>


  </div>

</template>



<script setup>

import { ref, computed } from 'vue'
import axios from 'axios'
import { list } from 'postcss'
const API_URL = process.env.VUE_APP_API_URL;
const title = ref('')

const description = ref('')

const list1 = ref('')
const videoFile = ref(null)


const list2 = ref('')

const list3 = ref('')

const categories = ref('')
const image = ref('')
const badge = ref('')
const author = ref('')
const video = ref(null)

const rating = ref(0)
const reviews = ref(0)
const price = ref(0)
const originalPrice = ref(0)


const domaines_info = {
  "Deep learning": {},
  "Statistique": {},
  "React js": {},
  "Vue js": {},
  "Angular": {},
  "PhP": {},
  "Science de Données":{},

  "Python": {
    "Comptabilité générale": [
      "Comptabilité analytique",
      "Normes IFRS",
      "Audit financier",
      "Gestion budgétaire"
    ],
  },
  "Flutter": {},
  "Kotlin": {},
  "ChatGPT": {},
  "Node js": {
    "Comptabilité générale": [
      "Comptabilité analytique",
      "Normes IFRS",
      "Audit financier",
      "Gestion budgétaire"
    ],
  },
  "Machine learning": {},
  "Finance et Comptabilité": {
    "Comptabilité générale": [
      "Comptabilité analytique",
      "Normes IFRS",
      "Audit financier",
      "Gestion budgétaire"
    ],
    "Fiscalité": [
      "Fiscalité des entreprises",
      "TVA et autres taxes",
      "Déclarations fiscales"
    ]
  },
  "Informatique et Logiciel": {
    "Développement Web": [
      "HTML/CSS",
      "JavaScript",
      "Vue.js",
      "React"
    ],
    "Développement Mobile": [
      "Flutter",
      "React Native",
      "Swift pour iOS",
      "Kotlin pour Android"
    ]
  },
  "Marketing": {
    "Méthodes classiques": [
      "Cycle en V",
      "Diagramme de Gantt"
    ],
    "Méthodes agiles": [
      "Scrum",
      "Kanban",
      "Lean"
    ]
  }
};

const selectedDomaine = ref('')
const selectedSousDomaine = ref('')
const selectedSousSousDomaine = ref('')
const selectedSecondSubdomain = ref('')
const onlyDomain = ref(false)
const enableSecondSubdomain = ref(false)





const handleVideoUpload = (e) => {
  videoFile.value = e.target.files[0]
}


const subdomains = computed(() => {
  return selectedDomaine.value && domaines_info[selectedDomaine.value]
    ? Object.keys(domaines_info[selectedDomaine.value])
    : []
})

const sousSousDomaines = computed(() => {
  if (!selectedDomaine.value || !selectedSousDomaine.value) return []
  return domaines_info[selectedDomaine.value][selectedSousDomaine.value] || []
})

const submitForm = async () => {
  const formData = new FormData()

  formData.append('title', title.value)
  formData.append('description', description.value)
  formData.append('list1', list1.value)
  formData.append('list2', list2.value)
  formData.append('list3', list3.value)
  formData.append('image', image.value)
  formData.append('badge', badge.value || '')
  formData.append('author', author.value)
  formData.append('rating', rating.value)
  formData.append('reviews', reviews.value)
  formData.append('price', price.value)
  formData.append('originalPrice', originalPrice.value)
 formData.append('categories', JSON.stringify([categories.value]))


  // 🔁 Ajouter le fichier vidéo si sélectionné
  if (videoFile.value) {
    formData.append('video', videoFile.value)
  }

  // --- Gestion des domaines ---
  if (selectedSousSousDomaine.value) {
    formData.append('sousSousDomaines', JSON.stringify([selectedSousSousDomaine.value]))
  } else if (enableSecondSubdomain.value) {
    formData.append('secondSubdomain', JSON.stringify([selectedSecondSubdomain.value]))
  } else {
    if (selectedDomaine.value) {
      formData.append('domains', JSON.stringify([selectedDomaine.value]))
    }
    if (selectedSousDomaine.value) {
      formData.append('subdomains', JSON.stringify([selectedSousDomaine.value]))
    }
  }

  console.log('--- Données du formulaire ---')
  for (let pair of formData.entries()) {
    console.log(`${pair[0]}:`, pair[1])
  }

  try {
    const response = await axios.post(`${API_URL}/api/dev/create`  , formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log('Cours créé avec succès :', response.data)
    alert('Cours créé avec succès !')
  } catch (error) {
    console.error('Erreur lors de la création du cours :', error.response?.data || error.message)
    alert('Erreur lors de la création du cours.')
  }
}





</script>
