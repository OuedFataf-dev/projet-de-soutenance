import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import RegisterComponent from '@/components/RegisterComponent.vue';
import AppComponent from '@/components/AppComponent.vue';
import AppSecondePage from '@/components/AppSecondePage.vue';
import design from '../components/componentAuther/design.vue';


import CategoryPage from '../components/CategoryPage.vue';
import FlutterPage from '../components/FlutterPage.vue';
import DeveloppementMobile from '../components/DeveloppementMobile.vue';
import DeveloppementWeb from '../components/DeveloppementWeb.vue';
import pageHtml from '../components/pageHtml.vue';
import DocsExample from '../components/DocsExample.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';
import developpment from '../components/componentAuther/developpment.vue';
import PagePaiement from '../components/componentAuther/PagePaiement.vue';
import css from '../components/componentAuther/css.vue';
import Siderbar from '../views/dashboard/Siderbar.vue';
import web from '../components/ComponentDomain/web.vue';
import mobile from '../components/ComponentDomain/mobile.vue';
import Business from '../components/componentAuther/Business.vue';
import InfoLogicielComponent from '../components/componentAuther/InfoLogicielComponent.vue';
import AJouter_Component from '../views/dashboard/AJouter_Component.vue';
import SEO from '../components/ComponentDomain/SEO.vue';
import UX_UIDesign from '../components/ComponentDomain/UX_UIDesign.vue';

import Genie_Logiciel from '../components/ComponentDomain/Genie_Logiciel.vue';
import Panier from '../components/componentAuther/Panier.vue';
import checkoutPage from '../components/componentAuther/checkoutPage.vue';
import UpdatePage from '../views/UpdatePage.vue';
import Marketing from '../components/componentAuther/Marketing.vue';
import FinanceComptabilité from '../components/componentAuther/FinanceComptabilité.vue';

import QuizComponent from '../views/widgets/QuizComponent.vue';
import StatsComponent from '../views/widgets/statsComponent.vue';
import Principale from '../views/widgets/Principale.vue';

import Ajout_DeQuiz from '../Ajout_DeQuiz.vue';

import Rapport from '../components/Rapport.vue';
import QuizFlutter from '../views/widgets/QuizFlutter.vue';
import OranageMoney from '../components/componentAuther/OranageMoney.vue';
import VuejsQuiz from '../views/widgets/VuejsQuiz.vue';
import PythonQuiz from '../views/widgets/PythonQuiz.vue';
import SearchResults from '../components/SearchResults.vue';
const routes = [
  { path: '/login',           name: 'login',           component: LoginComponent },

  { path: '/seo',             name: 'seo',             component: SEO },
  { path: '/update/:id',             name: 'update',             component: UpdatePage,meta: { requiresAdmin: true } },
  { path: '/business',        name: 'business',        component: Business },
  { path: '/payement',        name: 'payement',        component: checkoutPage },
  { path: '/informatique',    name: 'informatique',    component: InfoLogicielComponent },
  { path: '/siderbar',        name: 'siderbar',        component: Siderbar },
  { path: '/web',             name: 'web',             component: CategoryPage },
  { path: '/devMobile',       name: 'devMobile',       component: mobile },
  { path: '/ui/ux',           name: 'uiux',            component: UX_UIDesign },
  { path: '/génie',           name: 'genie',           component: Genie_Logiciel },
  { path: '/register',        name: 'register',        component: RegisterComponent },
  { path: '/design',          name: 'design',          component: design },
  { path: '/',                name: 'home',            component: HomePage },
  { path: '/app',             name: 'app',             component: AppComponent },
  { path: '/flutter',         name: 'flutter',         component: AppSecondePage },
  { path: '/webflutter',      name: 'webflutter',      component: FlutterPage },
  { path: '/add',         name: 'add',         component: AJouter_Component ,meta: { requiresAdmin: true }},
  { path: '/html',            name: 'html',            component: pageHtml },
  { path: '/css',             name: 'css',             component: css },
  { path: '/cart',            name: 'cart',            component: Panier },
  { path: '/mobile',          name: 'mobile',          component: DeveloppementWeb },
  { path: '/web1',            name: 'web1',            component: developpment },
  { path: '/visuel',          name: 'visuel',          component: PagePaiement },
  { path: '/Ajout', name: 'Ajout', component: Ajout_DeQuiz,meta: { requiresAdmin: true } },
 { path: '/stats',  name: 'quiz', component: StatsComponent},
{ path: '/dashboard', name: 'dashboard', component: Dashboard ,meta: { requiresAdmin: true }},


  { path: '/rapport', name: 'rapport', component: Rapport, meta: { requiresAdmin: true } },
  { path: '/Quiz',          name: 'Quiz',          component: QuizComponent },
  { path: '/principle',          name: 'principle',          component: Principale },


  { path: '/marketing',          name: 'marketing',          component: Marketing },
  { path: '/finance',          name: 'finance',          component: FinanceComptabilité},
  
  { path: '/quizFlutter',          name: 'quizFlutter',          component: QuizFlutter},
   {path: '/orangeMoney',          name:'orangeMoney',             component:OranageMoney},

    { path: '/vue_js',          name: 'vue js',          component: VuejsQuiz},
    { path: '/python',          name: 'python',          component: PythonQuiz},
     { path: '/search', name: 'SearchResults', component: SearchResults },
];





//()

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('authToken');

  // ✅ Rediriger si la route nécessite une authentification
  if (to.meta.requiresAuth && (!user || !token)) {
    return next({ name: 'login' });
  }

  // ✅ Rediriger si la route nécessite un rôle admin
  if (to.meta.requiresAdmin && user?.role !== 'admin') {
    return next({ name: 'login' });
  }

  next(); // ✅ sinon, continuer normalement
});
 



export default router;