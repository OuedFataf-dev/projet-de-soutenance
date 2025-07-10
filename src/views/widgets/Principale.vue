<template>
  <nav class="bg-white shadow-lg  py- -mt-6" >
   

    <!-- Menu catégories -->

    

   
  </nav>


  <div class="bg-white w-full h-200">
  <!-- Votre en-tête existant -->
  <div class="font-bold px-10 text-3xl py-20">
    Cours sur le sujet {{ categoryId }}
  </div>

  <div class="font-bold px-10 -mt-5 text-2xl">
    Cours pour commencer
  </div>

  <div class="px-10 mt-7 text-xl">
    Découvrez les cours dispensés par des experts confirmés.
  </div>

  <!-- Section "Le plus populaire" -->
  <div class="px-10 mt-10">
   
    
    <div class="container mx-auto px-4">
    <!-- Navigation -->
    <div class="flex space-x-8 mb-6 border-gray-200 pb-4">
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
    </div><div v-if="groupedCourses.length" class="relative w-full -mt-100 h-140 overflow-hidden">
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
          <router-link 
            to="/visuel"
           class="card bg-white shadow-lg w-full h-60">
              
            <img :src="card.image" :alt="card.title" class="w-full h-40 object-cover">
          </router-link>
          
          <!-- Détails du cours -->
          <div class="card-body -ml-10">
            <h2 class="card-title  text-lg font-bold">{{ card.title }}</h2>
            <p class="text-xs text-gray-600 ">{{ card.author }}</p>
            
            <div class="flex items-center ">
              <span class="text-yellow-500 font-semibold text-sm ">{{ card.rating }}</span>
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

            <div class="text-sm mt-2">
               {{ card.description }}
            </div>

            <div class="mt-4 space-y-3">
              <div class="flex items-start gap-2">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                     cours 
                <span class="xs">{{ card.list1 }}</span>
              </div>

              <div class="flex items-start gap-2">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <span class="xs">{{ card.list2 }}</span>
              </div>

              <div class="flex items-start gap-2">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <span class="xs"> {{ card.list3 }}</span>
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
    <div class="bg-white -mt-40 w-full">
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-b border-gray-200 p-6 bg-white space-y-6 md:space-y-0">
    <div class="flex items-start space-x-3 w-full md:w-auto">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
        <span class="text-lg">▶️</span>
      </div>
      <div>
        <p class="font-bold text-gray-900">
          Obtenez des compétences à la <br class="hidden sm:inline"> demande grâce à plus de 250 000 <br class="hidden sm:inline"> cours vidéo
        </p>
      </div>
    </div>

    <div class="flex items-start space-x-3 w-full md:w-auto">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
        <span class="text-lg">⭐</span>
      </div>
      <div>
        <p class="font-bold text-gray-900">
          Choisissez des cours enseignés par <br class="hidden sm:inline"> des formateurs confirmés
        </p>
      </div>
    </div>

    <div class="flex items-start space-x-3 w-full md:w-auto">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
        <span class="text-lg">∞</span>
      </div>
      <div>
        <p class="font-bold text-gray-900">
          Apprenez à votre rythme et <br class="hidden sm:inline"> bénéficiez d'un accès illimité sur <br class="hidden sm:inline"> mobile et ordinateur de bureau
        </p>
      </div>
    </div>
  </div>
</div>

   




<div class="bg-white px-10 mt-">
  
<div class="text-2xl font-bold mb-2">Cours à l'affiche</div>
<div class="text-sm text-gray-700 mb-4">
  De nombreux participants ont apprécié ce cours très bien noté pour son contenu intéressant.
</div>

<div v-if="module" class="flex items-center border rounded-lg shadow-md overflow-hidden h-90">
    <img :src="module.image" :alt="module.title" class="px-5 w-150 h-80">

    <div class="p-5 w-2/3">
      <h2 class="text-lg font-bold text-gray-900">{{ module.title }}</h2>
      <p class="text-sm text-gray-600">{{ module.description }}</p>
      <p class="text-xs text-gray-500 mt-1">Par <span class="font-semibold">{{ module.authors }}</span></p>

      <p class="text-xs text-gray-500 mt-1">
        Mise à jour <span class="font-semibold">{{ module.updateDate }}</span> • 
        {{ module.duration }} heures au total • 
        {{ module.lessons }} sessions • 
        {{ module.level }}
      </p>

      <div class="flex items-center mt-2">
        <span class="text-yellow-500 font-semibold text-sm">{{ module.rating }}</span>
        <span class="text-yellow-500 mx-1">⭐⭐⭐⭐⭐</span>
        <span class="text-xs text-gray-500">({{ module.reviews }})</span>
        <span v-if="module.isNew" class="bg-green-200 text-green-700 text-xs px-2 py-1 rounded-md ml-2">meilleur vente</span>
      </div>

      <div class="flex items-center mt-30">
        <span class="text-lg font-bold text-black">{{ module.price }} $US</span>
        <span class="text-sm text-gray-500 line-through ml-2">{{ module.oldPrice }} $US</span>
      </div>
    </div>
  </div>


