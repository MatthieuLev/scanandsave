<template>
  <div>
    <Menu></Menu>

    <b-container>
      <h1>Mon compte </h1>
      <b-button-group vertical size="lg">
        <b-button variant="outline-primary"><a href="MedicalFileCreation">Voir mes informations</a></b-button>
      <b-button variant="outline-primary"><a href="MedicalFileCreation">Modifier mes informations </a></b-button>
      <b-button variant="outline-primary"><a href="ViewMyStickers">Commander un autocollant</a></b-button>
      <b-button variant="outline-primary">Récapitulatif de mes commandes</b-button>
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
