<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Principale from '../../views/widgets/Principale.vue'

const route = useRoute()

// Données réactives
const courses2 = ref([])
const cards = ref([])

const module = ref({
  image: 'https://img-c.udemycdn.com/course/480x270/6481159_6f70.jpg',
  title: 'Google Cloud Platform pour Data Engineers : Projet pratique',
  description: "ELT avec BigQuery, GCS, Airflow, Python et SQL - Projet réel sur GCP, de l'ingestion des données au Machine Learning",
  authors: 'Imad BOU AKL et 1 autre',
  updateDate: 'février 2025',
  duration: 8.5,
  lessons: 85,
  level: 'Intermédiaire',
  rating: 4.7,
  reviews: 14,
  isNew: true,
  price: 9.99,
  oldPrice: 44.99
})

const formations = ref([
  { label: 'Désign', route: '/webflutter', isLink: true },
  { label: 'Web Développement', route: '/mobile', isLink: true },
  { label: 'Data Science', isLink: false },
  { label: 'Mobile Développement', route: '/web1', isLink: true },
  { label: 'Programming Languages', isLink: false },
  { label: 'Game Development', isLink: false },
  { label: 'Data Design & Development', isLink: false },
  { label: 'TypeScript', isLink: false },
])


import { firstRow } from '../../data/data'
import { secondRow } from '../../data/data'
// Récupération dynamique selon la catégorie passée dans l'URL
onMounted(async () => {
  const category = route.params.category || 'Finance et Comptabilité'

  try {
    const res = await axios.get(`http://localhost:5000/api/course/domain/${encodeURIComponent(category)}`)
    const fetchedCourses = res.data

    // Séparer les cours avec et sans catégorie
    const withCategories = []
    const withoutCategories = []

    fetchedCourses.forEach(course => {
      if (course.categories && course.categories.length > 0) {
        withCategories.push(course)
      } else {
        withoutCategories.push(course)
      }
    })

    courses2.value = withCategories
    cards.value = withoutCategories

  } catch (error) {
    console.error("Erreur lors de la récupération des cours :", error)
  }
})
</script>

<template>
  <Principale
     :firstRow="firstRow"
      :secondRow="secondRow"
    :coursesData2="courses2"
    categoryId="Finance et Comptabilité"
    :coursesData3="cards"
    :module="module"
    :formations="formations"
  />
</template>
