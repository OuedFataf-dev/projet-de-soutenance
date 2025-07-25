// stores/searchStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const query = ref('')
  return { query }
})