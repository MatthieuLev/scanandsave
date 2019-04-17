import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Auth from './views/Auth.vue';
import Home from './views/Home.vue';
import MedicalFileCreation from './views/MedicalFileCreation.vue';
import MedicalFileResume from './views/MedicalFileResume.vue';
import MFNotFound from './views/MFNotFound.vue';
import StickersCreation from './views/StickersCreation.vue';
import ViewContact from "./views/ViewContact";
import ViewGeneralInformation from './views/ViewGeneralInformation.vue';
import ViewIdentity from "./views/ViewIdentity";
import ViewMHTA from "./views/ViewMHTA";
import ViewMyCart from './views/ViewMyCart.vue';
import ViewMyStickers from './views/ViewMyStickers.vue';

import Qrcode from './components/Qrcode.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth,
      meta: {
        redirectAuth: true,
      },
    },
    {
      path: '/MedicalFileCreation',
      name: 'MedicalFileCreation',
      component: MedicalFileCreation,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/StickersCreation',
      name: 'StickersCreation',
      component: StickersCreation,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/ViewMyStickers',
      name: 'ViewMyStickers',
      component: ViewMyStickers,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/ViewMyCart',
      name: 'ViewMyCart',
      component: ViewMyCart,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/MedicalFileResume',
      name: 'MedicalFileResume',
      component: MedicalFileResume,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/ViewGeneralInformation',
      name: 'ViewGeneralInformation',
      component: ViewGeneralInformation,
    },
    {
      path: '/ViewMHTA',
      name: 'ViewMHTA',
      component: ViewMHTA,
    },
    {
      path: '/ViewContact',
      name: 'ViewContact',
      component: ViewContact,
    },
    {
      path: '/ViewIdentity',
      name: 'ViewIdentity',
      component: ViewIdentity,
    },
    {
      path: '/Qrcode',
      name: 'Qrcode',
      component: Qrcode,
    },
    {
      path: '/MFNotFound',
      name: 'MFNotFound',
      component: MFNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const redirectAuth = to.matched.some(record => record.meta.redirectAuth);
  const currentUser = store.state.currentUser;
  if (requiresAuth && !currentUser) {
    next('Auth');
  } else if (redirectAuth && currentUser) {
    next('/');
  } else {
    next();
  }
});

export default router;
