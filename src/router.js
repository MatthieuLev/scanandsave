import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Registration from './views/Registration.vue';
import MedicalFileCreation from './views/MedicalFileCreation.vue';
import StickersCreation from './views/StickersCreation.vue';
import ViewMyStickers from './views/ViewMyStickers.vue';
import ViewMyAccount from './views/ViewMyAccount.vue';
import Navbar from './components/Navbar.vue';
import Mon_Panier from "./views/Mon_Panier";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/MedicalFileCreation',
      name: 'MedicalFileCreation',
      component: MedicalFileCreation,
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar,
    },
    {
      path: '/StickersCreation',
      name: 'StickersCreation',
      component: StickersCreation,
    },
    {
      path: '/ViewMyStickers',
      name: 'ViewMyStickers',
      component: ViewMyStickers,
    },
    {
      path: '/Mon_Panier',
      name: 'Mon_Panier',
      component: Mon_Panier,
    },
    {
      path: '/ViewMyAccount',
      name: 'ViewMyAccount',
      component: ViewMyAccount,
    }

  ],
});
