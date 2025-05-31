



<template>
    <heade
      
      categoryName=" Les cours sur HTLM vous apprennent à utiliser la bibliothèque JavaScript afin de créer des interfaces\nutilisateurs. Découvrez comment concevoir des applications Web interactives, une compétence essentielle pour les développeurs front-end et les ingénieurs logiciels qui se concentrent sur le développement Web moderne.."
      categoryId="Cours sur le sujet HTML"
      />
   <DeveloppementMobile
     categoryName="DELEOPEMENT  "
     :coursesData="DataReact"
     categoryId="WEB"
    
     :coursesData1="courses1"
     :coursesData2="courses3"
     

  
   
     

      
   />
 </template>
 
 <script setup>
 import { courses1 } from '../data/data';
 import { courses3 } from '../data/reactData';

 import { DataReact  } from '../data/reactData'; // Import correct
 import heade from '../views/widgets/heade.vue';
 import DeveloppementMobile from './DeveloppementMobile.vue';
 import ComponeVue from './ComponeVue.vue';
 
 // Si vous obtenez toujours une erreur, essayez ceci :
 // import { courses } from '@/data/FlutterData.js';
 // OU
 // import courses from '../data/FlutterData.js';
 </script>