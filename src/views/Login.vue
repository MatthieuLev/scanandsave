<template>
  <b-form class="login-form">
    <b-form-input id="input-login-email" v-model="form.email"
                  type="email" required placeholder="Adresse mail"></b-form-input>
    <p class="error" v-if="errorEmail">{{errorEmail}}</p>
    <b-form-input id="input-login-password" v-model="form.password"
                  type="password" required placeholder="Mot de passe"></b-form-input>
    <p class="error" v-if="errorPassword">{{errorPassword}}</p>

    <button @click="performLogin">Se connecter</button>

    <p class="error" v-if="errorMessage">{{errorMessage}}</p>

    <p class="message">Pas encore enregistré ? <a v-on:click="$emit('hide')">Créer un compte</a></p>

  </b-form>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errorEmail : '',
      errorPassword : '',
      errorMessage : '',
    };
  },
  methods: {
    performLogin() {
      this.errorEmail = '';
      this.errorPassword = '';
      this.errorMessage = '';
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(
        (user) => {
          console.log(`Vous êtes connecté${user}`)
        },
        (error) => {
          switch (error.code) {
            case 'auth/wrong-password':
              this.errorPassword = 'Le mot de passe n\'est pas valide pour l\'email donné';
              break;
            case 'auth/invalid-email':
              this.errorEmail = 'L\'adresse e-mail n\'est pas valide.';
              break;
            default:
              this.errorMessage = error.code;
          }
        }
      );
    }
  }
};
</script>

<style scoped>
  .error{
    color: red;
    font-size: 10px;
  }
</style>
