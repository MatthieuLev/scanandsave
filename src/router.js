import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Registration from './views/Registration.vue';
import Medical_File from './views/Medical_File.vue';
import Stickers from './views/create_stickers.vue';
import Menu from './components/Menu.vue';

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
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/medical_file',
      name: 'Medical File',
      component: Medical_File,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/create_stickers',
      name: 'create_stickers',
      component: Stickers,
    }
  ],
});
