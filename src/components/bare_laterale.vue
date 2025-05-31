<template>
  <div class="px-10 mt-10">
    <h1 class="font-bold text-4xl">Cours sur le sujet Google Flutter</h1>
    <p class="mt-4 text-lg">
      Les cours sur Google Flutter vous font découvrir un kit de développement logiciel d'IU open source créé par Google.
      Apprenez la création de widgets, la gestion des états et le développement multiplate-forme pour être en mesure de 
      créer des applications de haute qualité pour les environnements mobiles, Web et de bureau à partir d'une base de code unique.
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
      <span class="px-4 py-2 bg-white font-bold border text-black rounded">Développement</span>
      <span class="px-4 py-2 bg-white font-bold border text-black rounded">Informatique et logiciels</span>
      <span class="px-4 py-2 bg-white font-bold border text-black rounded">Développement mobile</span>
      <span class="px-4 py-2 bg-white font-bold border text-black rounded">Informatique et logiciels - Divers</span>
    </div>
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



     <div  class=" w-full -mt-40 h-150">


      <div class="font-bold px-10 -mt-5 text-2xl">
    Cours pour commencer
  </div>

  <div class="px-10 mt-7 text-xl">
    Découvrez les cours dispensés par des experts confirmés.
  </div>

  <!-- Section "Le plus populaire" -->
  <div class="px-10 mt-10">
   
    
    <!-- Badges -->
    <div class="container mx-auto px-4">

    <!-- Navigation -->
    <div class="flex space-x-8 mb-2 pb-4">
     
    
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
  </div>
   






    
    <div class=" bg-white h-110 -mt-8 flex px-8  gap-3">

<!-- Première carte + texte -->

<div
    v-for="card in displayedCards"
    :key="card.id"
    class="flex flex-col items-center mt-10 flex-shrink-0"
  >
    <div class="card bg-white shadow-lg w-74 h-50">
      <img :src="card.image" :alt="card.title" class="w-full h-40 object-cover">
      <div class="card-body mt-12">
        <h2 class="card-title text-lg font-bold">{{ card.title }}</h2>
        <p class="text-xs text-gray-600">{{ card.author }}</p>
        <div class="flex items-center">
          <span class="text-yellow-500 font-semibold text-sm">{{ card.rating }}</span>
          <span class="text-yellow-500">⭐</span>
          <span class="text-xs text-gray-500">({{ card.reviews }})</span>
        </div>
        <div class="flex items-center">
          <span class="text-lg font-bold text-black">{{ card.price }} $US</span>
          <span class="text-sm text-gray-500 line-through">{{ card.originalPrice }} $US</span>
        </div>
        <span 
          class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md"
          v-if="card.badge === 'Meilleure vente'"
        >
          {{ card.badge }}
        </span>
        <span 
          class="bg-green-200 text-green-700 text-xs px-2 py-1 rounded-md"
          v-else-if="card.badge === 'Nouveau'"
        >
          {{ card.badge }}
        </span>
      </div>
    </div>
  </div>

<!-- Deuxième carte (Tu peux remplacer les informations ici) -->




<!-- Deuxième carte (Tu peux remplacer les informations ici) -->

  



<!-- Deuxième carte (Tu peux remplacer les informations ici) -->

  

</div>




<div class="mt-8 font-bold p-5 text-2xl">
  Les participants qui suivent des cours sur le sujet Google Flutter suivent également les cours suivants
</div>
<div class="relative">



<div 
    class="flex transition-transform duration-500 ease-in-out"
    :class="{ '-translate-x-full': showMore }"
  >
    <!-- Première série de boutons -->
    <div class="grid grid-cols-4 gap-4 p-5 flex-shrink-0 w-full">
      <button class="border px-4 py-2 whitespace-nowrap">Développement Web</button>
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
</div>






 <div class="text-2xl font-bold p-4">
  Meilleurs cours dans les catégories Google Flutter et Firebase
 </div>





 <div class="h-100 flex px-8  gap-3">

