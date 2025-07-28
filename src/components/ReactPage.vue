<template>
     <heade
       
     categoryName2="Les cours sur React JS vous apprennent à utiliser la bibliothèque JavaScript afin de créer des interfaces\nutilisateurs. Découvrez comment concevoir des applications Web interactives, une compétence essentielle pour les développeurs front-end et les ingénieurs logiciels qui se concentrent sur le développement Web moderne."
     categoryId3="Cours sur le sujet React JS"
     />

    <DeveloppementMobile
      
       
      categoryName="React JS pour le web"
      categoryName1="React  (Bibliothèque)"
      
      
      :coursesData="courses"
      categoryId="React js"
      :coursesData1="courses1"
      :coursesData2="courses2"
    />
   


  </template>


<script setup>
import { ref, onMounted } from 'vue'
import heade from '../views/widgets/heade.vue'
import DeveloppementMobile from './DeveloppementMobile.vue'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'https://bacekend-node-js-1.onrender.com';

// Données réactives
const courses1 = ref([]) // Sans categories
const courses2 = ref([]) // Avec categories
const courses = ref([]) 

// Exemple : valeur par défaut
const soussousdomaine = 'React js'

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/dev/by-soussousdomaine/${encodeURIComponent(soussousdomaine)}`)
    const data = await res.json()

    // Séparer les cours selon présence de categories
    const withCategories = []
    const withoutCategories = []

    data.forEach(course => {
      if (course.categories && course.categories.length > 0) {
        withCategories.push(course)
      } else {
        withoutCategories.push(course)
      }
    })

    courses1.value = withoutCategories
    courses2.value = withoutCategories
    courses2.value = withCategories

  } catch (error) {
    console.error('Erreur lors de la récupération des cours :', error)
  }
})
</script>
