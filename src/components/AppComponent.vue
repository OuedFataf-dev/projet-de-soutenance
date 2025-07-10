<template>
  <nav class="bg-white shadow-lg  py- -mt-6" >
   

    <!-- Menu catégories -->

         

    <div class="text-center  shadow-6xl  "  style="box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);"></div>
    <div class="bg-white py-4 mt-5">
      <div class="container mx-auto flex space-x-6 px-4">
        <a href="#" class="text-gray-700 hover:text-purple-600">Development</a>
        <a href="#" class="text-gray-700 hover:text-purple-600">Web Development</a>
        <a href="#" class="text-gray-700 hover:text-purple-600">Data Science</a>
        <a href="#" class="text-gray-700 hover:text-purple-600">Mobile Development</a>
        <a href="#" class="text-gray-700 hover:text-purple-600">Programming Languages</a>
        <a href="#" class="text-gray-700 hover:text-purple-600">Game Development</a>
      </div>
    </div>



   
  </nav>


  <div class="bg-white w-full h-200">
  <!-- Votre en-tête existant -->
  <div class="font-bold px-10 text-3xl py-20">
    Cours sur le sujet Web Development
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
   

    </div>

    <div v-if="groupedCourses.length" class="relative w-full -mt-100 h-140  overflow-hidden">
    
    <!-- Conteneur défilant (Carousel) -->
    <div class="flex transition-transform duration-300  bg-white ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      
      <!-- Groupes de cours -->
      <div
        v-for="(group, index) in groupedCourses"
        :key="'group-' + index"
        class="flex-shrink-0 w-full flex gap-4 p-4"
      >
        
        <!-- Cartes de cours -->
        <div
          v-for="card in group"
          :key="card.id"
          class="flex flex-col items-center flex-shrink-0 w-1/4 min-w-[250px] px-2"
        >
          <div class="card bg-white shadow-lg w-full h-60">
            <img :src="card.image" :alt="card.title" class="w-full h-40 object-cover">
          </div>
          
          <!-- Détails du cours -->
          <div class="card-body -ml-10">
            <h2 class="card-title -ml-10 text-lg font-bold">{{ card.title }}</h2>
            <p class="text-xs text-gray-600 -ml-10">{{ card.author }}</p>
            
            <div class="flex items-center mt-0 ">
              <span class="text-yellow-500 font-semibold text-sm -ml-10">{{ card.rating }}</span>
              <span class="text-yellow-500">⭐</span>
              <span class="text-yellow-500">⭐</span>
              <span class="text-yellow-500">⭐</span>
              <span class="text-xs text-gray-500 ml-0">({{ card.reviews }})</span>
            </div>
            
            <div class="flex  -ml-4">
              <span class="text-lg font-bold text-blac -ml-0">{{ card.price }} $US</span>
              <span class="text-sm text-gray-500 line-through -ml-10">{{ card.originalPrice }} $US</span>
            </div>

            <!-- Badge de catégorie -->
            <span v-if="card.badge === 'Meilleure vente'" class=" -ml-10 bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md mt-2">
              {{ card.badge }}
            </span>
            <span v-else-if="card.badge === 'Nouveau'" class=" -ml-10 bg-green-200 text-green-700 text-xs px-2 py-1 rounded-md mt-2">
              {{ card.badge }}
            </span>
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


<div class="bg-white px-10 -mt-40">
  
<div class="text-2xl font-bold mb-2">Cours recommandé</div>
<div class="text-sm text-gray-700 mb-4">
  De nombreux participants ont apprécié ce cours très bien noté pour son contenu intéressant.
</div>

<div class="flex items-center border rounded-lg shadow-md overflow-hidden h-90">
  <!-- Image du cours -->
  <img src="https://img-c.udemycdn.com/course/750x422/5632360_06fc_9.jpg" alt="Microservices et Spring Boot" class=" px-5 w-150 h-80">

  <!-- Contenu du cours -->
  <div class="p-5 w-2/3">
    <h2 class="text-lg font-bold text-gray-900">
      Les Microservices et Spring Boot au service des entreprises
    </h2>
    <p class="text-sm text-gray-600">
      Apprenez à Créer et Appliquer des Microservices avec Spring Boot : Du Développement à l'Intégration dans un Projet Réel.
    </p>
    <p class="text-xs text-gray-500 mt-1">Par <span class="font-semibold">Imad BOU AKL</span> et 1 autre</p>

    <p class="text-xs text-gray-500 mt-1">
      Mise à jour <span class="font-semibold">février 2025</span> • 8,5 heures au total • 85 sessions • Intermédiaire
    </p>

    <!-- Évaluation et note -->
    <div class="flex items-center mt-2">
      <span class="text-yellow-500 font-semibold text-sm">4,8</span>
      <span class="text-yellow-500 mx-1">⭐⭐⭐⭐⭐</span>
      <span class="text-xs text-gray-500">(14)</span>
      <span class="bg-green-200 text-green-700 text-xs px-2 py-1 rounded-md ml-2">Nouveau</span>
    </div>

    <!-- Prix -->
    <div class="flex items-center mt-2">
      <span class="text-lg font-bold text-black">9,99 $US</span>
      <span class="text-sm text-gray-500 line-through ml-2">44,99 $US</span>
    </div>

  </div>
