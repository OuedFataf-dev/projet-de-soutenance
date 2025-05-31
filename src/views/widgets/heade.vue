<template>

  <div class="px-10 mt-10 p-4">



<router-link 
 to="/visuel"
class="font-bold text-4xl">{{  categoryId3  }}</router-link>
    <p class="mt-4 text-lg  whitespace-pre-line">{{ categoryName2 }}
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
  
</template>



 <script setup>

import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';


import { cards,flutterPageData } from '../../data/data';





const pageData = ref(flutterPageData);



const props = defineProps({
  categoryName2: String,
  categoryId3: {
    type: String,
    required: true
  },
  pageData: {
    type: Object,
    
  },
  cards: {
    type: Array,
    default: () => []
  }
});





const router = useRouter();




</script>

<style scoped>
</style>
