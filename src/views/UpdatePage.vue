<template>
  <div class="flex justify-center items-center w-full h-220 bg-blue-400">
    <form @submit.prevent="submitHandler" class="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h2 class="text-2xl font-bold mb-4">Modifier un cours </h2>

      <!-- Informations générales -->
      <div class="space-y-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Titre*</label>
          <input id="title" type="text" v-model="courseData.title" placeholder="Entrez le titre" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="categories">Catégories (séparées par des virgules)</label>
          <input id="categories" type="text" v-model="courseData.categories" placeholder="ex: design,web,popular"
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="image">URL de l'image</label>
          <input id="image" type="text" v-model="courseData.image" placeholder="https://example.com/image.jpg"
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="badge">Badge</label>
          <input id="badge" type="text" v-model="courseData.badge" placeholder="ex: Nouveau, Best Seller"
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="author">Auteur*</label>
          <input id="author" type="text" v-model="courseData.author" placeholder="Nom de l'auteur" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
      </div>

      <!-- Notes et avis -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="rating">Note</label>
          <input id="rating" type="number" step="0.1" min="0" max="5" v-model.number="courseData.rating" placeholder="ex: 4.5"
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="reviews">Nombre d'avis</label>
          <input id="reviews" type="number" min="0" v-model.number="courseData.reviews" placeholder="ex: 120"
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
      </div>

      <!-- Prix -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Prix*</label>
          <input id="price" type="number" step="0.01" min="0" v-model.number="courseData.price" placeholder="ex: 29.99" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="originalPrice">Prix original</label>
          <input id="originalPrice" type="number" step="0.01" min="0" v-model.number="courseData.originalPrice" placeholder="ex: 59.99"
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
      </div>

      <!-- Bouton Submit -->
      <div>
        <button type="submit"
                class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150">
          Mettre à jour
        </button>
      </div>
    </form>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const courseId = route.params.id
const API_URL = import.meta.env.VITE_API_URL || 'https://bacekend-node-js-1.onrender.com';
const courseData = ref({
  title: '',
  categories: '',
  image: '',
  badge: '',
  author: '',
  rating: null,
  reviews: null,
  price: null,
  originalPrice: null,
  description: '',
  domains: [],
  subdomains: [],
  secondSubdomain: [],
  sousSousDomaines: []
})

onMounted(async () => {
  try {
    const response = await axios.get(`${API_URL}/api/admin/courses/id/${courseId}`)
    const data = response.data

    // Parse les champs JSON reçus en chaîne
    data.domains = JSON.parse(data.domains || '[]')
    data.subdomains = JSON.parse(data.subdomains || '[]')
    data.secondSubdomain = JSON.parse(data.secondSubdomain || '[]')
    data.sousSousDomaines = JSON.parse(data.sousSousDomaines || '[]')

    courseData.value = data
  } catch (error) {
    console.error("Erreur lors du chargement du cours :", error)
  }
})

async function submitHandler() {
  try {
    // Convertir les tableaux en JSON avant envoi
    const payload = {
      ...courseData.value,
      domains: JSON.stringify(courseData.value.domains),
      subdomains: JSON.stringify(courseData.value.subdomains),
      secondSubdomain: JSON.stringify(courseData.value.secondSubdomain),
      sousSousDomaines: JSON.stringify(courseData.value.sousSousDomaines)
    }

    const response = await axios.put(`${API_URL}/api/admin/courses/${courseId}`, payload)
    console.log('Modification enregistrée:', response.data)
    alert('Modifications enregistrées avec succès !')
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error)
    alert('Erreur lors de la mise à jour')
  }
}
</script>