</div>
<div class="mt-10 font-bold p-5 text-3xl">
  Sujets populaires
</div>

<div class="relative overflow-hidden w-full"> 
  <!-- Conteneur principal avec transition -->
  <div 
    class="flex transition-transform duration-500 ease-in-out"
    :class="{ '-translate-x-full': showMore }"
  >
    <!-- Première série de boutons -->
    <div class="grid grid-cols-4 gap-4 p-5 flex-shrink-0 w-full">
      <router-link to="/webflutter" class="border px-4 py-2 whitespace-nowrap">Développement Web</router-link>
      <router-link to="/mobile" class="border px-4 py-2 whitespace-nowrap">React JS</router-link>
      <button class="border px-4 py-2 whitespace-nowrap">Next.js</button>
      <router-link to="/web1" class="border px-4 py-2 whitespace-nowrap">Langage HTML</router-link>
      <button class="border px-4 py-2 whitespace-nowrap">JavaScript</button>
      <button class="border px-4 py-2 whitespace-nowrap">Cadre d'application Angular</button>
      <button class="border px-4 py-2 whitespace-nowrap">CSS</button>
      <button class="border px-4 py-2 whitespace-nowrap">TypeScript</button>
    </div>
    
    <!-- Deuxième série de boutons -->
    <div class="grid grid-cols-4 gap-4 p-5 flex-shrink-0 w-full">
      <button class="border px-4 py-2 whitespace-nowrap">Vue.js</button>
      <button class="border px-4 py-2 whitespace-nowrap">Node.js</button>
      <button class="border px-4 py-2 whitespace-nowrap">Express.js</button>
      <button class="border px-4 py-2 whitespace-nowrap">MongoDB</button>
      <button class="border px-4 py-2 whitespace-nowrap">PHP</button>
      <button class="border px-4 py-2 whitespace-nowrap">Laravel</button>
      <button class="border px-4 py-2 whitespace-nowrap">Symfony</button>
      <button class="border px-4 py-2 whitespace-nowrap">Django</button>
    </div>
  </div>
  
  <!-- Bouton flottant pour faire défiler -->
  <button 
    @click="toggleCards"
    class="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-md bg-white flex items-center justify-center hover:bg-gray-200 z-10"
    :class="showMore ? 'left-2' : 'right-2'"
  >
    <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" :d="showMore ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'" />
    </svg>
  </button>
</div><!-- Conteneur principal en relative -->



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
      
      <div class="md:w-3/4 p-4">
          <p class="text-gray-600 justify-end  whitespace-nowrap  ml-210 ">10 000 résultats</p>
          
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
                   
      <div class=" border-t-2 border-gray-200 ml-50  mt-5 w-180  bg-gray-100"></div>
    
             
            
    
    
    
      
    
    
       <div class="px-50">
                    
    <div class="border rounded-lg p-6 max-w-4xl h-60 mt-5 w-190   mx-auto shadow-sm bg-white">
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
    
    <div class="flex  w-200 ml-20 p-4 mt-4 gap-4">
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
                
                 
                
         

</div>



 
    


   
</template>

<script setup>

import { ref, computed } from 'vue';
import AppFooter from './AppFooter.vue';
import { cards } from '../data/data';

const dataweb = ref(cards);
// Variables réactives
const currentIndex = ref(0);
const showMore = ref(false);
const scrollContainer = ref(null);
const isOpen = ref({
  video: false,
  categorie2: false, // Ajoute d'autres catégories ici
});




const props1 = defineProps({
  categoryName: String,
  coursesData: Array,
  categoryId: String
});



// Dans votre script
console.log("Données reçues dans props:", {
  categoryName: props1.categoryName,
  coursesData: props1.coursesData,
  categoryId: props1.categoryId,
 
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


