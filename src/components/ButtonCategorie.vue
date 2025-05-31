<template>
    <button 
      @click="$emit('click')"
      class="category-button"
      :class="{ active: isActive }"
    >
      {{ category.title }}
    </button>
  </template>
  
  <script setup>
  defineProps({
    category: Object,
    isActive: Boolean
  });
  </script>