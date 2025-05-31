<template>





  <div class="mt-20">

      
   <heade/>
  </div>





    
<div class=" mt-10 bg-white px-10  py-2 h-200 w-full ">
       
       <div class="flex items-center w-300 mt-10 py-2 border rounded-lg shadow-md overflow-hidden h-130">
         <!-- Image du cours -->
        <div class="">
         <h2 class="text-2xl px-2 font-bold">
           Vous souhaitez améliorer vos compétences sur le sujet Google Flutter? Nous avons ce  <br> qu'il vous faut.
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
       
         <!-- Contenu du cours -->
         <div class="p-5 w-2/3">
             <div class=" flex space-x-4">
                 <div class="card bg-white shadow-sm -mt-40 w-80 h-50">
           <img src="" alt="WordPress" class="w-full h-40 object-cover">
           <div class="card-body mt-12">
             <h2 class="card-title text-lg font-bold">
               Créez votre site WordPress de A à Z - Débutants (2025)
             </h2>
             <p class="text-xs text-gray-600">Stephanie Canovas</p>
             <div class="flex items-center">
               <span class="text-yellow-500 font-semibold text-sm">4,3</span>
               <span class="text-yellow-500">⭐</span>
               <span class="text-xs text-gray-500">(1418)</span>
             </div>
             <div class="flex items-center">
               <span class="text-lg font-bold text-black">10,99 $US</span>
               <span class="text-sm text-gray-500 line-through">59,99 $US</span>
             </div>
             <span class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md">Meilleure vente</span>
       
           </div>
       
         </div>
       
           
       
                </div>
                  </div>
                    </div>
       
                    </div>
       
       
       
            <div  class=" w-full -mt-40 h-150 ">
       
       
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



     </div>
   
 </div>

       <!-- Deuxième carte (Tu peux remplacer les informations ici) -->
       
       
       
       
       <!-- Deuxième carte (Tu peux remplacer les informations ici) -->
       
         
       
       
       
       <!-- Deuxième carte (Tu peux remplacer les informations ici) -->
       
         
       
       
       
       
       
       
       <div class="mt-8 font-bold p-5 text-2xl">
         Les participants qui suivent des cours sur le sujet Google Flutter suivent également les cours suivants
       </div>
       
       <div class="relative overflow-hidden w-full"> 
           <!-- Conteneur principal avec transition -->
           <div 
             class="flex transition-transform duration-500 ease-in-out"
             :class="{ '-translate-x-full': showMore }"
           >
             <!-- Première série de boutons -->
             <div class="grid grid-cols-4 gap-4 p-5 flex-shrink-0 w-full">
               <button  class="border px-4 py-2 whitespace-nowrap">Développement Web</button>
               <button class="border px-4 py-2 whitespace-nowrap">React JS</button>
               <button class="border px-4 py-2 whitespace-nowrap">Next.js</button>
               <button class="border px-4 py-2 whitespace-nowrap">Langage HTML</button>
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
        
       
       
       
       
       
       
        <div class="text-2xl font-bold p-4">
         Meilleurs cours dans les catégories Google Flutter et Firebase
        </div>
       
       
       
       
       
        <div class="h-100 flex px-8  gap-3">
       
       <!-- Première carte + texte -->
      
 <div class="flex flex-wrap justify-center gap-6">
   <div
     v-for="(item, index) in coursesData1"
     :key="index"
     class="card bg-white shadow-lg rounded-lg w-80 overflow-hidden"
   >
   <iframe :src="item.image" class="w-full h-40"></iframe>

     <div class="p-4">
       <h2 class="text-lg font-bold text-gray-800">
         {{ item.title }}
       </h2>

       <p class="text-sm text-gray-600 mb-2">
         {{ item.author }}
       </p>

       <div class="flex items-center text-sm text-yellow-500 mb-2">
         <span class="font-semibold">{{ item.rating || '4,3' }}</span>
         <span class="ml-1">⭐</span>
         <span class="ml-2 text-gray-500">({{ item.reviews || '1418' }})</span>
       </div>

       <div class="flex items-center space-x-2 mb-2">
         <span class="text-lg font-bold text-black">
           {{ item.price ? `${item.price} $US` : '10,99 $US' }}
         </span>
         <span class="text-sm text-gray-500 line-through">
           {{ item.originalPrice ? `${item.originalPrice} $US` : '59,99 $US' }}
         </span>
       </div>

       <span
         v-if="item.badge"
         class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md"
       >
         {{ item.badge }}
       </span>
     </div>
   </div>
 </div>


       
       
       
       
       
       </div>
       
       <div class="p-4 font-bold text-2xl">Meilleurs cours dans les catégories Google Flutter et Dart (langage de programmation)</div>
       
       
       <div class="h-100 flex px-8  gap-3">
       
        
       
       
        <!-- Deuxième carte (Tu peux remplacer les informations ici) -->
        <div class="flex flex-col items-center m">
         <div class="card bg-white shadow-lg w-80 h-50">
           <iframe class="w-full h-full" src="https://www.youtube.com/embed/SXmWVboohsA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
       
           
           <div class="card-body mt-12">
             <h2 class="card-title text-lg font-bold">Maîtriser React.js</h2>
             <p class="text-xs text-gray-600">Matthieu Passerel</p>
             <div class="flex items-center">
               <span class="text-yellow-500 font-semibold text-sm">4,5</span>
               <span class="text-yellow-500">⭐</span>
               <span class="text-xs text-gray-500">(1020)</span>
             </div>
             <div class="flex items-center">
               <span class="text-lg font-bold text-black">12,99 $US</span>
               <span class="text-sm text-gray-500 line-through">49,99 $US</span>
             </div>
             <span class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md">Meilleure vente</span>
           </div>
         </div>
       </div>
         </div>


   
     


   



















  



 <div class="p-4 font-bold text-2xl">Tous les cours sur le sujet {{ categoryName }}</div>
     
     
     
     
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
             <div v-for="(item, index) in  coursesData" :key="index" class="flex w-200 ml-20 p-4 mt-4 gap-4">
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


import Principale from '../views/widgets/Principale.vue';
 import heade from '../views/widgets/heade.vue';
 import AppFooter from './AppFooter.vue';
 import { ref, computed } from 'vue';
 import { cards } from '../data/data';


 import composant from '../views/widgets/composant.vue';





import { useRouter } from 'vue-router';
import Composant from '../views/widgets/composant.vue';




const showMore = ref(false);






 // Onglet actif


 const props = defineProps({


   categoryName: String,
 coursesData: Array,
 categoryId: String,
 pageData: {
   type: Object,
 },
 coursesData1: Array,
 pageData: {
   type: Object,
   
 },
 
 cards: {
   type: Array,
   default: () => []
 },
 coursesData2: Array,
 coursesData3: Array
});
 

 const dataweb = ref(cards);
// Variables réactives
const currentIndex = ref(0);

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
 
 
 