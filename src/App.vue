<template>
  <div id="app">
    <div class="bg-gray-100 min-h-screen">
      <div v-if="!shouldHide" class="bg-blue-200 text-center py-5 font-semibold">
        Promotion en cours | … <span class="font-bold">1 jour restant !</span>
      </div>
      <NavBar v-if="!shouldHide" />
      <router-view />
     
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';

const route = useRoute();
const hiddenNames = ['', 'update', 'add','dasboard','Quiz'];
const shouldHide = computed(() =>
  hiddenNames.includes(route.name)
);
</script>

<style scoped>
/* … */
</style>






