<template>
  <div>
    <NavbarMobile></NavbarMobile>
    <b-container>
      <br>
      <b-row>
        <b-col>
          <h2>Contacts</h2>
        </b-col>
      </b-row>
      <br>
      <div class="card">
        <div class="card-body">
          <b-row>
            <b-col>
              <h3>Proche à contacter</h3>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col class="col-6">
              <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Nom :&nbsp;&nbsp;</p>
            </b-col>
            <b-col class="col-6">
              <b-row>{{this.form.contact.last_name}}</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-6">
              <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Prénom :&nbsp;&nbsp;</p>
            </b-col>
            <b-col class="col-6">
              <b-row>{{this.form.contact.first_name}}</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-6">
              <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Numéro de téléphone :&nbsp;&nbsp;</p>
            </b-col>
            <b-col class="col-6">
              <b-row>{{this.form.contact.phone_number}}</b-row>
            </b-col>
          </b-row>
        </div>
      </div>
      <br>
      <div class="card">
        <div class="card-body">
          <b-row>
            <b-col>
              <h3>Médecin traitant</h3>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col class="col-6">
              <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Nom :&nbsp;&nbsp;</p>
            </b-col>
            <b-col class="col-6">
              <b-row>{{this.form.doctor.last_name}}</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-6">
              <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Prénom :&nbsp;&nbsp;</p>
            </b-col>
            <b-col class="col-6">
              <b-row>{{this.form.doctor.first_name}}</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-sm-6 col-6">
              <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Téléphone :&nbsp;&nbsp;</p>
            </b-col>
            <b-col class="col-6">
              <b-row>{{this.form.doctor.phone_number}}</b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-6">
              <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Ville :&nbsp;&nbsp;</p>
            </b-col>
            <b-col class="col-6">
              <b-row>{{this.form.doctor.city}}</b-row>
            </b-col>
          </b-row>
        </div>
      </div>
  </b-container>
  </div>
</template>

<script>
  import db from '../firebase.js';
  import router from '../router';
  import NavbarMobile from '../components/NavbarMobile.vue';


  export default {
    name: 'ViewContact',
    components: {
      NavbarMobile,
    },
    data() {
      return {
        errorMessage: '',
        sexe : 'Autre',
        form: {
          contact: {
            last_name: null,
            first_name: null,
            phone_number: null,
          },
          doctor: {
            last_name: null,
            first_name: null,
            phone_number: null,
            city: null,
          },
        },
      };
    },
    created() {
      const userId = this.$route.query.userId;
      if (userId !== undefined) {
        db.collection('medicalFiles')
          .doc(userId)
          .get()
          .then((doc) => {
            this.form.contact.first_name = doc.data().contact.first_name;
            this.form.contact.last_name = doc.data().contact.last_name;
            this.form.contact.phone_number = doc.data().contact.phone_number;

            this.form.doctor.first_name = doc.data().doctor.first_name;
            this.form.doctor.last_name = doc.data().doctor.last_name;
            this.form.doctor.phone_number = doc.data().doctor.phone_number;
            this.form.doctor.city = doc.data().doctor.city;
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

  h2{
    color: white;
  }
</style>
