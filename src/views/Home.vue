<template>
  <b-container>
    <div class="home-page">
      <div class="form">
        <div v-if="isLoginDisplay">
          <Login @hide="isLoginDisplay = !isLoginDisplay"></Login>
        </div>
        <div v-else>
          <Registration @hide="isLoginDisplay = !isLoginDisplay"></Registration>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Registration from './Registration.vue';
import Login from './Login.vue';

export default {
  name: 'Home',
  data() {
    return {
      isLoginDisplay: true,
    };
  },
  components: {
    Registration,
    Login,
  },
};
</script>

<style lang="scss">
  $color-primary: #a1c4fd;
  $color-secondary: #c2e9fb;
  $color-tertiary: #7c9ad2;

  .home-page {
    padding: 8% 0 0;
    margin: auto;
  }

  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
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
    background: $color-primary;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    cursor: pointer;
  }

  .form button:hover, .form button:active, .form button:focus {
    background: $color-tertiary;
  }

  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }

  .form .message a:not([href]):not([tabindex]) {
    color: $color-tertiary;
    text-decoration: none;
    cursor: pointer;
  }
</style>
