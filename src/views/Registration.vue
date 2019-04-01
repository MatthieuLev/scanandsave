<template>
  <b-form class="registration-form">
    <b-form-input id="input-registration-mail" v-model="form.email"
                  type="email" required placeholder="Adresse mail"></b-form-input>
    <p class="error" v-if="errorEmail">{{errorEmail}}</p>
    <b-form-input id="input-registration-password" v-model="form.password"
                  type="password" required placeholder="Mot de passe"></b-form-input>
    <p class="error" v-if="errorPassword">{{errorPassword}}</p>
    <b-form-input id="input-registration-confirmPassword" v-model="form.confirmPassword"
                  type="password" required placeholder="Confirmer le mot de passe"></b-form-input>
    <p class="error" v-if="errorConfirmPassword">{{errorConfirmPassword}}</p>

    <button @click="signUp">S'enregistrer</button>
    <p class="error" v-if="errorMessage">{{errorMessage}}</p>
    <p class="success" v-if="successMessage">{{successMessage}}
      <a v-on:click="$emit('hide')">en cliquant ici</a>
    </p>

    <p class="message">Déjà enregistré ? <a v-on:click="$emit('hide')">Se connecter</a></p>

  </b-form>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Registration',
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      errorEmail: '',
      errorPassword: '',
      errorConfirmPassword: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    signUp(e) {
      // Error messages are reset at each attempt
      this.errorEmail = '';
      this.errorPassword = '';
      this.errorConfirmPassword = '';
      this.errorMessage = '';
      if (this.form.password === this.form.confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then(
          () => {
            this.successMessage = 'Votre compte est créé, vous pouvez vous connecter';
          },
          (error) => {
            switch (error.code) {
              case 'auth/weak-password':
                this.errorPassword = 'Le mot de passe doit être composé d\'au moins six symboles.';
                break;
              case 'auth/email-already-in-use':
                this.errorEmail = 'Il existe déjà un compte avec l\'adresse e-mail indiquée.';
                break;
              case 'auth/invalid-email':
                this.errorEmail = 'L\'adresse e-mail n\'est pas valide.';
                break;
              default:
                this.errorMessage = error.code;
            }
          },
        );
      } else {
        this.errorConfirmPassword = 'Les deux mots de passe ne sont pas les mêmes';
      }
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
  .error {
    color: red;
    font-size: 10px;
  }

  .success {
    color: lawngreen;
    font-size: 10px;
  }
</style>
