import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCTP1DP6D7o8aNFT3x3xjeFpDlY8fcj-aw',
  authDomain: 'scanandsave-admin.firebaseapp.com',
  databaseURL: 'https://scanandsave-admin.firebaseio.com',
  projectId: 'scanandsave-admin',
  storageBucket: 'scanandsave-admin.appspot.com',
  messagingSenderId: '106066164855',
};
firebase.initializeApp(config);

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
