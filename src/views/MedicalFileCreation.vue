<template>
  <div>
    <Navbar></Navbar>
    <div class="wrapper">
      <br>
      <br>
      <br>
      <br>
      <br>
    <b-container class="container">
      <b-form @submit.prevent="saveMedicalFile" class="medicalFileCreation-form">
        <h1>Mon dossier médical</h1>

        <div class="custom-card">
          <h2>Informations générales</h2>

          <b-row>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Civilité :">
                <label>
                  <select v-model="form.civility" class="form-control">
                    <option>Madame</option>
                    <option>Monsieur</option>
                    <option>Autre</option>
                  </select>
                </label>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Nom : ">
                <b-form-input
                  v-model="form.last_name" name="last_name" placeholder="Nom" class="form-control"
                  :class="{ 'is-invalid': submitted && $v.form.last_name.$error }"/>
                <div v-if="submitted && !$v.form.last_name.required" class="invalid-feedback">Nom obligatoire</div>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Prénom : ">
                <b-form-input
                  v-model="form.first_name" name="first_name" placeholder="Prenom" class="form-control"
                  :class="{ 'is-invalid': submitted && $v.form.first_name.$error }"/>
                <div v-if="submitted && !$v.form.first_name.required" class="invalid-feedback">Prénom obligatoire</div>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Date de naissance : ">
                <b-form-input
                  v-model="form.birthday" type="date" name="birthday" placeholder="Date de naissance"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.form.birthday.$error }"/>
                <div v-if="submitted && !$v.form.birthday.required" class="invalid-feedback">Date de naissance
                  obligatoire
                </div>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group
                label="Photo d'identité : ">
                <b-form-file @change="detectFiles($event)" name="photo" placeholder="Photo d'identité"
                             class="form-control"/>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Téléphone : ">
                <b-form-input v-model="form.phone_number" type="number" name="phone_number"
                              placeholder="Numéro de téléphone" class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.phone_number.$error }"/>
                <div v-if="submitted && !$v.form.phone_number.required" class="invalid-feedback">Numéro de téléphone
                  obligatoire
                </div>
              </b-form-group>
            </div>
          </b-row>
        </div>

        <div class="custom-card">
          <h2>Adresse</h2>

          <b-row>
            <div class="col-md-3 col-xs-12">
              <b-form-group label="Numéro : ">
                <b-form-input v-model="form.adress.number" type="number" name="adress.number"
                              placeholder="Numéro de voie" class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.number.$error }"/>
                <div v-if="submitted && !$v.form.adress.number.required" class="invalid-feedback">Numéro de voie
                  obligatoire
                </div>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Nom de voie : ">
                <b-form-input v-model="form.adress.street" name="adress.street" placeholder="Nom de voie"
                              class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.street.$error }"/>
                <div v-if="submitted && !$v.form.adress.street.required" class="invalid-feedback">Nom de voie
                  obligatoire
                </div>
              </b-form-group>
            </div>
            <div class="col-md-3 col-xs-12">
              <b-form-group label="Complément d'adresse : ">
                <b-form-input v-model="form.adress.complement" name="adress.complement"
                              placeholder="Complément d'adresse"></b-form-input>
              </b-form-group>
            </div>
          </b-row>
          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Code Postal : ">
                <b-form-input v-model="form.adress.postal_code" type="number" name="adress.postal_code"
                              placeholder="Code Postal" class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.postal_code.$error }"/>
                <div v-if="submitted && !$v.form.adress.postal_code.required" class="invalid-feedback">Code Postal
                  obligatoire
                </div>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Ville : ">
                <b-form-input v-model="form.adress.city" name="adress.city" placeholder="Ville" class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.city.$error }"/>
                <div v-if="submitted && !$v.form.adress.city.required" class="invalid-feedback">Ville obligatoire</div>
              </b-form-group>
            </div>
          </b-row>
          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Région/Etat : ">
                <b-form-input v-model="form.adress.state" name="adress.state" placeholder="Région / Etat"
                              class="form-control"/>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Pays : ">
                <b-form-input v-model="form.adress.country" name="adress.country" placeholder="Pays"
                              class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.country.$error }"/>
                <div v-if="submitted && !$v.form.adress.country.required" class="invalid-feedback">Pays obligatoire
                </div>
              </b-form-group>
            </div>
          </b-row>
        </div>

        <div class="custom-card">
          <h2>Informations vitales : MHTA</h2>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group
                  label="Avez-vous des problèmes médicaux ? (Problèmes cardiaques, diabète, épilepsie, asthme, etc) ">
                  <b-form-input v-model="form.diseases"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi ?">
                  <b-form-input v-model="form.hospitalization"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?">
                  <b-form-input v-model="form.treatment"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité">
                  <b-form-input v-model="form.allergy"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-row>
            <div class="col-md-8 col-xs-12">
              <b-form-group label="Donneur d'organes ?">
                <b-form-radio class="customRadio" v-model="form.organ_donor" name="some_radios" value="oui">Oui
                </b-form-radio>
                <b-form-radio class="customRadio" v-model="form.organ_donor" name="some_radios" value="non">Non
                </b-form-radio>
              </b-form-group>

            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Groupe sanguin :">
                <label>
                  <select v-model="form.blood_type" class="form-control">
                    <option selected>Inconnu</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </label>
              </b-form-group>
            </div>
          </b-row>

        </div>

        <div class="custom-card">
          <h2>Autres informations</h2>

          <b-row>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Numéro de sécurité sociale">
                <b-form-input v-model="form.social_security_number" type="number"
                              placeholder="Numéro de sécurité sociale"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Numéro de permis de conduire">
                <b-form-input v-model="form.license_number" type="number" placeholder="Numéro de permis"></b-form-input>
              </b-form-group>
            </div>
          </b-row>
        </div>

        <div class="custom-card">
          <h2>Contacts</h2>
          <h3>Personne à contacter en cas d'urgence</h3>

          <b-row>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Nom : ">
                <b-form-input v-model="form.contact.last_name" placeholder="Nom du contact"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Prénom : ">
                <b-form-input v-model="form.contact.first_name" placeholder="Prénom du contact"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Téléphone : ">
                <b-form-input v-model="form.contact.phone_number" type="tel"
                              placeholder="Téléphone du contact"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

          <h3>Coordonnées de votre médecin traitant</h3>

          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Nom : ">
                <b-form-input v-model="form.doctor.last_name" placeholder="Nom du médecin"/>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Prenom : ">
                <b-form-input v-model="form.doctor.first_name" placeholder="Prenom du médecin"/>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Telephone : ">
                <b-form-input v-model="form.doctor.phone_number" type="tel"
                              placeholder="Téléphone du médecin"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Ville : ">
                <b-form-input v-model="form.doctor.city" placeholder="Ville du médecin"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

        </div>
        <b-button class="button-validate" type="submit">Valider</b-button>
        <p class="error" v-if="errorMessage">{{errorMessage}}</p>
      </b-form>
    </b-container>
      </div>
  </div>
