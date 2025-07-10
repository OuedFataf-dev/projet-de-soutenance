<template>





  <div class="mt-20">

      

  </div>



<div class="mt-10 bg-white px-4 sm:px-10 py-2 w-full">
  <div class="flex flex-col lg:flex-row items-stretch w-full mt-5 sm:mt-10 py-2 border rounded-lg shadow-md overflow-hidden min-h-[200px]">
    <!-- Contenu principal -->
    <div class="p-4 lg:w-1/2">
      <h2 class="text-xl sm:text-2xl font-bold">
        Vous souhaitez améliorer vos compétences sur le sujet {{ categoryName }}? Nous avons ce qu'il vous faut.
      </h2>
      <p class="mt-2 text-gray-700 text-sm sm:text-base">
        Retrouvez tout ce dont vous avez besoin pour atteindre vos objectifs dans un lot pratique.
      </p>
      <ul class="mt-4 space-y-2 text-gray-600 text-sm sm:text-base">
        <li class="flex items-center">
          ✅ Cours parmi les mieux notés
        </li>
        <li class="flex items-center">
          ✅ Populaires auprès de participants au profil similaire au vôtre
        </li>
        <li class="flex items-center">
          ✅ Conseils dispensés par des formateurs confirmés
        </li>
      </ul>
      <p class="mt-4 text-lg font-bold">
        Total : <span class="text-purple-600 text-xl">22.98 $US</span> <span class="line-through text-gray-500">134.98 $US</span>
      </p>
    
      <button class="mt-4 bg-purple-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold w-full sm:w-auto hover:bg-purple-700 transition-colors">
        Tout ajouter au panier
      </button>
    </div>

    <!-- Carte du cours -->
    <div class="p-4 lg:w-1/2 flex justify-center lg:justify-end">
      <div class="card bg-white shadow-sm w-full max-w-xs sm:max-w-sm">
        <img src="" alt="WordPress" class="w-full h-32 sm:h-40 object-cover rounded-t-lg">
        <div class="p-4">
          <h2 class="text-base sm:text-lg font-bold">
            Créez votre site WordPress de A à Z - Débutants (2025)
          </h2>
          <p class="text-xs text-gray-600">Stephanie Canovas</p>
          <div class="flex items-center mt-1">
            <span class="text-yellow-500 font-semibold text-sm">4,3</span>
            <span class="text-yellow-500 ml-1">⭐</span>
            <span class="text-xs text-gray-500 ml-1">(1418)</span>
          </div>
          <div class="flex items-center mt-1">
            <span class="text-base sm:text-lg font-bold text-black">10,99 $US</span>
            <span class="text-sm text-gray-500 line-through ml-2">59,99 $US</span>
          </div>
          <span class="inline-block mt-2 bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md">Meilleure vente</span>
        </div>
      </div>
    </div>
  </div>
