<template>








<div class="p-4 font-bold text-2xl">Tous les cours sur le sujet Google Flutter</div>
    
    
    
    
    <div class="flex items-center w-260 h-20 ml-10 p-4 px-20 border border-gray-300 rounded-xl bg-white">
      <svg class="w-6 h-6 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 18a9 9 0 100-18 9 9 0 000 18z"/>
      </svg>
      <span class="font-bold">Vous n'êtes pas sûr de vous ?</span>
      <span class="ml-1 font-bold ">Tous nos cours s'accompagnent d'une garantie satisfait ou remboursé de <strong>30  jours</strong></span>
    </div>
    
    
    <div class="flex items-center mt-4 ml-10 gap-4">
      <button class="border px-4 py-2 rounded">📂 Filtrer</button>
               
      <div class="h-22 p-6 bg-white shadow-lg rounded-lg border">
      <h3 class="text-lg font-semibold mb-2"><Tarea:c>Trier </Tarea:c> par :</h3>
      
      <select class="-mt-6 ">
        <option>Les mieux notés</option>
        <option>Les plus récentes</option>
        <option>Les plus populaires</option>
      </select>
    </div>
    </div>
    
    <div class="flex flex-col md:flex-row mt-4 p-0 -ml-20 gap-6">
      <div class=" flex md:w-1/4  ">
          <h3 class=" ml-30 font-bold"></h3>
    
         
          <div>
    
    <div>
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
      <li>
        <input type="radio" name="rating" />
        ⭐⭐⭐⭐⭐ À partir de 4,5 (319)
      </li>
      <li>
        <input type="radio" name="rating" />
        ⭐⭐⭐⭐☆ À partir de 4 (700)
      </li>
      <li>
        <input type="radio" name="rating" />
        ⭐⭐⭐☆ À partir de 3,5 (768)
      </li>
      <li>
        <input type="radio" name="rating" />
        ⭐⭐⭐☆☆ À partir de 3 (783)
      </li>
    </ul>
    
         
      <div class=" border-t-2 border-gray-200 -ml-5  w-100 mt-5  bg-gray-100"></div>
      <!-- Durée de la vidéo -->
      <h2 class="font-bold mt-4  flex items-center cursor-pointer" @click="toggle('video')">
        Durée 
        <span class="whitespace-nowrap ml-40">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               class="size-4 transition-transform duration-200" :class="isOpen.video ? 'rotate-180' : ''">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </h2>
    
      <ul class="space-y-2 mt-2" v-if="isOpen.video">
        <li><input type="checkbox"> 0 à 1 heure (920)</li>
        <li><input type="checkbox"> 1 à 3 heures (3 161)</li>
        <li><input type="checkbox"> 3-6 heures (2 650)</li>
        <li><input type="checkbox" disabled> 6-17 heures (3 543)</li>
      </ul>
    
        
      <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>
      
      
      <!-- Catégorie 2 -->
      <h2 class="font-bold mt-4  flex items-center cursor-pointer" @click="toggle('categorie2')">
           Thème
        <span class="whitespace-nowrap px-40">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               class="size-4 transition-transform duration-200" :class="isOpen.categorie2 ? 'rotate-180' : ''">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </h2>
    
      <ul class="space-y-2 mt-2" v-if="isOpen.categorie2">
        <li><input type="checkbox"> JavaScript</li>
        <li><input type="checkbox"> Python</li>
        <li><input type="checkbox"> Java</li>
        <li><input type="checkbox"> C++</li>
        <li><input type="checkbox"> C#</li>
        <li><input type="checkbox"> PHP</li>
        <li><input type="checkbox"> Swift</li>
        <li><input type="checkbox"> Kotlin</li>
        <li><input type="checkbox"> HTML</li>
        <li><input type="checkbox"> CSS</li>
    </ul>
        
      <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>
      
      <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('Sous_categorie')">
        Sous categorie
       
        <span class="whitespace-nowrap    ml-24">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               class="size-4 transition-transform duration-200" :class="isOpen.Sous_categorie ? 'rotate-180' : ''">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </h2>
    
      <ul class="space-y-2 mt-2" v-if="isOpen.Sous_categorie">
      <li><input type="checkbox"> Développement Web</li>
      <li><input type="checkbox"> Développement Mobile</li>
      <li><input type="checkbox"> Sécurité Logicielle</li>
      <li><input type="checkbox"> Cybersécurité</li>
      <li><input type="checkbox"> Design</li>
      <li><input type="checkbox"> Infographie</li>
      <li><input type="checkbox"> Réseaux</li>
      <li><input type="checkbox"> Développement Jeux Vidéo</li>
      <li><input type="checkbox"> Intelligence Artificielle</li>
      <li><input type="checkbox"> Cloud Computing</li>
    </ul>
    
      <div class=" border-t-2 border-gray-200 -ml-5  mt-5  w-90 bg-gray-100"></div>
      
    
    
      <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('niveau')">
           niveau
        <span class="whitespace-nowrap px-41">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               class="size-4 transition-transform duration-200" :class="isOpen.niveau ? 'rotate-180' : ''">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </h2>
    
      <ul class="space-y-2 mt-2" v-if="isOpen.niveau">
        <li><input type="checkbox"> Tous les niveaux (920)</li>
        <li><input type="checkbox">  debutant (45)</li>
        <li><input type="checkbox"> intermédiaire (110)</li>
        <li><input type="checkbox" disabled> confirmés(6)</li>
      </ul>
         
      <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>
      <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('langue')">
          Langues
        <span class="whitespace-nowrap px-38">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               class="size-4 transition-transform duration-200" :class="isOpen.langue ? 'rotate-180' : ''">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </h2>
      <ul class="space-y-2 mt-2" v-if="isOpen.langue">
        <li><input type="checkbox"> Français</li>
        <li><input type="checkbox"> Anglais</li>
        <li><input type="checkbox"> Espagnol</li>
        <li><input type="checkbox"> Allemand</li>
        <li><input type="checkbox"> Italien</li>
        <li><input type="checkbox"> Portugais</li>
        <li><input type="checkbox"> Néerlandais</li>
        <li><input type="checkbox"> Russe</li>
        <li><input type="checkbox"> Arabe</li>
        <li><input type="checkbox"> Chinois (Mandarin)</li>
        <li><input type="checkbox"> Japonais</li>
        <li><input type="checkbox"> Coréen</li>
        <li><input type="checkbox"> Turc</li>
        <li><input type="checkbox"> Hindi</li>
        <li><input type="checkbox"> Bengali</li>
        <li><input type="checkbox"> Ourdou</li>
        <li><input type="checkbox"> Vietnamien</li>
        <li><input type="checkbox"> Thaï</li>
        <li><input type="checkbox"> Grec</li>
        <li><input type="checkbox"> Hébreu</li>
    </ul>
    
         
      <div class=" border-t-2 border-gray-200 -ml-20  mt-5  bg-gray-100"></div>
    
      <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('prix')">
           prix
        <span class="whitespace-nowrap px-46">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               class="size-4 transition-transform duration-200" :class="isOpen.prix ? 'rotate-180' : ''">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </h2>
    
      <ul class="space-y-2 mt-2" v-if="isOpen.prix">
        <li><input type="checkbox"> payant</li>
        <li><input type="checkbox"> gratuit</li>
        
      </ul>
         
      <div class=" border-t-2 border-gray-200 -ml-5 w-100 mt-5  bg-gray-100"></div>
      <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('Fonctionnalités')">
           Fonctionnalités
        <span class="whitespace-nowrap px-25">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               class="size-4 transition-transform duration-200" :class="isOpen.Fonctionnalités ? 'rotate-180' : ''">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </h2>
    
      <ul class="space-y-2 mt-2" v-if="isOpen.Fonctionnalités">
        <li><input type="checkbox"> sous-titres (290)</li>
        <li><input type="checkbox"> Questionnaires(50)</li>
        <li><input type="checkbox"> Exercices de codage  (2)</li>
        <li><input type="checkbox" disabled> Exercices  pratiques (10)</li>
      </ul>
         
      <div class=" border-t-2 border-gray-200 -ml-5 w-100  mt-5  bg-gray-100"></div>
      <h2 class="font-bold mt-4 flex whitespace-nowrap items-center cursor-pointer" @click="toggle('Sous_titres')">
           Sous-titres
        <span class="whitespace-nowrap px-33">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               class="size-4 transition-transform duration-200" :class="isOpen.Sous_titres ? 'rotate-180' : ''">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </h2>
    
      <ul class="space-y-2 mt-2" v-if="isOpen.Sous_titres">
        <li><input type="checkbox"> Français</li>
        <li><input type="checkbox"> Anglais</li>
        <li><input type="checkbox"> Espagnol</li>
        <li><input type="checkbox"> Allemand</li>
        <li><input type="checkbox"> Italien</li>
        <li><input type="checkbox"> Portugais</li>
        <li><input type="checkbox"> Néerlandais</li>
        <li><input type="checkbox"> Russe</li>
        <li><input type="checkbox"> Arabe</li>
        <li><input type="checkbox"> Chinois (Mandarin)</li>
        <li><input type="checkbox"> Japonais</li>
        <li><input type="checkbox"> Coréen</li>
        <li><input type="checkbox"> Turc</li>
        <li><input type="checkbox"> Hindi</li>
        <li><input type="checkbox"> Bengali</li>
        <li><input type="checkbox"> Ourdou</li>
        <li><input type="checkbox"> Vietnamien</li>
        <li><input type="checkbox"> Thaï</li>
        <li><input type="checkbox"> Grec</li>
        <li><input type="checkbox"> Hébreu</li>
    </ul>
    
    <div class=" border-t-2 border-gray-200 -ml-5 w-100 mt-5  bg-gray-100"></div>
     
    
      <!-- Ajoute d'autres catégories ici -->
    </div>
    
    
    
    </div>
      </div>
      
      <div class="md:w-3/4 p-4 ml-4 -mt-8">
          <p class="text-gray-600 justify-end  whitespace-nowrap  ml-210 ">10 000 résultats</p>
          
        <div class="ml-20">
            <div v-for="(item, index) in dataweb" :key="index" class="flex w-200 ml-20 p-4 mt-4 gap-4">
  <iframe
    class="w-80 h-40"
    :src="item.image"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
  <div>
    <h3 class="font-bold">{{ item.title }}</h3>
    <p>{{ item.description }}</p>
    <p><strong>{{ item.author }}</strong></p>
    <p>⭐ {{ item.rating }} ({{ item.reviews }})</p>
    <p>{{ item.duration }} · {{ item.sessions }} sessions · {{ item.level }}</p>
    <p class="text-red-600 font-bold">
      {{ item.price }} $US
      <span class="text-gray-500 line-through">{{ item.originalPrice }} $US</span>
    </p>
  </div>
