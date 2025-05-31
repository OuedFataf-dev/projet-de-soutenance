<template>
    
    
  <div class="px-10 p-4">



<h1 class="font-bold text-4xl">{{ pageData.title }}</h1>
    <p class="mt-4 text-lg">{{ pageData.description }}
    </p>

    <div class="mt-6 flex space-x-10">
      <div>
        <p class="text-gray-500">Nombre de participants</p>
        <p class="text-2xl font-bold">3 499 413</p>
      </div>
      <div>
        <p class="text-gray-500">Nombre de cours</p>
        <p class="text-2xl font-bold">492</p>
      </div>
      <div>
        <p class="text-gray-500">Nombre d'exercices pratiques</p>
        <p class="text-2xl font-bold">303</p>
      </div>
      <div>
        <p class="text-gray-500">Note moyenne de cours</p>
        <p class="text-2xl font-bold flex items-center">
          4,5 <span class="text-yellow-500 ml-1">★</span>
        </p>
      </div>
    </div>

    <div class="mt-6 flex space-x-4">
    <div class="py-2 font-bold text-xl">Associées</div>
    <span 
      v-for="(tag, index) in pageData.tags" 
      :key="index"
      class="px-4 py-2 bg-white font-bold border text-black rounded cursor-pointer hover:bg-gray-100"
      @click="navigateToCategory(tag)"
    >
      {{ tag }}
    </span>
  </div>
  
  </div>




  <div class="category-page">


     <div>
    </div>
  </div>
  <div class=" mt-10 bg-white px-10  py-2 h-200 w-full ">


    <div class="flex items-center w-300 mt-10 py-2 border rounded-lg shadow-md overflow-hidden h-130">
          <!-- Image du cours -->
         <div class="">
          <h2 class="text-2xl px-2 font-bold">
            Vous souhaitez améliorer vos compétences sur le <br> sujet React JS? Nous avons ce qu'il vous faut.
          </h2>
          <p class="mt-2 text-gray-700 px-2">
            Retrouvez tout ce dont vous avez besoin pour atteindre <br> vos objectifs dans un lot pratique.
          </p>
          <ul class="mt-4 space-y-2  px-2text-gray-600">
            <li class="flex px-2 items-center">
              ✅ Cours parmi les mieux notés
            </li>
            <li class="flex px-2 items-center">
              ✅ Populaires auprès de participants au profil similaire au vôtre
            </li>
            <li class="flex px-2 items-center">
              ✅ Conseils dispensés par des formateurs confirmés
            </li>
          </ul>
          <p class="mt-4 text-lg  px-2 font-bold">
            Total : <span class="text-purple-600 text-xl">22.98 $US</span> <span class="line-through text-gray-500">134.98 $US</span>
          </p>
        
          <button class="px-2 mt-4 bg-purple-600 text-white px-8 ml-5 py-3 rounded-lg font-semibold w-130 hover:bg-purple-700">
            Tout ajouter au panier
          </button>
        
         </div>
        <div class="p-5 w-2/3 flex space-x-4 flex-wrap">
    <div
      v-for="course in courses"
      :key="course.id"
      class="card bg-white shadow-sm w-80 h-auto mb-6"
    >
      <img :src="course.image" :alt="course.title" class="w-full h-40 object-cover" />
      <div class="card-body mt-12 px-4 pb-4">
        <h2 class="card-title text-lg font-bold">{{ course.title }}</h2>
        <p class="text-xs text-gray-600">{{ course.author }}</p>
        <div class="flex items-center">
          <span class="text-yellow-500 font-semibold text-sm">{{ course.rating }}</span>
          <span class="text-yellow-500">⭐</span>
          <span class="text-xs text-gray-500">({{ course.reviews }})</span>
        </div>
        <div class="flex items-center">
          <span class="text-lg font-bold text-black">{{ course.price }} $US</span>
          <span class="text-sm text-gray-500 line-through ml-2">{{ course.originalPrice }} $US</span>
        </div>
        <span
          v-if="course.badge"
          class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md inline-block mt-2"
        >
          {{ course.badge }}
        </span>
      </div>
    </div>
  </div>


                     </div>

         
 
     </div>


    <Principale/>
  




    


</template>

<script setup>

import Principale from '../views/widgets/Principale.vue';
import WebCategorie from '@/components/WebCategorie.vue';

// Vous pouvez utiliser les props de route si nécessaire
const props = defineProps({
  categorySlug: {
    type: String,
    required: false
  }
});





import { ref, computed } from 'vue';

import { webDevData ,webDevDat} from '../data/data';



const courses = webDevDat;


const pageData = ref(webDevData);


// si vous voulez charger des données dynamiques
</script>

<style scoped>
.category-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>