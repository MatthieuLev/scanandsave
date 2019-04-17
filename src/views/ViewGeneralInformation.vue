<template>
  <div>
    <NavbarMobile></NavbarMobile>
    <b-container>
      <br>
      <b-row>
        <b-col>
          <h2>Fiche d'identité</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="card">
            <div class="card-body">
              <div class="card-title mb-4">
                <div class="d-flex justify-content-start">
                  <div class="image-container">
                    <img :src="this.form.photo" alt="Pas de photo" class="userPhoto">
                  </div>
                  <div class="userData ml-3">
                    <h2 class="d-block" style="font-size: 1.5rem; font-weight: bold"><a href="javascript:void(0);"> {{this.form.first_name}} {{this.form.last_name}}</a></h2>
                  </div>
                </div>
              </div>
              <b-row>
                <b-col>
                  <div class="tab-content ml-1" id="myTabContent">
                    <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Nom</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.last_name}}
                        </b-col>
                      </b-row>
                      <hr />
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Prénom</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.first_name}}
                        </b-col>
                      </b-row>
                      <hr />
                      <b-row >
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Date de naissance</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.birthday}}
                        </b-col>
                      </b-row>
                      <hr/>
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Sexe</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.sexe}}
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <br>
      <b-row>
        <b-col>
          <h2>Informations médicales</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="card">
            <div class="card-body">
              <b-row>
                <b-col>
                  <div class="tab-content ml-1" id="myTabContent2">
                    <div class="tab-pane fade show active" id="general2" role="tabpanel" aria-labelledby="general-tab">
                      <b-row >
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Maladie</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.diseases}}
                        </b-col>
                      </b-row>
                      <hr/>
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Hospitalisation</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.hospitalization}}
                        </b-col>
                      </b-row>
                      <hr/>
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Traitement</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.treatment}}
                        </b-col>
                      </b-row>
                      <hr/>
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Allergie</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.allergy}}
                        </b-col>
                      </b-row>
                      <hr/>
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Groupe sanguin</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.blood_type}}
                        </b-col>
                      </b-row>
                      <hr />
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Donneur d'organe</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.organ_donor}}
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <br>
      <b-row>
        <b-col>
          <h2>Contacts</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="card">
            <div class="card-body">
              <b-row>
                <b-col>
                  <div class="tab-content ml-1" id="myTabContent3">
                    <div class="tab-pane fade show active" id="general3" role="tabpanel" aria-labelledby="general-tab">
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Proche à contacter</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.contact.first_name}} {{this.form.contact.last_name}}
                        </b-col>
                      </b-row>
                      <hr />
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Coordonnées du proche</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.contact.phone_number}}
                        </b-col>
                      </b-row>
                      <hr />
                      <b-row >
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Médecin traitant</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.doctor.first_name}} {{this.form.doctor.last_name}}
                        </b-col>
                      </b-row>
                      <hr/>
                      <b-row>
                        <b-col class="col-sm-3 col-md-2 col-5">
                          <p class="label" style="font-weight:bold;">Coordonnées médecin</p>
                        </b-col>
                        <b-col class="col-md-8 col-6">
                          {{this.form.doctor.phone_number}} {{this.form.doctor.city}}
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
      <br/>
      <div>
        <b-button href="tel:112">Appeler les secours</b-button>
      </div>
      <br/>
    </b-container>
  </div>
</template>

<script>
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
      const userId = this.$route.query.userId;
      if (userId !== undefined) {
        db.collection('medicalFiles')
          .doc(userId)
          .get()
          .then((doc) => {
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
            this.form.photo = doc.data().photo;
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
            router.push('MFNotFound');;
          });
      } else {
        router.push('MFNotFound');
      }
    },
  };
</script>

<style scoped>
  h2 {
    margin-bottom: 1em;
    color: #ffffff;
  }
  .label {
    font-weight: bold;
  }
</style>
