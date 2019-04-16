<template>
  <div>
    <NavbarMobile></NavbarMobile>
    <b-container>
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
    </b-container>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import db from '../firebase.js';
  import router from '../router';
  import NavbarMobile from '../components/NavbarMobile.vue';

  export default {
    name: 'ViewIdentity',
    components: {
      NavbarMobile,
    },
    data() {
      return {
        errorMessage: '',
        sexe : 'Autre',
        form: {
          civility: 'Madame',
          first_name: null,
          last_name: null,
          photo: null,
          birthday: null,
          phone_number: null,
          organ_donor: null,
          blood_type: 'Inconnu',
          social_security_number: null,
          license_number: null,
          adress: {
            number: null,
            street: null,
            complement: null,
            postal_code: null,
            city: null,
            state: null,
            country: null,
          },
          diseases: null,
          hospitalization: null,
          allergy: null,
          treatment: null,
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
            console.log(doc.data());
            console.log(doc.id, ' => ', doc.data());
            this.form.civility = doc.data().civility;
            if (this.form.civility === "Monsieur") {
              this.sexe = "Masculin";
            } else if (this.form.civility === "Madame") {
              this.sexe = "Féminin";
            } else {
              this.sexe = "Autre";
            }
            this.form.first_name = doc.data().first_name;
            this.form.last_name = doc.data().last_name;
            this.form.birthday = doc.data().birthday;
            this.form.phone_number = doc.data().phone_number;
            this.form.social_security_number = doc.data().social_security_number;
            this.form.license_number = doc.data().license_number;

            this.form.adress.number = doc.data().adress.number;
            this.form.adress.street = doc.data().adress.street;
            this.form.adress.complement = doc.data().adress.complement;
            this.form.adress.city = doc.data().adress.city;
            this.form.adress.postal_code = doc.data().adress.postal_code;
            this.form.adress.state = doc.data().adress.state;
            this.form.adress.country = doc.data().adress.country;
          })
          .catch(() => {
            console.log('firebase error')
          });
      } else {
        console.log('undefined id')
      }
    },
  };
</script>

<style scoped>

</style>
