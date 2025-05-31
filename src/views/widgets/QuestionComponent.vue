<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <div class="bg-white p-6 rounded-2xl shadow-lg">
        <h1 class="text-2xl font-bold text-indigo-600 mb-2">Statistiques du Quiz</h1>
        <p class="text-gray-700 mb-4">
          Voici vos performances dans les différents quiz.
        </p>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-indigo-100 p-4 rounded-xl text-center">
            <h2 class="text-xl font-semibold text-indigo-800">Score total</h2>
            <p class="text-3xl font-bold text-indigo-900">870 pts</p>
          </div>
  
          <div class="bg-yellow-100 p-4 rounded-xl text-center">
            <h2 class="text-xl font-semibold text-yellow-800">Quiz terminés</h2>
            <p class="text-3xl font-bold text-yellow-900">12</p>
          </div>
  
          <div class="bg-green-100 p-4 rounded-xl text-center">
            <h2 class="text-xl font-semibold text-green-800">Taux de réussite</h2>
            <p class="text-3xl font-bold text-green-900">78%</p>
          </div>
        </div>
  
        <div class="mt-8">
          <h3 class="text-lg font-bold text-gray-800 mb-2">Historique des Quiz</h3>
          <ul class="space-y-2">
            <li class="bg-gray-50 p-3 rounded-md shadow flex justify-between items-center">
              <span>Quiz Finistère</span>
              <span class="text-indigo-600 font-bold">82%</span>
            </li>
            <li class="bg-gray-50 p-3 rounded-md shadow flex justify-between items-center">
              <span>Quiz Bretagne</span>
              <span class="text-indigo-600 font-bold">74%</span>
            </li>
            <!-- Ajoute d'autres quiz ici -->
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Stats",
  };
  </script>
  
