<template>
  <b-container>
    <div>
      <b-row>
        <b-col>
          <h2>Proche à contacter</h2>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col>
        <h2>Mèdecin traitant</h2>
      </b-col>
    </b-row>
    <b-col>
      <b-row>
        <p>{{this.form.last_name}}</p>
        <p>{{this.form.first_name}}</p>

      </b-row>
    </b-col>
  </b-container>


</template>

<script>
  import firebase from 'firebase';
  import db from '../firebase.js';
  import router from '../router';
    export default {
        name: "ViewInformation"
    }
</script>

<style scoped>

</style>
