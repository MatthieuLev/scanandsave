<template>
  <b-form class="login-form">
    <b-form-input id="input-forgotPassword-email" v-model="form.email"
                  type="email" required placeholder="Adresse mail"></b-form-input>
    <p class="error" v-if="errorEmail">{{errorEmail}}</p>

    <button @click="forgotPassword">Recevoir un nouveau mot de passe par e-mail</button>

    <p class="error" v-if="errorMessage">{{errorMessage}}</p>
    <p class="success" v-if="successMessage">{{successMessage}}</p>

  </b-form>
</template>

<script>
  import database from '../firebase';

  export default {
    name: "ForgotPassword",
    data() {
      return {
        form: {
          email: '',
        },
        errorEmail: '',
        errorMessage: '',
        successMessage: '',
      };
    },
    methods: {
      async forgotPassword(e) {
        e.preventDefault();
        this.errorEmail = '';
        this.errorMessage = '';
        this.successMessage = '';

        let result = await database.forgotPassword(this.form.email);
        if (!result.message) {
          this.successMessage = 'Vous avez reçu un e-mail pour réinitialiser votre mot de passe';
        } else {
          switch (result.code) {
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
      }
    }
  };
</script>

<style scoped>
  .error {
    color: red;
    font-size: 12px;
  }

  .success {
    color: limegreen;
    font-size: 12px;
  }
</style>
