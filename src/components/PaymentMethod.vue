<template>
  <div class="paymentMethod">
    <h1>Mode de Paiement</h1>
    <br/>
    <b-row>
      <b-col>
        <label for="cardNumber">Entrez votre numéro de carte</label>
        <b-form-input
          id="cardNumber"
          v-model="cardNumber"
          type="number"
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
  </div>
</template>

<script>
    export default {
        name: "PaymentMethod"
    }
</script>

<style scoped>
  .paymentMethod{
    color:white;
  }
  .fab{
    color: #4d0000;
    font-size: 3em;
    margin: 0 10px;
  }
</style>
