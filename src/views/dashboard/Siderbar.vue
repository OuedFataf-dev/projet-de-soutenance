
<template>
    <div id="webcrumbs">
        <div data-id="xSSI" class="bg-gray-100 min-h-screen">
             <div data-id="a5ND" class="flex"> 
             
  
  
  
  
  
  
  
  
  
              <div class="w-[280px] bg-gray-900 text-white min-h-screen">
    <!-- Logo et Titre -->
    <div class="p-4 flex items-center space-x-2">
      <div class="bg-white rounded-full p-1">
        <span class="material-symbols-outlined text-blue-600">school</span>
      </div>
      <div class="font-bold">
        FUNDA <span class="text-xs bg-white text-blue-600 px-1 rounded">WEB IT</span>
      </div>
    </div>
  
    <!-- Menu -->
    <div class="mt-6 space-y-2">
      <!-- Dashboard -->
      <div class="px-4 py-2 flex items-center space-x-2 bg-blue-700">
        <span class="material-symbols-outlined">dashboard</span>
        <span>Dashboard</span>
      </div>
  
      <!-- Section -->
      <div class="mt-6 px-4 text-xs text-blue-200">INTERFACE</div>
  
      <!-- Quiz -->
      <div class="px-4 py-2 flex items-center space-x-2 hover:bg-gray-800">
        <span class="material-symbols-outlined">quiz</span>
        <router-link to="/Quiz" class="text-sm hover:underline">Quiz</router-link>
      </div>
  
      <!-- Liste des étudiants -->
      <div class="px-4 py-2 flex items-center space-x-2 hover:bg-gray-800">
        <span class="material-symbols-outlined">groups</span>
        <router-link to="/add" class="text-sm hover:underline">Liste des étudiants</router-link>
      </div>
  
      <!-- Gestion des cours -->
      <div
        class="px-4 py-2 cursor-pointer text-sm text-blue-500 hover:underline"
        @click="showGestionUtilisateurs = true"
      >
        Gestion des utilisateurs
      </div>
  
      <!-- Rapports -->
      <div class="px-4 py-2 flex items-center space-x-2 hover:bg-gray-800">
        <span class="material-symbols-outlined">bar_chart</span>
        <router-link  class="text-sm hover:underline">Rapports</router-link>
      </div>
  
      <!-- Déconnexion -->
      <div class="mt-8 px-4 py-2 flex items-center space-x-2 text-red-400 hover:bg-red-800 hover:text-white cursor-pointer">
        <span class="material-symbols-outlined">logout</span>
        <span>Déconnexion</span>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
              
  <div>
      <div>
                
                    
  
                 
                   </div> 
  
                   
                  </div> 
                   <div data-id="tc87" class="flex-1"> 
                     <div data-id="7Ks-" class="bg-white border-b flex justify-between items-center p-2">
                       <div data-id="S9Vx" class="flex items-center space-x-2">
                         <div data-id="j0kr" class="relative w-80"> 
                          <input data-id="RQ2V" type="text" placeholder="Search for..." class="w-full px-3 py-2 border rounded"/>
                           <button data-id="y2iW" class="absolute right-0 top-0 h-full bg-blue-500 text-white px-3 rounded-r hover:bg-blue-600 transition-colors">
                             <span data-id="eb57" class="material-symbols-outlined">search</span>
                     </button> 
                    </div> 
                    </div>
  
  
                    <div>
      <!-- Select 1: Domaine -->
      <select v-model="selectedDomain" class="border p-2 rounded w-56">
        <option disabled value="">-- Choisir un domaine --</option>
        <option v-for="(value, key) in domaines_info" :key="key" :value="key">
          {{ key }}
        </option>
      </select>
  
      <!-- Select 2: Sous-domaine -->
      <select v-model="selectedSubDomain" class="border p-2 rounded w-56 ml-2" :disabled="!subDomains.length">
        <option disabled value="">-- Choisir un sous-domaine --</option>
        <option v-for="sub in subDomains" :key="sub" :value="sub">
          {{ sub }}
        </option>
      </select>
  
      <!-- Select 3: Sous-sous-domaine / cours -->
      <select v-model="selectedSousSous" class="border p-2 rounded w-56 ml-2" :disabled="!subSubDomains.length">
        <option disabled value="">-- Choisir un cours --</option>
        <option v-for="item in subSubDomains" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
     
               
  
                                </div>  
  
                                 <div data-id="Racy" class="p-4"> 
                                  <div data-id="Dc4O" class="flex justify-between items-center mb-4"> 
  
                                  <div class="flex flex-col flex justify-between ">
  
                                       <div class="ml-230 mt-2">
                                        <button @click="ajouter" type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button>
                                        
                                       </div>
  
                                    <h1 data-id="kbeE" class=" -mt-8 text-lg text-blue-500">
                                      Academics - Departments (Category - LIST)</h1>
  
                                  </div>
                                     
                         
                    </div>
                    
                    <div data-id="YSWj" class="bg-gray-100 w-270 rounded shadow-sm"> 
  
                        <div data-id="dwb-" class="bg-blue-600 w-270 text-white p-2">
                             <h2 data-id="PMlS" class="text-lg">List des Cours </h2> 
                            </div> <div data-id="kFF2" class="overflow-x-auto">
                              <table class="min-w-full table-auto border-collapse">
  <thead>
    <tr>
      <th class="p-3 text-left">ID</th>
      <th class="p-3 text-left">Avis</th>
      <th class="p-3 text-left">Titre</th>
      <th class="p-3 text-left">Auteur</th>
      <th class="p-3 text-left">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="course in courses" :key="course.id" class="border-b hover:bg-gray-100"> 
      <td class="p-3">{{ course.id }}</td>
      <td class="p-3">{{ course.reviews || 'N/A' }}</td> 
      <td class="p-3">{{ course.title }}</td>
      <td class="p-3">{{ course.author }}</td> 
      <td class="p-3 flex space-x-2">
          <div class="">
            <button @click="update(course.id)" class="text-blue-500 hover:text-blue-700">
          <!-- icône de mise à jour -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
  </svg>
  
        </button>
          </div>
          
          <div class="ml-4">
      <!-- Bouton de suppression -->
      <button @click="openModal(course.id)" class="text-red-500 hover:text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 
                19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 
                5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 
                .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 
                3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 
                51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 
                2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
  
      <!-- Modale de confirmation -->
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded shadow-md text-center max-w-md w-full dark:bg-gray-700 dark:text-white">
      <p class="text-lg font-semibold mb-4">Voulez-vous vraiment supprimer ce cours ?</p>
      <div class="flex justify-center gap-4">
        <button @click="confirmDelete" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
          Supprimer
        </button>
        <button @click="cancelDelete" class="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
          Annuler
        </button>
      </div>
    </div>
  </div>
  
    </div>
      </td>
    </tr>
  
    <tr v-if="courses.length === 0">
      <td colspan="5" class="p-3 text-center text-gray-500">Aucun cours disponible</td>
    </tr>
  </tbody>
  </table>
  
                                          
                                          </div>
                                         </div> 
                                        </div>  
                                        <div > 
                                           
                                </div> 
                              </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                               <!-- Tableau des utilisateurs affiché si showGestionUtilisateurs == true -->
                                
  
  
  
                               <div class="ml-1   w-256 mt-2 ">
  
                                <div v-if="showGestionUtilisateurs" class="bg-gray-500 h-150 text-white">
        <div class="flex justify-between items-center mb-4">
          <div>
            <h2 class="text-2xl font-bold">Users</h2>
            <p class="text-gray-400">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          <button
            class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            Add user
          </button>
        </div>
  
        <div class="overflow-x-auto">
          <table class="w-full table-auto text-left">
            <thead class="text-gray-400 border-b border-gray-700">
              <tr>
                <th class="py-2 px-4">Name</th>
                <th class="py-2 px-4">Title</th>
                <th class="py-2 px-4">Email</th>
                <th class="py-2 px-4">Role</th>
                <th class="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody class="text-white divide-y divide-gray-700">
              <tr>
                <td class="py-3 px-4 font-semibold">Lindsay Walton</td>
                <td class="py-3 px-4">Front-end Developer</td>
                <td class="py-3 px-4">lindsay.walton@example.com</td>
                <td class="py-3 px-4">Member</td>
                <td
                  class="py-3 px-4 text-indigo-400 hover:underline cursor-pointer"
                >
                  Edit
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-semibold">Courtney Henry</td>
                <td class="py-3 px-4">Designer</td>
                <td class="py-3 px-4">courtney.henry@example.com</td>
                <td class="py-3 px-4">Admin</td>
                <td
                  class="py-3 px-4 text-indigo-400 hover:underline cursor-pointer"
                >
                  Edit
                </td>
              </tr>
              <!-- autres lignes... -->
            </tbody>
          </table>
        </div>
  
        <!-- Bouton retour pour revenir à la partie haute -->
        <button
          @click="showGestionUtilisateurs = false"
          class="mt-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Retour
        </button>
      </div>
    
  
  
  
                               </div>
  
  
  
  
                             </div>
                             
                           </div>
                            </div>
  
  
  
  
           
    
    </template>
  
  
  
  <script setup>
  import { ref, watch, onMounted } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  // Sélections
  
  
  
  
  
  const showModal = ref(false);
  const courseIdToDelete = ref(null);
  
  // Fonction pour ouvrir la modale
  function openModal(id) {
    courseIdToDelete.value = id;
    showModal.value = true;
  }
  
  // Fermer la modale
  function cancelDelete() {
    showModal.value = false;
    courseIdToDelete.value = null;
  }
  
  // Suppression confirmée
  async function confirmDelete() {
    try {
      await axios.delete(`http://localhost:5000/api/admin/courses/${courseIdToDelete.value}`);
      courses.value = courses.value.filter(course => course.id !== courseIdToDelete.value);
      showModal.value = false;
      courseIdToDelete.value = null;
      alert('Cours supprimé avec succès.');
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression.");
    }
  }
  const selectedDomain = ref('Deep learning')
  const selectedSubDomain = ref('')
  const selectedSousSous = ref('')
  
  
  const showGestionUtilisateurs = ref(false)
  
  
  
  function update(courseId) {
    router.push(`/update/${courseId}`)
  }
  
  const router = useRouter()
  
  
  
  function ajouter() {
    console.log("Redirection vers la page d'ajout...")
    router.push('/add')
  }
  // Suivi de sélection
  const selectedDomaine = ref('')
  const selectedSubdomain = ref('')
  const selectedSousSousCours = ref('')
  
  // Listes de sélection
  const subDomains = ref([])
  const subSubDomains = ref([])
  const courses = ref([])
  
  // Données
  const domaines_info = {
    "Deep learning": {},
    "Statistique": {},
    "React js": {},
    "Vue js": {},
    "Angular": {},
    "PhP": {},
    "Science de Données": {},
    "Python": {
      "Comptabilité générale": [
        "Comptabilité analytique",
        "Normes IFRS",
        "Audit financier",
        "Gestion budgétaire"
      ],
    },
    "Flutter": {},
    "Kotlin": {},
    "ChatGPT": {},
    "Node js": {
      "Comptabilité générale": [
        "Comptabilité analytique",
        "Normes IFRS",
        "Audit financier",
        "Gestion budgétaire"
      ],
    },
    "Machine learning": {},
    "Finance et Comptabilité": {
      "Comptabilité générale": [
        "Comptabilité analytique",
        "Normes IFRS",
        "Audit financier",
        "Gestion budgétaire"
      ],
      "Fiscalité": [
        "Fiscalité des entreprises",
        "TVA et autres taxes",
        "Déclarations fiscales"
      ]
    },
    "Informatique et Logiciel": {
      "Développement Web": [
        "HTML/CSS",
        "JavaScript",
        "Vue.js",
        "React"
      ],
      "Développement Mobile": [
        "Flutter",
        "React Native",
        "Swift pour iOS",
        "Kotlin pour Android"
      ]
    },
    "Marketing": {
      "Méthodes classiques": [
        "Cycle en V",
        "Diagramme de Gantt"
      ],
      "Méthodes agiles": [
        "Scrum",
        "Kanban",
        "Lean"
      ]
    }
  }
  
  // Watch domaine
  watch(selectedDomain, (newVal) => {
    const domaine = domaines_info[newVal]
    if (domaine && typeof domaine === 'object' && Object.keys(domaine).length > 0) {
      subDomains.value = Object.keys(domaine)
      subSubDomains.value = []
      selectedDomaine.value = newVal
      selectedSubDomain.value = ''
      selectedSousSous.value = ''
    } else {
      subDomains.value = []
      subSubDomains.value = []
      selectedDomaine.value = ''
      selectedSubdomain.value = ''
      selectedSousSous.value = newVal
    }
    updateCoursesFromSelection()
  })
  
  // Watch sous-domaine
  watch(selectedSubDomain, (newVal) => {
    const domaine = domaines_info[selectedDomain.value]
    if (domaine && domaine[newVal]) {
      subSubDomains.value = domaine[newVal]
      courses.value = []
      selectedSubdomain.value = newVal
      selectedSousSous.value = ''
    } else {
      subSubDomains.value = []
    }
    updateCoursesFromSelection()
  })
  
  // Watch sous-sous-domaine
  watch(selectedSousSous, (newVal) => {
    selectedSousSousCours.value = newVal
    updateCoursesFromSelection()
  })
  
  async function updateCoursesFromSelection() {
    try {
      let url = ''
  
      if (selectedSousSous.value) {
        // Cours spécifique
        url = `http://localhost:5000/api/dev/by-soussousdomaine/${encodeURIComponent(selectedSousSous.value)}`
      } else if (selectedSubDomain.value) {
        // Sous-domaine
        url = `http://localhost:5000/api/dev/subdomain/${encodeURIComponent(selectedSubDomain.value)}`
      } else if (selectedDomain.value) {
        // Domaine
        url = `http://localhost:5000/api/course/domain/${encodeURIComponent(selectedDomain.value)}`
      } else {
        // Fallback
        url = `http://localhost:5000/api/dev/by-soussousdomaine/Flutter`
      }
  
      const res = await axios.get(url)
      courses.value = res.data
      console.log('Cours récupérés depuis :', url, res.data)
    } catch (error) {
      console.error('Erreur lors de la récupération des cours :', error.response?.data || error.message)
    }
  }
  
  
  // Chargement initial
  onMounted(() => {
    const domaine = domaines_info[selectedDomain.value]
    if (domaine && typeof domaine === 'object') {
      subDomains.value = Object.keys(domaine)
    }
    updateCoursesFromSelection()
  })
  </script>
  
  <style scoped>
  select:disabled {
    background-color: #f3f3f3;
  }
  </style>