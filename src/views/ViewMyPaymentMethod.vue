<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mon panier</h1>
      <b-row>
        <b-col>
          <b-table striped hover :items="items"></b-table>
        </b-col>
      </b-row>
      <h2>Mode de Paiement</h2>

      <b-row>
        <b-col>
          <b-form-group>
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              name="flavour-1">
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <label for="cardNumber">Entrez votre numéro de carte</label>
          <b-form-input
            id="cardNumber"
            v-model="cardNumber"
            :formatter="format"
            placeholder="N° de carte">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <label for="cardName">Entrez le nom du propriétaire de la carte</label>
          <b-form-input
            id="cardName"
            v-model="name"
            :formatter="format"
            placeholder="Enter your name"
            aria-describedby="input-formatter-help"></b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <label for="cardName">Entrez le nom du propriétaire de la carte</label>
          <b-form-input
            id="input-formatter"
            v-model="cardName"
            :formatter="format"
            placeholder="  /  "
            aria-describedby="input-formatter-help">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Choisir le mode de paiement:">
            <b-form-radio-group id="checkbox-group-2" v-model="selected" name="flavour-2">
              <i class="fab fa-cc-visa customRadioIcon"></i>
              <b-form-radio value="orange"></b-form-radio>
              <i class="fab fa-cc-paypal customRadioIcon"></i>
              <b-form-radio value="apple"></b-form-radio>
              <i class="fab fa-cc-amex customRadioIcon"></i>
              <b-form-radio value="pineapple"></b-form-radio>
              <i class="fab fa-cc-mastercard customRadioIcon"></i>
              <b-form-radio value="grape"></b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="buttonPosition">
          <b-button variant="success">Valider</b-button>
          <b-button variant="danger">Annuler</b-button>
        </b-col>
      </b-row>
    </b-container>

    <br><br><br><br>

    <footer class="container-fluid text-center">
      <div class="row">
        <div class="col-sm-4">
          <img src="../img/skateboard.jpg" class="img-responsive" style="width:100%" alt="Image">
        </div>

        <div class="col-sm-4">
          <img src="../img/utah.jpg" class="img-responsive" style="width:100%" alt="Image">
        </div>

        <div class="col-sm-4">
          <img src="../img/ski.png" class="img-responsive" style="width:100%" alt="Image">
        </div>
      </div>
    </footer>
    
  </div>
</template>


<script>
  import Navbar from '../components/Navbar.vue';
  import PaymentMethod from '../components/PaymentMethod.vue';

  export default {
    name: 'ViewMyPaymentMethod',
    components: {
      Navbar,
      PaymentMethod
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
  .dateview {
    padding: 6px 12px;
  }
  .customRadioIcon{
    font-size: 40px;
    margin: 5px;
  }


</style>
