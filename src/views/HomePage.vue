<template>



<div v-if="searchQuery" v-for="course in searchedCourses" :key="course.id" class="border p-4 m-2 rounded shadow">
  <h3 class="text-lg font-bold">{{ course.title }}</h3>
  <p class="text-sm text-gray-600">{{ course.description }}</p>
  <p class="text-sm"><strong>Domaine :</strong> {{ course.domains }}</p>
  <button @click="ajouterAuPanier(course)" class="mt-2 bg-purple-500 text-white px-3 py-1 rounded">
    Ajouter au panier
  </button>
</div>


<div class=" px-10 h-130 p-12 bg-cover bg-center" 
     style="background-image: url('https://img-c.udemycdn.com/notices/web_carousel_slide/image/27f2b7f6-f346-4d3e-927f-c722ad532660.png');"> 

<div class="card w-full   md:w-[600px] lg:w-[700px h-auto md:h-60 bg-white shadow-xl">
  <div class="card-body p-4 md:p-6">
    <h2 class="card-title text-xl md:text-2xl font-bold mt-1 md:mt-3 px-2 md:px-5">
      Il y a toujours quelque chose de nouveau à apprendre
    </h2>
    <p class="text-xs md:text-sm px-2 md:px-2">
      Avec des cours ajoutés régulièrement à notre catalogue, vous pouvez accéder aux compétences en vogue. La promotion à partir de 9,99 $US se termine aujourd'hui.
    </p>
    <div class="justify-end card-actions">
      <!-- Vos boutons/actions ici -->
    </div>
  </div>
</div>

      </div>

      <div class="-mt-45">
        <div class="card card-border bg-white  w-full  h-70 shadow-xl">
 

<div class="card-body p-4 md:p-6">
  <h2 class="card-title text-xl md:text-2xl font-bold px-4 md:px-10 mt-2 md:mt-4">
    <div class="py-4 md:py-8">
      Toutes les compétences dont vous avez besoin au même endroit
      <p class="px-0 md:px-4 mt-4 md:mt-8 text-base md:text-lg whitespace-normal">
        Des compétences essentielles aux sujets techniques, Udemy contribue à votre développement professionnel.
      </p>
    </div>
  </h2>
</div>










   </div>
<div class="flex flex-wrap gap-2 md:gap-x-4 mt-4 card-actions px-4 md:px-10 overflow-x-auto pb-2">
  <button
    v-for="tab in tabs"
    :key="tab.id"
    @click="activeTab = tab.id"
    class="text-sm md:text-lg font-semibold pb-2 px-2 md:px-0 border-b-4 whitespace-nowrap transition-all"
    :class="{
      'border-black text-black': activeTab === tab.id,
      'border-transparent text-gray-500': activeTab !== tab.id
    }"
  >
    {{ tab.label }}
  </button>
</div>

  </div>

  
        <div class="bg-gray-100 w-full h-180">   
          <div class="flex gap-2 px-4 py-4 bg-gray-100 w-full h-100 overflow-x-auto scrollbar-hide">
  <div
    v-for="card in filteredCards"
    :key="card.id"
    class="min-w-[160px] h-20 rounded-4xl flex-shrink-0 flex items-center justify-center cursor-pointer transition-colors duration-200 p-2"
    :class="{
      'bg-black text-white': selectedDomaine === card.domains,
      'bg-gray-200 text-black': selectedDomaine !== card.domains
    }"
    @click="selectDomaine(card.domains)"
  >
    <div class="text-center">
      <div class="text-sm font-semibold truncate">{{ card.domains }}</div>
      <div class="text-[11px]">+ {{ card.participants }} participants</div>
    </div>
  </div>
