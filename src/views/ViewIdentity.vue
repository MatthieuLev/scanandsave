<template>
  <div>
    <NavbarMobile></NavbarMobile>
    <div class="container">
      <br>
      <b-row>
        <b-col>
          <h2>Fiche d'identité</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <div class="card">
            <div class="userData ml-3">
              <h2 class="d-block" style="font-size: 1.5rem; font-weight: bold; align:center"><a href="javascript:void(0);"> {{this.form.first_name}}&nbsp;{{this.form.last_name}}</a></h2>
            </div>
              <div class="card-title mb-4">
                <div class="d-flex justify-content-start">
                </div>
                <b-col class="align-content-center col-lg-2">
                  <b-form-group>
                    <img height="70%"
                         width="70%"
                         max-width="100%"
                         max-height="100%" :src="this.form.photo" alt="Pas de photo" class="userPhoto">
                  </b-form-group>
                </b-col>
              </div>

              <b-row>
                <b-col class="col-12">
                  <div class="tab-content ml-1" id="myTabContent">
                    <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">


                      <b-row class="row">
                        <b-col class="col-sm-3 col-md-3 col-5">
                          <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Nom :&nbsp;&nbsp;</p>
                        </b-col>
                        <b-col class="col-md-5 col-6">
                          {{this.form.last_name}}
                        </b-col>
                      </b-row>
                      <hr />

                      <b-row class="row">
                        <b-col class="col-sm-3 col-md-3 col-5">
                          <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Prénom :&nbsp;&nbsp;</p>
                        </b-col>
                        <b-col class="col-md-5 col-5">
                          {{this.form.first_name}}
                        </b-col>
                      </b-row>
                      <hr />

                      <b-row class="row">
                        <b-col class="col-sm-3 col-md-3 col-5">
                          <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Date de naissance :&nbsp;&nbsp;</p>
                        </b-col>
                        <b-col class="col-md-5 col-5">
                          {{this.form.birthday}}
                        </b-col>
                      </b-row>
                      <hr />


                      <b-row class="row">
                        <b-col class="col-sm-3 col-md-3 col-5">
                          <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Sexe :&nbsp;&nbsp;</p>
                        </b-col>
                        <b-col class="col-md-5 col-6">
                          {{this.sexe}}
                        </b-col>
                      </b-row>
                    </div>
                    </div>
                  </b-col>
              </b-row>
          </div>
          <br>
              <div class="card">
                <b-row>
                  <b-col>
                    <h4>Coordonnées</h4>
                  </b-col>
                </b-row>
                <br>
                <b-row>
                  <b-col>
                    <p>{{this.form.adress.complement}}, {{this.form.adress.number}} {{this.form.adress.street}}</p>
                    <p>{{this.form.adress.postal_code}} {{this.form.adress.city}}</p>
                    <p>{{this.form.adress.state}} {{this.form.adress.country}}</p>
                    <p>{{this.form.phone_number}}</p>
                  </b-col>
                </b-row>
              </div>
              <br>
              <div class="card">
              <b-row>
                  <b-col>
                    <h4>Sécurité sociale</h4>
                  </b-col>
                </b-row>
                <br>
                <b-row class="row">
                  <b-col class="col-sm-7 col-md-7 col-7">
                    <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Numéro de sécurité sociale :&nbsp;&nbsp;</p>
                  </b-col>
                  <b-col class="col-md-4 col-4">
                    {{this.form.social_security_number}}
                  </b-col>
                </b-row>
              </div>
              <br>
              <div class="card">
                <b-row>
                  <b-col>
                    <h4>Permis</h4>
                  </b-col>
                </b-row>
                <br>
                <b-row class="row">
                  <b-col class="col-sm-7 col-md-7 col-7">
                    <p class="label" style="font-weight:bold;">&nbsp;&nbsp;Numéro de permis :&nbsp;&nbsp;</p>
                  </b-col>
                  <b-col class="col-md-4 col-4">
                    {{this.form.license_number}}
                  </b-col>
                </b-row>
              </div>
          <br>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import db from '../firebase.js';
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
            this.form.civility = doc.data().civility;
            if (this.form.civility === "Monsieur") {
              this.sexe = "Masculin";
            } else if (this.form.civility === "Madame") {
              this.sexe = "Féminin";
            } else {
              this.sexe = "Autre";
            }
            this.form.photo = doc.data().photo;
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
    color:white;
  }
</style>
