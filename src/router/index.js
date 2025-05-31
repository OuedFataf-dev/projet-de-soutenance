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

const routes = [
  { path: '/login',           name: 'login',           component: LoginComponent },
  { path: '/stats',           name: 'stats',           component: StatsComponent },
  { path: '/seo',             name: 'seo',             component: SEO },
  { path: '/update/:id',             name: 'update',             component: UpdatePage },
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
  { path: '/add',         name: 'add',         component: AJouter_Component },
  { path: '/html',            name: 'html',            component: pageHtml },
  { path: '/css',             name: 'css',             component: css },
  { path: '/cart',            name: 'cart',            component: Panier },
  { path: '/mobile',          name: 'mobile',          component: DeveloppementWeb },
  { path: '/web1',            name: 'web1',            component: developpment },
  { path: '/visuel',          name: 'visuel',          component: PagePaiement },
  { path: '/dasboard', name: 'dasboard', component: Dashboard },

  { path: '/web',          name: 'web',          component: web },
  { path: '/Quiz',          name: 'Quiz',          component: QuizComponent },


  { path: '/marketing',          name: 'marketing',          component: Marketing },
  { path: '/finance',          name: 'finance',          component: FinanceComptabilité},
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;