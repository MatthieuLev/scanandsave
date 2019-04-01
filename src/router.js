import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Registration from './views/Registration.vue';
import MedicalFileCreation from './views/MedicalFileCreation.vue';
import StickersCreation from './views/StickersCreation.vue';
import Navbar from './components/Navbar.vue';

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
  ],
});
