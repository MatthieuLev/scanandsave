<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-form class="registration-form">
        <Menu></Menu>
        <h1>Mon Panier</h1>
        <b-table striped hover :items="items"></b-table>
        <b-table striped hover :items="paiement"></b-table>
        <div>
          <b-row>

            <b-col>
              <b-button variant="success">Valider</b-button>
              <b-button variant="danger">Annuler</b-button>
            </b-col>

          </b-row>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'Mon_Panier',
    components: {
      Navbar,
    },
    data() {
      return {

        items: [
          { Produit: 40, Quantité: 'Dickerson', Etat_de_la_commande: 'Macdonald',Ref:'1222333',Prix:'10.65€'},
        ],
        paiement:[
          { Total: 'Total HC', Prix: '10.56' },
          { Total: 'Total TTC', Prix: '11.56' },
          { Total: 'Total TTC frais de port', Prix: '12.40' }    ]
      };
    },

  };
</script>

<style scoped>
  .btn {
    margin: 8px;
  }
</style>