</div>


    
      <div class="px-2 -mt-60 ">

      
        <div class="relative w-full overflow-hidden">
    <div 
      class="flex transition-transform duration-300 ease-in-out"
      :style="isMobile ? {} : { transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(group, index) in groupedCourses"
        :key="index"
        class="flex md:flex-row flex-col gap-4 p-4 w-full flex-shrink-0"
      >
        <div 
          v-for="course in group"
          :key="course.id"
          @mouseenter="showTooltip(course.id)"
          @mouseleave="hideTooltip"
          class="bg-gray-200 shadow-sm border rounded-xl gap-6 overflow-hidden md:w-1/3 w-full h-auto relative"
        >
          <video
            :src="`https://bacekend-node-js-1.onrender.com/${course.video}`"
            controls 
            autoplay 
            muted 
            playsinline
            class="w-full h-64 md:h-72 object-cover"
          ></video>

          <div class="p-4 px-6 bg-white mt-2">
            <h2 class="text-lg font-bold">{{ course.title }}</h2>
            <p class="text-gray-600 text-sm mt-1">{{ course.author }}</p>

            <div class="flex items-center mt-2">
              <span class="text-yellow-500 text-lg">{{ course.rating }}</span>
              <span class="text-yellow-500 text-lg">⭐</span>
              <span class="text-yellow-500 text-lg">⭐</span>
              <span class="text-yellow-500 text-lg">⭐</span>
              <span class="text-yellow-500 text-lg">⭐</span>
              <span class="text-yellow-500 text-lg">⭐</span>
              <span class="ml-1 text-gray-700">({{ course.reviews }} avis)</span>
            </div>
          </div>

          <!-- Tooltip -->
          <div
            v-show="hoveredIndex === course.id"
            class="absolute z-10 top-0 mt-2 w-[95%] md:w-[400px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg"
          >
            <div class="text-xl font-bold">{{ course.title }}</div>
            <div class="text-xs text-green-400">Mise à jour janvier 2025</div>
            <div class="text-sm text-gray-500">76,5 heures au total · Tous les niveaux · Sous-titres</div>

            <div class="text-sm mt-2">{{ course.title }}</div>

            <div class="mt-4 space-y-3">
              <div class="flex items-start gap-2" v-if="course.list1">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <span class="xs">{{ course.list1 }}</span>
              </div>

              <div class="flex items-start gap-2">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <span class="xs">Apprendre à réaliser des sites web et des projets complets de A à Z.</span>
              </div>

              <div class="flex items-start gap-2" v-if="course.list3">
                <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
                <span class="xs">{{ course.list3 }}</span>
              </div>
            </div>

            <div class="mt-6">
              <button
                @click="ajouterAuPanier(course)"
                class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation boutons -->
    <button
      v-if="!isMobile && currentIndex > 0"
      @click="prevGroup"
      class="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-white flex items-center justify-center hover:bg-gray-200"
    > 
      <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>

    <button
      v-if="!isMobile"
      @click="nextGroup"
      class="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-white flex items-center justify-center hover:bg-gray-200"
    >  
      <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>

  <!-- Bouton Afficher tous -->
  <div class="px-4 mt-4">
    <button class="bg-white dark:text-sky-400 border border-gray-500 text-purple-600 px-4 py-2 rounded-sm w-full md:w-auto">
      Afficher tous les cours de la catégorie science des données
    </button>
  </div>


      </div>

      
      
    </div>


<div class="bg-white text-center px mt-200 md:mt-4">
  Plus de 16 000 entreprises et des millions de participants nous font confiance dans le monde entier