</div>
       
       
       
            <div  class=" w-full mt-10 h-150 ">
       
       
             <div class="font-bold px-10 -mt-5 text-2xl">
           Cours pour commencer
         </div>
       
         <div class="px-10 mt-7 text-xl">
           Découvrez les cours dispensés par des experts confirmés.
         </div>
       
         </div>
         <!-- Section "Le plus populaire" -->
        
         <div class="px-10 -mt-120">
    
     
    <div class="container mx-auto px-4">
    <!-- Navigation -->
    <div class="flex space-x-8 mb-6 border-b-2 border-gray-200 pb-4">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="text-xl font-bold pb-2 border-b-4 transition-all"
        :class="{
          'border-black': activeTab === tab.id,
          'border-transparent': activeTab !== tab.id
        }"
      >
        {{ tab.label }}
      </button>
    </div>
  </div>
  <div class="absolute left-0 right-0 border-t-2 border-gray-200 -mt-10"></div>


    </div>
   
         
          
       
       
       
       
       
       
         <div class="bg-white h-120 flex px-6 border-h-2 border-gray-200 -mt-11   gap-5 relative">
           
   <!-- Cartes visibles -->


   <div class="flex mt-100 transition-transform duration-300 ease-in-out w-full">
  <div v-if="groupedCourses.length" class="relative w-full -mt-100 h-140 overflow-hidden">
    <!-- Conteneur défilant (Carousel) -->
    <div class="flex transition-transform duration-300 bg-white ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Groupes de cours -->
      <div
        v-for="(group, groupIndex) in groupedCourses"
        :key="'group-' + groupIndex"
        class="flex-shrink-0 w-full flex gap-4 p-4"
      >
        <!-- Cartes de cours -->
        <div
          v-for="(card, cardIndex) in group"
          :key="card.id"
          class="relative flex flex-col items-center flex-shrink-0 w-1/4 min-w-[250px] px-2"
          @mouseenter="showTooltip(cardIndex)"
          @mouseleave="hideTooltip"
        >
          <router-link  to="/visuel"class="card bg-white shadow-lg w-full h-60">
               
            <img :src="card.image" :alt="card.title" class="w-full h-40 object-cover">
          </router-link>
          
          <!-- Détails du cours -->
          <div class="card-body -ml-10">
            <h2 class="card-title -ml-10 text-lg font-bold">{{ card.title }}</h2>
            <p class="text-xs text-gray-600 -ml-10">{{ card.author }}</p>
            
            <div class="flex items-center mt-0">
              <span class="text-yellow-500 font-semibold text-sm -ml-10">{{ card.rating }}</span>
              <span class="text-yellow-500">⭐</span>
              <span class="text-yellow-500">⭐</span>
              <span class="text-yellow-500">⭐</span>
              <span class="text-xs text-gray-500 ml-0">({{ card.reviews }})</span>
            </div>
            
            <div class="flex -ml-4">
              <span class="text-lg font-bold text-blac -ml-0">{{ card.price }} $US</span>
              <span class="text-sm text-gray-500 line-through -ml-10">{{ card.originalPrice }} $US</span>
            </div>

            <!-- Badge de catégorie -->
            <span v-if="card.badge === 'Meilleure vente'" class="-ml-10 bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md mt-2">
              {{ card.badge }}
            </span>
            <span v-else-if="card.badge === 'Nouveau'" class="-ml-10 bg-green-200 text-green-700 text-xs px-2 py-1 rounded-md mt-2">
              {{ card.badge }}
            </span>
          </div>

          <!-- Tooltip pour cette carte spécifique -->
          <div
            v-show="hoveredIndex === cardIndex"
            class="absolute z-10 Left-to-right ml-20 left-0 w-[400px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg"
          >
            <div class="text-xl font-bold">{{ card.title }}</div>
            <div class="text-xs text-green-400">Mise à jour janvier 2025</div>
            <div class="text-sm text-gray-500">76,5 heures au total · Tous les niveaux · Sous-titres</div>

            <div class="text-xl text-sm mt-2">
             {{  card.description }}
            </div>

            <div class="mt-4 space-y-3">
              <div class="flex items-start gap-2">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <span>{{ card.list1 }}.</span>
              </div>

              <div class="flex items-start gap-2">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <span>{{ card.list2 }}.</span>
              </div>

              <div class="flex items-start gap-2">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <span>{{ card.list3 }}.</span>
              </div>
            </div>

            <div class="mt-6">
              <button
                @click="ajouterAuPanier(card)"
                class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bouton précédent -->
    <button
      v-if="currentIndex > 0"
      @click="prevGroup"
      class="absolute top-1/2 left-0 -mt-40 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-white flex items-center justify-center hover:bg-gray-200"
      aria-label="Précédent"
    >
      <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>

    <!-- Bouton suivant -->
    <button
      v-if="currentIndex < groupedCourses.length - 1"
      @click="nextGroup"
      class="absolute top-1/2 r -mt-40 right-0 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-white flex items-center justify-center hover:bg-gray-200"
      aria-label="Suivant"
    >
      <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</div>
       </div>
       
       <!-- Deuxième carte (Tu peux remplacer les informations ici) -->
       
         
       
       
       
       <!-- Deuxième carte (Tu peux remplacer les informations ici) -->
       
         
       
       
       
       
       
       
       <div class="mt-8 font-bold p-5 text-2xl">
         Les participants qui suivent des cours sur le sujet {{ categoryName }} suivent également les cours suivants
       </div>
       
     <div class="relative overflow-hidden w-full">
  <!-- Conteneur principal avec transition -->
  <div 
    class="flex transition-transform duration-500 ease-in-out"
    :class="{ '-translate-x-full': showMore }"
  >
    <!-- Première série de boutons -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-5 flex-shrink-0 w-full">
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Développement Web</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">React JS</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Next.js</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">HTML</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">JavaScript</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Angular</button>
      <router-link to="/css" class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">CSS</router-link>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">TypeScript</button>
    </div>
    
    <!-- Deuxième série de boutons -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-5 flex-shrink-0 w-full">
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Vue.js</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Node.js</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Express.js</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">MongoDB</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">PHP</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Laravel</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Symfony</button>
      <button class="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base whitespace-nowrap truncate">Django</button>
    </div>
  </div>
  
  <!-- Boutons de navigation -->
  <button 
    v-if="!showMore"
    @click="toggleCards"
    class="absolute top-1/2 right-1 sm:right-2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full shadow-md bg-white flex items-center justify-center hover:bg-gray-200 z-10 transition-colors"
    aria-label="Voir plus"
  >
    <svg class="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
  
  <button 
    v-if="showMore"
    @click="toggleCards"
    class="absolute top-1/2 left-1 sm:left-2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full shadow-md bg-white flex items-center justify-center hover:bg-gray-200 z-10 transition-colors"
    aria-label="Voir moins"
  >
    <svg class="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
