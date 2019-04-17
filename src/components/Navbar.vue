<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">
              <i class="fas fa-home"></i>
              Accueil
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="currentUser !== null">
            <router-link to="MedicalFileResume">
              <i class="fas fa-notes-medical"></i>
              Mon dossier médical
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="currentUser !== null">
            <router-link to="ViewMyStickers">
              <i class="fas fa-sticky-note"></i>
              Mes autocollants
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="currentUser !== null">
            <router-link to="ViewMyCart">
              <i class="fas fa-shopping-cart"></i>
              Voir mon panier
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="signButtonContainer" v-if="currentUser !== null">
            <a class="signoutButton" @click="signOut">
              <i class="fas fa-sign-out-alt"></i>
              Déconnexion
            </a>
          </b-nav-item>
          <b-navbar-nav class="signButtonContainer" v-else>
            <a class="signButton" @click="signIn"><i class="fas fa-sign-in-alt"></i>Connexion</a>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import database from '../firebase';
  import router from '../router';

  export default {
    name: 'Navbar',
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
      signIn() {
        router.push('/Auth');
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
  .nav-link .signButton{
    cursor: pointer;
  }
  .navbar {
    background-color: #90081d;
  }

  .navbar-light .navbar-nav .nav-link {
    color: white!important;
    cursor: initial!important;
  }

  .signButtonContainer>a:hover{
    color: #dadada !important;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }
  .signButtonContainer{
    color: white !important;
    text-decoration: none;
    font-weight: bold;
  }
  .signButtonContainer>a>a:hover{
    color: #dadada !important;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }
  .signButtonContainer>a{
    color: white !important;
    text-decoration: none;
    font-weight: bold;
  }
  .fas{
    margin-right: 5px;
  }
</style>
