<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mes autocollants</h1>
      <div class="custom-card">
        <b-table striped hover :items="items"></b-table>
      </div>
      <b-button class="button-validate">Voir mon panier</b-button>
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
          {NumProduit: '0004', Theme: 'Velo', Couleur: 'Rose', Taille: 'Petit', Aperçu: '', AjouterPannier: ''},
        ],
      };
    },
  };
</script>

<style scoped>
  h1 {
    margin: 1em 0;
    color: grey;
  }

  .custom-card {
    color: white;
    background-color: #dc3545;
    border-radius: 4px;
    margin: 1em 0;
  }

  .button-validate{
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    width: 50%;
    background-color: #dc3545;
    border: 0;
    padding: 15px;
    color: white;
    margin-top: 1em;
    margin-bottom: 4em;
    font-size: 14px;
    cursor: pointer;
  }
  .button-validate:hover{
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
  }

  .table{
    color:white;
  }
</style>