</div>

   
        
            <div class="flex  bg-white mt-0">
                
           <div class=" px-20  mt-10">
                  <img src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals" alt="">
              </div>
                   
           <div class=" px-15 mt-10">
                  <img src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals" alt="">
              </div>
                   
           <div class=" px-10 mt-10 bg-white">
                  <img src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals" alt="">
              </div>
            </div>
       
       <div class="  px-2 bg-white">
            <div class="font-bold px-2 text-3xl ">
              Les participants regardent
            </div>
        </div>
        

        <!-- Carrousel avec gestion d'erreurs -->
  <div class="relative w-full bg-white overflow-hidden" v-if="groupedCourses2 && groupedCourses2.length">
    <div 
      class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex1 * 100}%)` }"
    >
      <div
        v-for="(group, index) in groupedCourses2"
        :key="'group2-'+index"
        class="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-4 gap-4 p-4"
      >
        <div 
          v-for="course in group"
          :key="course.id"
           @mouseenter="showTooltip(course.id)"
          @mouseleave="hideTooltip"
          class="bg-white shadow-sm border rounded-xl overflow-hidden"
        >
           <video
            :src="`https://bacekend-node-js-1.onrender.com/${course.video}`"
            controls 
            autoplay 
            muted 
            playsinline
            class="w-full h-40 md:h-72 object-cover"
          ></video>
          <div class="p-4">
            <h2 class="text-lg font-bold">{{ course.title }}</h2>
            <p class="text-gray-600 text-sm mt-1">{{ course.author }}</p>
            <div class="flex items-center mt-2">
              <span class="text-yellow-500">⭐</span>
              <span class="ml-1 text-gray-700">{{ course.rating }} ({{ course.reviews }} avis)</span>
            </div>

          </div>



          <div
    v-show="hoveredIndex === course.id"
    class="absolute z-10  -top-4  mt-2  w-[400px] px-4 py-4 text-sm font-medium bg-white rounded-lg shadow-lg"
  >
    <div class="text-xl font-bold">   {{ course.title }}</div>
    <div class="text-xs text-green-400">Mise à jour janvier 2025</div>
    <div class="text-sm text-gray-500">76,5 heures au total · Tous les niveaux · Sous-titres</div>

    <div class="text-sm mt-2">
         {{ course.description }}
    </div>

    <div class="mt-4 space-y-3">
      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span class="xs"   >{{ course.list1 }}.</span>
      </div>

      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span class="xs">{{ course.list2 }}.</span>
      </div>

      <div class="flex items-start gap-2">
        <svg class="size-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span class="xs">{{ course.list3 }}.</span>
      </div>
    </div>

    <div class="mt-6">
      <button
          @click="ajouterAuPanier(course)"
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
      v-if="currentIndex1 > 0"
      @click="prevGroup1"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-white flex items-center justify-center hover:bg-gray-200 z-10"
      aria-label="Précédent"
    >
      <svg class="w-6 h-6 fill-gray-800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- Bouton suivant -->
    <button
      v-if="groupedCourses2 && currentIndex1 < groupedCourses2.length - 1"
      @click="nextGroup1"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-white flex items-center justify-center hover:bg-gray-200 z-10"
      aria-label="Suivant"
    >
      <svg class="w-6 h-6 fill-gray-800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>


     
     
<div class="bg-gray-200 mt- h-280 w-full">
        
<h2 class="text-3xl px-5 py-10 font-bold">Un apprentissage axé sur vos objectifs</h2>

<div class="flex flex-col lg:flex-row gap-x-5 px-5">
  <!-- Cartes -->
  <div class="flex flex-col gap-y-5 flex-1">
    <!-- Carte 1 -->
    <div class="border border-gray-500 rounded-lg p-5 shadow-sm bg-white flex flex-col md:flex-row items-center gap-4">
      <img src="https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png" alt="Icône" class="w-24 h-20">
      <div>
        <h2 class="font-bold text-lg">Formation pratique</h2>
        <p class="text-gray-600 text-sm">
          Perfectionnez vos compétences grâce à des exercices de codage, quiz et des espaces de travail alimentés par l'IA.
        </p>
      </div>
    </div>

    <!-- Carte 2 -->
    <div class="border-l-4 border-purple-500 rounded-lg p-5 shadow-sm bg-white flex flex-col md:flex-row items-center gap-4">
      <img src="https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png" alt="Icône" class="w-24 h-20">
      <div>
        <h2 class="font-bold text-lg">Préparation aux certifications</h2>
        <p class="text-gray-600 text-sm">
          Préparez-vous à obtenir des certifications reconnues grâce à des défis concrets.
        </p>
        <div class="mt-2">
          <a class="text-purple-600" href="">Explore course</a>
        </div>
      </div>
    </div>

    <!-- Carte 3 -->
    <div class="border border-gray-500 rounded-lg p-5 shadow-sm bg-white flex flex-col md:flex-row items-center gap-4">
      <img src="https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png" alt="Icône" class="w-24 h-20">
      <div>
        <h2 class="font-bold text-lg">Formation accompagnée</h2>
        <p class="text-gray-600 text-sm">
          Atteignez vos objectifs grâce à une équipe dédiée et un accompagnement personnalisé.
        </p>
      </div>
    </div>

    <!-- Carte 4 -->
    <div class="border border-gray-500 rounded-lg p-5 shadow-sm bg-white flex flex-col md:flex-row items-center gap-4">
      <img src="https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png" alt="Icône" class="w-24 h-20">
      <div>
        <h2 class="font-bold text-lg">Contenu personnalisable</h2>
        <p class="text-gray-600 text-sm">
          Créez des parcours d'apprentissage adaptés à vos besoins, avec vos propres ressources.
        </p>
      </div>
    </div>
  </div>

  <!-- Image de droite -->
  <div class="flex justify-center lg:justify-end mt-10 lg:mt-0 flex-1">
    <img src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/dcee8645ac7a78bbebc8e2ef1d3993f2/French.png" class="w-full max-w-xl">
  </div>
