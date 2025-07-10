<template>
    <div class="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <!-- Partie gauche : Connexion -->
      <div class="w-full md:w-2/3 p-8">
        <h1 class="text-3xl font-bold mb-6">Checkout</h1>
  
        <!-- Étape 1 -->
        <div class="mb-8">
          <h2 class="font-semibold text-lg mb-2">1. Log in or create an account</h2>
          <p class="text-sm text-gray-600 mb-4">
            A Udemy account is required to access your purchased courses. Please verify that your email address is correct,
            as we’ll use it to send your order confirmation. By signing up, you agree to our
            <a href="#" class="text-purple-600 underline">Terms of Use</a> and
            <a href="#" class="text-purple-600 underline">Privacy Policy</a>.
          </p>
  
          <div class="flex items-center mb-4">
            <input type="email" placeholder="Email" class="w-full border rounded p-3" />
          </div>
  
          <div class="flex items-center space-x-3 mb-4">
            <button class="border p-2 rounded hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="h-6 w-6" />
            </button>
            <button class="border p-2 rounded hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" class="h-6 w-6" />
            </button>
            <button class="border p-2 rounded hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/448224/apple.svg" alt="Apple" class="h-6 w-6" />
            </button>
          </div>
  
          <p class="text-sm text-gray-500 mb-2">No password required</p>
  
          <button 

           @click="orangeMoney"
         class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
            Continue
          </button>
        </div>
  
        <!-- Étape 2 -->
        <div>
          <h2 class="font-semibold text-lg">2. Billing address & Payment method</h2>
          <div class="text-gray-400 text-sm mt-2">
            🔒 This section is secured and will appear after login.
          </div>
        </div>
  
        <!-- Détails des cours -->
        <div class="mt-8">
          <h3 class="font-semibold text-md">Order details (3 courses)</h3>
          <!-- Tu peux lister les cours ici si tu veux -->
        </div>
      </div>
  
      <!-- Partie droite : Résumé de commande -->
      <div class="w-full md:w-1/3 bg-white p-8 shadow-md border-t md:border-l md:border-t-0">
        <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-200 dark:from-gray-900 dark:to-gray-800 px-4">
    <div class="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl w-full max-w-md space-y-6">
      <h2 class="text-2xl font-bold text-center text-orange-600 dark:text-orange-400">
        🔐 Paiement Orange Money
      </h2>

      <!-- Champ montant -->
      <div>
        <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Montant (FCFA)</label>
        <input
          v-model="amount"
          type="number"
          min="100"
          class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          placeholder="Ex: 2000"
        />
      </div>

      <!-- Champ téléphone -->
      <div>
        <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Téléphone</label>
        <input
          v-model="phone"
          type="tel"
          class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          placeholder="Ex: 0700123456"
        />
      </div>

      <!-- Bouton avec spinner -->
      <div class="text-center">
        <button
          @click="startPayment"
          :disabled="loading"
          class="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-200 flex items-center justify-center w-full"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          {{ loading ? "Paiement en cours..." : "✅ Payer maintenant" }}
        </button>
      </div>

      <!-- Message de succès/erreur -->
      <div v-if="message" :class="['text-center font-semibold', success ? 'text-green-600' : 'text-red-600']">
        {{ message }}
      </div>

      <!-- QR Code -->
      <div v-if="qrCodeUrl" class="text-center">
        <p class="text-gray-700 dark:text-gray-200 mb-2">📲 Scannez le QR Code :</p>
        <img :src="qrCodeUrl" alt="QR Code" class="mx-auto w-40 h-40" />
      </div>
    </div>
  </div>

      </div>


    
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function orangeMoney() {
  console.log("Redirection vers la page de paiement...")
  router.push('/orangeMoney') // ou '/checkout/payment' selon votre configuration
}


 
  </script>
  
  <style scoped>
  /* Tu peux ajouter des styles supplémentaires ici si nécessaire */
  </style>
  