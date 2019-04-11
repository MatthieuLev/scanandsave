<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mon panier</h1>
      <b-table striped hover :items="items"></b-table>
      <h2>Mode de Paiement</h2>

    </b-container>
    <b-form-group>
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
    <div>
      <label for="input-formatter"></label>
      <b-form-input
        id="input-formatter"
        v-model="text1"
        :formatter="format"
        placeholder="N° de carte"

      ></b-form-input>
      <b-form-input
        id="input-formatter"
        v-model="text1"
        :formatter="format"
        placeholder="Enter your name"
        aria-describedby="input-formatter-help"></b-form-input>
      <b-form-input
      id="input-formatter"
      v-model="text1"
      :formatter="format"
      placeholder="  /  "
      aria-describedby="input-formatter-help"
      ></b-form-input>

      <b-col >
        <b-form-group >

        </b-form-group>
      </b-col>


    </div>


    <b-form-group label="Choisir le mode de paiement:">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
       <i class="fab fa-cc-visa"></i>
        <b-form-checkbox value="orange"></b-form-checkbox>
        <i class="fab fa-cc-paypal"></i>
        <b-form-checkbox value="apple"></b-form-checkbox>
        <i class="fab fa-cc-amex"></i>
        <b-form-checkbox value="pineapple"></b-form-checkbox>
        <i class="fab fa-cc-mastercard"></i>
        <b-form-checkbox value="grape"></b-form-checkbox>
      </b-form-checkbox-group>

    </b-form-group>
    <b-col class="buttonPosition">
    <b-button variant="success">Valider</b-button>
    <b-button variant="danger">Annuler</b-button>
  </b-col>
  </div>
</template>


<script>
  import Navbar from '../components/Navbar.vue';
  export default {
    name: 'ViewMyPaymentMethod',
    components: {
      Navbar,
    },

  data() {
    return {
      types:
        [
        'text',
        'password',
        'email',
        'number',
        'url',
        'tel',
        'date',
        `time`,
        'range',
        'color'
      ],

      items: [
        {Numéro_commande: true, Produit: 40, Quantité: 'Dickerson', Etat_de_la_commande: 'Macdonald'},
      ],
    };
  },

  };
</script>

<style>
.dateview
{
  padding: 6px 12px;
}


</style>
