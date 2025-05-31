<!-- CourseCategoryPage.vue -->
<template>
  <div>
    <!-- En-tête -->
    <div class="p-4 font-bold text-2xl">Tous les cours sur le sujet {{ categoryName }}</div>
    
    <!-- Bannière de garantie -->
    <div class="flex items-center w-260 h-20 ml-10 p-4 px-20 border border-gray-300 rounded-xl bg-white">
      <svg class="w-6 h-6 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 18a9 9 0 100-18 9 9 0 000 18z"/>
      </svg>
      <span class="font-bold">Vous n'êtes pas sûr de vous ?</span>
      <span class="ml-1 font-bold">Tous nos cours s'accompagnent d'une garantie satisfait ou remboursé de <strong>30 jours</strong></span>
    </div>
    
    <!-- Filtres et tri -->
    <div class="flex items-center mt-4 ml-10 gap-4">
      <button class="border px-4 py-2 rounded">📂 Filtrer</button>
      <div class="h-22 p-6 bg-white shadow-lg rounded-lg border">
        <h3 class="text-lg font-semibold mb-2">Trier par :</h3>
        <select class="-mt-6">
          <option>Les mieux notés</option>
          <option>Les plus récentes</option>
          <option>Les plus populaires</option>
        </select>
      </div>
    </div>
    
    <!-- Contenu principal -->
    <div class="flex flex-col md:flex-row mt-4 p-0 -ml-20 gap-6">
      <!-- Sidebar des filtres -->
      <div class="flex md:w-1/4">
        <div>
          <!-- Filtre Notes -->
          <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('Notes')">
            Notes
            <span class="whitespace-nowrap px-40">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                   class="size-4 transition-transform duration-200" :class="isOpen.Notes ? 'rotate-180' : ''">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </h2>
          <ul class="space-y-2 mt-2" v-if="isOpen.Notes">
            <li><input type="radio" name="rating" /> ⭐⭐⭐⭐⭐ À partir de 4,5 (319)</li>
            <li><input type="radio" name="rating" /> ⭐⭐⭐⭐☆ À partir de 4 (700)</li>
            <li><input type="radio" name="rating" /> ⭐⭐⭐☆ À partir de 3,5 (768)</li>
            <li><input type="radio" name="rating" /> ⭐⭐⭐☆☆ À partir de 3 (783)</li>
          </ul>
          
          <!-- Tous les autres filtres (Durée, Thème, etc.) -->
          <!-- ... (reproduire la même structure pour chaque filtre) ... -->
        </div>
      </div>
      
      <!-- Liste des cours -->
      <div class="md:w-3/4 p-4 ml-4 -mt-8">
        <p class="text-gray-600 justify-end whitespace-nowrap ml-210">10 000 résultats</p>
        
        <div class="ml-20">
          <div v-for="(course, index) in filteredCourses" :key="index" class="flex w-200 ml-20 p-4 mt-4 gap-4">
            <iframe
    class="w-80 h-40"
    :src="course.image"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
            <div>
              <h3 class="font-bold">{{ course.title }}</h3>
              <p>{{ course.description }}</p>
              <p><strong>{{ course.author }}</strong></p>
              <div class="flex items-center">
                <span class="text-yellow-500">{{ course.rating }}</span>
                <svg class="w-4 h-4 text-yellow-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span class="text-xs text-gray-500 ml-1">({{ course.reviews }})</span>
              </div>
              <p>{{ course.duration }} · {{ course.sessions }} sessions · {{ course.level }}</p>
              <p class="text-red-600 font-bold">
                {{ course.price }} $US
                <span class="text-gray-500 line-through">{{ course.originalPrice }} $US</span>
              </p>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="flex ml-30 px-20 space-x-4 mt-10">
          <button class="w-10 h-10 flex items-center justify-center rounded-full border border-purple-500 text-purple-500 hover:bg-purple-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <div class="flex items-center space-x-2 text-lg font-semibold">
            <span class="text-purple-700">1</span>
            <span class="text-purple-500">2</span>
            <span class="text-purple-500">3</span>
            <span class="text-gray-500">...</span>
            <span class="font-bold text-gray-800">625</span>
          </div>
          
          <button class="w-10 h-10 flex items-center justify-center rounded-full border border-purple-500 text-purple-500 hover:bg-purple-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  categoryName: String,
  coursesData: Array,
  categoryId: String
});

// États des filtres
const isOpen = ref({
  Notes: false,
  video: false,
  categorie2: false,
  Sous_categorie: false,
  niveau: false,
  langue: false,
  prix: false,
  Fonctionnalités: false,
  Sous_titres: false
});

// Fonction pour basculer les filtres
const toggle = (category) => {
  isOpen.value[category] = !isOpen.value[category];
};
const filteredCourses = computed(() => {
  // Filtre par catégorie principale seulement
  return props.coursesData.filter(course => 
    course.categories.includes(props.categoryId)
  );
});
</script>

<style scoped>
/* Styles pour masquer la scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>