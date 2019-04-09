<template>
  <div>
    <Navbar></Navbar>
      <h1>Mon dossier médical</h1>
      <h2>Informations générales</h2>
      <b-container>
        <b-col>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Civilité : </p>
            </b-col>
            <b-col>
              <select :disabled="disabled" :value=this.civility >
                <option>Madame</option>
                <option>Monsieur</option>
                <option>Mademoiselle</option>
              </select>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Nom : </p>
            </b-col>
            <b-col>
              <b-form-input :disabled="disabled" :value=this.last_name></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Prenom : </p>
            </b-col>
            <b-col>
              <b-form-input :disabled="disabled" :value=this.first_name></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Date de naissance : </p>
            </b-col>
            <b-col>
              <b-form-input type="date" :disabled="disabled" :value=this.birthday :place_holder="this.birthday"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Téléphone : </p>
            </b-col>
            <b-col>
              <b-form-input type="number" :disabled="disabled" :value=this.phone_number></b-form-input>
            </b-col>
          </b-row>
          <b-row>
              <p class="label">Photo d'identité : </p>
          </b-row>
        </b-col>
      </b-container>


      <h2>Adresse</h2>
      <b-container>
        <b-row>
          <b-col class="col-lg-6">
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Numéro : </p>
              </b-col>
              <b-col>
                <b-form-input type="number" :disabled="disabled" :value=this.adress_number></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Nom de voie : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" :value=this.adress_street></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Complément d'adresse : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" :value=this.adress_complement></b-form-input>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="col-lg-6">
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Ville : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" :value=this.adress_city></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Etat : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" :value=this.adress_state></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Code Postal :</p>
              </b-col>
              <b-col>
                <b-form-input type="number" :disabled="disabled" :value=this.adress_postal_code></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Pays : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" :value=this.adress_country></b-form-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>

      <h2>Informations vitales : MHTA</h2>
      <b-container>
        <b-row>
          <b-col class="col-lg-4">
            <h5>M : Maladie(s)</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Avez-vous des problèmes médicaux ? (Problèmes cardiaques, diabète, épilepsie, asthme, etc) </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.diseases></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-4">
            <h5>H : Hospitalisation(s)</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi? </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.hospitalization></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-4">
            <h5>T : Traitement(s)</h5>
          </b-col>
        </b-row>
      <b-row>
        <b-col>
          <p class="label">Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?</p>
        </b-col>
        <b-col>
          <b-form-input :disabled="disabled" :value=this.treatment></b-form-input>
        </b-col>
      </b-row>
        <b-row>
          <b-col class="col-lg-4">
            <h5>A : Allergie(s)</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité</p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.allergy></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col class="col-lg-4">
            <p class="label">Donneur d'organes : </p>
          </b-col>
          <b-col class="col-lg-1">
            <b-form-input :disabled="disabled" :value=this.organ_donor></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-4">
            <p class="label">Groupe sanguin: </p>
          </b-col>
          <b-col class="col-lg-1">
            <select :disabled="disabled" :value=this.blood_type>
              <option selected>Inconnu</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </b-col>
        </b-row>
      </b-container>

      <h2>Autres informations</h2>
      <b-container>
        <b-row>
          <b-col class="col-lg-3">
            <p class="label">Numéro de sécurité sociale :</p>
          </b-col>
          <b-col>
            <b-form-input type="number" :disabled="disabled" :value=this.social_security_number></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-3">
            <p class="label">Permis de conduire :</p>
          </b-col>
          <b-col>
            <b-form-input type="number" :disabled="disabled" :value=this.license_number></b-form-input>
          </b-col>
        </b-row>
      </b-container>

      <h2>Contacts</h2>
      <h3>Personne à contacter en cas d'urgence</h3>
      <b-container>
        <b-row>
          <b-col>
            <p class="label">Prénom : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.contact_first_name></b-form-input>
          </b-col>
          <b-col>
            <p class="label">Nom : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.contact_last_name></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Téléphone : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.contact_phone_number></b-form-input>
          </b-col>
        </b-row>
      </b-container>

      <h3>Coordonnées de votre médecin traitant</h3>
      <b-container>
        <b-row>
          <b-col>
            <p class="label">Prenom : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.doctor_first_name></b-form-input>
          </b-col>
          <b-col>
            <p class="label">Nom : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.doctor_last_name></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Telephone : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.doctor_phone_number></b-form-input>
          </b-col>
          <b-col>
            <p class="label">Ville : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" :value=this.doctor_city></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    <button v-on:click="modify()">{{this.buttonName}}</button>
  </div>
