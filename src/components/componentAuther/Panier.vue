<template>
  <div class="p-8 bg-white min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Panier</h1>

    <p class="font-semibold mb-4">{{ courses.length }} cours dans le panier</p>
     <div class="mt-2">
      <div class=" border-t-2 border-gray-200 w-200  mt-5  bg-white"></div>
     </div>
    <div v-for="course in courses" :key="course.id" class=" w-200 p-4  mt-4 flex justify-between">
      <div class="flex">
        <img :src="course.image" alt="course image" class="w-32 h-20 object-cover rounded-md mr-4" />
        <div>
          <h2 class="font-semibold text-lg text-bold">{{ course.title }}</h2>
          <p class="text-sm text-gray-200">Par {{ course.author }}</p>
          <div class="flex items-center text-yellow-300 mt-1">
            <span class="font-bold  text-gray-200">{{ course.rating }} salur</span>
            <span class="text-white ml-1  text-gray-200">({{ course.reviews }} avis)</span>
          </div>
          <p class="text-sm  text-gray-200">{{ course.duration }} au total • {{ course.sessions }} sessions • {{ course.level }}</p>
          <a href="#" class="text-purple-200 text-sm mt-1 inline-block">Enregistrer pour plus tard</a>
        </div>
      </div>
      <div class="text-right  text-gray-200 ">
        <button class=" text-gray-200 text-sm mb-2">Supprimer</button>
        <p class="font-bold text-white">{{ course.price }} $US</p>
        <p class="line-through text-gray-300 text-sm">{{ course.originalPrice }} $US</p>
      </div>
    </div>

    <!-- Résumé -->
    <div class="bg-white p-4  rounded-lg shadow max-w-sm ml-auto">
      <h3 class="text-lg font-bold mb-2">Total :</h3>
      <p class="text-2xl font-bold mb-1">{{ total }} $US</p>
      <p class="text-sm text-gray-400 line-through">{{ originalTotal }} $US</p>
      <p class="text-green-600 text-sm mb-4">{{ discount }} % de réduction</p>
      <button 
        @click="checkout"
        class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">Procéder au paiement</button>
      <p class="text-xs text-gray-500 mt-1">Vous ne serez pas encore débité</p>

      <div class="mt-4">
        <label class="block text-sm font-semibold mb-1">Promotions</label>
        <div class="flex">
          <input
            type="text"
            v-model="coupon"
            placeholder="Saisissez le coupon"
            class="flex-grow border border-gray-300 rounded-l-md px-3 py-1 text-sm"
          />
          <button class="bg-purple-600 text-white px-4 rounded-r-md text-sm hover:bg-purple-700">Appliquer</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Vidéo carte -->
  <div class="h-100 -ml-200 -mt-60">
    <div class="flex flex-col items-center">
      <div class="card bg-white shadow-lg w-80 h-50">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/SXmWVboohsA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <div class="card-body mt-12">
          <h2 class="card-title text-lg font-bold">Maîtriser React.js</h2>
          <p class="text-xs text-gray-600">Matthieu Passerel</p>
          <div class="flex items-center">
            <span class="text-yellow-500 font-semibold text-sm">4,5</span>
            <span class="text-yellow-500">⭐</span>
            <span class="text-xs text-gray-500">(1020)</span>
          </div>
          <div class="flex items-center">
            <span class="text-lg font-bold text-black">12,99 $US</span>
            <span class="text-sm text-gray-500 line-through">49,99 $US</span>
          </div>
          <span class="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-md">Meilleure vente</span>
        </div>
      </div>
    </div>
  </div>    

  <AppFooter/>
</template>

<script setup>
import AppFooter   from '../AppFooter.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../stores/cartStore'

const cartStore = useCartStore()

const courses = computed(() => cartStore.courses)
const total = computed(() => cartStore.total)
const originalTotal = computed(() => cartStore.originalTotal)
const discount = computed(() => cartStore.discount)
const coupon = computed({
  get: () => cartStore.coupon,
  set: (val) => cartStore.setCoupon(val)
})

const router = useRouter()

function checkout() {
  console.log("Redirection vers la page de paiement...")
  router.push('/payement') // ou '/checkout/payment' selon votre configuration
}
</script>
