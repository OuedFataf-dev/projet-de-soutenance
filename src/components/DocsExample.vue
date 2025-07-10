<template>
  <nav class="flex justify-between items-center px-6 py-4 bg-white border-b-0 border-gray-300 shadow-xl z-50 NavBar">
    <!-- LOGO + Hamburger -->
    <div class="flex items-center text-2xl font-bold text-purple-700">
      <!-- Bouton hamburger (mobile uniquement) -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden mr-4"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      Gandy
    </div>

    <!-- BOUTON DÉCOUVRIR + TOOLTIP (desktop uniquement) -->
    <div class="hidden md:block -ml-80 relative">
      <!-- ... ton bloc Découvrir avec les tooltips ... -->
    </div>

    <!-- BARRE DE RECHERCHE -->
    <input
      type="text"
      placeholder="Que souhaitez-vous apprendre ?"
      class="hidden md:block border rounded-full -ml-60 px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />

    <!-- ACTIONS UTILISATEUR -->
    <div class="space-x-4 flex items-center -ml-6">
      <!-- Boutons Udemy Business, Quiz, Cart, Connexion, Inscription, Profil, etc -->
      <!-- ... tout ton bloc utilisateur ici inchangé ... -->
    </div>
  </nav>

  <!-- ✅ MENU LATÉRAL POUR MOBILE -->
  <div 
    v-show="mobileMenuOpen"
    class="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-6 md:hidden transition-transform"
  >
    <!-- Fermer -->
    <button @click="mobileMenuOpen = false" class="mb-4">
      <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Lien Navigation Mobile -->
    <router-link to="/" class="block py-2 text-gray-700 hover:text-purple-600">Accueil</router-link>
    <router-link to="/Quiz" class="block py-2 text-gray-700 hover:text-purple-600">Quiz</router-link>
    <router-link to="/cart" class="block py-2 text-gray-700 hover:text-purple-600">Panier</router-link>

    <div >
      <router-link to="/dasboard" class="block py-2 text-purple-800 hover:underline">Se connecter</router-link>
      <router-link to="/register" class="block py-2 text-purple-800 hover:underline">S’inscrire</router-link>
    </div>

    <div >
      <div class="block py-2 text-gray-600"></div>
      <button @click="logout" class="block py-2 text-red-600 hover:text-red-800">Se déconnecter</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// État
const mobileMenuOpen = ref(false);



function logout() {
  // log out logic
  console.log("Déconnexion...");
}
</script>

<style scoped>
/* Tes styles personnalisés ici */
</style>
