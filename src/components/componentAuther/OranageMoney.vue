<template>
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
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'https://bacekend-node-js-1.onrender.com';
const phone = ref('')
const amount = ref('')
const message = ref('')
const loading = ref(false)
const success = ref(false)
const qrCodeUrl = ref(null)
let pollingInterval = null

const startPayment = async () => {
  if (!phone.value || !amount.value || amount.value <= 0) {
    message.value = "📛 Veuillez remplir tous les champs correctement."
    success.value = false
    return
  }

  loading.value = true
  message.value = ""
  qrCodeUrl.value = null

  try {
    const response = await axios.post('http://localhost:5000/api/payment/orange-money', {
      phone: phone.value,
      amount: amount.value
    })

    if (response.data.success) {
      message.value = "✅ Paiement initié. Vérifiez votre téléphone ou scannez le QR Code."
      qrCodeUrl.value = response.data.qrCode
      success.value = true

      // Lancer le polling toutes les 5 sec
      pollingInterval = setInterval(async () => {
        const statusRes = await axios.get(`${API_URL}/api/payment/status/${response.data.transactionId}`)
        if (statusRes.data.status === 'confirmed') {
          clearInterval(pollingInterval)
          message.value = "🎉 Paiement confirmé avec succès."
        } else if (statusRes.data.status === 'failed') {
          clearInterval(pollingInterval)
          message.value = "❌ Paiement échoué."
          success.value = false
        }
      }, 5000)
    } else {
      message.value = "❌ Paiement refusé. Vérifiez vos infos."
      success.value = false
    }
  } catch (e) {
    console.error(e)
    message.value = "🚨 Erreur réseau ou serveur."
    success.value = false
  } finally {
    loading.value = false
  }
}
</script>
