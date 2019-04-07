<template>
  <b-container>
    <div class="home-page">
      <div class="form">
        <div v-if="currentPage === 'login'">
          <Login @changeCurrentPage="currentPage=$event"></Login>
        </div>
        <div v-else-if="currentPage === 'registration'">
          <Registration @changeCurrentPage="currentPage=$event"></Registration>
          </div>
        <div v-else>
          <ForgotPassword @changeCurrentPage="currentPage=$event"></ForgotPassword>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Registration from './Registration.vue';
import Login from './Login.vue';
import ForgotPassword from "./ForgotPassword";

export default {
  name: 'Home',
  data() {
    return {
      currentPage: 'login',
    };
  },
  components: {
    ForgotPassword,
    Registration,
    Login,
  },
  methods: {
    changeCurrentPage: function(currentPage){
      this.currentPage = currentPage;
    },
  },
};
</script>

<style lang="scss">
  $color-primary: #dc3545;
  $color-dark: #a3001e;
  $color-light: #ff6b70;

  .home-page {
    padding: 8% 0 0;
    margin: auto;
  }

  .form {
    position: relative;
    z-index: 1;
    background: $color-primary;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: white;
    width: 100%;
    border: 0;
    padding: 15px;
    color: $color-dark;
    font-size: 14px;
    cursor: pointer;
  }

  .form button:hover, .form button:active, .form button:focus {
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
  }

  .form .message {
    margin: 15px 0 0;
    color: #ffffffb3;
    font-size: 12px;
  }

  .form .message a:not([href]):not([tabindex]) {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
</style>
