



<template>
  <heade
    
    categoryName2="Les cours sur les feuilles de styles en cascade (CSS, Cascading Style Sheets) vous enseignent ce langage utilisé pour élaborer des pages Web. Découvrez les bases, comme les sélecteurs, les propriétés et les techniques de responsive design. Le CSS est essentiel pour les développeurs et concepteurs Web qui souhaitent créer des sites Web attrayants et esthétiques."
    categoryId3="Cours sur le sujet CSS"
    />
 <DeveloppementMobile
  
   categoryName1=" CSS et Langage HTML"
    categoryName=" CSS"
   :coursesData="DataCss"
   categoryId="CSS et JavaScript"
  
   :coursesData1="courses1"
   :coursesData2="courses2"
   


 
   

    
 />
</template>

<script setup>


import DeveloppementMobile from '../DeveloppementMobile.vue';
import { DataCss } from '../../data/CssData';
import { courses2 } from '../../data/CssData';
import { courses1 } from '../../data/CssData';

// Import correct
import heade from '../../views/widgets/heade.vue';
import { ImageOff } from 'lucide-vue-next';


// Si vous obtenez toujours une erreur, essayez ceci :
// import { courses } from '@/data/FlutterData.js';
// OU
// import courses from '../data/FlutterData.js';
</script>