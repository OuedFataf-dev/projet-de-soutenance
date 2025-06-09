<template>
  <div id="app">
    <nav class="flex justify-between items-center px-2 sm:px-6 py-4 bg-white border-b-0 border-gray-300 shadow-xl z-50">
      <!-- Logo Gandy -->
      <div class="text-xl sm:text-2xl font-bold text-purple-700">Gandy</div>

      <!-- Menu burger pour mobile -->
      <div class="md:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-purple-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navigation desktop -->
      <div class="hidden md:flex items-center space-x-4 flex-1 justify-between">
        <!-- Bouton Découvrir avec Tooltip -->
        <div class="relative ml-8">
          <router-link
            id="decouvrir"
            class="text-sm px-8 font-bold hover:text-purple-600"
            @mouseenter="showMainTooltip('decouvrir')"
            @mouseleave="startHideTooltip('main')"
          >
            Découvrir
          </router-link>

          <!-- Tooltip Découvrir -->
          <div
            v-show="showTooltip === 'decouvrir'"
            class="absolute z-[60] mt-6 w-[300px] h-[500px] rounded-tl-lg bg-white border border-gray-200 shadow-lg left-1/2 transform -translate-x-1/2 flex"
            @mouseenter="cancelHideTooltip('main')"
            @mouseleave="startHideTooltip('main')"
          >
            <!-- Premier Tooltip (Gauche) -->
            <div class="w-1/2 p-4 z-50">
              <h5 class="mb-2 text-sm font-semibold whitespace-nowrap text-gray-900">
                Parcourir les certifications
              </h5>
              <p class="text-sm whitespace-nowrap text-gray-500">Préparations aux certifications.</p>
              <hr class="h-px -ml-4 w-74 my-4 bg-gray-200 border-0" />
              <div class="space-y-3">
                <div
                  class="flex items-center space-x-4"
                  v-for="category in categories"
                  :key="category.name"
                >
                  <div class="flex items-start w-full">
                    <a
                      @mouseenter="showSubTooltip = category.name; cancelHideTooltip('all')"
                      @mouseleave="startHideTooltip('sub')"
                      :href="category.link"
                      class="mt-2 hover:text-purple-600 whitespace-nowrap">{{ category.name }}</a>
                    <div
                      class="cursor-pointer mt-2 ml-20"
                      :class="category.margin"
                      @mouseenter="showSubTooltip = category.name; cancelHideTooltip('all')"
                      @mouseleave="startHideTooltip('sub')"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Séparateur -->
            <div class="border-l border-white h-full absolute top-0 left-1/2 transform translate-x-1/2"></div>

            <!-- Deuxième Tooltip (Droite) -->
            <div
              v-show="showSubTooltip"
              class="absolute top-0 left-[100%] w-80 border-l-2 border-gray-200 h-150 p-4 pl-20 z-20 bg-white"
              @mouseenter="cancelHideTooltip('all')"
              @mouseleave="startHideTooltip('sub')"
            >
              <h5 class="mb-2 text-sm font-semibold text-gray-900">Sous-catégories</h5>
              <div class="space-y-3">
                <div
                  v-for="(category, index) in filteredSubCategories"
                  :key="index"
                  class="flex gap-x-2"
                >
                  <a 
                    :href="category.link"
                    @mouseenter="selectedSubCategory = category.name; showThirdTooltip = true; cancelHideTooltip('all')"
                    @mouseleave="startHideTooltip('third')"
                    class="-ml-4 text-center hover:text-purple-600 whitespace-nowrap">
                    {{ category.name }}
                  </a> 
                  <div
                    class="mt-1 px-5 cursor-pointer"
                    :class="category.margin"
                    @mouseenter="selectedSubCategory = category.name; showThirdTooltip = true; cancelHideTooltip('all')"
                    @mouseleave="startHideTooltip('third')"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Troisième Tooltip -->
            <div class="ml-16">
              <div
                v-show="showThirdTooltip"
                class="absolute top-0 left-[200%] w-70 rounded-tr-lg border-l-2 border-gray-200 h-150 rounded-lg p-4 z-30 bg-white"
                @mouseenter="cancelHideTooltip('all')"
                @mouseleave="startHideTooltip('third')"
              >
                <ul>
                  <li
                    v-for="(subsub, index) in filteredSubsubCategories"
                    :key="index"
                    :class="subsub.margin"
                  >
                    <a v-if="subsub.link" :href="subsub.link">{{ subsub.name }}</a>
                    <span v-else>{{ subsub.name }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Barre de recherche -->
        <div class="flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Que souhaitez-vous apprendre ?"
            class="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <!-- Boutons droite -->
        <div class="flex items-center space-x-2 lg:space-x-4">
          <!-- Udemy Business -->
          <div class="relative hidden lg:block">
            <button
              id="udemyBusinessBtn"
              class="text-gray-700 text-sm hover:text-purple-600 whitespace-nowrap"
              @mouseenter="showMainTooltip('udemyBusiness')"
              @mouseleave="startHideTooltip('main')"
            >
              Udemy Business
            </button>
            <div
              v-show="showTooltip === 'udemyBusiness'"
              class="absolute z-10 mt-6 w-[300px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg left-1/2 transform -translate-x-1/2"
              @mouseenter="cancelHideTooltip('main')"
              @mouseleave="startHideTooltip('main')"
            >
              Offrez aux membres de votre équipe un accès à plus de 27 000 des
              meilleurs cours Udemy, à tout moment, où qu'ils soient.
              <div class="mt-5">
                <button
                  class="w-full bg-purple-600 text-sm text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700"
                >
                  Essayer Business
                </button>
              </div>
            </div>
          </div>

          <!-- Enseigner -->
          <div class="relative hidden lg:block">
            <button
              id="Enseigner"
              class="text-gray-700 text-sm hover:text-purple-600"
              @mouseenter="showMainTooltip('enseigner')"
              @mouseleave="startHideTooltip('main')"
            >
              Enseigner
            </button>
            <div
              v-show="showTooltip === 'enseigner'"
              class="absolute z-10 mt-6 w-[300px] px-6 py-4 text-sm font-medium bg-white rounded-lg shadow-lg left-1/2 transform -translate-x-1/2"
              @mouseenter="cancelHideTooltip('main')"
              @mouseleave="startHideTooltip('main')"
            >
              Transformez vos connaissances en véritable opportunité et touchez des
              millions de personnes du monde entier.
              <div class="mt-5">
                <button
                  class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>

          <!-- Panier -->
          <div class="relative group">
            <router-link to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke-width="1.5" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
                         14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                         2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 
                         14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 
                         1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </router-link>
            <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 text-sm text-black h-20 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <div class="mt-10">
                Votre panier est vide
              </div>
            </div>
          </div>

          <!-- Boutons Connexion et Inscription -->
          <router-link
            to="/dasboard"
            class="bg-white border text-xs sm:text-sm border-purple-800 text-purple-900 px-2 sm:px-4 py-2 rounded hover:bg-gray-200 whitespace-nowrap"
          >
            Se connecter
          </router-link>
          <router-link
            to="/Quiz"
            class="bg-purple-500 text-white px-2 sm:px-4 py-2 rounded hover:bg-purple-600 text-xs sm:text-sm whitespace-nowrap"
          >
            S'inscrire
          </router-link>

          <!-- Globe icon -->
          <div class="bg-gray-200 border text-sm border-purple-800 text-purple-900 px-2 sm:px-4 py-2 rounded hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Menu mobile -->
      <div 
        v-show="mobileMenuOpen"
        class="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50 md:hidden"
      >
        <div class="px-4 py-2 space-y-3">
          <!-- Barre de recherche mobile -->
          <input
            type="text"
            placeholder="Que souhaitez-vous apprendre ?"
            class="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          
          <!-- Liens de navigation mobile -->
          <div class="space-y-2">
            <a href="#" class="block py-2 text-gray-700 hover:text-purple-600">Découvrir</a>
            <a href="#" class="block py-2 text-gray-700 hover:text-purple-600">Udemy Business</a>
            <a href="#" class="block py-2 text-gray-700 hover:text-purple-600">Enseigner</a>
          </div>
          
          <!-- Boutons mobile -->
          <div class="space-y-2 pt-2 border-t border-gray-200">
            <router-link
              to="/dasboard"
              class="block w-full text-center bg-white border border-purple-800 text-purple-900 px-4 py-2 rounded hover:bg-gray-200"
            >
              Se connecter
            </router-link>
            <router-link
              to="/Quiz"
              class="block w-full text-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              S'inscrire
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      error: ''
    };
  },
  methods: {
    async loginWithEmail() {
      this.error = '';
      if (!this.email) {
        this.error = "Veuillez entrer une adresse e-mail.";
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: this.email
        });

        if (response.data && response.data.token) {
          console.log('Connexion réussie:', response.data);
          
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userRole', response.data.user.role);

          // Assure-toi que redirectUrl est défini
          if (response.data.redirectUrl) {
            this.$router.push(response.data.redirectUrl);
          } else {
            this.error = "Aucune redirection définie pour votre rôle.";
          }
        } else {
          this.error = "Identifiants invalides.";
        }
      } catch (err) {
        console.error(err);
        this.error = "Erreur lors de la connexion.";
      }
    }
  }
};
</script>


<style scoped>
.h-200 {
  min-height: 100vh;
}
.w-100 {
  width: 100%;
}
.w-105 {
  width: 420px;
}
.h-15 {
  height: 45px;
}
</style>