</div>
       
       
       
       
       
        <div class="text-2xl font-bold p-4">
         Meilleurs cours dans les catégories {{ categoryId }}
        </div>
       
       
       
       
       
        <div class="h-100 flex px-8  gap-3">
       
       <!-- Première carte + texte -->
       <div class="flex gap-3 items-center flex-wrap">
    <div 
      v-for="(item, index) in coursesData1" 
      :key="index"
      class="relative w-80"
      @mouseenter="showTooltip(index)"
      @mouseleave="hideTooltip"
    >
      <!-- Carte ne contenant que l'image -->
      <router-link to="/visuel"    class="card bg-white shadow-lg w-full h-50">
          
      <video 
  class="w-full h-full" 
  :src="`http://localhost:5000/${item.video}`" 
  controls 
  autoplay 
  muted 
  playsinline
></video>

      </router-link>

      <h2 class="text-lg font-bold">{{ item.title }}</h2>
        <p class="text-xs text-gray-600">{{ item.author }}</p>

        <div class="flex items-center gap-1 mt-1">
          <span class="text-yellow-500 font-semibold text-sm">{{ item.rating }}</span>
          <span class="text-yellow-500">⭐</span>
          <span class="text-xs text-gray-500">({{ item.reviewCount }})</span>
        </div>

        <div class="flex items-center gap-2 mt-1">
          <span class="text-lg font-bold text-black">{{ item.currentPrice }} $US</span>
          <span class="text-sm text-gray-500 line-through" v-if="item.originalPrice">
            {{ item.originalPrice }} $US
          </span>
        </div>

        <span 
          class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md mt-2 inline-block" 
          v-if="item.isBestSeller"
        >
          Meilleure vente
        </span>
      <!-- Informations en dehors de la carte, juste en dessous -->
     
      
      

      <!-- Tooltip (non modifié, mais peut aussi être ajusté) -->
      <div
        v-show="hoveredIndex === index"
        class="absolute z-10 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-[400px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg"
      >
        <div class="text-xl font-bold">{{ item.title}}</div>
        <div class="text-xs text-green-400">Mise à jour janvier 2025</div>
        <div class="text-sm text-gray-500">76,5 heures au total · Tous les niveaux · Sous-titres</div>

        <div class="text-base text-xs  mt-2 leading-5">
         <br />
         {{ item.list2 }}...
        </div>

        <div class="mt-4 space-y-3">
          <div class="flex items-start gap-2">
            <svg class="size-4 mt-1">...</svg>
            <span>{{ item.list3 }}..</span>
          </div>
          <!-- autres points -->
        </div>

        <div class="mt-6">
          <button 
           @click="ajouterAuPanier(item)"
          class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700">
            Ajouter au panier
          </button>
        </div>
      </div>

    </div>
  </div>
       
       </div>
       
       <div class="mt-8 sm:mt-12 p-4 text-lg sm:text-xl font-bold">
  Meilleurs cours dans les catégories {{ categoryName1 }}
</div>

       
       
       <div class="h-100 flex px-8  gap-3">
       
        
       
       
       <!-- Deuxième carte (Responsive) -->
