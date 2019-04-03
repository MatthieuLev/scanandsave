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
      <label for="input-formatter">Text input with formatter (on input)</label>
      <b-form-input
        id="input-formatter"
        v-model="text1"
        :formatter="format"
        placeholder="N° de carte"
        aria-describedby="input-formatter-help"
      ></b-form-input>
      <b-form-input
        id="input-formatter"
        v-model="text1"
        :formatter="format"
        placeholder="Enter your name"
        aria-describedby="input-formatter-help"
      ></b-form-input>
      <b-col >
        <b-form-group >
          <b-form-input type ="date" required placeholder="Date de naissance"></b-form-input>
        </b-form-group>
      </b-col>


    </div>


    <b-form-group label="Choisir le mode de paiement:">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
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
    name: 'ModedePaiement',
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

</style>
