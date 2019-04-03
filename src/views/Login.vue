<template>
  <b-form class="login-form">
    <b-form-input id="input-login-email" v-model="form.email"
                  type="email" required placeholder="Adresse mail"></b-form-input>
    <p class="error" v-if="errorEmail">{{errorEmail}}</p>
    <b-form-input id="input-login-password" v-model="form.password"
                  type="password" required placeholder="Mot de passe"></b-form-input>
    <p class="error" v-if="errorPassword">{{errorPassword}}</p>

    <button @click="signIn">Se connecter</button>

    <p class="error" v-if="errorMessage">{{errorMessage}}</p>

    <p class="message">Pas encore enregistré ? <a v-on:click="$emit('hide')">Créer un compte</a></p>

  </b-form>
</template>

<script>
  import database from '../database.js'

  export default {
    name: 'Login',
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        errorEmail: '',
        errorPassword: '',
        errorMessage: '',
      };
    },
    methods: {
      async signIn(e) {
        e.preventDefault();
        this.errorEmail = '';
        this.errorPassword = '';
        this.errorMessage = '';
        let result = await database.signIn(this.form.email, this.form.password);
        if (!result.message) {
          this.$router.push('MedicalFileCreation');
        } else {
          switch (result.code) {
            case 'auth/wrong-password':
              this.errorPassword = 'Le mot de passe n\'est pas valide pour l\'email donné.';
              break;
            case 'auth/invalid-email':
              this.errorEmail = 'L\'adresse e-mail n\'est pas valide.';
              break;
            case 'auth/user-not-found':
              this.errorMessage = 'L\'utilisateur n\'existe pas.';
              break;
            default:
              this.errorMessage = result.code;
          }
        }
      },
    },
  };
</script>

<style scoped>
  .error {
    color: red;
    font-size: 12px;
  }
</style>
