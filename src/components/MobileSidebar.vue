<template>
  <transition name="slide">
    <div 
      v-if="mobileMenuOpen"
      class="fixed top-0 left-0 w-80 h-full bg-white z-50 p-6 md:hidden overflow-y-auto shadow-xl"
    >
      <!-- Bouton Fermer -->
      <button @click="closeMenu" class="mb-4">
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Liste des Catégories -->
      <div v-if="!selectedCategory">
        <h3 class="text-lg font-bold mb-3">Catégories</h3>
        <div
          v-for="cat in categories"
          :key="cat.name"
          class="flex justify-between items-center py-2 px-2 bg-white mb-2 rounded hover:bg-purple-100"
        >
          <a :href="cat.link" @click="closeMenu">{{ cat.name }}</a>
          <button @click="selectCategory(cat.name)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4 text-gray-600">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Sous-catégories -->
      <div v-else>
        <div
          v-for="sub in mobileSubCategories"
          :key="sub.name"
          class="py-2 bg-white mb-2 rounded hover:bg-purple-100"
        >
          <a :href="sub.link" class="text-purple-700" @click="closeMenu">{{ sub.name }}</a>
        </div>
      </div>

      <!-- Authentification -->
      <template v-if="!auth.isAuthenticated">
        <router-link to="/login" class="block py-2 text-purple-800 hover:underline" @click="closeMenu">
          Se connecter
        </router-link>
        <router-link to="/register" class="block py-2 text-purple-800 hover:underline" @click="closeMenu">
          S’inscrire
        </router-link>
      </template>
      <template v-else>
        <div class="mt-4 text-gray-600 px-2">
          Connecté en tant que : <span class="font-semibold text-purple-700">{{ auth.user?.email }}</span>
        </div>
        <button @click="logoutAndClose" class="block mt-2 py-2 text-red-600 hover:text-red-800">
          Se déconnecter
        </button>
      </template>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps([
  'mobileMenuOpen',
  'selectedCategory',
  'categories', 
  'mobileSubCategories',
  'auth',
  'selectCategory',
  'logout'
])
const emit = defineEmits(['update:mobileMenuOpen'])

const closeMenu = () => {
  emit('update:mobileMenuOpen', false)
}

const logoutAndClose = () => {
  props.logout()
  closeMenu()
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
