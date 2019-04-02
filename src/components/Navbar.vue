<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand href="#">Scan&Save </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to= "MedicalFileCreation">Mon formulaire médical</router-link></b-nav-item>
          <b-nav-item><router-link to= "ViewMyStickers">Mes autocollants</router-link></b-nav-item>
          <b-nav-item><router-link to= "Mon_Panier">Mon panier</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Langue" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">FR</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item><router-link to= "ViewMyAccount">Mon Compte</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to= "Login">Déconnexion</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: 'Menu',
    };
</script>

<style scoped>

</style>
