<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mes autocollants</h1>
      <b-table striped hover :items="items"></b-table>
      <b-button variant="outline-primary">Voir mon panier</b-button>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'ViewMyStickers',
    components: {
      Navbar,
    },
    data() {
      return {
        items: [
          {NumProduit: '0001', Theme: 'Motard', Couleur: 'Rouge', Taille: 'Petit', Aperçu: '', AjouterPannier: ''},
          {NumProduit: '0002', Theme: 'Ski', Couleur: 'Vert', Taille: 'Grand', Aperçu: '', AjouterPannier: ''},
          {NumProduit: '0003', Theme: 'Skate', Couleur: 'Argent', Taille: 'Moyen', Aperçu: '', AjouterPannier: ''},
          {NumProduit: '0004', Theme: 'Velo', Couleur: 'Rose', Taille: 'Petit', Aperçu: '', AjouterPannier: '' },
        ],
      };
    },
  };
</script>

<style scoped>

</style>
