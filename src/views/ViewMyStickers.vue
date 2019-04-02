<template>
  <div>
    <Menu></Menu>
    <b-container>
      <h1>Mes autocollants</h1>
      <b-table striped hover :items="items"></b-table>
      <b-button variant="outline-primary">Voir mon panier</b-button>
  </b-container>
  </div>

</template>

<script>
  import Menu from '../components/Navbar.vue';
    export default {
        name: "panier",
        components: {
        Menu,
      },
      data() {
        return {
          items: [
            { NumProduit: '0001', Theme: 'Motard', Couleur: 'Rouge', Taille: 'Petit',Apperçu:'', AjouterPannier:'' },
            { NumProduit: '0002', Theme: 'Ski', Couleur: 'Vert', Taille: 'Grand',Apperçu:'', AjouterPannier:'' },
            { NumProduit: '0003', Theme: 'Skate', Couleur: 'Argent', Taille: 'Moyen',Apperçu:'', AjouterPannier:'' },
            { NumProduit: '0004', Theme: 'Velo', Couleur: 'Rose', Taille: 'Petit', Apperçu:'', AjouterPannier:''}
          ]
        }
    }
    }
</script>

<style scoped>

</style>
