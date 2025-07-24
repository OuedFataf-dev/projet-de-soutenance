<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const query = route.query.q || ''
</script>

<template>
  <div>
    <h1>Résultats de recherche pour "{{ query }}"</h1>
    <!-- Affiche ici les résultats filtrés selon "query" -->
  </div>
</template>
