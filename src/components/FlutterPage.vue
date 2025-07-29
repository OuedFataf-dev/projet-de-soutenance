<template>
     <heade
       
     categoryName2=" Les cours sur Google Flutter vous font découvrir un kit de développement logiciel d'IU open source créé par Google. Apprenez la création de widgets, la gestion des états et le développement multiplate-forme pour être en mesure de créer des applications de haute qualité pour les environnements mobiles, Web et de bureau à partir d'une base de code unique."
     categoryId3=" Cours sur le sujet Google Flutter"
     />

    <DeveloppementMobile
      
       
      categoryName="Google Flutter"
      categoryName1="Google Flutter et Dart (langage de programmation)"
      
      
      :coursesData="courses"
      categoryId="flutter"
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
const soussousdomaine = 'JavaScript'

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/dev/by-SousSousDomaine/${encodeURIComponent(soussousdomaine)}`)

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
