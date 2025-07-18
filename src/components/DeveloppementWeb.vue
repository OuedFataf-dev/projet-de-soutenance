<template>
  <heade
    categoryName2="Les cours sur React JS vous apprennent à utiliser la bibliothèque JavaScript afin de créer des interfaces utilisateurs. Découvrez comment concevoir des applications Web interactives, une compétence essentielle pour les développeurs front-end et les ingénieurs logiciels qui se concentrent sur le développement Web moderne."
    categoryId3="Cours sur le sujet React JS"
  />

  <DeveloppementMobile
    categoryName="Développement web"
    categoryName1="Google Flutter et Dart (langage de programmation)"
    :coursesData1="courses1"
    :coursesData2="courses2"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import heade from '../views/widgets/heade.vue'
import DeveloppementMobile from './DeveloppementMobile.vue'

// Données réactives
const courses1 = ref([]) // Sans catégories
const courses2 = ref([]) // Avec catégories

// Valeur par défaut
const soussousdomaine = 'React JS'
const API_URL = import.meta.env.VITE_APP_API_URL;
onMounted(async () => {
  try {
    const response = await axios.get(`${API_URL}/api/dev/by-soussousdomaine/${encodeURIComponent(soussousdomaine)}`)
    const data = response.data

    console.log('Données brutes récupérées :', data)

    const withCategories = []
    const withoutCategories = []

    data.forEach(course => {
      if (course.categories && course.categories.length > 0) {
        withCategories.push(course)
      } else {
        withoutCategories.push(course)
      }
    })

    console.log('Avec catégories :', withCategories)
    console.log('Sans catégories :', withoutCategories)

    courses1.value = withoutCategories
    courses2.value = withCategories

  } catch (error) {
    console.error('Erreur lors de la récupération des cours :', error)
  }
})
</script>
