<template>


    <div class="flex">
      <div class="relative flex h-[calc(100vh-2rem)] w-full max-w-[20rem] flex-col rounded-xl bg-black bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
           
           <div class="p-4 mb-2">
             <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
               Dashboard Administrateur
             </h5>
           </div>
           <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal  text-white">
             <!-- Section Gestion -->
             <div class="relative block w-full">
               <div role="button" class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                 <button type="button" class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900">
                   <div class="grid mr-4 place-items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                       <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                     </svg>
                   </div>
                   <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed  text-white">
                     Gestion
                   </p>
                   <span class="ml-4">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 mx-auto transition-transform rotate-180">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                     </svg>
                   </span>
                 </button>
               </div>
               <div class="overflow-hidden">
                 <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                   <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                     <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900  text-white">
                       <div class="grid mr-4 place-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-3">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                         </svg>
                       </div>
                       Utilisateurs
                     </div>
                     <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900  text-white">
                       <div class="grid mr-4 place-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-3">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                         </svg>
                       </div>
                       Cours
                     </div>
                     <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900  text-white">
                       <div class="grid mr-4 place-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-3">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                         </svg>
                       </div>
                       Contenus
                     </div>
                     <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900  text-white">
                       <div class="grid mr-4 place-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-3">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                         </svg>
                       </div>
                       Forums
                     </div>
                   </nav>
                 </div>
               </div>
             </div>
         
             <!-- Section Statistiques -->
             <div class="relative block w-full">
               <div role="button" class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                 <button type="button" class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
                   <div class="grid mr-4 place-items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                       <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                     </svg>
                   </div>
                   <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed  text-white">
                     Statistiques
                   </p>
                   <span class="ml-4">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 mx-auto transition-transform">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                     </svg>
                   </span>
                 </button>
               </div>
               <div class="overflow-hidden">
                 <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal  text-white">
                   <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                     <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                       <div class="grid mr-4 place-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-3">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                         </svg>
                       </div>
                       Inscriptions
                     </div>
                     <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                       <div class="grid mr-4 place-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-3">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                         </svg>
                       </div>
                       Progression
                     </div>
                     <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                       <div class="grid mr-4 place-items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-3">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                         </svg>
                       </div>
                       Rapports
                     </div>
                   </nav>
                 </div>
               </div>
             </div>
         
             <!-- Section Modération -->
             <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
               <div class="grid mr-4 place-items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                   <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" />
                   <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                   <path fill-rule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clip-rule="evenodd" />
                 </svg>
               </div>
               Modération Forum
               <div class="grid ml-auto place-items-center justify-self-end">
                 <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
                   <span>5 nouveaux</span>
                 </div>
               </div>
             </div>
         
           </nav>
         </div>
               
      <div class="">
    
  
        <div class="flex justify-center items-center w-240 h-150 bg-blue-400">
      <div class="w-full max-w-2xl mx-auto">
        <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-70 space-y-4">
  
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Title</label>
            <input id="title" type="text" ref="title" placeholder="Enter title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
  
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="categories">Categories (Tags)</label>
            <input id="categories" type="text" ref="categories" placeholder="e.g. popular, new" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
  
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Image URL</label>
            <input id="image" type="text" ref="image" placeholder="Enter image URL" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
  
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="badge">Badge</label>
            <input id="badge" type="text" ref="badge" placeholder="e.g. Best Seller" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
  
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="author">Author</label>
            <input id="author" type="text" ref="author" placeholder="Author Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
  
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="rating">Rating</label>
              <input id="rating" type="number" ref="rating" step="0.1" placeholder="e.g. 4.5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
  
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="reviews">Reviews</label>
              <input id="reviews" type="number" ref="reviews" placeholder="e.g. 120" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </div>
  
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Price</label>
              <input id="price" type="number" ref="price" step="0.01" placeholder="e.g. 29.99" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
  
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="originalPrice">Original Price</label>
              <input id="originalPrice" type="number" ref="originalPrice" step="0.01" placeholder="e.g. 59.99" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </div>
  
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="tag">Tag</label>
            <input id="tag" type="text" ref="tag" placeholder="e.g. Sale" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
  
          <div class="inline-block relative w-64">
            <select ref="domain" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Select un domaine</option>
              <option value="Développement">Développement</option>
              <option value="Business">Business</option>
              <option value="Finance et Comptabilité">Finance et Comptabilité</option>
              <option value="Santé et Bien-être">Santé et Bien-être</option>
              <option value="Design">Design</option>
              <option value="Informatique et Logiciel">Informatique et Logiciel</option>
              <option value="Marketing">Marketing</option>
              <option value="Développement Personnel">Développement Personnel</option>
              <option value="Productivité Bureautique">Productivité Bureautique</option>
              <option value="Photographie et Vidéo">Photographie et Vidéo</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
  
          <div class="flex items-center justify-between pt-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
  
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2025 Your Company. All rights reserved.
        </p>
      </div>
    </div>
   
       
         </div>
  
    </div>
  
    </template>
    
  
  
  
    <script>
  import axios from 'axios'; // ✅ Assure-toi d'avoir importé axios !
  
  export default {
    methods: {
      async submitForm() {
        const data = {
          title: this.$refs.title.value,
          categories: this.$refs.categories.value,
          image: this.$refs.image.value,
          badge: this.$refs.badge.value,
          author: this.$refs.author.value,
          rating: this.$refs.rating.value,
          reviews: this.$refs.reviews.value,
          price: this.$refs.price.value,
          originalPrice: this.$refs.originalPrice.value,
          tag: this.$refs.tag.value,
          domain: this.$refs.domain.value,
        };
  
        try {
          const response = await axios.post('http://localhost:5000/create', data);
          console.log('Success:', response.data);
          alert("Formulaire envoyé avec succès !");
        } catch (error) {
          console.error('Erreur:', error.response ? error.response.data : error.message);
          alert("Erreur lors de l'envoi du formulaire.");
        }
      }
    }
  }
  </script>
  