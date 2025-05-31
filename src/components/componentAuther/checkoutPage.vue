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
  
          <button class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
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
        <h2 class="text-xl font-semibold mb-4">Order summary</h2>
        <div class="flex justify-between text-gray-600 mb-2">
          <span>Original Price:</span>
          <span>$159.97</span>
        </div>
        <div class="flex justify-between text-green-600 mb-2">
          <span>Discounts (81% Off):</span>
          <span>-$130.00</span>
        </div>
        <hr class="my-2" />
        <div class="flex justify-between text-lg font-bold">
          <span>Total (3 courses):</span>
          <span>$29.97</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CheckoutPage",
  };
  </script>
  
  <style scoped>
  /* Tu peux ajouter des styles supplémentaires ici si nécessaire */
  </style>
  