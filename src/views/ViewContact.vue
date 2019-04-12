<template>
  <b-container>
    <div>
      <b-row>
          <h2>Proche à contacter</h2>
      </b-row>
    </div>
    <b-row>
      <b-col>
        <h2>Mèdecin traitant</h2>
      </b-col>
    </b-row>
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
