<template>
  <div id="webcrumbs">
      <div data-id="xSSI" class="bg-gray-100 min-h-screen">
           <div data-id="a5ND" class="flex"> 
               <div data-id="7P3Z" class="w-[180px] bg-blue-600 text-white min-h-screen"> 
              <div data-id="4qep" class="p-4 flex items-center space-x-2">
                   <div data-id="JSET" class="bg-white rounded-full p-1"> <span data-id="ymz6" class="material-symbols-outlined text-blue-600">school</span> 
                  </div> 
                  <div data-id="Ay4B" class="font-bold">FUNDA <span data-id="fwfk" class="text-xs bg-white text-blue-600 px-1 rounded">WEB IT</span></div>
               </div> <div data-id="TJLy" class="mt-6"> <div data-id="bLLi" class="px-4 py-2 flex items-center space-x-2 bg-blue-700"> <span data-id="Wuqx" class="material-symbols-outlined">dashboard</span> <span data-id="Ip27">Dashboard</span> 
              </div> <div data-id="ooyl" class="mt-8 px-4 text-xs text-blue-200">INTERFACE</div> <div data-id="NaIA" class="px-4 py-2 flex items-center justify-between"> <div data-id="kGkg" class="flex items-center space-x-2"> <span data-id="BUaf" class="material-symbols-outlined">web</span> <span data-id="gdHX">Web Pages</span> </div> <span data-id="L_T5" class="material-symbols-outlined text-sm">chevron_right</span> </div> <div data-id="90vk" class="px-4 py-2 flex items-center justify-between"> <div data-id="RmPN" class="flex items-center space-x-2"> <span data-id="KBOz" class="material-symbols-outlined">person</span> <span data-id="8Nrc">Admin Profile</span> 
              </div> </div>
               <div data-id="jheI" class="px-4 py-2 flex items-center justify-between">
                   <div data-id="TJ7C" class="flex items-center space-x-2"> 
                      <span data-id="tnsM" class="material-symbols-outlined">school</span>
                       <span data-id="0GSs">Academics</span> 
                  </div> 

                    
                </div> 
                  
                  <div data-id="I17X" class="px-4 py-2 flex items-center justify-between"> <div data-id="Ntsd" class="flex items-center space-x-2"> 
            
              </div>
               </div> 

               
                 </div> </div>  <div data-id="tc87" class="flex-1">  <div data-id="7Ks-" class="bg-white border-b flex justify-between items-center p-2"> <div data-id="S9Vx" class="flex items-center space-x-2"> <div data-id="j0kr" class="relative w-80"> <input data-id="RQ2V" type="text" placeholder="Search for..." class="w-full px-3 py-2 border rounded"/> <button data-id="y2iW" class="absolute right-0 top-0 h-full bg-blue-500 text-white px-3 rounded-r hover:bg-blue-600 transition-colors"> <span data-id="eb57" class="material-symbols-outlined">search</span>
                   </button> </div> 
                  </div>
                  <div class="p-6">
<div class="bg-white p-4 shadow w-full max-w-3xl">
  <div class="flex items-center space-x-4 mb-3">
    <!-- Select 1: Domaine -->
    <select v-model="selectedDomain" class="border p-2 rounded w-56">
      <option disabled value="">-- Choisir un domaine --</option>
      <option v-for="(value, key) in domaines_info" :key="key" :value="key">
        {{ key }}
      </option>
    </select>

    <!-- Select 2: Sous-domaine -->
    <select v-model="selectedSubDomain" class="border p-2 rounded w-56" :disabled="!subDomains.length">
      <option disabled value="">-- Choisir un sous-domaine --</option>
      <option v-for="sub in subDomains" :key="sub" :value="sub">
        {{ sub }}
      </option>
    </select>

    <!-- Select 3: Cours -->
    <select v-model="selectedCourse" class="border p-2 rounded w-56" :disabled="!courses.length">
      <option disabled value="">-- Choisir un cours --</option>
      <option v-for="cours in courses" :key="cours" :value="cours">
        {{ cours }}
      </option>
    </select>
  </div>
