<template>
  <div class="bg">
    <Navbar></Navbar>
    <b-container>
      <b-form @submit.prevent="saveMedicalFile" class="medicalFileCreation-form">

        <h1>Mon dossier médical</h1>

        <div class="custom-card">
          <h2>Informations générales</h2>

          <b-row>
            <div class="col-md-2 col-xs-12">
              <b-form-group>
                <img :src="this.form.photo" alt="Pas de photo" class="userPhoto">
              </b-form-group>
            </div>
            <div class="col-md-2 col-xs-12">
              <b-form-group label="Civilité :">
                <label>
                  <select :disabled="disabled" v-model="form.civility" class="form-control">
                    <option>Madame</option>
                    <option>Monsieur</option>
                    <option>Autre</option>
                  </select>
                </label>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Nom : ">
                <b-form-input :disabled="disabled"
                              v-model="form.last_name" name="last_name" placeholder="Nom" class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.last_name.$error }"/>
                <div v-if="submitted && !$v.form.last_name.required" class="invalid-feedback">Nom obligatoire</div>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Prénom : ">
                <b-form-input :disabled="disabled"
                              v-model="form.first_name" name="first_name" placeholder="Prenom" class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.first_name.$error }"/>
                <div v-if="submitted && !$v.form.first_name.required" class="invalid-feedback">Prénom obligatoire</div>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Date de naissance : ">
                <b-form-input :disabled="disabled"
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
                <b-form-file :disabled="disabled" @change="detectFiles($event)" name="photo"
                             placeholder="Photo d'identité"
                             class="form-control"/>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Téléphone : ">
                <b-form-input :disabled="disabled" v-model="form.phone_number" type="number" name="phone_number"
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
                <b-form-input :disabled="disabled" v-model="form.adress.number" type="number" name="adress.number"
                              placeholder="Numéro de voie" class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.number.$error }"/>
                <div v-if="submitted && !$v.form.adress.number.required" class="invalid-feedback">Numéro de voie
                  obligatoire
                </div>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Nom de voie : ">
                <b-form-input :disabled="disabled" v-model="form.adress.street" name="adress.street"
                              placeholder="Nom de voie"
                              class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.street.$error }"/>
                <div v-if="submitted && !$v.form.adress.street.required" class="invalid-feedback">Nom de voie
                  obligatoire
                </div>
              </b-form-group>
            </div>
            <div class="col-md-3 col-xs-12">
              <b-form-group label="Complément d'adresse : ">
                <b-form-input :disabled="disabled" v-model="form.adress.complement" name="adress.complement"
                              placeholder="Complément d'adresse"></b-form-input>
              </b-form-group>
            </div>
          </b-row>
          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Code Postal : ">
                <b-form-input :disabled="disabled" v-model="form.adress.postal_code" type="number"
                              name="adress.postal_code"
                              placeholder="Code Postal" class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.postal_code.$error }"/>
                <div v-if="submitted && !$v.form.adress.postal_code.required" class="invalid-feedback">Code Postal
                  obligatoire
                </div>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Ville : ">
                <b-form-input :disabled="disabled" v-model="form.adress.city" name="adress.city" placeholder="Ville"
                              class="form-control"
                              :class="{ 'is-invalid': submitted && $v.form.adress.city.$error }"/>
                <div v-if="submitted && !$v.form.adress.city.required" class="invalid-feedback">Ville obligatoire</div>
              </b-form-group>
            </div>
          </b-row>
          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Région/Etat : ">
                <b-form-input :disabled="disabled" v-model="form.adress.state" name="adress.state"
                              placeholder="Région / Etat"
                              class="form-control"/>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Pays : ">
                <b-form-input :disabled="disabled" v-model="form.adress.country" name="adress.country"
                              placeholder="Pays"
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
                  <b-form-input :disabled="disabled" v-model="form.diseases"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi ?">
                  <b-form-input :disabled="disabled" v-model="form.hospitalization"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?">
                  <b-form-input :disabled="disabled" v-model="form.treatment"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité">
                  <b-form-input :disabled="disabled" v-model="form.allergy"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-row>
            <div class="col-md-8 col-xs-12">
              <b-form-group label="Donneur d'organes ?">
                <b-form-radio :disabled="disabled" class="customRadio" v-model="form.organ_donor" name="some_radios"
                              value="oui">Oui
                </b-form-radio>
                <b-form-radio :disabled="disabled" class="customRadio" v-model="form.organ_donor" name="some_radios"
                              value="non">Non
                </b-form-radio>
              </b-form-group>

            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Groupe sanguin :">
                <label>
                  <select :disabled="disabled" v-model="form.blood_type" class="form-control">
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
                <b-form-input :disabled="disabled" v-model="form.social_security_number" type="number"
                              placeholder="Numéro de sécurité sociale"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Numéro de permis de conduire">
                <b-form-input :disabled="disabled" v-model="form.license_number" type="number"
                              placeholder="Numéro de permis"></b-form-input>
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
                <b-form-input :disabled="disabled" v-model="form.contact.last_name"
                              placeholder="Nom du contact"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Prénom : ">
                <b-form-input :disabled="disabled" v-model="form.contact.first_name"
                              placeholder="Prénom du contact"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Téléphone : ">
                <b-form-input :disabled="disabled" v-model="form.contact.phone_number" type="tel"
                              placeholder="Téléphone du contact"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

          <h3>Coordonnées de votre médecin traitant</h3>

          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Nom : ">
                <b-form-input :disabled="disabled" v-model="form.doctor.last_name" placeholder="Nom du médecin"/>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Prenom : ">
                <b-form-input :disabled="disabled" v-model="form.doctor.first_name" placeholder="Prenom du médecin"/>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Telephone : ">
                <b-form-input :disabled="disabled" v-model="form.doctor.phone_number" type="tel"
                              placeholder="Téléphone du médecin"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Ville : ">
                <b-form-input :disabled="disabled" v-model="form.doctor.city"
                              placeholder="Ville du médecin"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

        </div>

        <b-row class="row h-100">
          <div class="col-sm-12 my-auto">
            <b-button class="button-validate btn-warning" v-on:click="modify()">{{this.buttonName}}</b-button>
          </div>
        </b-row>

        <b-row class="row h-100">
          <div class="col-sm-12 my-auto">
            <b-button class="button-validate button-delete btn-danger" v-on:click="deleteMF()">Supprimer mon dossier
              médical
            </b-button>
          </div>
        </b-row>

        <p class="error" v-if="errorMessage">{{errorMessage}}</p>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import {required, numeric} from 'vuelidate/lib/validators';
  import firebase from 'firebase';
  import db from '../firebase.js';
  import router from '../router';
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
        errorMessage: '',
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
        submitted: false,
        image: ['https://static1.purebreak.com/articles/0/14/19/70/@/582025-mamadou-segpa-le-youtubeur-condamne-a-diapo-2.jpg'],
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
          complement: {required},
          postal_code: {required},
          city: {required},
          country: {required},
        },
      },
    },
    methods: {
      saveModificationMedicalFile() {
        this.submitted = true;
        // stop here if form is invalid
        this.$v.$touch();
        console.log(this.$v);
        if (this.$v.$invalid) {
          return;
        }
        this.uploadPhoto().then(() => {
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
              photo: this.form.photo,
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
            }).catch(error => {
            this.errorMessage = error;
          });
        }).catch((error => {
          console.log(error);
          this.errorMessage = error;
        }))
      },
      modify() {
        if (!this.disabled) {
          this.saveModificationMedicalFile();
          this.buttonName = 'Modifier les informations';
          this.disabled = !this.disabled;
        } else {
          this.buttonName = 'Valider les changements';
          this.disabled = !this.disabled;
        }
      },
      deleteMF() {
        firebase.storage().ref('photos/' + firebase.auth().currentUser.uid).delete()
          .catch(error => {
            this.errorMessage = error;
          });
        db.collection('medicalFiles')
          .doc(firebase.auth().currentUser.uid)
          .delete()
          .then(() => {
            router.push('MedicalFileCreation');
          })
          .catch(error => {
            this.errorMessage = error;
          })
      },
      detectFiles(e) {
        let fileList = e.target.files || e.dataTransfer.files;
        this.photoFile = fileList[0];
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
    },
    created() {
      db.collection('medicalFiles')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((doc) => {
          this.form.civility = doc.data().civility;
          this.form.first_name = doc.data().first_name;
          this.form.last_name = doc.data().last_name;
          this.form.birthday = doc.data().birthday;
          this.form.photo = doc.data().photo;
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
          router.push('MedicalFileCreation');
        });
    },
  };
</script>

<style scoped>
  .customRadio {
    display: inline;
    margin: 0 5px;
  }

  h1 {
    margin: 1em 0;
    color: #ffffff;
  }

  h2 {
    margin-bottom: 1em;
  }

  h3 {
    color: #7f0000;
    margin: 1em 0;
  }

  .custom-card {
    color: #b71c1c;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 2em;
    margin: 1em 0;
  }

  .button-validate {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    width: 50%;
    border: 0;
    padding: 15px;
    color: white;
    margin-top: 1em;
    font-size: 14px;
    cursor: pointer;
  }

  .button-validate:hover, .button-delete:hover {
    color: #fff;
  }

  .button-delete {
    margin-bottom: 4em;
  }

  .invalid-feedback {
    color: #fff
  }

  .userPhoto {
    width: auto;
    height: 50px;
  }
  .bg{
    background-color:#b71c1c;
  }
</style>