</div>
    
        






         <div class="  mt-15 bg-white w-full h-200 shadow-3xl">
               <div class="px-10 font-bold text-3xl py-10">
                Accélérez votre évolution ou celle de votre entreprise
               </div>
                  
                 <div class="-mt-5  px-5">
                  Atteignez plus rapidement vos objectifs grâce à l'un de nos abonnements ou programmes. Essayez-en un gratuitement <br> aujourd'hui, ou contactez le service commercial pour en savoir plus.
                 </div>


                 
<div class="flex flex-col md:flex-row px-4 md:px-10 py-10 gap-5 items-center md:items-stretch">
  
  <!-- Carte Abonnement Individuel -->
  <a href="#" class="relative block w-full max-w-md rounded-lg bg-white border border-t-4 border-gray-500 shadow-sm dark:bg-purple-600 dark:border-purple-600 dark:hover:bg-purple-700">
    <div class="absolute top-0 left-0 w-full bg-gray-100 rounded-t-lg p-4">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Abonnement individuel</h5>
      <p class="text-gray-600 text-sm">Pour vous</p>
    </div>
    <div class="pt-20 mt-5 p-6">
      <p class="text-xl font-bold text-gray-900 dark:text-white">À partir de <span class="text-black">$10.00 US</span> par mois</p>
      <p class="text-sm text-gray-600">Facturation mensuelle ou annuelle. Annulez à tout moment.</p>
      <button class="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700">
        Bénéficiez d'un essai gratuit →
      </button>
      <ul class="mt-4 space-y-2 text-gray-700 dark:text-gray-400">
        <li class="flex items-center"><span class="text-green-500">✔</span> Accès à plus de 12 000 cours parmi les meilleurs</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Préparation aux certifications</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Recommandations basées sur les objectifs</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Exercices de codage optimisés par l'IA</li>
      </ul>
    </div>
  </a>

  <!-- Carte Abonnement Team -->
  <a href="#" class="relative block w-full max-w-md rounded-lg bg-white border border-t-4 border-gray-500 shadow-sm dark:bg-purple-600 dark:border-purple-600 dark:hover:bg-purple-700">
    <div class="absolute top-0 left-0 w-full bg-gray-100 rounded-t-lg p-4">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Abonnement Team</h5>
      <p class="text-gray-600 text-sm">Pour votre équipe</p>
    </div>
    <div class="pt-20 mt-5 p-6">
      <p class="text-xl font-bold text-gray-900 dark:text-white"><span class="text-black text-sm">$30.00 US par mois, par utilisateur</span></p>
      <p class="text-sm text-gray-600">Facturation mensuelle ou annuelle. Annulez à tout moment.</p>
      <button class="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700">
        Bénéficiez d'un essai gratuit →
      </button>
      <ul class="mt-4 space-y-2 text-gray-700 dark:text-gray-400">
        <li class="flex items-center"><span class="text-green-500">✔</span> Accès à plus de 12 000 cours parmi les meilleurs</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Préparation aux certifications</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Recommandations basées sur les objectifs</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Exercices de codage optimisés par l'IA</li>
      </ul>
    </div>
  </a>

  <!-- Carte Abonnement Enterprise -->
  <a href="#" class="relative block w-full max-w-md rounded-lg bg-white border border-t-4 border-gray-500 shadow-sm dark:bg-purple-600 dark:border-purple-600 dark:hover:bg-purple-700">
    <div class="absolute top-0 left-0 w-full bg-gray-100 rounded-t-lg p-4">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Abonnement Enterprise</h5>
      <p class="text-gray-600 text-sm">Pour l'ensemble de votre entreprise</p>
    </div>
    <div class="pt-20 mt-5 p-6">
      <p class="text-sm font-bold text-gray-900 dark:text-white">
        Contacter le service commercial pour obtenir la <br> tarification
      </p>
      <button class="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700">
        Demander une démonstration →
      </button>
      <ul class="mt-4 space-y-2 text-gray-700 dark:text-gray-400">
        <li class="flex items-center"><span class="text-green-500">✔</span> Access to 27,000+ top courses</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Préparation aux certifications</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Recommandations basées sur les objectifs</li>
        <li class="flex items-center"><span class="text-green-500">✔</span> Exercices de codage optimisés par l'IA</li>
      </ul>
    </div>
  </a>