<div class="flex flex-col items-center w-full sm:w-auto px-4 mb-6">
  <div class="bg-white shadow-lg rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
    
    <!-- Vidéo intégrée -->
    <div class="aspect-w-16 aspect-h-9">
      <iframe
        class="w-full h-full rounded-t-lg"
        src=""
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Contenu de la carte -->
    <div class="p-4">
      <h2 class="text-lg font-bold">Maîtriser React.js</h2>
      <p class="text-xs text-gray-600">Matthieu Passerel</p>

      <div class="flex items-center mt-1">
        <span class="text-yellow-500 font-semibold text-sm">4,5</span>
        <span class="text-yellow-500 ml-1">⭐</span>
        <span class="text-xs text-gray-500 ml-1">(1020)</span>
      </div>

      <div class="flex items-center mt-2">
        <span class="text-lg font-bold text-black">12,99 $US</span>
        <span class="text-sm text-gray-500 line-through ml-2">49,99 $US</span>
      </div>

      <span class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md inline-block mt-2">
        Meilleure vente
      </span>
    </div>
  </div>
</div>

       
       
         </div>


   
     


   



















  



 <div class="p-4 font-bold text-2xl">Tous les cours sur le sujet {{ categoryName }}</div>
     
     
     
     
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 border border-gray-300 rounded-xl bg-white p-4 sm:px-8 w-full max-w-5xl mx-auto mt-4">
  <svg class="w-6 h-6 text-blue-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 18a9 9 0 100-18 9 9 0 000 18z"/>
  </svg>
  <div class="text-sm sm:text-base">
    <span class="font-bold block sm:inline">Vous n'êtes pas sûr de vous ?</span>
    <span class="ml-0 sm:ml-1 font-bold block sm:inline">
      Tous nos cours s'accompagnent d'une garantie satisfait ou remboursé de
      <strong>30 jours</strong>
    </span>
  </div>
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
     
          
           <div class="hidden md:block">
     
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
     
       <!-- Ajoute d'autres catégories ici -->
     </div>


     
     
     
     </div>
       </div>

       <div
       class="-ml-20"
       ><div class="border-t border-gray-200 w-full my-5 bg-gray-100 h-[1px]"></div></div>
       
       <div class="md:w-3/4 p-4 ml-4 -mt-8">
           <p class=" hidden  text-gray-600 justify-end  whitespace-nowrap  ml-210 ">10 000 résultats</p>
           <div
  class="relative flex flex-col w-fit"
  @mouseenter="hoveredIndex = index"
  @mouseleave="hoveredIndex = null"
  v-for="(item, index) in coursesData"
  :key="index"
>
<button
    
    
  >
    Supprimer
  </button>
  <!-- Carte -->
  <div class="flex w-200 ml-20 p-4 mt-4 gap-4">
    <iframe
      class="w-80 h-40"
      :src="item.image"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>

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

  <!-- Tooltip -->
  <div
    v-show="hoveredIndex === index"
    class="absolute z-10 top-full mt-2 left-0 w-[400px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg"
  >
    <div class="text-xl font-bold">{{ item.title }}</div>
    <div class="text-xs text-green-400">Mise à jour janvier 2025</div>
    <div class="text-sm text-gray-500">76,5 heures au total · Tous les niveaux · Sous-titres</div>

    <div class="text-xs mt-2">
      {{ item.description }}
    </div>

    <div class="mt-4 space-y-3">
      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span>{{ item.list1 }}</span>
      </div>

      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span>{{ item.list2 }}</span>
      </div>


      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span>{{ item.list3 }}</span>
      </div>
    </div>

    <div class="mt-6">
      <button
        @click="ajouterAuPanier(item)"
        class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700"
      >
        Ajouter au panier
      </button>
    </div>
  </div>
  
</div>

</div>
</div>



     <div class=" hidden border-t border-gray-200 md:border-t-2 w-full my-5 bg-gray-100 h-[1px]"></div> 
             
     
     
     
       
     
     
       <div class="p-4 sm:px-0 py-6">
  <div class="border rounded-lg p-6 max-w-5xl mx-auto shadow-sm bg-white">
    <!-- Titre -->
    <h2 class="text-xl sm:text-2xl font-bold text-center sm:text-left">
      Les meilleures entreprises font confiance à Udemy
    </h2>
    <p class="text-gray-600 mt-2 text-center sm:text-left">
      Offrez aux membres de votre équipe un accès à plus de 250 000 cours parmi les meilleurs d'Udemy
    </p>

    <!-- Logos des entreprises (responsive) -->
    <div class="grid grid-cols-2 sm:flex sm:items-center sm:space-x-6 mt-6 justify-center gap-4 sm:gap-0">
      <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq" class="h-8 grayscale mx-auto sm:mx-0">
      <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="Volkswagen" class="h-8 grayscale mx-auto sm:mx-0">
      <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="NetApp" class="h-8 grayscale mx-auto sm:mx-0">
      <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite" class="h-8 grayscale mx-auto sm:mx-0">
    </div>

    <!-- Bouton -->
    <div class="mt-6 text-center sm:text-left">
      <button class="px-4 py-2 border border-purple-600 text-purple-600 font-semibold rounded-md hover:bg-purple-600 hover:text-white transition">
        Essayer Udemy Business
      </button>
    </div>
  </div>