</div>
        </div>
                   
      <div class=" border-t-2 border-gray-200 ml-50  mt-5 w-180  bg-gray-100"></div>
    
             
            
    
    
    
      
    
    
       <div class="ml-50 ">
                    
    <div class="border rounded-lg p-6  max-w-4xl h-60 mt-5 w-180  mx-auto shadow-sm bg-white">
      <!-- Titre -->
      <h2 class="text-xl font-bold">Les meilleures entreprises font confiance à Udemy</h2>
      <p class="text-gray-600 mt-1">
        Offrez aux membres de votre équipe un accès à plus de 250 000 cours parmi les meilleurs d'Udemy
      </p>
    
      <!-- Logos des entreprises -->
      <div class="flex items-center space-x-6 mt-4">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq" class="h-8 grayscale">
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="Volkswagen" class="h-8 grayscale">
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="NetApp" class="h-8 grayscale">
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite" class="h-8 grayscale">
      </div>
    
      <!-- Bouton -->
      <button class="mt-4 px-4 py-2 border border-purple-600 text-purple-600 font-semibold rounded-md hover:bg-purple-600 hover:text-white transition">
        Essayer Udemy Business
      </button>
    </div>
       </div>

       <div class=" border-t-2 border-gray-200 ml-50  mt-5 w-180  bg-gray-100"></div>
    
    <div class="flex  w-200 ml-40 p-4 mt-2 gap-4">
            <iframe class="w-80 h-40" src="https://www.youtube.com/embed/SXmWVboohsA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <div>
                  <h3 class="font-bold">Flexbox CSS | Le programme Ultime par la pratique</h3>
                  <p>Apprendre Flexbox CSS par la pratique</p>
                  <p><strong>Mathias Grdl</strong></p>
                  <p>⭐ 5,0 (5)</p>
                  <p>2,5 heures au total · 32 sessions · Tous les niveaux</p>
                  <p class="text-red-600 font-bold">9,99 $US <span class="text-gray-500 line-through">19,99 $US</span></p>
              </div>
                
          </div>
      
                
            

              <div class="flex ml-30  px-20 space-x-4 mt-10">
      <!-- Bouton Précédent -->
      <button class="w-10 h-10 flex items-center justify-center rounded-full border border-purple-500 text-purple-500 hover:bg-purple-100 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
    
      <!-- Numéros de page -->
      <div class="flex items-center space-x-2 text-lg font-semibold">
        <span class="text-purple-700">1</span>
        <span class="text-purple-500">2</span>
        <span class="text-purple-500">3</span>
        <span class="text-gray-500">...</span>
        <span class="font-bold text-gray-800">625</span>
      </div>
    
      <!-- Bouton Suivant -->
      <button class="w-10 h-10 flex items-center justify-center rounded-full border border-purple-500 text-purple-500 hover:bg-purple-100 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
    
          
    
    
    
      </div>
    
    
      
    </div>
    
    
           
    
    
              <AppFooter/>
                
                 
                
         





 
    </template>
    
    
    

