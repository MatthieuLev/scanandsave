<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mon compte</h1>
      <b-button-group vertical size="lg">
        <b-button variant="outline-primary">
          <router-link to="MedicalFileResume">Voir mes informations</router-link>
        </b-button>
        <b-button variant="outline-primary">
          <router-link to="ViewMyStickers">Commander un autocollant</router-link>
        </b-button>
        <b-button variant="outline-primary">
          <router-link to="Mon_Panier">Récapitulatif de mes commandes</router-link>
        </b-button>
      </b-button-group>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'ViewMyAccount',
    components: {
      Navbar,
    },
  };
</script>

<style scoped>

</style>