</template>

<script>
  import {required, numeric} from 'vuelidate/lib/validators';
  import firebase from 'firebase';
  import db from '../firebase.js';
  import router from '../router';
  import Navbar from '../components/Navbar.vue';
  import MedicalFileResume from './MedicalFileResume.vue';

  export default {
    name: 'MedicalFileCreation',
    components: {
      Navbar,
    },
    data() {
      return {
        form: {
          civility: 'Madame',
          first_name: null,
          last_name: null,
          birthday: null,
          phone_number: null,
          organ_donor: null,
          blood_type: 'Inconnu',
          social_security_number: null,
          license_number: null,
          photo: null,
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
        errorMessage: '',
        submitted: false,
      };
    },
    validations: {
      form: {
        civility: {required},
        first_name: {required},
        last_name: {required},
        birthday: {required},
        phone_number: {
          required,
          numeric,
        },
        adress: {
          number: {
            required,
            numeric,
          },
          street: {required},
          postal_code: {required},
          city: {required},
          country: {required},
        },
      },
    },
    methods: {
      saveMedicalFile() {
        this.submitted = true;
        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log(this.$v);
          return;
        }
        const self = this;
        this.uploadPhoto().then(() => {
          db.collection('medicalFiles')
            .doc(firebase.auth().currentUser.uid)
            .set({
              civility: self.form.civility,
              first_name: self.form.first_name,
              last_name: self.form.last_name,
              birthday: self.form.birthday,
              phone_number: self.form.phone_number,
              organ_donor: self.form.organ_donor,
              blood_type: self.form.blood_type,
              social_security_number: self.form.social_security_number,
              license_number: self.form.license_number,
              photo: self.form.photo,
              adress: {
                number: self.form.adress.number,
                street: self.form.adress.street,
                complement: self.form.adress.complement,
                postal_code: self.form.adress.postal_code,
                city: self.form.adress.city,
                state: self.form.adress.state,
                country: self.form.adress.country,
              },
              diseases: self.form.diseases,
              hospitalization: self.form.hospitalization,
              allergy: self.form.allergy,
              treatment: self.form.treatment,
              contact: {
                last_name: self.form.contact.last_name,
                first_name: self.form.contact.first_name,
                phone_number: self.form.contact.phone_number,
              },
              doctor: {
                last_name: self.form.doctor.last_name,
                first_name: self.form.doctor.first_name,
                phone_number: self.form.doctor.phone_number,
                city: self.form.doctor.city,
              },
            })
            .then(() => {
              router.push(MedicalFileResume);
            })
            .catch((error) => {
              console.log(error);
              self.errorMessage = error;
            });
        }).catch((error => {
          console.log(error);
          self.errorMessage = error;
        }))
      },
      uploadPhoto() {
        const self = this;
        return new Promise((resolve, reject) => {
          firebase.storage().ref('photos/' + firebase.auth().currentUser.uid).put(self.photoFile)
            .then(response => {
              response.ref.getDownloadURL().then((downloadURL) => {
                self.form.photo = downloadURL;
                resolve();
              })
                .catch(err => {
                  self.errorMessage = err;
                  reject();
                })
            })
        })
      },
      detectFiles(e) {
        let fileList = e.target.files || e.dataTransfer.files;
        this.photoFile = fileList[0];
      },
    },
  };
</script>

<style scoped>
  .wrapper {
    position: relative;
    background: url("../img/skateboard.jpg");
    background-size: cover;
  }

  .medicalFileCreation-form {
    padding: 60px 46px 55px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
</style>
