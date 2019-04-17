<template>
  <div>
    <NavbarMobile></NavbarMobile>
    <div class="container">
      <br>
      <b-row>
        <b-col>
          <h1>Informations médicales</h1>
        </b-col>
      </b-row>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">

              <div class="row">
                <div class="col-sm-3 col-md-2 col-5">
                  <h5 class="label" style="font-weight:bold;">Maladie</h5>
                </div>
                <div class="col-md-8 col-6">
                  {{this.form.diseases}}
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3 col-md-2 col-5">
                  <h5 class="label" style="font-weight:bold;">Hospitalisa - tion</h5>
                </div>
                <div class="col-md-8 col-6">
                  {{this.form.hospitalization}}
                </div>
              </div>
              <hr />


              <div class="row">
                <div class="col-sm-3 col-md-2 col-5">
                  <h5 class="label" style="font-weight:bold;">Traitement</h5>
                </div>
                <div class="col-md-8 col-6">
                  {{this.form.treatment}}
                </div>
              </div>
              <hr />


              <div class="row">
                <div class="col-sm-3 col-md-2 col-5">
                  <h5 class="label" style="font-weight:bold;">Allergie</h5>
                </div>
                <div class="col-md-8 col-6">
                  {{this.form.allergy}}
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3 col-md-2 col-5">
                  <h5 class="label" style="font-weight:bold;">Donneur d'organe :</h5>
                </div>
                <div class="col-md-8 col-6">
                  {{this.form.organ_donor}}
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3 col-md-2 col-5">
                  <h5 class="label" style="font-weight:bold;">Groupe sanguin :</h5>
                </div>
                <div class="col-md-8 col-6">
                  {{this.form.blood_type}}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
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
  h1 {
    color: #FFFFFF;
  }

</style>
