<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

// Query récupérée depuis l'URL (?q=...)
const query = ref(route.query.q || '')

// Toutes les données de cours
const allCourses = ref([])
const loading = ref(false)
const error = ref(null)

const API_URL = import.meta.env.VITE_API_URL || 'https://bacekend-node-js-1.onrender.com'

// 🔄 Met à jour `query` quand l'URL change (utile si on navigue de recherche en recherche)
watch(() => route.query.q, (newQuery) => {
  query.value = newQuery || ''
})

// 🔽 Fetch des cours — une seule fois au début
const fetchCourses = async () => {
  loading.value = true
  error.value = null
  try {
    const res = await axios.get(`${API_URL}/api/dev/all`)
    allCourses.value = res.data
  } catch (err) {
    error.value = 'Erreur lors du chargement des cours.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// 🔍 Recherche locale dans tous les cours
const filteredCourses = computed(() => {
  if (!query.value || query.value.trim() === '') return allCourses.value
  const lower = query.value.toLowerCase()
  return allCourses.value.filter(course =>
    course.title?.toLowerCase().includes(lower)
  )
})

// Charge les cours au premier montage
onMounted(fetchCourses)
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-6">Résultats pour « {{ query }} »</h2>

    <!-- Animation de chargement type Udemy -->
    <div v-if="loading" class="flex justify-center items-center h-32">
      <div class="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
    </div>

    <!-- Message d'erreur -->
    <p v-if="error" class="mb-4 text-red-600">{{ error }}</p>

    <!-- Affichage des cours -->
    <div
      v-if="filteredCourses.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <div
        v-for="course in filteredCourses"
        :key="course.id"
        class="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
      >
        <img
          v-if="course.image"
          :src="course.image"
          alt="course image"
          class="w-full h-40 object-cover"
        />

        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-semibold">{{ course.title }}</h3>
            <span
              v-if="course.badge"
              class="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded"
            >
              {{ course.badge }}
            </span>
          </div>

          <p v-if="course.author" class="text-sm text-gray-600 mb-1">
            Par {{ course.author }}
          </p>
          <p v-if="course.rating" class="text-yellow-500 mb-1">
            ⭐ {{ course.rating }} / 5
          </p>
          <p v-if="course.reviews" class="text-sm text-gray-500 mb-2">
            {{ course.reviews }} avis
          </p>

          <div class="flex items-center gap-2 mt-2">
            <span class="text-green-600 font-bold">
              {{ course.price }} €
            </span>
            <span
              v-if="course.originalPrice"
              class="text-sm line-through text-gray-400"
            >
              {{ course.originalPrice }} €
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Aucun cours -->
    <p v-else class="text-gray-500">Aucun cours trouvé.</p>
  </div>
</template>