<div class="mt-10 font-bold p-5 text-3xl">
  Sujets populaires
</div>


<div class="relative overflow-hidden w-full">
  <!-- Version desktop avec transition -->
  <div class="hidden md:flex transition-transform duration-500 ease-in-out" :class="{ '-translate-x-full': showMore }">
    <!-- Première série de boutons -->
    <div class="grid grid-cols-4 gap-4 p-4 flex-shrink-0 w-full">
      <template v-for="(item, index) in firstRow" :key="index">
        <router-link 
          v-if="item.isLink" 
          :to="item.route" 
          class="border px-4 py-2 whitespace-nowrap text-center hover:bg-gray-50 transition-colors"
        >
          {{ item.label }}
        </router-link>
        <button 
          v-else 
          class="border px-4 py-2 whitespace-nowrap text-center hover:bg-gray-50 transition-colors"
        >
          {{ item.label }}
        </button>
      </template>
    </div>

    <!-- Deuxième série de boutons -->
    <div class="grid grid-cols-4 gap-4 p-4 flex-shrink-0 w-full">
      <template v-for="(item, index) in secondRow" :key="index">
        <router-link 
          v-if="item.isLink" 
          :to="item.route" 
          class="border px-4 py-2 whitespace-nowrap text-center hover:bg-gray-50 transition-colors"
        >
          {{ item.label }}
        </router-link>
        <button 
          v-else 
          class="border px-4 py-2 whitespace-nowrap text-center hover:bg-gray-50 transition-colors"
        >
          {{ item.label }}
        </button>
      </template>
    </div>
  </div>

  <!-- Version mobile avec scroll horizontal et deux lignes -->
  <div class="md:hidden space-y-4 py-4">
    <!-- Première ligne avec scroll horizontal -->
    <div class="overflow-x-auto whitespace-nowrap hide-scrollbar px-4">
      <div class="inline-flex space-x-4">
        <template v-for="(item, index) in firstRow" :key="index">
          <router-link 
            v-if="item.isLink" 
            :to="item.route" 
            class="border px-4 py-2 whitespace-nowrap inline-block hover:bg-gray-50 transition-colors"
          >
            {{ item.label }}
          </router-link>
          <button 
            v-else 
            class="border px-4 py-2 whitespace-nowrap inline-block hover:bg-gray-50 transition-colors"
          >
            {{ item.label }}
          </button>
        </template>
      </div>
    </div>
    
    <!-- Deuxième ligne avec scroll horizontal -->
    <div class="overflow-x-auto whitespace-nowrap hide-scrollbar px-4">
      <div class="inline-flex space-x-4">
        <template v-for="(item, index) in secondRow" :key="index">
          <router-link 
            v-if="item.isLink" 
            :to="item.route" 
            class="border px-4 py-2 whitespace-nowrap inline-block hover:bg-gray-50 transition-colors"
          >
            {{ item.label }}
          </router-link>
          <button 
            v-else 
            class="border px-4 py-2 whitespace-nowrap inline-block hover:bg-gray-50 transition-colors"
          >
            {{ item.label }}
          </button>
        </template>
      </div>
    </div>
  </div>

  <!-- Bouton "Voir plus" desktop -->
  <button 
    @click="showMore = !showMore" 
    class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border px-3 py-6 rounded-l-lg shadow-sm hover:bg-gray-50"
  >
    {{ showMore ? '←' : '→' }}
  </button>
</div>




<div class="mt-10 font-bold p-5 text-3xl">
  Formateurs populaires
