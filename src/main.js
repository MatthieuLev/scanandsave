import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import firebase from 'firebase';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import VueQrcode from '@chenfengyuan/vue-qrcode';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.component(VueQrcode.name, VueQrcode);

Vue.config.productionTip = false;

// create a variable for holding our app
let app;
// wrap the app creation in a function. This will be called after we receive information from Firebase.
const initialize = () => {
  if (!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
};

//  when we launch the app in our browser, we'll get a callback from Firebase. We receive a user object, which either can be an actual user or just null.
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
  } else {
    store.commit('setCurrentUser', null)
  }
  //  call the initialize function we created above
  initialize()
});
