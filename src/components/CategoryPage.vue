<template>
    
    <NavBar/>
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


   
  






<DeveloppementMobile/>
</template>

<script setup>




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
import NavBar from './NavBar.vue';
import Principale from '../views/widgets/Principale.vue';
import DeveloppementMobile from './DeveloppementMobile.vue';



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