<script setup>
import { ref, computed } from 'vue';
import { cards } from '../../data/data';

const dataweb = ref(cards);
// Variables réactives
const currentIndex = ref(0);
const showMore = ref(false);
const scrollContainer = ref(null);
const isOpen = ref({
  video: false,
  categorie2: false, // Ajoute d'autres catégories ici
});

const activeTab = ref('popular'); // Onglet actif par défaut

// Données des cours
const courses = ref([
  {
    id: 1,
    title: 'Next.js pour les débutants',
    categories: ['popular', 'new'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Meilleure vente',
    author: 'Alexandre Durand',
    rating: 4.7,
    reviews: 876,
    price: 14.99,
    originalPrice: 64.99
  },
  {
    id: 3,
    title: 'Next.js pour les débutants',
    categories: ['popular', 'new'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Meilleure vente',
    author: 'Alexandre Durand',
    rating: 4.7,
    reviews: 876,
    price: 14.99,
    originalPrice: 64.99
  },
  {
    id: 4,
    title: 'JavaScript Avancé',
    categories: ['trending'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Meilleure vente',
    author: 'Sophie Martin',
    rating: 4.8,
    reviews: 2345,
    price: 11.99,
    originalPrice: 69.99
  },
  {
    id: 5,
    title: 'Vue 3 Complet',
    categories: ['popular'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Nouveau',
    author: 'Lucas Petit',
    rating: 4.9,
    reviews: 982,
    price: 13.99,
    originalPrice: 69.99
  },
  {
    id: 6,
    title: 'Python pour débutants',
    categories: ['popular'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Meilleure vente',
    author: 'Nina Lefevre',
    rating: 4.6,
    reviews: 1234,
    price: 12.99,
    originalPrice: 59.99
  },
  {
    id: 7,
    title: 'Vue 3 Complet',
    categories: ['popular'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Nouveau',
    author: 'Lucas Petit',
    rating: 4.9,
    reviews: 982,
    price: 13.99,
    originalPrice: 69.99
  },
  {
    id: 9,
    title: 'Python pour débutants',
    categories: ['popular'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Meilleure vente',
    author: 'Nina Lefevre',
    rating: 4.6,
    reviews: 1234,
    price: 12.99,
    originalPrice: 59.99
  }
]);

// Calcul de la pagination des groupes de cours en fonction de la catégorie sélectionnée
const filteredCourses = computed(() => {
  // Filter courses by the active category
  const category = activeTab.value;
  return courses.value.filter(course => course.categories.includes(category));
});

// Calcul de la pagination des groupes de cours
const groupedCourses = computed(() => {
  const groupSize = 4;
  const groups = [];
  const filtered = filteredCourses.value;  // Use filtered courses
  for (let i = 0; i < filtered.length; i += groupSize) {
    groups.push(filtered.slice(i, i + groupSize));
  }
  return groups;
});

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