</template>

<script>
  import db from '../firebase.js';
  import firebase from 'firebase';
  import Navbar from '../components/Navbar.vue';

    export default {
      name: 'MedicalFileResume',
      components: {
        Navbar,
      },
      data() {
        return {
          disabled: true,
          buttonName: "Modifier les informations",
          civility: 'Madame',
          first_name: null,
          last_name: null,
          birthday: null,
          phone_number: null,
          organ_donor: null,
          blood_type: 'Inconnu',
          social_security_number: null,
          license_number: null,
          adress_number: null,
          adress_street: null,
          adress_complement: null,
          adress_city: null,
          adress_postal_code: null,
          adress_state: null,
          adress_country: null,
          diseases: null,
          hospitalization: null,
          allergy: null,
          treatment: null,

          contact_first_name: null,
          contact_last_name: null,
          contact_phone_number: null,

          doctor_first_name: null,
          doctor_last_name: null,
          doctor_phone_number: null,
          doctor_city: null,
          image: ['https://static1.purebreak.com/articles/0/14/19/70/@/582025-mamadou-segpa-le-youtubeur-condamne-a-diapo-2.jpg'],
        };
      },
      methods: {
        saveModificationMedicalFile: () => {
          db.collection('medicalFiles')
            .update({})
        },
        modify: function () {
          this.disabled=!this.disabled;
          if(this.disabled){
            this.buttonName ="Modifier les informations";
          }
          else{
            this.buttonName = "Valider les changements";
          }
        }},
        created() {
          db.collection('medicalFiles')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((doc) => {
              console.log(doc.data());
              console.log(doc.id, ' => ', doc.data());
              this.civility = doc.data().civility;
              this.first_name = doc.data().first_name;
              this.last_name = doc.data().last_name;
              this.birthday = doc.data().birthday;
              this.phone_number = doc.data().phone_number;
              this.organ_donor = doc.data().organ_donor;
              if (doc.data().organ_donor){
                this.organ_donor="Oui";
              }
              else{
                this.organ_donor="Non";
              }
              this.blood_type = doc.data().blood_type;
              this.social_security_number = doc.data().social_security_number;
              this.license_number = doc.data().license_number;

              this.adress_number = doc.data().adress.number;
              this.adress_street = doc.data().adress.street;
              this.adress_complement = doc.data().adress.complement;
              this.adress_city = doc.data().adress.city;
              this.adress_postal_code = doc.data().adress.postal_code;
              this.adress_state = doc.data().adress.state;
              this.adress_country = doc.data().adress.country;

              this.diseases = doc.data().diseases;
              this.hospitalization = doc.data().hospitalization;
              this.allergy= doc.data().allergy;
              this.treatment = doc.data().treatment;

              this.contact_first_name = doc.data().contact.first_name;
              this.contact_last_name = doc.data().contact.last_name;
              this.contact_phone_number = doc.data().contact.phone_number;

              this.doctor_first_name = doc.data().doctor.first_name;
              this.doctor_last_name = doc.data().doctor.last_name;
              this.doctor_phone_number = doc.data().doctor.phone_number;
              this.doctor_city = doc.data().doctor.city;
            }).catch(function(error) {
              alert("Error getting document:", error);
            });
        },
    };
</script>

<style scoped>
  p{
    text-align: left;
    margin-left : 50px;
  }
  .label{
    font-weight: bold;
  }
</style>