<!-- Première carte + texte -->
<div class="flex flex-col items-center">
  <div class="card bg-white shadow-lg w-80 h-50">
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




 <!-- Deuxième carte (Tu peux remplacer les informations ici) -->
 <div class="flex flex-col items-center">
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

<!-- Deuxième carte (Tu peux remplacer les informations ici) -->
<div class="flex flex-col items-center">
  <div class="card bg-white shadow-lg w-80 h-50">
    <img src="" alt="React" class="w-full h-40 object-cover">
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

<div class="p-4 font-bold text-2xl">Meilleurs cours dans les catégories Google Flutter et Dart (langage de programmation)</div>


<div class="h-100 flex px-8  gap-3">

<!-- Première carte + texte -->
<div class="flex flex-col items-center">
  <div class="card bg-white shadow-lg w-80 h-50">
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

 <!-- Deuxième carte (Tu peux remplacer les informations ici) -->
 <div class="flex flex-col items-center">
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
    <span class="whitespace-nowrap px-30">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           class="size-4 transition-transform duration-200" :class="isOpen.Notes ? 'rotate-180' : ''">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </span>
  </h2>

  <ul class="space-y-2 mt-2" v-if="isOpen.Notes">
    <li><input type="checkbox"> 0 à 1 heure (920)</li>
    <li><input type="checkbox"> 1 à 3 heures (3 161)</li>
    <li><input type="checkbox"> 3-6 heures (2 650)</li>
    <li><input type="checkbox" disabled> 6-17 heures (3 543)</li>
  </ul>
     
  <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>
  <!-- Durée de la vidéo -->
  <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('video')">
    Durée de la vidéo
    <span class="whitespace-nowrap px-8">
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
    <span class="whitespace-nowrap px-28">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           class="size-4 transition-transform duration-200" :class="isOpen.categorie2 ? 'rotate-180' : ''">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </span>
  </h2>

  <ul class="space-y-2 mt-2"  v-if="isOpen.categorie2">
    <li><input type="checkbox"> Option 1</li>
    <li><input type="checkbox"> Option 2</li>
    <li><input type="checkbox"> Option 3</li>
  </ul>
    
  <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>
  
  <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('Sous_categorie')">
    Sous categorie
   
    <span class="whitespace-nowrap   px-12">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           class="size-4 transition-transform duration-200" :class="isOpen.Sous_categorie ? 'rotate-180' : ''">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </span>
  </h2>

  <ul class="space-y-2 mt-2" v-if="isOpen.Sous_categorie">
    <li><input type="checkbox"> Optio</li>
    <li><input type="checkbox"> Option 2</li>
    <li><input type="checkbox"> Option 3</li>
  </ul>

  <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>
  


  <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('niveau')">
       niveau
    <span class="whitespace-nowrap px-28">
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

  <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('Langues')">
       Langues
    <span class="whitespace-nowrap px-50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           class="size-4 transition-transform duration-200" :class="isOpen.Langues ? 'rotate-180' : ''">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </span>
  </h2>

  <ul class="space-y-2 mt-2" v-if="isOpen.Langues">
    <li><input type="checkbox"> 0 à 1 heure (920)</li>
    <li><input type="checkbox"> 1 à 3 heures (3 161)</li>
    <li><input type="checkbox"> 3-6 heures (2 650)</li>
    <li><input type="checkbox" disabled> 6-17 heures (3 543)</li>
  </ul>
     
  <div class=" border-t-2 border-gray-200 -ml-20  mt-5  bg-gray-100"></div>

  <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('prix')">
       prix
    <span class="whitespace-nowrap px-32">
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
     
  <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>
  <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('Fonctionnalités')">
       Fonctionnalités
    <span class="whitespace-nowrap px-10">
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
     
  <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>
  <h2 class="font-bold mt-4 flex items-center cursor-pointer" @click="toggle('Sous_titres')">
       Sous-titres
    <span class="whitespace-nowrap px-19">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
           class="size-4 transition-transform duration-200" :class="isOpen.Sous_titres ? 'rotate-180' : ''">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </span>
  </h2>

  <ul class="space-y-2 mt-2" v-if="isOpen.Sous_titres">
    <li><input type="checkbox"> 0 à 1 heure (920)</li>
    <li><input type="checkbox"> 1 à 3 heures (3 161)</li>
    <li><input type="checkbox"> 3-6 heures (2 650)</li>
    <li><input type="checkbox" disabled> 6-17 heures (3 543)</li>
  </ul>
     
  <div class=" border-t-2 border-gray-200 -ml-5  mt-5  bg-gray-100"></div>

  <!-- Ajoute d'autres catégories ici -->
