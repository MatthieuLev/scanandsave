import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Inscription from './views/Inscription'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('./views/template.vue'),
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription,
    },
  ],
});
