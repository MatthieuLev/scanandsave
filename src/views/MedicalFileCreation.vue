<template>
  <div>
  <Navbar></Navbar>
  <b-container>
    <b-form @submit.prevent ="saveMedicalFile" class="medicalFileCreation-form">
      <h1>Mon dossier médical</h1>
        <h2>Informations générales</h2>
          <b-row>
            <b-col>
              <select v-model="form.civility" title = "Civilité" class="form-control">
                <option selected disabled>Civilité</option>
                <option>Madame</option>
                <option>Monsieur</option>
                <option>Mademoiselle</option>
              </select>
            </b-col>
            <b-col>
              <b-form-input v-model="form.last_name" required placeholder="Nom"></b-form-input>
            </b-col>
            <b-col>
              <b-form-input v-model="form.first_name" required placeholder="Prenom"></b-form-input>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="col-lg-4">
              <b-form-group label="Date de naissance : ">
                <b-form-input v-model="form.birthday" type ="date" required placeholder="Date de naissance"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="col-lg-4">
              <b-form-group label="Photo d'identité : ">
                <b-form-file v-model="file" :state="Boolean(file)">
                </b-form-file>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="col-lg-4">
              <b-form-group label="Téléphone : ">
                <b-form-input v-model="form.phone_number" type ="tel" label ="Téléphone" required placeholder="Téléphone"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>


      <h2>Adresse</h2>

      <b-row>
        <b-col>
          <b-form-group label="Numéro : ">
            <b-form-input v-model="form.adress.number" type="number" required placeholder="Numéro"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Nom de voie : ">
            <b-form-input v-model="form.adress.street" required placeholder="Nom de voie"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Complément d'adresse : ">
            <b-form-input v-model="form.adress.complement"  required placeholder="Complément d'adresse"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Ville : ">
            <b-form-input v-model="form.adress.city" required placeholder="Ville"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Etat/Province : ">
            <b-form-input v-model="form.adress.state" required placeholder="Etat/Province"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Code Postal : ">
            <b-form-input v-model="form.adress.postal_code" type="number" required placeholder="Code Postal"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Pays : ">
            <b-form-input v-model="form.adress.country" required placeholder="Pays"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>


      <h2>Informations vitales : MHTA</h2>

      <b-form-group>
        <b-row>
          <b-col class="col-lg-4">
            <p>M : Maladie(s)</p>
          </b-col>
          <b-col class="col-lg-4">
            <p>Choisir un mot clé.</p>
          </b-col>
          <b-col class="col-lg-4">
            <b-form-input v-model="form.diseases.keyword" required ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-12">
              <p>Avez-vous des problèmes médicaux ? (Problèmes cardiaques, diabète, épilepsie, asthme, etc) </p>
              <b-form-input v-model="form.diseases.explanation" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row>
          <b-col class="col-lg-4">
            <p>H : Hospitalisation(s)</p>
          </b-col>
          <b-col class="col-lg-4">
            <p>Choisir un mot clé.</p>
          </b-col>
          <b-col class="col-lg-4">
            <b-form-input v-model="form.hospitalization.keyword" required ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi? </p>
            <b-form-input v-model="form.hospitalization.explanation" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>


      <b-form-group>
        <b-row>
          <b-col class="col-lg-4">
            <p>T : Traitement(s)</p>
          </b-col>
          <b-col class="col-lg-4">
            <p>Choisir un mot clé.</p>
          </b-col>
          <b-col class="col-lg-4">
            <b-form-input v-model="form.treatment.keyword" required ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?</p>
            <b-form-input v-model="form.treatment.explanation" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row>
          <b-col class="col-lg-4">
            <p>A : Allergie(s)</p>
          </b-col>
          <b-col class="col-lg-4">
            <p>Choisir un mot clé.</p>
          </b-col>
          <b-col class="col-lg-4">
            <b-form-input v-model="form.allergy.keyword" required ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité</p>
            <b-form-input v-model="form.allergy.explanation" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-row>
        <b-col class="col-lg-4">
          <p>Donneur d'organes ? : </p>
        </b-col>
        <b-col class="col-lg-1">
          <b-form-radio v-model="form.organ_donor" name="some_radios" value="oui">Oui</b-form-radio>
        </b-col>
        <b-col class="col-lg-1">
          <b-form-radio v-model="form.organ_donor" name="some_radios" value="non">Non</b-form-radio>
        </b-col>
        <b-col class="col-lg-4">
          <select v-model="form.blood_type"class="form-control">
            <option selected disabled>Groupe sanguin</option>
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

      <h2>Autres informations</h2>
      <b-row>
        <b-col class="col-lg-4">
          <b-form-group label="Numéro de sécurité sociale">
            <b-form-input v-model="form.social_security_number" type="number" required placeholder="Numéro de sécurité sociale"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-lg-4">
          <b-form-group label="Permis de conduire">
            <b-form-input v-model="form.license_number" type="number" required placeholder="Numéro de permis"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="col-lg-4">
          <b-form-file v-model="file" :state="Boolean(file)">
          </b-form-file>
        </b-col>
      </b-row>

      <h2>Contacts</h2>
        <h3>Personne à contacter en cas d'urgence</h3>
      <b-row>
        <b-col>
          <b-form-group label="Prenom : ">
            <b-form-input v-model="form.contact.first_name" required placeholder="Prenom"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Nom : ">
            <b-form-input v-model="form.contact.last_name" required placeholder="Numéro"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-lg-6">
          <b-form-group label="Telephone : ">
            <b-form-input v-model="form.contact.phone_number" type ="tel" required placeholder="Téléphone"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <h3>Coordonnées de votre médecin traitant</h3>
      <b-row>
        <b-col>
          <b-form-group label="Prenom : ">
            <b-form-input v-model="form.doctor.first_name" required placeholder="Prenom"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Nom : ">
            <b-form-input v-model="form.doctor.last_name" required placeholder="Numéro"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Telephone : ">
            <b-form-input v-model="form.doctor.phone_number" type ="tel" required placeholder="Téléphone"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Ville : ">
            <b-form-input v-model="form.doctor.city" required placeholder="Ville"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <div>
        <b-button type = "submit" variant="outline-primary">Valider</b-button>
      </div>
    </b-form>
  </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import firebase from 'firebase';