</div>



</div>
  </div>
  
  <div class="md:w-3/4 p-4">
      <p class="text-gray-600 justify-end  whitespace-nowrap px-10 ">10 000 résultats</p>
      
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
               
  <div class=" border-t-2 border-gray-200 ml-20  mt-5  bg-gray-100"></div>

         
        
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
               
  <div class=" border-t-2 border-gray-200 ml-20  mt-5  bg-gray-100"></div>


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
               
  <div class=" border-t-2 border-gray-200 ml-20  mt-5  bg-gray-100"></div>


      
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
               
  <div class=" border-t-2 border-gray-200 ml-20  mt-5  bg-gray-100"></div>


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
               
  <div class=" border-t-2 border-gray-200 ml-20  mt-5  bg-gray-100"></div>

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
               
  <div class=" border-t-2 border-gray-200 ml-20  mt-5  bg-gray-100"></div>

      <div class="flex  px-10 space-x-4 mt-10">
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


  <div class=" w-300 h-20 ml-10 -mt-10 p-4 px-20 border-b-2 border-gray-300  bg-white"></div>


     <div class="  ">
        <div class=" text-4xl font-bold justify-center  text-center">
          En savoir plus sur le sujet Google Flutter
        </div>
        
           
           <div class="flex text-sm mt-10 justify-center text-center  ">
              Flutter est un SDK Google permettant de créer des interfaces natives pour iOS et Android à  l’aide  <br> du langage de programmation Dart. Flutter peut être intégré avec les bases de code iOS et <br> Android existantes. Il s'agit d'un outil gratuit et open source.


           </div>



          <AppFooter/>
            
             


         


          
            
     </div>


      </div>


    



    
 





 

     
</template>


<script setup>
import { ref, computed } from 'vue';


const activeTab = ref('popular');
const showMore = ref(false);

const tabs = [
  { id: 'popular', label: 'Le plus populaire' },
  { id: 'trending', label: 'Tendance' },
  { id: 'new', label: 'Nouveau' }
];



const isOpen = ref({
video: false,
categorie2: false,
// Ajoute d'autres catégories ici
});

const toggle = (category) => {
isOpen.value[category] = !isOpen.value[category];
};
  

const cards = [
  {
    id: 1,
    title: 'Créez votre site WordPress de A à Z - Débutants (2025)',
    categories: ['popular', 'trending'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Meilleure vente',
    author: 'Stephanie Canovas',
    rating: 4.3,
    reviews: 1418,
    price: 10.99,
    originalPrice: 59.99
  },
  {
    id: 2,
    title: 'Maîtriser React.js',
    categories: ['trending', 'new'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Nouveau',
    author: 'Matthieu Passerel',
    rating: 4.5,
    reviews: 1020,
    price: 12.99,
    originalPrice: 49.99
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
    categories: ['popular'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Meilleure vente',
    author: 'Sophie Martin',
    rating: 4.8,
    reviews: 2345,
    price: 11.99,
    originalPrice: 69.99
  }
];

const displayedCards = computed(() => {
  let filteredCards = cards.filter(card => card.categories.includes(activeTab.value));
  return showMore.value ? filteredCards : filteredCards.slice(0, 4);
});

const toggleCards = () => {
  showMore.value = !showMore.value;
};
</script>

<style scoped>
</style>