</div>
<p class="p-5">Ces formateurs confirmés sont très bien notés par des participants comme vous.</p>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
  <!-- Carte 1 -->
  <div class="border p-4 rounded-lg shadow-md">
      <div class="flex items-start">
          <img src="" alt="Enzo Ustariz" class="w-16 h-16 rounded-full mr-4">
          <div>
              <h3 class="font-bold">Enzo Ustariz - Web School</h3>
              <p class="text-sm">JavaScript, CSS</p>
              <p class="text-sm">⭐ 4,6 Note Globale Du Formateur</p>
              <p class="text-sm">52 577 participants</p>
              <p class="text-sm">40 cours</p>
          </div>
      </div>
  </div>

  <!-- Carte 2 -->
  <div class="border p-4 rounded-lg shadow-md">
      <div class="flex items-start">
          <img src="" alt="John Taieb" class="w-16 h-16 rounded-full mr-4">
          <div>
              <h3 class="font-bold">John Taieb (Codeur)</h3>
              <p class="text-sm">Web Development, WordPress</p>
              <p class="text-sm">⭐ 4,5 Note Globale Du Formateur</p>
              <p class="text-sm">130 354 participants</p>
              <p class="text-sm">17 cours</p>
          </div>
      </div>
  </div>

  <!-- Carte 3 -->
  <div class="border p-4 rounded-lg shadow-md relative">
      <div class="flex items-start">
          <img src="" alt="John Taieb" class="w-16 h-16 rounded-full mr-4">
          <div>
              <h3 class="font-bold">John Taieb (Codeur)</h3>
              <p class="text-sm">Web Development, WordPress</p>
              <p class="text-sm">⭐ 4,5 Note Globale Du Formateur</p>
              <p class="text-sm">130 354 participants</p>
              <p class="text-sm">17 cours</p>
           </div>    55
      </div>   ouedraogo
      
      <!-- Bouton flottant à droite -->
      <button class="absolute top-1/2  -right-10 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-md bg-white flex items-center justify-center hover:bg-gray-200">
          <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
      </button>
  </div>
</div>






<div class="p-4 font-bold text-2xl">Tous les cours de la catégorie {{ categoryId }}</div>
    
    
    <div class="flex flex-col sm:flex-row items-start sm:items-center w-full max-w-full sm:w-auto sm:ml-10 p-4 sm:px-6 border border-gray-300 rounded-xl bg-white text-sm sm:text-base">
  <div class="flex items-center mb-2 sm:mb-0 sm:mr-4">
    <svg class="w-6 h-6 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 18a9 9 0 100-18 9 9 0 000 18z"/>
    </svg>
    <span class="font-bold">Vous n'êtes pas sûr de vous ?</span>
  </div>
  <span class="font-bold leading-snug">
    Tous nos cours s'accompagnent d'une garantie satisfait ou remboursé de 
    <strong>30 jours</strong>
  </span>
</div>


    <div class="flex flex-col sm:flex-row items-start sm:items-center mt-4 ml-4 sm:ml-10 gap-4">
  <button class="border px-4 py-2 rounded w-full sm:w-auto">📂 Filtrer</button>

  <div class="w-full sm:w-auto p-4 bg-white shadow-lg rounded-lg border">
    <h3 class="text-lg font-semibold mb-2">Trier par :</h3>

    <select class="w-full border rounded px-2 py-1">
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
    
    <div class=" border-t-2 border-gray-200 -ml-5 w-100 mt-5  bg-gray-100"></div>
     
    
      <!-- Ajoute d'autres catégories ici -->
    </div>
    
    
    
    </div>
      </div>
      
      <div class="md:w-3/4 p-4">
          <p class="hidden md:block text-gray-600 whitespace-nowrap ml-210">10 000 résultats</p>

          
         <div
  class="relative flex ml-10 flex-col w-fit"
  @mouseenter="hoveredIndex = index"
  @mouseleave="hoveredIndex = null"
  v-for="(item, index) in coursesData3"
  :key="index"
>
  <!-- Carte -->
  



  <router-link 
  to="/visuel"
  class="flex flex-col sm:flex-row w-full sm:w-[800px] mx-auto p-4 pl-4 sm:pl-0 mt-4 gap-4"
