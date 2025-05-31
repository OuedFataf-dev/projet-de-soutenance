<template>
    
    
    <div class="bg-purple-800 text-white">
   
   <!-- Section recherche -->
   <div class="bg-pink-800 py-16 px-4">
     <h1 class="text-3xl font-bold mb-6 text-center">Rechercher un Quiz</h1>
     <div class="max-w-4xl mx-auto flex items-center">
       <input
         type="text"
         placeholder="Football, Disney, Harry Potter, Drapeaux..."
         class="flex-grow px-4  bg-white py-3 rounded-l-lg focus:outline-none text-gray-700"
       />
       <button class="bg-pink-500 text-white px-6 py-3 rounded-r-lg hover:bg-pink-600">
         OK
       </button>
     </div>
   </div>


   
 </div>


 <div class="p-4 mt-20 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Domaines de Connaissances</h1>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div
        v-for="(domain, index) in domaines"
        :key="index"
        class="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform cursor-pointer"
      >
      <router-link
    :to="domain.link || '#'"
    class="block bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform cursor-pointer"
  >
    <div class="text-5xl mb-2">{{ domain.icon }}</div>
    <div class="text-indigo-800 font-semibold leading-tight">{{ domain.name }}</div>
  </router-link>
      </div>
    </div>
  </div>
    



  
    
   

  </template>





<script setup>
// Associe chaque domaine à une icône ou emoji
const domaines = [
  { name: "Deep learning", icon: "🧠",link:"/stats" },
  { name: "Statistique", icon: "📊" },
  { name: "React js", icon: "⚛️" },
  { name: "Vue js", icon: "🖼️" },
  { name: "Angular", icon: "🅰️" },
  { name: "PhP", icon: "🐘" },
  { name: "Science de Données", icon: "📈" },
  { name: "Python", icon: "🐍" },
  { name: "Flutter", icon: "💙" },
  { name: "Kotlin", icon: "🧡" },
  { name: "ChatGPT", icon: "🤖" },
  { name: "Node js", icon: "🌳" },
  { name: "Machine learning", icon: "🤖" },
  { name: "Finance et Comptabilité", icon: "💰" },
  { name: "Informatique et Logiciel", icon: "💻" },
  { name: "Marketing", icon: "📢" },
];
</script>