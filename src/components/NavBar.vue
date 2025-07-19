<template>
  <div id="app">
    <nav class="flex justify-between items-center px-6 py-4 bg-white border-b-0 border-gray-300 shadow-xl z-50 NavBar">
      <!-- Logo Udemy -->

      
      <div class="flex items-center text-2xl font-bold text-purple-700">


         <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden mr-4"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
        Gandyam
      </div>
<div class="text-2xl">
  <router-link to="/login">
    Decouvrir
  </router-link>
</div>

    <!-- Tooltip Découvrir -->
   

      <!-- Séparateur -->
      <div class="border-l border-gray-200 h-full"></div>

      

     

    

    <!-- Menu mobile (optionnel) -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-4 py-2">
        <div v-for="category in categories" :key="category.name" class="mb-2">
          <button
            @click="selectCategory(category.name)"
            class="w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-100"
          >
            {{ category.name }}
          </button>
          <div v-if="selectedCategory === category.name" class="ml-4">
            <a
              v-for="subCat in mobileSubCategories"
              :key="subCat.name"
              :href="subCat.link"
              class="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600"
            >
              {{ subCat.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  

      <!-- Barre de recherche -->
      <input
        type="text"
        placeholder="Que souhaitez-vous apprendre ?"
        class="border  hidden md:block  rounded-full -ml-60 px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <!-- Boutons Udemy Business, Enseigner, Connexion, Inscription -->
      <div class=" -ml-6 space-x-4 flex items-center">
        <!-- Udemy Business -->
        <div class=" relative">
          <button
            id="udemyBusinessBtn "
            class="text-gray-700 -ml-36 text-sm  hidden md:block  hover:text-purple-600"
            @mouseenter="showMainTooltip('udemyBusiness')"
            @mouseleave="startHideTooltip('main')"
          >
            Udemy Business
          </button>
          <div
            v-show="showTooltip === 'udemyBusiness'"
            class="absolute z-10 mt-6 w-[300px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg left-1/2 transform -translate-x-1/2"
            @mouseenter="cancelHideTooltip('main')"
            @mouseleave="startHideTooltip('main')"
          >
            Offrez aux membres de votre équipe un accès à plus de 27 000 des
            meilleurs cours Udemy, à tout moment, où qu'ils soient.
            <div class="mt-5">
              <button
                class="w-full bg-purple-600  hidden md:block  text-sm text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700"
              >
                Essayer Business
              </button>
            </div>
          </div>
        </div>

        <!-- Enseigner sur Udemy -->
        <div class="relative">
          <router-link
            id="Enseigner"
            to="/Quiz"
            class="text-gray-700 -ml-10 text-sm hover:text-purple-600"
            @mouseenter="showMainTooltip('enseigner')"
            @mouseleave="startHideTooltip('main')"
          >
            QUIZ
          </router-link>
          <div
            v-show="showTooltip === 'enseigner'"
            class="absolute z-10 mt-6 w-[300px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg left-1/2 transform -translate-x-1/2"
            @mouseenter="cancelHideTooltip('main')"
            @mouseleave="startHideTooltip('main')"
          >
            Transformez vos connaissances en véritable opportunité et touchez des
            millions de personnes du monde entier.
            <div class="mt-5">
              <button
                class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        <div class="relative group">
  <router-link to="/cart">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
               14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
               2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 
               14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 
               1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  </router-link>
  
  <!-- Tooltip -->
  <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 text-sm text-black h-20 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
     <div class="mt-10">
      Votre panier est vide
     </div>
  </div>
</div>


        <!-- Boutons Connexion et Inscription -->
       <template v-if="!auth.isAuthenticated">
  <router-link
    to="/login"
    class="bg-white border hidden md:block  text-sm border-purple-800 text-purple-900 px-4 py-2 rounded hover:bg-gray-200"
  >
    Se connecter
  </router-link>
  <router-link
     to="/register"
    class="bg-purple-500 hidden md:block  text-white px-4 py-2 rounded hover:bg-purple-600"
  >
    S'inscrire
  </router-link>
</template>


<!-- Zone profil et notification si connecté -->
<template v-else>
  <!-- Icône de notification -->
  <div class="relative group hidden">
    <svg xmlns="http://www.w3.org/2000/svg"
         class="size-6 text-gray-700 hover:text-purple-600"
         fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
               6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 
               6 8.388 6 11v3.159c0 .538-.214 1.055-.595 
               1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
    </svg>
    <!-- Optionnel : notification badge -->
    <span class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
  </div>

  <!-- Cercle avec première lettre de l’email -->
   <div class="relative inline-block text-left group hidden md:block">
    <!-- Bouton avatar -->
    <div
      class="bg-purple-600 text-white  hidden md:block rounded-full h-10 w-10 flex items-center justify-center font-bold cursor-pointer"
    >
      {{ auth.userInitial }}
    </div>

    <!-- Menu déroulant -->
    <div
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block"
    >
      <div class="py-1">
        <!-- Email utilisateur -->
        <div class="px-4 py-2 text-sm text-gray-700 font-semibold truncate border-b">
          {{ auth.user?.email }}
        </div>

        <!-- Liens -->
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Passer au plan supérieur</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personnaliser</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paramètres</a>

        <!-- Section Aide -->
        <div class="border-t mt-1">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Aide</a>
        </div>

        <!-- Déconnexion -->
        <button
          @click="logout"
          class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  </div>

</template>

      </div>
    </nav>


    <div 
    v-show="mobileMenuOpen"
    class="fixed top-0 left-0 w-80 h-full bg-white z-50 p-6 md:hidden overflow-y-auto"
  >
    <!-- Fermer -->
    <button @click="mobileMenuOpen = false" class="mb-4">
      <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Liste des Catégories -->
   <!-- Liste des Catégories -->
<div v-if="!selectedCategory">
  <h3 class="text-lg font-bold mb-3">Catégories</h3>
  <div
    v-for="cat in categories"
    :key="cat.name"
    class="flex justify-between items-center py-2 px-2 bg-white  mb-2 rounded hover:bg-purple-100"
  >
    <span>{{ cat.name }}</span>
    <button @click="selectCategory(cat.name)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 text-gray-600"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</div>

<!-- Liste des Sous-catégories -->
<div v-else>
 
  <div
    v-for="sub in mobileSubCategories"
    :key="sub.name"
    class="py-2  bg-white mb-2 rounded hover:bg-purple-100"
  >
    <a :href="sub.link" class="text-purple-700">{{ sub.name }}</a>
  </div>
</div>


    <!-- Navigation -->
 
    <!-- Authentification -->
    <template v-if="!auth.isAuthenticated">
      <router-link to="/dasboard" class="block py-2 text-purple-800 hover:underline">Se connecter</router-link>
      <router-link to="/register" class="block py-2 text-purple-800 hover:underline">S’inscrire</router-link>
    </template>
    <template v-else>
      <div class="mt-4 text-gray-600 px-2">
        Connecté en tant que : <span class="font-semibold text-purple-700">{{ auth.user?.email }}</span>
      </div>
      <button @click="logout" class="block mt-2 py-2 text-red-600 hover:text-red-800">Se déconnecter</button>
    </template>
  </div>

  
</div>



</template>


<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const mobileMenuOpen = ref(false);
const auth = useAuthStore()
const selectedCategory = ref(null);
const router = useRouter()

onMounted(() => {
  auth.loadUser()  // Restaure user depuis localStorage au démarrage
})

const logout = () => {
  auth.logout()
  router.push('/login')
}

// États pour gérer les tooltips
const showTooltip = ref(null);
const showSubTooltip = ref(null);
const showThirdTooltip = ref(null);
const selectedSubCategory = ref(null);

// Timeouts pour les fermetures retardées
const hideTimeouts = ref({
  main: null,
  sub: null,
  third: null
});

const selectCategory = (name) => {
  selectedCategory.value = name;
};

// Liste des catégories principales
const categories = [
  { name: "Développement", margin: "ml-34", link: "/web1" },
  { name: "Business", margin: "ml-50", link: "/business" },
  { name: "Finance et Comptabilité", margin: "ml-23", link: "/finance" },
  { name: "Santé et Bien-être", margin: "ml-33" },
  { name: "Design", margin: "ml-55", link: "/design" },
  { name: "Informatique et Logiciel", margin: "ml-23", link: "/informatique" },
  { name: "Marketing", margin: "ml-48", link: "/marketing" },
  { name: "Développement Personnel", margin: "ml-1 -ml-2" },
  { name: "Productivité Bureautique", margin: "ml-40" },
  { name: "Photographie et Vidéo", margin: "ml-36" }
];

// Liste des sous-catégories
const subCategories = [
  { name: "Développement mobile", margin: "ml-7", parent: "Développement", link: "/devMobile" },
  { name: "Génie Logiciel", margin: "ml-24", parent: "Développement", link: '/génie' },
  { name: "Design pattern", margin: "ml-22", parent: "Développement" },
  { name: "Programmation Web", margin: "ml-15", parent: "Développement", link: "/web" },
  { name: "UI/UX", margin: "ml-44", parent: "Design", link: "ui/ux" },
  { name: "Graphisme", margin: "ml-36", parent: "Design" },
  { name: "3D & Animation", margin: "ml-28", parent: "Design" },
  { name: "Illustration", margin: "ml-35", parent: "Design" }
];

const subSubCategories = [
  { name: "flutter", margin: "ml-7", parent: "Développement mobile", link: "/devMobile" },
  { name: "Kotlin", margin: "ml-7", parent: "Développement mobile", link: '/génie' },
  { name: "react Native", margin: "ml-7", parent: "Développement mobile", link: '/génie' },
  { name: "Android", margin: "ml-7", parent: "Développement mobile", link: '/génie' },
  { name: "Angulaire", margin: "ml-22", parent: "Programmation Web" },
  { name: "react js", margin: "ml-20", parent: "Génie Logiciel", link: "/web" },
];

// Filtre les sous-catégories en fonction de la catégorie sélectionnée
const filteredSubCategories = computed(() => {
  if (!showSubTooltip.value) return [];
  return subCategories.filter(sub => sub.parent === showSubTooltip.value);
});

const filteredSubsubCategories = computed(() => {
  if (!selectedSubCategory.value) return [];
  return subSubCategories.filter(sub => sub.parent === selectedSubCategory.value);
});

const mobileSubCategories = computed(() => {
  if (!selectedCategory.value) return [];
  return subCategories.filter(sub => sub.parent === selectedCategory.value);
});

// Afficher le tooltip principal
const showMainTooltip = (tooltip) => {
  cancelHideTooltip('all');
  showTooltip.value = tooltip;
};

// Démarrer le timer pour masquer un tooltip
const startHideTooltip = (type) => {
  // Annuler tout timeout existant pour ce type
  if (hideTimeouts.value[type]) {
    clearTimeout(hideTimeouts.value[type]);
  }

  // Configurer un nouveau timeout
  hideTimeouts.value[type] = setTimeout(() => {
    if (type === 'main') {
      // Si on cache la main, on cache aussi les sous-menus
      showTooltip.value = null;
      showSubTooltip.value = null;
      showThirdTooltip.value = null;
    } else if (type === 'sub') {
      // Si on cache le sub, on cache aussi le third
      showSubTooltip.value = null;
      showThirdTooltip.value = null;
    } else if (type === 'third') {
      showThirdTooltip.value = null;
    }
  }, 300); // Délai de 300ms
};

// Annuler le masquage d'un tooltip
const cancelHideTooltip = (type) => {
  if (type === 'all') {
    Object.values(hideTimeouts.value).forEach(timeout => {
      if (timeout) clearTimeout(timeout);
    });
  } else if (hideTimeouts.value[type]) {
    clearTimeout(hideTimeouts.value[type]);
  }
};
</script>

<style scoped>

.mobile-menu-open {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
}

@media (min-width: 1024px) {
  .mobile-menu-open {
    position: static;
    flex-direction: row;
  }
}
/* Transition pour les tooltips */
.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.2s ease;
}
.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
}
</style>