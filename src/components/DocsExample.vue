

   
   <template>
  <Principale
    categoryName="comment vous allez bien "
    :coursesData="courses"
    :categoryId="'123'"
  />
</template>



   
  

<script setup>


import { courses } from '../data/FlutterData';


import Principale from '../views/widgets/Principale.vue';

// Si vous obtenez toujours une erreur, essayez ceci :
// import { courses } from '@/data/FlutterData.js';
// OU
// import courses from '../data/FlutterData.js';
</script>