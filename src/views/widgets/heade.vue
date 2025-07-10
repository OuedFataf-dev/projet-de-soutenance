<template>

  <div class="px-10 mt-10 p-4">



<router-link 
 to="/visuel"
class="font-bold text-4xl">{{  categoryId3  }}</router-link>
    <p class="mt-4 text-lg  whitespace-pre-line">{{ categoryName2 }}
    </p>

    <div class="mt-6 relative">
  <!-- Conteneur scrollable horizontal -->
  <div class="flex overflow-x-auto space-x-6 md:space-x-10 scrollbar-hide md:overflow-visible">
    <div class="min-w-[200px] flex-shrink-0">
      <p class="text-gray-500">Nombre de participants</p>
      <p class="text-2xl font-bold">3 499 413</p>
    </div>
    <div class="min-w-[200px] flex-shrink-0">
      <p class="text-gray-500">Nombre de cours</p>
      <p class="text-2xl font-bold">492</p>
    </div>
    <div class="min-w-[200px] flex-shrink-0">
      <p class="text-gray-500">Nombre d'exercices pratiques</p>
      <p class="text-2xl font-bold">303</p>
    </div>
    <div class="min-w-[200px] flex-shrink-0">
      <p class="text-gray-500">Note moyenne de cours</p>
      <p class="text-2xl font-bold flex items-center">
        4,5 <span class="text-yellow-500 ml-1">★</span>
      </p>
    </div>
  </div>

  <!-- Icône flèche discrète uniquement sur mobile -->
  <div class="absolute right-0 top-1/2 -translate-y-1/2 pr-2 md:hidden pointer-events-none">
    <span class="text-gray-400 text-sm">➔</span> <!-- taille réduite -->
  </div>
</div>



 <div class="mt-6 relative overflow-x-auto" ref="scrollContainer">
    <!-- Conteneur scrollable -->
    <div class="flex space-x-4 w-max pr-6">
      <div class="hidden md:block py-2 font-bold text-xl flex-shrink-0">Associées</div>
      <span
        v-for="(tag, index) in localPageData.tags"
        :key="index"
        class="px-4 py-2 bg-white font-bold border text-black rounded cursor-pointer hover:bg-gray-100 flex-shrink-0"
        @click="onTagClick(index)"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Petite flèche visible sur mobile -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 md:hidden pointer-events-none pr-2">
      <span class="text-red-600 text-xl">➔</span>
    </div>
  </div>


   

  </div>
  
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { cards as allCards, flutterPageData } from '../../data/data'

// Props
const props = defineProps({
  categoryName2: String,
  categoryId3: {
    type: String,
    required: true
  },
  pageData: {
    type: Object
  },
  cards: {
    type: Array,
    default: () => []
  }
})

// Données locales
const router = useRouter()
const localPageData = ref(props.pageData || flutterPageData)
const scrollContainer = ref(null)

// Méthodes
function navigateToCategory(tag) {
  console.log('Navigating to', tag)
  // Ex : router.push({ name: 'TagPage', params: { tag } })
}

function onTagClick(index) {
  const tags = localPageData.value.tags
  navigateToCategory(tags[index])

  if (index === tags.length - 1 && scrollContainer.value) {
    scrollContainer.value.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  }
}
</script>


<style scoped>
</style>
