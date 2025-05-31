<template>
  
  <footer class="bg-gray-900 w-full h-150 text-white py-10 px-6">
    <!-- Section des partenaires -->
    <div class="flex justify-between items-center border-b border-gray-700 pb-6">
      <div class="text-xl">
        Les meilleures entreprises choisissent 
        <a href="#" class="text-blue-400 hover:underline">Udemy Business</a>
        pour développer les compétences professionnelles dont elles ont besoin.
      </div>
      <div class="flex gap-4">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq" class="h-6">
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Volkswagen" class="h-6">
        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Box" class="h-6">
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="NetApp" class="h-6">
      </div>
    </div>

    <!-- Section des liens -->
    <div class=" px-3 grid grid-cols-3 lg:grid-cols-5  gap-6 mt-6">
      <div>
        <h3 class="font-bold mb-3">Certifications par émetteur</h3>
        <ul>
          <li><a href="#" class="text-white hover:underline">AWS</a></li>
          <li><a href="#" class="text-white hover:underline">Six Sigma</a></li>
          <li><a href="#" class="text-white hover:underline">Microsoft</a></li>
          <li><a href="#" class="text-white hover:underline">Cisco</a></li>
          <li><a href="#" class="text-white hover:underline">Tableau</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold mb-3 whitespace-nowrap px-10">Développement Web</h3>
        <ul>
          <li><a href="#" class="text-white hover:underline   px-10">JavaScript</a></li>
          <li><a href="#" class="text-white hover:underline  px-10">React JS</a></li>
          <li><a href="#" class="text-white hover:underline  px-10">Angular</a></li>
          <li><a href="#" class="text-white hover:underline  px-10">Java</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold mb-3">Certifications informatiques</h3>
        <ul>
          <li><a href="#" class="text-white hover:underline">AWS Certified</a></li>
          <li><a href="#" class="text-white hover:underline">Azure Fundamentals</a></li>
          <li><a href="#" class="text-white hover:underline">Kubernetes</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold mb-3 px-20">Leadership</h3>
        <ul>
          <li><a href="#" class="text-white hover:underline px-20 whitespace-nowrap">Compétences en gestion</a></li>
          <li><a href="#" class="text-white hover:underline  px-20 whitespace-nowrap">Gestion de projets</a></li>
          <li><a href="#" class="text-white hover:underline  px-20">Productivité</a></li>
        </ul>
      </div>

      <div>

          
       
      </div>
      
    
         
       
      
    </div>

   


  </footer>


  <div class="bg-gray-900 text-white -mt-70 p-6">
    <div class="grid grid-cols-4 gap-10">
      <div v-for="(category, index) in categories" :key="index">
        <h3 class="font-bold mb-3">{{ category.title }}</h3>
        <ul>
          <li v-for="(item, idx) in category.items" :key="idx">
            <a href="#" class="hover:underline">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <footer class="bg-black text-white w-full py-10 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        <!-- Colonne 1 -->
        <div>
            <h3 class="font-bold mb-3">À propos de</h3>
            <ul class="space-y-2">
                <li><a href="#" class="hover:underline">À propos d'Udemy</a></li>
                <li><a href="#" class="hover:underline">Carrières</a></li>
                <li><a href="#" class="hover:underline">Contactez-nous</a></li>
                <li><a href="#" class="hover:underline">Blog</a></li>
                <li><a href="#" class="hover:underline">Investisseurs</a></li>
            </ul>
        </div>

        <!-- Colonne 2 -->
        <div>
            <h3 class="font-bold mb-3">Découverte Udemy</h3>
            <ul class="space-y-2">
                <li><a href="#" class="hover:underline">Téléchargez l’application</a></li>
                <li><a href="#" class="hover:underline">Enseigner sur Udemy</a></li>
                <li><a href="#" class="hover:underline">Abonnements et tarifs</a></li>
                <li><a href="#" class="hover:underline">Affilié</a></li>
                <li><a href="#" class="hover:underline">Aide et support</a></li>
            </ul>
        </div>

        <!-- Colonne 3 -->
        <div>
            <h3 class="font-bold mb-3">Udemy for Business</h3>
            <ul class="space-y-2">
                <li><a href="#" class="hover:underline">Udemy Business</a></li>
            </ul>
        </div>

        <!-- Colonne 4 -->
        <div>
            <h3 class="font-bold mb-3">Juridique et accessibilité</h3>
            <ul class="space-y-2">
                <li><a href="#" class="hover:underline">Déclaration d’accessibilité</a></li>
                <li><a href="#" class="hover:underline">Politique de confidentialité</a></li>
                <li><a href="#" class="hover:underline">Plan du site</a></li>
                <li><a href="#" class="hover:underline">Conditions</a></li>
            </ul>
        </div>
    </div>

    <!-- Bas du footer -->
    <div class="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <div class="flex items-center space-x-2">
            <img src="" alt="Udemy Logo" class="h-6">
            <span>© 2025 Udemy, Inc.</span>
        </div>
        <a href="#" class="hover:underline">Paramètres des cookies</a>
        <div class="flex items-center space-x-1">
            <span>🌍</span>
            <a href="#" class="hover:underline">Français</a>
        </div>
    </div>
</footer>

</template>





<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Certifications par compétences",
          items: [
            "Certification en cybersécurité",
            "Certification en gestion de projets",
            "Certification cloud",
            "Certification en analyse de données",
            "Certification en gestion des ressources humaines",
            "Voir l'ensemble des certifications",
          ],
        },
        {
          title: "Science des données",
          items: ["Science des données", "Python", "Machine Learning", "ChatGPT", "Deep Learning"],
        },
        {
          title: "Communication",
          items: ["Capacités de communication", "Techniques de présentation", "Parler en public", "Écriture", "PowerPoint"],
        },
        {
          title: "Analyses et informations économiques",
          items: ["Microsoft Excel", "SQL", "Power BI de Microsoft", "Analyse de données", "Analyse des affaires"],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>




