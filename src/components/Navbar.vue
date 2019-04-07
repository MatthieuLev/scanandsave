<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="MedicalFileCreation">Mon formulaire médical</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="ViewMyStickers">Mes autocollants</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="ViewMyCart">Voir mon panier</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="ViewMyAccount">Mon Compte</router-link>
          </b-nav-item>

          <b-nav-item class="signOutButtonContainer">
            <a class="signOutButton"@click="signOut">Déconnexion</a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import database from '../firebase'
  import router from '../router'

  export default {
    name: 'Navbar',
    computed: {
      currentUser (){
        return this.$store.state.currentUser
      },
    },
    methods: {
      async signOut() {
        await database.signOut();
        router.push('/');
      }
    }
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
