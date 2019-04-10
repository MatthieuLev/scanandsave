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
              <select :disabled="disabled" v-model="form.civility" :value=this.form.civility >
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
              <b-form-input :disabled="disabled" v-model="form.last_name" :value=this.form.last_name></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Prenom : </p>
            </b-col>
            <b-col>
              <b-form-input :disabled="disabled" v-model="form.first_name" :value=this.form.first_name></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Date de naissance : </p>
            </b-col>
            <b-col>
              <b-form-input type="date" :disabled="disabled" v-model="form.birthday" :value=this.form.birthday></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Téléphone : </p>
            </b-col>
            <b-col>
              <b-form-input type="number" :disabled="disabled" v-model="form.phone_number" :value=this.form.phone_number></b-form-input>
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
                <b-form-input type="number" :disabled="disabled" v-model="form.adress.number" :value=this.form.adress.number></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Nom de voie : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" v-model="form.adress.street" :value=this.form.adress.street></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Complément d'adresse : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" v-model="form.adress.complement" :value=this.form.adress.complement></b-form-input>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="col-lg-6">
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Ville : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" v-model="form.adress.city" :value=this.form.adress.city></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Etat : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled"  v-model="form.adress.state" :value=this.form.adress.state></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Code Postal :</p>
              </b-col>
              <b-col>
                <b-form-input type="number" :disabled="disabled"  v-model="form.adress.postal_code" :value=this.form.adress.postal_code></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Pays : </p>
              </b-col>
              <b-col>
                <b-form-input :disabled="disabled" v-model="form.adress.country" :value=this.form.adress.country></b-form-input>
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
            <b-form-input :disabled="disabled" v-model="form.diseases" :value=this.form.diseases></b-form-input>
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
            <b-form-input :disabled="disabled" v-model="form.hospitalization" :value=this.form.hospitalization></b-form-input>
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
          <b-form-input :disabled="disabled" v-model="form.treatment" :value=this.form.treatment></b-form-input>
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
            <b-form-input :disabled="disabled" v-model="form.allergy" :value=this.form.allergy></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col class="col-lg-4">
            <p class="label">Donneur d'organes : </p>
          </b-col>
          <b-col class="col-lg-1">
            <b-form-input :disabled="disabled" v-model="form.organ_donor" :value=this.form.organ_donor></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-4">
            <p class="label">Groupe sanguin: </p>
          </b-col>
          <b-col class="col-lg-1">
            <select :disabled="disabled" v-model="form.blood_type" :value=this.form.blood_type>
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
            <b-form-input type="number" :disabled="disabled" v-model="form.social_security_number" :value=this.form.social_security_number></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-3">
            <p class="label">Permis de conduire :</p>
          </b-col>
          <b-col>
            <b-form-input type="number" :disabled="disabled" v-model="form.license_number" :value=this.form.license_number></b-form-input>
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
            <b-form-input :disabled="disabled" v-model="form.contact.first_name" :value=this.form.contact.first_name></b-form-input>
          </b-col>
          <b-col>
            <p class="label">Nom : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" v-model="form.contact.last_name" :value=this.form.contact.last_name></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Téléphone : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" v-model="form.contact.phone_number" :value=this.form.contact.phone_number></b-form-input>
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
            <b-form-input :disabled="disabled" v-model="form.doctor.first_name" :value=this.form.doctor.first_name></b-form-input>
          </b-col>
          <b-col>
            <p class="label">Nom : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" v-model="form.doctor.last_name" :value=this.form.doctor.last_name></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Telephone : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" v-model="form.doctor.phone_number" :value=this.form.doctor.phone_number></b-form-input>
          </b-col>
          <b-col>
            <p class="label">Ville : </p>
          </b-col>
          <b-col>
            <b-form-input :disabled="disabled" v-model="form.doctor.city" :value=this.form.doctor.city></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    <button v-on:click="modify()">{{this.buttonName}}</button>
  </div>
</template>

<script>
  import db from '../firebase.js';
  import router from '../router';
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
          buttonName: 'Modifier les informations',
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
          image: ['https://static1.purebreak.com/articles/0/14/19/70/@/582025-mamadou-segpa-le-youtubeur-condamne-a-diapo-2.jpg'],
        };
      },
        methods: {
          saveModificationMedicalFile() {
            alert('UPDATE');
            db.collection('medicalFiles')
              .doc(firebase.auth().currentUser.uid)
              .update({
                civility: this.form.civility,
                first_name: this.form.first_name,
                last_name: this.form.last_name,
                birthday: this.form.birthday,
                phone_number: this.form.phone_number,
                organ_donor: this.form.organ_donor,
                blood_type: this.form.blood_type,
                social_security_number: this.form.social_security_number,
                license_number: this.form.license_number,
                adress: {
                  number: this.form.adress.number,
                  street: this.form.adress.street,
                  complement: this.form.adress.complement,
                  postal_code: this.form.adress.postal_code,
                  city: this.form.adress.city,
                  state: this.form.adress.state,
                  country: this.form.adress.country,
                },
                diseases: this.form.diseases,
                hospitalization: this.form.hospitalization,
                allergy: this.form.allergy,
                treatment: this.form.treatment,
                contact: {
                  last_name: this.form.contact.last_name,
                  first_name: this.form.contact.first_name,
                  phone_number: this.form.contact.phone_number,
                },
                doctor: {
                  last_name: this.form.doctor.last_name,
                  first_name: this.form.doctor.first_name,
                  phone_number: this.form.doctor.phone_number,
                  city: this.form.doctor.city,
                },
              });
          },
          modify() {
            if (!this.disabled) {
              this.saveModificationMedicalFile();
              alert('Modification enregistrées');
              this.buttonName = 'Modifier les informations';
              this.disabled = !this.disabled;
            } else {
              this.buttonName = 'Valider les changements';
              this.disabled = !this.disabled;
            }
          },
        },
        created() {
          db.collection('medicalFiles')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((doc) => {
              console.log(doc.data());
              console.log(doc.id, ' => ', doc.data());
              this.form.civility = doc.data().civility;
              this.form.first_name = doc.data().first_name;
              this.form.last_name = doc.data().last_name;
              this.form.birthday = doc.data().birthday;
              this.form.phone_number = doc.data().phone_number;
              this.form.organ_donor = doc.data().organ_donor;
              if (doc.data().organ_donor) {
                this.form.organ_donor = 'Oui';
              }
              else{
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
            }).catch(error => {
            router.push('MedicalFileCreation');
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