</div>





<!-- Ligne de séparation -->
<div class="border-t-2 border-gray-200 mt-5 bg-gray-100 w-full"></div>

<!-- Bloc principal -->
<div class="flex flex-col sm:flex-row w-full max-w-5xl mx-auto p-4 mt-4 gap-4 bg-white rounded shadow-sm">
  <!-- Vidéo -->
  <iframe 
    class="w-full sm:w-80 h-48 sm:h-40 rounded" 
    src="https://www.youtube.com/embed/SXmWVboohsA" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen>
  </iframe>

  <!-- Contenu -->
  <div class="flex flex-col justify-between">
    <h3 class="font-bold text-lg">Flexbox CSS | Le programme Ultime par la pratique</h3>
    <p class="text-sm text-gray-700">Apprendre Flexbox CSS par la pratique</p>
    <p class="text-sm"><strong>Mathias Grdl</strong></p>
    <p class="text-sm text-yellow-600">⭐ 5,0 (5)</p>
    <p class="text-sm">2,5 heures au total · 32 sessions · Tous les niveaux</p>
    <p class="text-red-600 font-bold text-base">
      9,99 $US <span class="text-gray-500 line-through text-sm">19,99 $US</span>
    </p>
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
     
           
     
     
     
   

     
            
     
     

      
                 
                  
                 
          
 
 
   
 
    <AppFooter/>
  
     </template>
     
     
     
 
 <script setup>


import Principale from '../views/widgets/Principale.vue';
 import heade from '../views/widgets/heade.vue';
 import AppFooter from './AppFooter.vue';
 import { ref, computed } from 'vue';
 
 import { cards } from '../data/data';
 


 import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore()
function ajouterAuPanier(course) {
  console.log('Cours reçu:', course)
  if (!course || !course.id) {
    console.error('Objet course invalide:', course)
    return
  }
  cartStore.addCourse(course)
}

 import composant from '../views/widgets/composant.vue';



 const hoveredIndex = ref(null);

function showTooltip(index) {
  hoveredIndex.value = index;
}

function hideTooltip() {
  hoveredIndex.value = null;
}




const tooltipPoints = [
  "Apprendre tous les concepts de Python, des bases aux méthodes avancées, en partant de 0.",
  "Apprendre à réaliser des sites web et des projets complets de A à Z.",
  "Apprendre les outils utilisés dans le monde professionnel."
]

import { useRouter } from 'vue-router';
import Composant from '../views/widgets/composant.vue';




const showMore = ref(false);






 // Onglet actif


 const props = defineProps({
categoryName: String,
categoryName1: String,
 coursesData: Array,
 categoryId: String,
 coursesData2: Array,
 pageData: {
   type: Object,
 },
 coursesData1: Array,
 
 cards: {
   type: Array,
   default: () => []
 },

 initialCategory: {
    type: String,
    default: 'popular'
  },
 
 coursesData3: Array
});



// Dans votre script
console.log("Données reçues dans props:", {
  categoryName: props.categoryName,
  coursesData: props.coursesData,
  categoryId: props.categoryId,
  pageData: props.pageData,
  coursesData1: props.coursesData1,
  cards: props.cards,
  initialCategory: props.initialCategory,
  coursesData2: props.coursesData2,
  coursesData3: props.coursesData3
});
 const dataweb = ref(cards);
// Variables réactives
const currentIndex = ref(0);

const scrollContainer = ref(null);
const isOpen = ref({
 video: false,
 categorie2: false, // Ajoute d'autres catégories ici
});

  
const activeTab = ref(props.initialCategory); // Onglet actif par défaut

// Vérification que les données sont bien présentes dans props.coursesData2
const courses = computed(() => {
  if (!props.coursesData2 || props.coursesData2.length === 0) {
    console.warn("Aucune donnée de cours disponible.");
    return [];  // Retourne un tableau vide si les données sont manquantes
  }
  return props.coursesData2;  // Utilise les données passées par les props
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





const router = useRouter();






 

 // Variables réactives

 // Onglet actif par défaut
 
 
 
 
 
 
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
 
 
 