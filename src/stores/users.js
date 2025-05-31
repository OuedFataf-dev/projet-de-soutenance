// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    role: '',  // Rôle de l'utilisateur (super-admin, admin, formateur, étudiant)
    username: '',
    email: '',
    isAuthenticated: false,  // Si l'utilisateur est authentifié ou non
  }),
  actions: {
    setUserInfo(user) {
      this.role = user.role
      this.username = user.username
      this.email = user.email
      this.isAuthenticated = true
    },
    resetUser() {
      this.role = ''
      this.username = ''
      this.email = ''
      this.isAuthenticated = false
    },
  },
})
