<template>
    <div class="h-200 w-full bg-white">
      <div class="flex gap-x-20 justify-center items-center">
        <div>
          <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp" width="500px" alt="">
        </div>
  
        <div class="mt-10 px-30">
          <div class="font-bold text-3xl">
          Se connecter par e-mail pour Continuer

            <div class="flex ga-x-5">
                  <div class="-ml-10 py-2">
                    <button class="card border h-5 w-5 "></button>
                  </div>
                <div class="text-xs mt-4 ml-4">
                    Je souhaite recevoir des offres spéciales, des <br> recommandations personnalisées et des conseils <br> d'apprentissage.
                </div>
            </div>
            <div class="mt-5">
             
              <input 
                v-model="email"
                type="text" 
                placeholder="E-mail"
                class="border text-xl font-bold h-15  mt-5 px-4 py-2 w-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              /> 
  
              <div class="mt-5">
                <button
                 @click="handleSubmit"
                 class="w-105 h-15 mt-4 bg-purple-600 text-white py-2 text-sm px-4 rounded-lg font-semibold hover:bg-purple-700">
                  Continuer avec une adresse email
                </button>
              </div>
  
              <!-- Ligne horizontale avec le texte centré -->
              <div class="relative flex items-center justify-center -ml-25 w-full my-8">
                <hr class="w-100 h-px bg-gray-200 border-0 dark:bg-gray-700">
                <span class="absolute bg-white px-0 font-medium text-gray-900 text-sm left-1/2 transform -translate-x-1/2 dark:text-white dark:bg-gray-900">
                  Autres options de Connexion
                </span>
              </div>
  
                  <div class="flex text-center px-20 ml-10 gap-x-4">
  
  
  
                    <div class="card border  rounded-lg border-purple-500 h-15 w-15 bg-blue">
                                  <div class="text-center mt-2 px-3 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                    <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" data-original="#fbbd00" />
                    <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" data-original="#0f9d58" />
                    <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" data-original="#31aa52" />
                    <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" data-original="#3c79e6" />
                    <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" data-original="#cf2d48" />
                    <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z" data-original="#eb4132" />
                  </svg>
                                  </div>
                        </div>
                         
                        <div class="card border  rounded-lg border-purple-500 h-15 w-15 bg-blue">
                                  <div class="text-center mt-2 px-3 ">
                                        
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                    <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" />
                    <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" />
                  </svg>
  
  
  
                                  </div>
                        </div>
              
  
                        <div class="card border  rounded-lg border-purple-500 h-15 w-15 bg-blue">
                                  <div class="text-center mt-2 px-3 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 22.773 22.773">
                    <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" data-original="#000000"></path>
                  </svg>
  
  
                                  </div>
                        </div>
  
  
                       
                        
                  </div>
  
            </div>


               <div class="mt-5">

                   <div class="text-sm">
                    En vous inscrivant, vous acceptez <a href="" class="text-blue-600 underline font-semibold hover:text-blue-800">nos Conditions d'utilisation</a> et <br>
                    notre  <a href="" class="text-blue-600 underline font-semibold hover:text-blue-800">Politique de confidentialité.</a>
                   </div>
               </div>
                                        
  
            <div class="py-10 mt-10 px-10 bg-gray-300 w-96 h-20 text-center">
    
    <p class="text-sm text-center justify-center -mt-3">
      Vous n'avez pas de compte? 
      <a href="/register" class="text-blue-600 underline font-semibold hover:text-blue-800">S'inscrire</a>
    </p>
  
  </div>
     




  
    
    
     
          </div>   
        </div>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: '',
    };
  },

  methods: {
    async handleSubmit() {
      if (!this.email || !this.email.includes('@') || !this.email.includes('.')) {
        alert('Veuillez entrer une adresse email valide');
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: this.email,
        });

        const { token, user, message } = response.data;
        const role = user?.role;

        console.log('Rôle reçu:', role); // Pour débogage

        if (token) {
          localStorage.setItem('authToken', token);
          localStorage.setItem('userRole', role); // Enregistre le rôle

          // Redirection basée sur le rôle
          if (role === 'admin') {
            this.$router.push('/dasboard');
          } else if (role === 'student') {
            this.$router.push('/flutter');
          } else if (role === 'instructor') {
            this.$router.push('/instructor/panel');
          } else {
            this.$router.push('/');
          }
        } else {
          alert(message || 'Connexion réussie mais aucun token reçu');
        }

      } catch (error) {
        console.error('Erreur détaillée:', error);
        if (error.response?.data?.message) {
          alert(error.response.data.message);
        } else {
          alert('Erreur de connexion au serveur. Veuillez réessayer plus tard.');
        }
      }
    },
  },
};
</script>