</div>
</div>

                   <div data-id="C1lb" class="flex items-center space-x-4"> 
                       
                      <div data-id="bm_O" class="relative cursor-pointer group"> <span data-id="Gxb3" class="material-symbols-outlined text-red-500">notifications</span> <span data-id="bsTZ" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span> </div> <div data-id="kRM9" class="relative cursor-pointer group"> <span data-id="AkFq" class="material-symbols-outlined text-orange-500">mail</span> <span data-id="ZX6q" class="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span> </div> <div data-id="R6Cy" class="flex items-center space-x-2 border-l pl-4"> <span data-id="hWUJ" class="text-gray-600 text-sm">user@gmail.com</span> <img data-id="Jor-" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3NDcxNTg3NDB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="User profile" class="w-8 h-8 rounded-full"/> </div> </div> </div>  <div data-id="Racy" class="p-4"> <div data-id="Dc4O" class="flex justify-between items-center mb-4"> <h1 data-id="kbeE" class="text-lg text-blue-500">Academics - Departments (Category - LIST)</h1>
                            
                          <button 
                            @click="ajouter"
                           data-id="Ommv" class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-colors">AJouter</button> 
                  </div> <div data-id="YSWj" class="bg-white rounded shadow-sm"> 
                      <div data-id="dwb-" class="bg-blue-500 text-white p-2">
                           <h2 data-id="PMlS" class="text-lg">Dept Category-List Updated</h2> 
                          </div> <div data-id="kFF2" class="overflow-x-auto"> 
                            <table data-id="7_HS" class="w-full">
                             <thead data-id="WdwD"> 
                              <tr data-id="tvlO" class="border-b">
                                 <th data-id="vl8B" class="text-left p-3">ID</th>
                                  <th data-id="uYcW" class="text-left p-3">COURS--ID</th> 
                                  <th data-id="eoTD" class="text-left p-3">Name</th> 
                                  <th data-id="Flbr" class="text-left p-3">Nom du Formateur</th>
                                   <th data-id="gDpH" class="text-left p-3">avis</th> 
                                   <th data-id="OIbe" class="text-center p-3">EDIT</th> 
                                   <th data-id="xeQF" class="text-center p-3">DELETE</th> </tr> 
                                  </thead> 
                                  <tbody data-id="Jggk"> 
                                    <tr data-id="CmaX" class="border-b hover:bg-gray-50"> 
                                      <td data-id="3XxI" class="p-3">1</td>
                                      
                                      <td data-id="b447" class="p-3">Department of Commerce</td> 
                                      <td data-id="hj3d" class="p-3">B.Com Professional</td>
                                       <td data-id="4XHd" class="p-3">This is a B.Com Professional Course</td> 
                                       <td data-id="OK0f" class="p-3">C</td>
                                        <td data-id="YwVd" class="p-3 text-center"> 
                              <button 
                                @click="update(course.id)"
                              data-id="tC0-" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors">EDIT</button> </td> <td data-id="C4J9" class="p-3 text-center"> 
                     
                    </td> </tr> <tr data-id="WBAv" class="border-b hover:bg-gray-50">
                      

                         <td data-id="rNGp" class="p-3 text-center"> 
                        
                        </td> <td data-id="iVB3" class="p-3 text-center">
                          
                            <!-- MODALE DE CONFIRMATION -->
<div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
    <h2 class="text-lg font-semibold mb-4">Confirmer la suppression</h2>
    <p class="mb-6">Voulez-vous vraiment supprimer ce cours ?</p>
    
    <div class="flex justify-center gap-4">
      <button @click="confirmDelete" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Oui</button>
      <button @click="showDeleteModal = false" class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Annuler</button>
    </div>
  </div>
</div>
                           </td> 
                          </tr>
                          
                             </tbody> 
                            </table> 
                          </div>
                           </div>
                           </div>  
                           <div data-id="bcVJ" class="border-t mt-auto p-2 text-xs text-gray-500 flex justify-between"> <div data-id="wfPk">15:17 / 15:41 • Update Category-Cate-List</div> <div data-id="ttB-">10:30 PM</div> 
                              
                              
                              
                              </div> </div>
                           </div> 
                           </div></div>
  
  </template>



<script setup>
import { ref,watch ,onMounted} from 'vue'


import { useRoute, useRouter } from 'vue-router' // ✅ Assure-toi que ceci est bien présent


import axios from 'axios'





const route = useRoute()







const router = useRouter()

// Données du filtre
const filters = ref([
{
  country: 'Canada',
  property: 'Referring domain',
  matching: '',
  value: '',
},

])





onMounted(async () => {
try {
  if (route.params.soussousdomaine) {
    // Récupération par sous-sous-domaine
    const res = await axios.get(`http://localhost:5000/api/dev/by-soussousdomaine/${encodeURIComponent(route.params.soussousdomaine)}`)
    courses.value = res.data
  } else if (route.params.subdomain) {
    // Récupération par sous-domaine
    const res = await axios.get(`http://localhost:5000/api/dev/subdomain/${encodeURIComponent(route.params.subdomain)}`)
    courses.value = res.data
  } else if (route.params.category) {
    // Récupération par domaine
    const res = await axios.get(`http://localhost:5000/api/course/domain/${encodeURIComponent(route.params.category)}`)
    courses.value = res.data
  } else {
    // Valeur par défaut si aucun paramètre n'est défini
    console.warn('Aucun paramètre de domaine, sous-domaine ou sous-sous-domaine détecté')
  }
} catch (error) {
  console.error('Erreur lors de la récupération des cours:', error)
}
});





const domaines_info = {
"Deep learning": {},
"Statistique": {},
"React js": {},
"Vue js": {},
"Angular": {},
"PhP": {},
"Science de Données":{},

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
};



// Form state
const selectedDomain = ref('')
const selectedSubDomain = ref('')
const selectedCourse = ref('')

// Listes dérivées
const subDomains = ref([])
const courses = ref([])

watch(selectedDomain, (newDomain) => {
const sousDomaines = domaines_info[newDomain]
subDomains.value = sousDomaines ? Object.keys(sousDomaines) : []
selectedSubDomain.value = ''
courses.value = []
})

watch(selectedSubDomain, (newSub) => {
const sousSousDomaines = domaines_info[selectedDomain.value]?.[newSub]
courses.value = Array.isArray(sousSousDomaines) ? sousSousDomaines : []
selectedCourse.value = ''
})



const confirmDelete = async () => {
try {
  await axios.delete(`http://localhost:5000/api/admin/courses/${selectedCourseId.value}`)
  alert('Cours supprimé avec succès.')
  showDeleteModal.value = false
  selectedCourseId.value = null
  router.push('/')
} catch (error) {
  console.error('Erreur lors de la suppression:', error)
  alert('Échec de la suppression du cours.')
  showDeleteModal.value = false
}
}

// Autres actions
function ajouter() {
router.push('/ajouter')
}

function update(id) {
console.log("Redirection vers la page de modification du cours :", id)
router.push(`/update/${id}`)
}
</script>
