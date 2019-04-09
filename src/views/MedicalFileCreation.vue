<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-form @submit.prevent="saveMedicalFile" class="medicalFileCreation-form">

        <h1>Mon dossier médical</h1>

        <div class="custom-card">
          <h2>Informations générales</h2>

          <b-row>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Civilité :">
              <select v-model="form.civility" class="form-control">
                <option>Madame</option>
                <option>Monsieur</option>
                <option>Mademoiselle</option>
              </select>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Nom : ">
                <b-form-input
                  v-model="form.last_name" name="last_name" placeholder="Nom" class="form-control"
                  :class="{ 'is-invalid': submitted && $v.form.last_name.$error }"/>
                <div v-if="submitted && !$v.form.last_name.required" class="invalid-feedback">Last Name is required</div>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Prénom : ">
              <b-form-input name="first_name" placeholder="Prenom" :class="{ 'is-invalid': submitted && $v.form.first_name.$error }"/>
                <div v-if="submitted && !$v.form.first_name.required" class="invalid-feedback">First Name is required</div>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Date de naissance : ">
                <b-form-input type="date" name="birthday" placeholder="Date de naissance" :class="{ 'is-invalid': submitted && $v.form.birthday.$error }"/>
                <div v-if="submitted && !$v.form.birthday.required" class="invalid-feedback">Birthday is required</div>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group
                label="Photo d'identité : ">
                <b-form-file name="photo" placeholder="Photo d'identité"></b-form-file>
              </b-form-group>
            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Téléphone : ">
                <b-form-input type="number" name="phone_number" placeholder="Téléphone"></b-form-input>
              </b-form-group>
            </div>
          </b-row>
        </div>

        <div class="custom-card">
          <h2>Adresse</h2>

          <b-row>
            <div class="col-md-2 col-xs-12">
              <b-form-group label="Numéro : ">
                <b-form-input type="number" name="adress.number" placeholder="Numéro"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-7 col-xs-12">
              <b-form-group label="Nom de voie : ">
                <b-form-input name="adress.street" placeholder="Nom de voie"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-3 col-xs-12">
              <b-form-group label="Complément d'adresse : ">
                <b-form-input name="adress.complement" placeholder="Complément d'adresse"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Ville : ">
                <b-form-input name="adress.city" placeholder="Ville"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Etat/Province : ">
                <b-form-input name="adress.state" placeholder="Etat/Province"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Code Postal : ">
                <b-form-input type="number" name="adress.postal_code" placeholder="Code Postal"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Pays : ">
                <b-form-input name="adress.country" placeholder="Pays"></b-form-input>
              </b-form-group>
            </div>
          </b-row>
        </div>

        <div class="custom-card">
          <h2>Informations vitales : MHTA</h2>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous des problèmes médicaux ? (Problèmes cardiaques, diabète, épilepsie, asthme, etc) ">
                  <b-form-input v-model="form.diseases.explanation"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-form-group>
              <b-row>
                <div class="col-md-12 col-xs-12">
                  <b-form-group label="Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi ?">
                    <b-form-input v-model="form.hospitalization.explanation"></b-form-input>
                  </b-form-group>
                </div>
              </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?">
                  <b-form-input v-model="form.treatment.explanation"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-form-group>
            <b-row>
              <div class="col-md-12 col-xs-12">
                <b-form-group label="Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité">
                  <b-form-input v-model="form.allergy.explanation"></b-form-input>
                </b-form-group>
              </div>
            </b-row>
          </b-form-group>

          <b-row>
            <div class="col-md-8 col-xs-12">
              <b-form-group label="Donneur d'organes ?">
                <b-form-radio v-model="form.organ_donor" name="some_radios" value="oui">Oui</b-form-radio>
                <b-form-radio v-model="form.organ_donor" name="some_radios" value="non">Non</b-form-radio>
              </b-form-group>

            </div>
            <div class="col-md-4 col-xs-12">
              <b-form-group label="Groupe sanguin :">
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
              </b-form-group>
            </div>
          </b-row>

        </div>

        <div class="custom-card">
          <h2>Autres informations</h2>

          <b-row>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Numéro de sécurité sociale">
                <b-form-input v-model="form.social_security_number" type="number" placeholder="Numéro de sécurité sociale"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Numéro de permis de conduire">
                <b-form-input v-model="form.license_number" type="number" placeholder="Numéro de permis"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Permis de conduire">
                <b-form-file></b-form-file>
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
                <b-form-input v-model="form.contact.last_name"  placeholder="Nom du contact"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Prénom : ">
                <b-form-input v-model="form.contact.first_name"  placeholder="Prénom du contact"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

          <b-row>
            <div class="col-lg-4 col-xs-12">
              <b-form-group label="Téléphone : ">
                <b-form-input v-model="form.contact.phone_number" type="tel" placeholder="Téléphone du contact"></b-form-input>
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
                <b-form-input v-model="form.doctor.phone_number" type="tel" placeholder="Téléphone du médecin"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6 col-xs-12">
              <b-form-group label="Ville : ">
                <b-form-input v-model="form.doctor.city" placeholder="Ville du médecin"></b-form-input>
              </b-form-group>
            </div>
          </b-row>

        </div>
          <div>
            <b-button class="button-validate" type="submit">Valider</b-button>
          </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import db from '@/firebase';
  import { required, numeric } from 'vuelidate/lib/validators';
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'MedicalFileCreation',
    components: {
      Navbar,
    },
    computed: {
      currentUer() {
        return this.$store.state.currentUser;
      },
    },
    data() {
      return {
        form: {
          user_id: '0202',
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
          diseases: {
            keyword: null,
            explanation: null,
          },
          hospitalization: {
            keyword: null,
            explanation: null,
          },
          allergy: {
            keyword: null,
            explanation: null,
          },
          treatment: {
            keyword: null,
            explanation: null,
          },
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
      };
    },
    validations: {
      form: {
        civility: { required },
        first_name: { required },
        last_name: { required },
        birthday: { required },
        phone_number: {
          required,
          numeric,
        },
        photo: { required },
        adress: {
          number: {
            required,
            numeric,
          },
          street: { required },
          complement: { required },
          postal_code: { required },
          city: { required },
          state: { required },
          country: { required },
        },
        doctor: {
          last_name: { required },
        },
      },
    },
    methods: {
      saveMedicalFile: function () {
          this.submitted = true;
          // stop here if form is invalid
          this.$v.$touch();
          if (this.$v.$invalid) {
            return;
          }
        db.collection('users')
          .add({
            user_id: 'toto',
            civility: this.form.civility,
            first_name: this.form.first_name,
            last_name: this.form.last_name,
            birthday: this.form.birthday,
            phone_number: this.form.phone_number,
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
            diseases: {
              keyword: this.form.diseases.keyword,
              explanation: this.form.diseases.explanation,
            },
            hospitalization:
              {
                keyword: this.form.hospitalization.keyword,
                explanation: this.form.hospitalization.explanation,
              },
            allergy: {
              keyword: this.form.allergy.keyword,
              explanation: this.form.allergy.explanation,
            },
            treatment: {
              keyword: this.form.treatment.keyword,
              explanation: this.form.treatment.explanation,
            },
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
          })
          .then(docRef => {
            alert('TOTOO');
          })
          .catch(error => {
            alert(error);
          });
      },
    },
  };
</script>

<style scoped>
  .custom-radio{
    display: inline;
    margin: 0 5px;
  }
  h1 {
    margin: 1em 0;
    color: grey;
  }

  h2 {
    margin-bottom: 1em;
  }

  h3{
    color: #ffa7a7;
    margin: 1em 0;
  }

  .custom-card {
    color: white;
    background-color: #dc3545;
    border-radius: 4px;
    padding: 2em;
    margin: 1em 0;
  }

  .button-validate{
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    width: 50%;
    background-color: #dc3545;
    border: 0;
    padding: 15px;
    color: white;
    margin-top: 1em;
    margin-bottom: 4em;
    font-size: 14px;
    cursor: pointer;
  }
  .button-validate:hover{
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
  }

  .invalid-feedback {
    color:#fff
  }
</style>
