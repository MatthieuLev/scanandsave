<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="ViewGeneralInformation">Informations générales</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="ViewIdentity">Identité</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="ViewMHTA">Informations médicales</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="ViewContact">Contacts</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  //
  import database from '../firebase';
  import router from '../router';

  export default {
    name: 'NavbarMobile',
    computed: {
      currentUser() {
        return this.$store.state.currentUser;
      },
    },
    methods: {
      async signOut() {
        await database.signOut();
        router.push('/');
      },
    },
  };
</script>

<style scoped>
  a:hover {
    color: #dadada;
    text-decoration: none;
    font-weight: bold;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  .lang>a{
    color: white !important;
    text-decoration: none;
    font-weight: bold;
  }

  .router-link-exact-active {
    color: #dadada;
   }
  .nav-link .signOutButton{
    cursor: pointer;
  }
  .navbar {
    background-color: #dc3545;
  }

  .navbar-light .navbar-nav .nav-link {
    color: white;
    cursor: initial;
  }

  .signOutButtonContainer>a>a:hover{
    color: #dadada !important;
    text-decoration: none;
    font-weight: bold;
  }
  .signOutButtonContainer>a:hover{
    color: white !important;
    text-decoration: none;
    font-weight: bold;
  }
</style>