</div>

      
  <div class= "bg-gray-100 px-1  w-full py-16">
    <div class="text-3xl font-bold px-10 mb-10 px-10">
      Voir ce que d'autres réalisent grâce à l'apprentissage
    </div>
    <div class="flex relative lg:-ml-20 flex-wrap justify-center gap-2 px-2">
      <!-- Card 1 -->
      <div class="bg-white p-6 border shadow-lg rounded-lg w-80">
        <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="Guillemet" class="w-4 h-4">
        <p class="text-lg font-semibold">
          “Udemy a été désigné comme 
          <span class="font-bold">le cours en ligne ou le programme de certification le plus populaire</span> 
          pour apprendre à coder, selon 
          <a href="#" class="text-purple-600">l’enquête 2023 de StackOverflow</a>.”
        </p>
        <div class="mt-4 text-gray-500 flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" 
               alt="Stack Overflow" class="h-6 mr-2" />
          37 076 réponses recueillies
        </div>
        <a href="#" class="text-purple-600 font-semibold mt-4 block">Voir les cours sur le développement Web →</a>
      </div>

      <!-- Card 2 -->
      <div class="bg-white p-6 border shadow-lg rounded-lg w-80">
        <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="Guillemet" class="w-4 h-4">
        <p class="text-lg font-semibold">
          “Udemy a réellement <span class="font-bold">changé la donne et a été un vrai guide</span> pour moi dans la création de Dimensional.”
        </p>
        <div class="mt-4 flex items-center">
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg" alt="Alvin Lim" class="h-10 w-10 rounded-full mr-3" />
          <div>
            <p class="font-semibold">Alvin Lim</p>
            <p class="text-gray-500 text-sm">Co-fondateur technique, Dimensional</p>
          </div>
        </div>
        <a href="#" class="text-purple-600 font-semibold mt-4 block">Afficher ce cours iOS & Swift →</a>
      </div>

      <!-- Card 3 -->
      <div class="bg-white p-6 border shadow-lg rounded-lg w-80">
        <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="Guillemet" class="w-4 h-4">
        <p class="text-lg font-semibold">
          “Udemy vous donne la possibilité d’être persévérant. La plate-forme m’a aidé à 
          <span class="font-bold">trouver un nouveau poste</span>.”
        </p>
        <div class="mt-4 flex items-center">
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png" alt="William A. Wachlin" class="h-10 w-10 rounded-full mr-3" />
          <div>
            <p class="font-semibold">William A. Wachlin</p>
            <p class="text-gray-500 text-sm">Responsable des comptes, AWS</p>
          </div>
        </div>
        <a href="#" class="text-purple-600 font-semibold mt-4 block">Afficher ce cours sur AWS →</a>
      </div>

      <!-- Card 4 -->
      <div class="bg-white p-6  border shadow-lg rounded-lg w-80">
        <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="Guillemet" class="w-4 h-4">
        <p class="text-lg font-semibold">
          “Grâce à Udemy Business, les employés ont réussi à associer compétences technologiques et comportementales, ce qui leur a permis 
          <span class="font-bold">d’évoluer dans leur carrière</span>.”
        </p>
        <div class="mt-4 flex items-center">
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg" alt="Ian Stevens" class="h-10 w-10 rounded-full mr-3" />
          <div>
            <p class="font-semibold">Ian Stevens</p>
            <p class="text-gray-500 text-sm">Head of Capability Development, Publicis Sapient</p>
          </div>
        </div>
        <a href="#" class="text-purple-600 font-semibold mt-4 block">Lire l’article complet →</a>
      
      </div>
         
  <button class=" absolute right-0 bottom-40 w-12 h-12 rounded-full shadow-lg bg-white flex items-center justify-center hover:bg-gray-200">
    <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
    </svg>
  </button>
    </div>
  </div>

 

       
