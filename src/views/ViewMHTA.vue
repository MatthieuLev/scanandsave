<template>
  <b-container>
    <div>
      <h2>Maladie</h2>
      <b-row>
          <p>{{this.form.diseases}}</p>
      </b-row>
    </div>
    <div>
      <h2>Hospitalisation</h2>
      <b-row>
        <p>{{this.form.hospitalization}}</p>
      </b-row>
    </div>
    <div>
      <h2>Traitements</h2>
      <b-row>
        <p>{{this.form.treatment}}</p>
      </b-row>
    </div>
    <div>
      <h2>Allergies</h2>
      <b-row>
        <p>{{this.form.allergy}}</p>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col>
          <h2>Donneur d'organe</h2>
        </b-col>
        <b-col>
          <p>{{this.form.organ_donor}}</p>
        </b-col>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col>
          <h2>Groupe sanguin</h2>
        </b-col>
        <b-col>
          <p>{{this.form.blood_type}}</p>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
  import firebase from 'firebase';
  import db from '../firebase.js';
  import router from '../router';

  export default {
    name: 'ViewMHTA',
    data() {
      return {
        errorMessage: '',
        form: {
          organ_donor: null,
          blood_type: 'Inconnu',
          diseases: null,
          hospitalization: null,
          allergy: null,
          treatment: null,
        },
        image: null,
      };
    },
    created() {
      db.collection('medicalFiles')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((doc) => {
          console.log(doc.data());
          console.log(doc.id, ' => ', doc.data());
          this.form.blood_type = doc.data().blood_type;
          this.form.organ_donor = doc.data().organ_donor;
          if (doc.data().organ_donor) {
            this.form.organ_donor = 'Oui';
          } else {
            this.form.organ_donor = 'Non';
          }
          this.form.diseases = doc.data().diseases;
          this.form.hospitalization = doc.data().hospitalization;
          this.form.allergy = doc.data().allergy;
          this.form.treatment = doc.data().treatment;
        })
        .catch(() => {
          router.push('ViewMHTA');
        });
    },
  };
</script>

<style scoped>

</style>
