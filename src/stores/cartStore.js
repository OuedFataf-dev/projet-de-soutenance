// Importation de la fonction defineStore depuis Pinia
import { defineStore } from 'pinia'

// Définition et exportation du store nommé 'cart'
export const useCartStore = defineStore('cart', {
  // État initial du store
  state: () => ({
    courses: [],      // Tableau contenant les cours ajoutés au panier
    coupon: '',       // Code promo éventuellement appliqué
  }),

  // Getters pour calculer des données dérivées à partir de l'état
  getters: {
    // Calcul du total actuel (somme des prix réduits des cours)
    total: (state) => state.courses.reduce((sum, c) => sum + parseFloat(c.price), 0),

    // Calcul du total sans remise (prix original)
    originalTotal: (state) => state.courses.reduce((sum, c) => sum + parseFloat(c.originalPrice), 0),

    // Calcul du pourcentage de réduction appliquée
    discount: (state) => {
      const original = state.courses.reduce((sum, c) => sum + parseFloat(c.originalPrice), 0)
      const current = state.courses.reduce((sum, c) => sum + parseFloat(c.price), 0)

      // Si original est différent de 0, calcul du % de remise
      return original ? Math.round(((original - current) / original) * 100) : 0
    }
  },

  // Actions permettant de modifier l'état du store
  actions: {
    // Ajouter un cours au panier (uniquement s'il n'y est pas déjà)
    addCourse(course) {
      const existing = this.courses.find(c => c.id === course.id) // Vérifie si le cours existe déjà
      if (!existing) {
        this.courses.push(course) // Ajoute le cours au panier
      }
    },

    // Supprimer un cours du panier par son identifiant
    removeCourse(id) {
      this.courses = this.courses.filter(c => c.id !== id) // Filtre les cours pour exclure celui avec l'ID donné
    },

    // Définir ou mettre à jour un code promo
    setCoupon(value) {
      this.coupon = value
    }
  }
})
