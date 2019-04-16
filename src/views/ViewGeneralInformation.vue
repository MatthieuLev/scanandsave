<template>
  <div>
    <NavbarMobile></NavbarMobile>
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
        <b-button href="tel:112">Appeler les secours</b-button>
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
    name: 'ViewGeneralInformation',
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
      db.collection('medicalFiles')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((doc) => {
          console.log(doc.data());
          console.log(doc.id, ' => ', doc.data());
          this.form.civility = doc.data().civility;
          if (this.form.civility==="Monsieur"){
            this.sexe = "Masculin";
          }
          else if (this.form.civility ==="Madame"){
            this.sexe = "Féminin";
          }
          else {this.sexe = "Autre";}
          this.form.first_name = doc.data().first_name;
          this.form.last_name = doc.data().last_name;
          this.form.birthday = doc.data().birthday;
          this.form.phone_number = doc.data().phone_number;
          this.form.organ_donor = doc.data().organ_donor;
          if (doc.data().organ_donor) {
            this.form.organ_donor = 'Oui';
          } else {
            this.form.organ_donor = 'Non';
          }
          this.form.blood_type = doc.data().blood_type;
          this.form.social_security_number = doc.data().social_security_number;
          this.form.license_number = doc.data().license_number;

          this.form.adress.number = doc.data().adress.number;
          this.form.adress.street = doc.data().adress.street;
          this.form.adress.complement = doc.data().adress.complement;
          this.form.adress.city = doc.data().adress.city;
          this.form.adress.postal_code = doc.data().adress.postal_code;
          this.form.adress.state = doc.data().adress.state;
          this.form.adress.country = doc.data().adress.country;

          this.form.diseases = doc.data().diseases;
          this.form.hospitalization = doc.data().hospitalization;
          this.form.allergy = doc.data().allergy;
          this.form.treatment = doc.data().treatment;

          this.form.contact.first_name = doc.data().contact.first_name;
          this.form.contact.last_name = doc.data().contact.last_name;
          this.form.contact.phone_number = doc.data().contact.phone_number;

          this.form.doctor.first_name = doc.data().doctor.first_name;
          this.form.doctor.last_name = doc.data().doctor.last_name;
          this.form.doctor.phone_number = doc.data().doctor.phone_number;
          this.form.doctor.city = doc.data().doctor.city;
        })
        .catch(() => {
          router.push('ViewGeneralInformation');
        });
    },
  };
</script>

<style scoped>
  h2 {
    margin-bottom: 1em;
  }
  .label {
    font-weight: bold;
  }
</style>
