import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  const isAuthenticated = computed(() => !!user.value)
  const userInitial = computed(() => {
    if (user.value?.email) return user.value.email.charAt(0).toUpperCase()
    if (user.value?.name) return user.value.name.charAt(0).toUpperCase()
    return '?'
  })

  function login(userData) {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
  }

  function logout() {
    user.value = null
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
  }

  function loadUser() {
    const stored = localStorage.getItem('user')
    if (stored) user.value = JSON.parse(stored)
  }

  return { user, isAuthenticated, userInitial, login, logout, loadUser }
})
