import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Registration from './views/Registration.vue';
import Navbar from './components/Navbar.vue';
import MedicalFileCreation from './views/MedicalFileCreation.vue';
import StickersCreation from './views/StickersCreation.vue';
import ViewMyStickers from './views/ViewMyStickers.vue';
import ViewMyAccount from './views/ViewMyAccount.vue';
import ViewMyCart from './views/ViewMyCart.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        redirectAuth: true
      },
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        redirectAuth: true
      },
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration,
      meta: {
        redirectAuth: true
      },
    },
    {
      path: '/MedicalFileCreation',
      name: 'MedicalFileCreation',
      component: MedicalFileCreation,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/StickersCreation',
      name: 'StickersCreation',
      component: StickersCreation,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/ViewMyStickers',
      name: 'ViewMyStickers',
      component: ViewMyStickers,
    },
    {
      path: '/ViewMyCart',
      name: 'ViewMyCart',
      component: ViewMyCart,
    },
    {
      path: '/ViewMyAccount',
      name: 'ViewMyAccount',
      component: ViewMyAccount,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let redirectAuth = to.matched.some(record => record.meta.redirectAuth);
  let currentUser = store.state.currentUser;
  if (requiresAuth && !currentUser) {
    next({
      path: '/'
    })
  } else if (redirectAuth && currentUser) {
    next({
      path: '/MedicalFileCreation'
    })
  } else {
    next()
  }
});

export default router