>
  <iframe
    class="w-full h-48 sm:w-80 sm:h-40"
    :src="item.image"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  ></iframe>

  <div class="text-sm sm:text-base">
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
</router-link>

  <!-- Tooltip -->
  <div
    v-show="hoveredIndex === index"
    class="absolute z-10  -top-4 -left-4 mt-2 left-0 w-[400px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg"
  >
    <div class="text-xl font-bold">{{ item.title }}</div>
    <div class="text-xs text-green-400">Mise à jour janvier 2025</div>
    <div class="text-sm text-gray-500">76,5 heures au total · Tous les niveaux · Sous-titres</div>

    <div class="text-sm mt-2">
         {{ item.description }}
    </div>

    <div class="mt-4 space-y-3">
      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span class="xs"   >{{ item.list1 }}.</span>
      </div>

      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span class="xs">{{ item.list2 }}..</span>
      </div>

      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span class="xs">{{ item.list3 }}.</span>
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
                   
      <div class=" hidden sm:block border-t-2 border-gray-200 ml-20  mt-5 w-180  bg-gray-100"></div>
    
             
            
    
    
    
      
    
    
     <div class="px-10 sm:px-12 ml-4 sm:ml-0"> <!-- px-10 sur mobile, sm:px-12 sur desktop -->
  <div class="border rounded-lg p-4 sm:p-6 max-w-4xl h-auto sm:h-60 mt-5 w-full mx-auto shadow-sm bg-white">
    <!-- Titre -->
    <h2 class="text-lg sm:text-xl font-bold">Les meilleures entreprises font confiance à Udemy</h2>
    <p class="text-gray-600 mt-1 text-sm sm:text-base">
      Offrez aux membres de votre équipe un accès à plus de 250 000 cours parmi les meilleurs d'Udemy
    </p>

    <!-- Logos des entreprises - Version mobile avec scroll horizontal -->
    <div class="mt-4">
      <div class="overflow-x-auto hide-scrollbar px-2 -mx-2"> <!-- Ajustement pour le scroll -->
        <div class="flex space-x-6 w-max min-w-full pb-2 pl-2">
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq" class="h-6 sm:h-8 grayscale min-w-max">
          <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="Volkswagen" class="h-6 sm:h-8 grayscale min-w-max">
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="NetApp" class="h-6 sm:h-8 grayscale min-w-max">
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite" class="h-6 sm:h-8 grayscale min-w-max">
        </div>
      </div>
    </div>

    <!-- Bouton -->
    <div class="mt-4 text-center sm:text-left">
      <button class="px-4 py-2 border border-purple-600 text-purple-600 font-semibold rounded-md hover:bg-purple-600 hover:text-white transition text-sm sm:text-base w-full sm:w-auto">
        Essayer Udemy Business
      </button>
    </div>
  </div>
</div>

    <div class="flex flex-col sm:flex-row w-full sm:w-[500px] ml-0 sm:ml-20 p-2 sm:p-4 mt-4 gap-3 sm:gap-4">
  <!-- Vidéo - taille réduite sur mobile -->
  <iframe 
    class="max-w-[300px] sm:max-w-none mx-auto sm:mx-0" 
    src="https://www.youtube.com/embed/SXmWVboohsA" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen>
  </iframe>
  
  <!-- Contenu texte -->
  <div class="px-2 sm:px-0">
    <h3 class="font-bold text-sm sm:text-base">Flexbox CSS | Le programme Ultime par la pratique</h3>
    <p class="text-xs sm:text-sm">Apprendre Flexbox CSS par la pratique</p>
    <p class="text-xs sm:text-sm"><strong>Mathias Grdl</strong></p>
    <p class="text-xs sm:text-sm">⭐ 5,0 (5)</p>
    <p class="text-xs sm:text-sm">2,5 heures au total · 32 sessions · Tous les niveaux</p>
    <p class="text-red-600 font-bold text-sm sm:text-base">
      9,99 $US <span class="text-gray-500 line-through text-xs sm:text-sm">19,99 $US</span>
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
    
          
    
    
    
      </div>
    
    
      
    </div>
    
    
           
    
    
             
                 
                
         

</div>



 <AppFooter/>
 
    


   
</template>



<script setup>

import { ref, computed } from 'vue';
import { cards } from '../../data/data';
import AppFooter from '../../components/AppFooter.vue'



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

const embedUrl = (url) => {
  if (!url) return '';
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return '';  // Retourner une URL vide si l'URL est invalide
};

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
  return courses.value.filter(course =>
    Array.isArray(course.categories) && course.categories.includes(category)
  );
});
;

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


.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;             /* Chrome, Safari, Opera */
}
</style>