export default {
  name: 'MedicalFileCreation',
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        user_id,
        civility,
        first_name,
        last_name,
        birthday,
        phone_number,
        organ_donor,
        blood_type,
        social_security_number,
        license_number,
        adress:{
          number,
          street,
          complement,
          postal_code,
          city,
          state,
          country
        },
        diseases: {
          keyword,
          explanation
        },
        hospitalization: {
          keyword,
          explanation
        },
        allergy: {
          keyword,
          explanation
        },
        treatment: {
          keyword,
          explanation
        },
        contact:{
          last_name,
          first_name,
          phone_number
        },
        doctor:{
          last_name,
          first_name,
          phone_number,
          city
        }
      },
      methods:{
        saveMedicalFile(){
          firebase.database().ref('users/' + form.user_id ).set({
            civility:civility,
            first_name : first_name,
            last_name : last_name,
            birthday : birthday,
            phone_number : phone_number,
            blood_type : blood_type,
            social_security_number : social_security_number,
            license_number : license_number,
            adress :{ number: number, street: street, complement : complement, postal_code : postal_code, city : city, state : state, country : country},
            diseases : {keyword : keyword, explanation : explanation},
            hospitalization : {keyword : keyword, explanation : explanation },
            allergy : {keyword : keyword, explanation : explanation},
            treatment : {keyword : keyword, explanation : explanation},
            contact : {last_name : last_name, first_name : first_name, phone_number : phone_number },
            doctor : {last_name : last_name, first_name : first_name, phone_number : phone_number, city : city}
          })
            .then(docRef => {
              alert("TOTO")
            })
            .catch(error =>{
              alert("ERROR")
            })
        }
      }
    };
  }
}
</script>

<style scoped>

</style>
