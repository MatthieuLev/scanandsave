<template>
  <div>
    <NavbarMobile></NavbarMobile>
  <b-container>
    <br>
    <b-row>
      <b-col>
        <h2>Informations médicales</h2>
      </b-col>
    </b-row>
    <br>
    <div>
      <h4>Maladie</h4>
      <b-row>
          <p>{{this.form.diseases}}</p>
      </b-row>
    </div>
    <div>
      <h4>Hospitalisation</h4>
      <b-row>
        <p>{{this.form.hospitalization}}</p>
      </b-row>
    </div>
    <div>
      <h4>Traitements</h4>
      <b-row>
        <p>{{this.form.treatment}}</p>
      </b-row>
    </div>
    <div>
      <h4>Allergies</h4>
      <b-row>
        <p>{{this.form.allergy}}</p>
      </b-row>
    </div>
      <b-row>
        <p class="label">&nbsp;&nbsp;Donneur d'organe :&nbsp;&nbsp;</p><p>{{this.form.organ_donor}}</p>
      </b-row>
    <div>
      <b-row>
        <p class="label">&nbsp;&nbsp;Groupe sanguin :&nbsp;&nbsp;</p><p>{{this.form.blood_type}}</p>
      </b-row>
    </div>
  </b-container>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import db from '../firebase.js';
  import router from '../router';
  import NavbarMobile from '../components/NavbarMobile.vue';

  export default {
    name: 'ViewMHTA',
    components: {
      NavbarMobile,
    },

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
