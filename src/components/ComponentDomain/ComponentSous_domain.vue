<template>
    <nav class="bg-white shadow-lg  py- -mt-6" >
     
  
      <!-- Menu catégories -->
  
           <div></div>
  
      <div class="text-center shadow-6xl" style="box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);"></div>
    <div class="bg-white py-4 mt-5">
      <div class="container hidden md:flex space-x-4 px-4">
        <template v-for="(item, index) in formations.slice(0, 6)" :key="index">
          <a 
            v-if="item.isLink" 
            :href="item.route" 
            class="text-gray-700 hover:text-purple-600"
          >
            {{ item.label }}
          </a>
          <a 
            v-else 
            href="#" 
            class="text-gray-700 hover:text-purple-600"
          >
            {{ item.label }}
          </a>
        </template>
      </div>
    </div>
  
  
     
    </nav>


    
  
  
  
  
   
      
  
  
     
  </template>
  
  <script setup>
  
  import { ref, computed } from 'vue';

  import { cards } from '../../data/data';



  import AppFooter from '../../components/AppFooter.vue';
  
  
 

import { useCartStore } from '../../stores/cartStore';

const cartStore = useCartStore()

function ajouterAuPanier(course) {
  console.log('Cours reçu:', course)
  if (!course || !course.id) {
    console.error('Objet course invalide:', course)
    return
  }
  cartStore.addCourse(course)
}

  
  const dataweb = ref(cards);
  // Variables réactives
  const currentIndex = ref(0);
  const showMore = ref(false);
  const scrollContainer = ref(null);
  const isOpen = ref({
    video: false,
    categorie2: false, // Ajoute d'autres catégories ici
  });
  
  
     
   const hoveredIndex = ref(null);
  
  function showTooltip(index) {
    hoveredIndex.value = index;
  }
  
  function hideTooltip() {
    hoveredIndex.value = null;
  }
  
  
  
  
  const props1 = defineProps({
    categoryName: String,
    coursesData: Array,
    categoryId: String,
    coursesData2: Array,
    coursesData3: Array,
    firstRow:Array,
    secondRow:Array,
    module:Array,
    formations:Array,
  
   initialCategory: {
      type: String,
      default: 'popular'
    },
  });
  
  
  
  // Dans votre script
  console.log("Données reçues dans props:", {
    categoryName: props1.categoryName,
    coursesData: props1.coursesData,
    coursesData2: props1.coursesData2,
    coursesData3: props1.coursesData3,
    categoryId: props1.categoryId,
   
  });
  
  
  
  
  const activeTab = ref(props1.initialCategory); // Onglet actif par défaut
  
  // Vérification que les données sont bien présentes dans props.coursesData2
  const courses = computed(() => {
    if (!props1.coursesData2 || props1.coursesData2.length === 0) {
      console.warn("Aucune donnée de cours disponible.");
      return [];  // Retourne un tableau vide si les données sont manquantes
    }
    return props1.coursesData2;  // Utilise les données passées par les props
  });
  // Calcul de la pagination des groupes de cours en fonction de la catégorie sélectionnée
  const filteredCourses = computed(() => {
    const category = activeTab.value;
    return courses.value.filter(course => course.categories.includes(category));
  });
  
  // Calcul de la pagination des groupes de cours
  const groupedCourses = computed(() => {
    const groupSize = 4;
    const groups = [];
    const filtered = filteredCourses.value;
    for (let i = 0; i < filtered.length; i += groupSize) {
      groups.push(filtered.slice(i, i + groupSize));
    }
    return groups;
  });
  
  
  
  
   // Onglet actif par défaut
  
  
  const tabs = [
    { id: 'popular', label: 'Le plus populaire' },
    { id: 'trending', label: 'Tendance' },
    { id: 'new', label: 'Nouveau' }
  ];
  
  
  
  
  
  // Méthodes pour gérer les groupes de cours
  const nextGroup = () => {
  if (currentIndex.value < groupedCourses.value.length - 1) {
    currentIndex.value++;
  }
  };
  
  const prevGroup = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
  };
  
  
  
  // Fonction pour basculer l'état des catégories
  const toggle = (category) => {
  isOpen.value[category] = !isOpen.value[category];
  };
  
  // Changer la vue des cartes
  const toggleCards = () => {
  showMore.value = !showMore.value;
  };
  
  
  
  </script>
  <style scoped>
  .scrollbar-hide::-webkit-scrollbar {
   display: none;
  }
  .scrollbar-hide {
   -ms-overflow-style: none;
   scrollbar-width: none;
  }
  </style>
  
  
  