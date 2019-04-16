import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Auth from './views/Auth.vue';
import Home from './views/Home.vue';
import MedicalFileCreation from './views/MedicalFileCreation.vue';
import StickersCreation from './views/StickersCreation.vue';
import ViewMyStickers from './views/ViewMyStickers.vue';
import ViewMyCart from './views/ViewMyCart.vue';
import ViewMyPaymentMethod from './views/ViewMyPaymentMethod.vue';
import MedicalFileResume from './views/MedicalFileResume.vue';
import Navbar from './components/Navbar.vue';
import NavbarMobile from './components/NavbarMobile.vue';
import ViewGeneralInformation from './views/ViewGeneralInformation.vue';
import ViewMHTA from "./views/ViewMHTA";
import ViewIdentity from "./views/ViewIdentity";
import ViewContact from "./views/ViewContact";
import Qrcode from './components/Qrcode.vue';
import PaymentMethod from "./components/PaymentMethod.vue";


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
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
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/NavbarMobile',
      name: 'NavbarMobile',
      component: NavbarMobile,
    },

    {
      path: '/PaymentMethod',
      name: 'PaymentMethod',
      component: PaymentMethod,
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
      path: '/ViewMyPaymentMethod',
      name: 'ViewMyPaymentMethod',
      component: ViewMyPaymentMethod,
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
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
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
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const redirectAuth = to.matched.some(record => record.meta.redirectAuth);
  const currentUser = store.state.currentUser;
  if (requiresAuth && !currentUser) {
    next('/');
  } else if (redirectAuth && currentUser) {
    next('/Home');
  } else {
    next();
  }
});

export default router;
