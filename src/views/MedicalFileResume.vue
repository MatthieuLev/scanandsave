<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mon dossier médical</h1>
      <h2>Informations générales</h2>

      <b-row>
        <b-col class="col-lg-4">
          <h5>Civilité: </h5>
        </b-col>
        <b-col class="col-lg-4">
          <h5>Mademoiselle</h5>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="col-lg-4">
          <h5>Nom: </h5>">
        </b-col>
        <b-col class="col-lg-4">
            <h5>Lemarquand</h5>
        </b-col>
      </b-row>

      <b-row>
       <b-col class="col-lg-4">
          <h5>Prenom: </h5>
       </b-col>
        <b-col class="col-lg-4">
        <h5>Sarah</h5>
      </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import {DocumentReference as db} from "firebase";
    export default {
        name: "MedicalFileResume",
      components: {
        Navbar,
      },
      methods: {
        readMedicalFile() {
          db.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.id, ' => ', doc.data())
              this.first_name = doc.data().first_name
              this.last_name = doc.data().last_name
              })
          })
        }
      }
    }
</script>

<style scoped>

</style>
