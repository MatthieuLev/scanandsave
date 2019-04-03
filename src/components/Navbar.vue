<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
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

          <b-nav-item-dropdown text="Langue" right>
            <b-dropdown-item href="#">FR</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item>
            <a class="signOutButton"@click="signOut">Déconnexion</a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import database from '../database'
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
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }
  .router-link-exact-active {
    color: rgba(255, 255, 255, 0.8);
   }
  .nav-link .signOutButton{
    cursor: inherit;
  }
</style>
