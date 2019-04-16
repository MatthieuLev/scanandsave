<template>
  <div>
    <NavbarMobile></NavbarMobile>
    <b-container>
      <div>
        <b-row>
          <b-col>
            <h2>Informations médicales</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h4>Maladie</h4>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <p>{{this.form.diseases}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h4>Hospitalisation</h4>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <p>{{this.form.hospitalization}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h4>Traitement</h4>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <p>{{this.form.treatment}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h4>Allergie</h4>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <p>{{this.form.allergy}}</p>
          </b-col>
        </b-row>
        <b-row>
          <p class="label">Donneur d'organe : </p><p>{{this.form.organ_donor}}</p>
        </b-row>
        <b-row>
          <p class="label">Groupe sanguin : </p><p>{{this.form.blood_type}}</p>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
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
      const userId = this.$route.query.userId;
      if (userId !== undefined) {
        db.collection('medicalFiles')
          .doc(userId)
          .get()
          .then((doc) => {
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
            router.push('MFNotFound');
          });
      } else {
        router.push('MFNotFound');
      }
    },
  };
</script>

<style scoped>

</style>
