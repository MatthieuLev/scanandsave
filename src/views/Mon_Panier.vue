<template>
  <b-form class="registration-form">
    <Menu ></Menu>
    <h1>Mon Panier</h1>
    <b-table striped hover :items="items"></b-table>
    <div>
      <b-row>
        <b-col class="buttonPosition">
          <b-button size="sm">Valider</b-button>
          <b-button size="sm">Annuler</b-button>
        </b-col>

      </b-row>
    </div>
  </b-form>

</template>

<script>
  import Menu from '../components/Menu.vue';
    export default {
      name: 'Mon_Panier',
      components: {
        Menu,
      },
      data() {
        return {

          items: [
            { Numéro_commande: true, Produit: 40, Quantité: 'Dickerson', Etat_de_la_commande: 'Macdonald' },
            { Numéro_commande: false, Produit: 21, Quantité: 'Larsen', Etat_de_la_commande: 'Shaw' },
            { Numéro_commande: false, Produit: 89, Quantité: 'Geneva', Etat_de_la_commande: 'Wilson' },
            { Numéro_commande: true, Produit: 38, Quantité: 'Jami', Etat_de_la_commande: 'Carney' }
          ]
        };
      },

    };
</script>

<style>
.buttonPosition {
  margin-bottom: 8PX;

}
.btn {
  margin: 8px;
}
.row {
  flex-direction: row-reverse;
}

</style>