<AppFooter/>
          </div>
  
      </div>



 


<div>

  
</div>



  <div class="fixed bottom-6 right-6 z-50">
    <button
      class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 rotate-animation"
      @click="openChat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.84l-4 1 1.1-3.3A7.993 7.993 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </button>
  </div>

















    
    
</template>







<script setup>
import AppFooter from '../components/AppFooter.vue';
import { ref, onMounted,computed ,watch} from 'vue';
import axios from 'axios';



import { useSearchStore } from '../stores/course'
const searchStore = useSearchStore()

const searchedCourses = computed(() => {
  if (!searchStore.query) return filteredCourses.value;
  return filteredCourses.value.filter(course =>
    course.title.toLowerCase().includes(searchStore.query.toLowerCase())
  );
});

   
const hoveredIndex = ref(null);

function showTooltip(index) {
  hoveredIndex.value = index;
}

function hideTooltip() {
  hoveredIndex.value = null;
}




 // ← Courses sera peuplé par l'API






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


// Appel API pour récupérer les cours

const courses = ref([]);
const courses2 = ref([]);
const selectedDomaine = ref("Angular"); // domaine sélectionné par l’utilisateur

const isFirstLoad = ref(true); // ← Ce flag indique si c'est le premier appel
const API_URL = import.meta.env.VITE_API_URL || 'https://bacekend-node-js-1.onrender.com';
const fetchCourses = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/course/domain/${selectedDomaine.value}`);

    // Met à jour tous les cours récupérés
    courses.value = res.data;

    // Initialise `courses2` une seule fois avec les cours "Deep learning"
    if (isFirstLoad.value) {
      courses2.value = res.data.filter(course => {
        try {
          const domainsArray = JSON.parse(course.domains);
          return Array.isArray(domainsArray) && domainsArray.includes("Deep learning");
        } catch (e) {
          console.warn("Erreur de parsing domains pour le cours :", course.id, e);
          return false;
        }
      });

      isFirstLoad.value = false; // ← Ensuite on ne touche plus à courses2
    }

  } catch (error) {
    console.error('Erreur lors du chargement des cours :', error);
  }
};



onMounted(() => {
  selectDomaine("Deep learning"); // ← Domaine par défaut
  const udemyBusinessBtn = document.getElementById("udemyBusinessBtn");
  if (udemyBusinessBtn) {
    udemyBusinessBtn.addEventListener("click", toggleTooltip);
  }
});




const selectDomaine = (domains) => {
  selectedDomaine.value = domains;
  fetchCourses();
};

watch(selectedDomaine, () => {
  if (selectedDomaine.value) {
    fetchCourses();
  }
});


const filteredCourses = computed(() => {
  return selectedDomaine.value
    ? courses.value.filter(course => {
        let domainList = [];

        // Vérifie si `course.domains` est un string JSON
        if (typeof course.domains === 'string') {
          try {
            domainList = JSON.parse(course.domains);
          } catch (e) {
            console.error("Erreur de parsing JSON dans 'domains'", e);
            return false;
          }
        } else if (Array.isArray(course.domains)) {
          domainList = course.domains;
        }

        return domainList.includes(selectedDomaine.value);
      })
    : courses.value;
});



// Regroupe les cours filtrés (comme tu le fais déjà)
const groupedCourses = computed(() => {
  const groups = [];
  const groupSize = 3; // Par exemple, 3 cours par slide
  for (let i = 0; i < filteredCourses.value.length; i += groupSize) {
    groups.push(filteredCourses.value.slice(i, i + groupSize));
  }
  return groups;
});


const toggleTooltip = () => {
  showTooltip.value = !showTooltip.value;
};

const currentIndex = ref(0);

// Grouper les cours par 3

const showLeftButton = ref(false);



const prevGroup = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    showLeftButton.value = currentIndex.value > 0;
  }
};

const nextGroup = () => {
  if (currentIndex.value < groupedCourses.value.length - 1) {
    currentIndex.value++;
    showLeftButton.value = true;
  }
};







    
 
const tabs = ref([
      { id: "data_science", label: "Science des données" },
      { id: "web_dev", label: "Développement Web" },
      { id: "mobile_dev", label: "Développement Mobile" },
      { id: "communication", label: "Communication" },
      { id: "leadership", label: "Leadership" }
    ]);

    // Onglet actif par défaut
    const activeTab = ref("data_science");

    // Liste des cartes avec catégories associées
    const cards = ref([
    { id: 12, domains: "Deep learning", participants: "7 M", category: "data_science", width: "14rem" },
    { id: 11, domains: "les statistiques", participants: "7 M", category: "data_science", width: "14rem" },
    { id: 10, domains: "Python", participants: "7 M", category: "data_science", width: "14rem" },
      { id: 9, domains: "Machine learning", participants: "7 M", category: "data_science", width: "14rem" },
      { id: 1, domains: "ChatGPT", participants: "4 M", category: "data_science", width: "11.25rem" },
      { id: 2, domains: "Science de Données", participants: "7 M", category: "data_science", width: "14rem" },
      { id: 3, domains: "React.js", participants: "5 M", category: "web_dev", width: "12rem" },
      { id: 3, domains: "Angular", participants: "5 M", category: "web_dev", width: "12rem" },
      { id: 4, domains: "Vue.js", participants: "3 M", category: "web_dev", width: "12rem" },
      { id: 13, domains: "Html", participants: "5 M", category: "web_dev", width: "12rem" },
      { id: 14, domains: "Angular", participants: "3 M", category: "web_dev", width: "12rem" },
      { id: 15, domains: "PHP", participants: "5 M", category: "web_dev", width: "12rem" },
      { id: 16, domains: "Nodejs", participants: "3 M", category: "web_dev", width: "12rem" },
      { id: 5, domains: "Flutter", participants: "6 M", category: "mobile_dev", width: "13rem" },
      { id: 17,domains: "Kotlin", participants: "4.5 M", category: "mobile_dev", width: "12.5rem" },
      { id: 18,domains: "React Native", participants: "6 M", category: "mobile_dev", width: "13rem" },

      { id: 6, domaine: "Swift", participants: "4.5 M", category: "mobile_dev", width: "12.5rem" },
      { id: 7, domaine: "Stratégies de communication", participants: "8 M", category: "communication", width: "17rem" },
      { id: 19, domaine: "powerPoint", participants: "8 M", category: "communication", width: "14rem" },
      { id: 20, domaine: "parler en public", participants: "8 M", category: "communication", width: "15rem" },
      { id: 7, domaine: "Stratégies de communication", participants: "8 M", category: "communication", width: "17rem" },
      { id: 8, domaine: "Management et Leadership", participants: "9 M", category: "leadership", width: "16rem" }
    ]);

    // Filtrer les cartes selon l'onglet actif
    const filteredCards = computed(() =>
      cards.value.filter((card) => card.category === activeTab.value)
    );




// Grouper les cours par 4
const groupedCourses2 = computed(() => {
  if (!courses2.value) return [];
  const groups = [];
  for (let i = 0; i < courses2.value.length; i += 4) {
    groups.push(courses2.value.slice(i, i + 4));
  }
  return groups;
});

const currentIndex1 = ref(0);

const prevGroup1 = () => {
  if (currentIndex1.value > 0) {
    currentIndex1.value--;
  }
};

const nextGroup1 = () => {
  if (groupedCourses2.value && currentIndex1.value < groupedCourses2.value.length - 1) {
    currentIndex1.value++;
  }
};
    
</script>




<style scoped>
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate-animation {
  animation: rotation 2s linear infinite;
}

/* Masquer la barre de défilement si nécessaire */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
/* Ajoutez des styles personnalisés si nécessaire */
</style>