<template>
  <div id="app">
    <div class="bg-gray-100 min-h-screen">
      <!-- Bannière -->
      <div v-if="!shouldHide" class="bg-blue-200 text-center py-5 font-semibold">
        Promotion en cours | … <span class="font-bold">1 jour restant !</span>
      </div>

      <!-- NavBar pour toutes les routes sauf celles masquées -->
      <NavBar v-if="!shouldHide && route.name !== 'web1'" />

      <!-- NavBar visible uniquement sur desktop pour web1 -->
      <NavBar
        v-if="route.name === 'web1'"
        class="hidden sm:block"
      />

      <router-view />
    </div>
  </div>
</template>

<script setup>
import { computed,onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';


import { useAuthStore } from './stores/auth';

const auth = useAuthStore()

onMounted(() => {
  auth.loadUser() // recharge l'utilisateur depuis localStorage
})

const route = useRoute();
const hiddenNames = ['', 'update', 'add','login' , '','dashboard', 'Quiz', 'principle','Ajout']; // On retire 'web1' ici
const shouldHide = computed(() =>
  hiddenNames.includes(route.name)
);
</script>
