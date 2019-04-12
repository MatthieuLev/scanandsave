<template>
  <b-container>
    <div>
      <b-row>
        <b-col>
          <h2>Fiche d'identité</h2>
        </b-col>
        <b-col class="col-lg-1">
          <button type="button" class="btn btn-dark">+</button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-row>
            <p class="label">Nom : </p><p>{{this.form.last_name}}</p>
          </b-row>
          <b-row>
            <p class="label">Prenom : </p><p>{{this.form.first_name}}</p>
          </b-row>
          <b-row>
            <p class="label">Age : </p><p>{{this.form.birthday}}</p>
          </b-row>
          <b-row>
            <p class="label">Sexe : </p><p>{{this.sexe}}</p>
          </b-row>
        </b-col>
        <b-col>
          <p>Ici la photo</p>
        </b-col>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col>
          <h2>Informations médicales</h2>
        </b-col>
        <b-col class="col-lg-1">
          <button type="button" class="btn btn-dark">+</button>
        </b-col>
      </b-row>
      <b-row>
        <p class="label">Groupe sanguin : </p><p> {{this.form.blood_type}}</p>
      </b-row>
      <b-row>
        <p class="label">Donneur d'organe : </p><p> {{this.form.organ_donor}}</p>
      </b-row>
      <b-row>
        <p class="label">Maladie : </p><p> {{this.form.diseases}}</p>
      </b-row>
      <b-row>
        <p class="label">Hospitalisation : </p><p> {{this.form.hospitalization}} </p>
      </b-row>
      <b-row>
        <p class="label">Traitement : </p><p> {{this.form.treatment}} </p>
      </b-row>
      <b-row>
        <p class="label">Allergie : </p><p> {{this.form.allergy}}</p>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col>
          <h2>Contacts</h2>
        </b-col>
        <b-col class="col-lg-1">
          <button type="button" class="btn btn-dark">+</button>
        </b-col>
      </b-row>
      <b-row>
        <p class="label">Proche : </p><p> {{this.form.contact.first_name}} {{this.form.contact.last_name}} </p>
      </b-row>
      <b-row>
        <p class="label">Coordonnées : </p><p> {{this.form.contact.phone_number}}</p>
      </b-row>
      <b-row>
        <p class="label">Medecin : </p><p> {{this.form.doctor.first_name}} {{this.form.doctor.last_name}}</p>
      </b-row>
      <b-row>
        <p class="label">Coordonnées : </p><p> {{this.form.doctor.phone_number}} - {{this.form.doctor.city}}</p>
      </b-row>
    </div>
    <div>
      <b-button>Appeler les secours</b-button>
    </div>
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
