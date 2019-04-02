<template>
  <div>
    <Menu></Menu>

    <b-container>
      <h1>Mon compte </h1>
      <b-button-group vertical size="lg">
        <b-button variant="outline-primary"><router-link to= "MedicalFileCreation">Voir mes informations</router-link></b-button>
      <b-button variant="outline-primary"><router-link to="MedicalFileCreation">Modifier mes informations </router-link></b-button>
      <b-button variant="outline-primary"><router-link to="ViewMyStickers">Commander un autocollant</router-link></b-button>
      <b-button variant="outline-primary"><router-link to="Mon_Panier">Récapitulatif de mes commandes</router-link></b-button>
      </b-button-group>
    </b-container>
  </div>

</template>

<script>
  import Menu from '../components/Navbar.vue';
    export default {
        name: "ViewMyAccount",
      components: {
        Menu,
      },

    }
</script>

<style scoped>

</style>
