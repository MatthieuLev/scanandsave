<template>
  <div>
    <Navbar></Navbar>
    <!-- <button @click="test()">Salut</button> -->
      <h1>Mon dossier médical</h1>
      <h2>Informations générales</h2>
      <b-container>
        <b-col>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Civilité : </p>
            </b-col>
            <b-col>
              <p>{{this.civility}}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Nom : </p>
            </b-col>
            <b-col>
              <p>{{this.last_name}}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Prenom : </p>
            </b-col>
            <b-col>
              <p>{{this.first_name}} </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Date de naissance : </p>
            </b-col>
            <b-col>
              <p>{{this.birthday}}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-lg-2">
              <p class="label">Téléphone : </p>
            </b-col>
            <b-col>
              <p>{{this.phone_number}} </p>
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
                <p>{{this.adress_number}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Nom de voie : </p>
              </b-col>
              <b-col>
                <p>{{this.adress_street}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Complément d'adresse : </p>
              </b-col>
              <b-col>
                <p>{{this.adress_complement}}</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="col-lg-6">
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Ville : </p>
              </b-col>
              <b-col>
                <p>{{this.adress_city}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Etat : </p>
              </b-col>
              <b-col>
                <p>{{this.adress_state}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Code Postal :</p>
              </b-col>
              <b-col>
                <p>{{this.adress_postal_code}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-lg-4">
                <p class="label">Pays : </p>
              </b-col>
              <b-col>
                <p>{{this.adress_country}}</p>
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
          <b-col class="col-lg-2">
            <p class="label">Mot clé :</p>
          </b-col>
          <b-col>
            <p>{{this.diseases_keyword}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Avez-vous des problèmes médicaux ? (Problèmes cardiaques, diabète, épilepsie, asthme, etc) </p>
          </b-col>
          <b-col>
            <p>{{this.diseases_explanation}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-4">
            <h5>H : Hospitalisation(s)</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-2">
            <p class="label">Mot clé: </p>
          </b-col>
          <b-col>
            <p>{{this.hospitalization_keyword}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi? </p>
          </b-col>
          <b-col>
            <p>{{this.hospitalization_explanation}}</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="col-lg-4">
            <h5>T : Traitement(s)</h5>
          </b-col>
        </b-row>
        <b-row>
        <b-col class="col-lg-2">
          <p class="label">Mot clé: </p>
        </b-col>
        <b-col>
          <p class="label">{{this.treatment_keyword}}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="label">Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?</p>
        </b-col>
        <b-col>
          <p>{{this.treatment_explanation}}</p>
        </b-col>
      </b-row>
        <b-row>
          <b-col class="col-lg-4">
            <h5>A : Allergie(s)</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-2">
            <p class="label">Mot clé:</p>
          </b-col>
          <b-col>
            <p>{{this.allergy_keyword}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité</p>
          </b-col>
          <b-col>
            <p>{{this.allergy_explanation}}</p>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col class="col-lg-4">
            <p class="label">Donneur d'organes : </p>
          </b-col>
          <b-col class="col-lg-1">
            <p>{{this.organ_donor}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-4">
            <p class="label">Groupe sanguin: </p>
          </b-col>
          <b-col class="col-lg-1">
            <p>{{this.blood_type}}</p>
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
            <p>{{this.social_security_number}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-3">
            <p class="label">Permis de conduire :</p>
          </b-col>
          <b-col>
            <p>{{this.license_number}}</p>
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
            <p>{{this.contact_first_name}}</p>
          </b-col>
          <b-col>
            <p class="label">Nom : </p>
          </b-col>
          <b-col>
            <p>{{this.contact_last_name}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Téléphone : </p>
          </b-col>
          <b-col>
            <p>{{this.contact_phone_number}}</p>
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
            <p>{{this.doctor_first_name}}</p>
          </b-col>
          <b-col>
            <p class="label">Nom : </p>
          </b-col>
          <b-col>
            <p>{{this.doctor_last_name}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="label">Telephone : </p>
          </b-col>
          <b-col>
            <p>{{this.doctor_phone_number}}</p>
          </b-col>
          <b-col>
            <p class="label">Ville : </p>
          </b-col>
          <b-col>
            <p>{{this.doctor_city}}</p>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import firebase from 'firebase';

    export default {
      name: "MedicalFileResume",
      components: {
        Navbar,
      },
      data() {
        return {
          civility: "Madame",
          first_name: null,
          last_name: null,
          birthday: null,
          phone_number: null,
          organ_donor: null,
          blood_type: "Inconnu",
          social_security_number: null,
          license_number: null,
          adress_number : null,
          adress_street : null,
          adress_complement : null,
          adress_city : null,
          adress_postal_code : null,
          adress_state : null,
          adress_country : null,
          diseases_keyword : null,
          diseases_explanation : null,
          hospitalization_keyword : null,
          hospitalization_explanation : null,
          allergy_keyword : null,
          allergy_explanation : null,
          treatment_keyword : null,
          treatment_explanation : null,

          contact_first_name : null,
          contact_last_name : null,
          contact_phone_number : null,

          doctor_first_name : null,
          doctor_last_name : null,
          doctor_phone_number : null,
          doctor_city : null,
          image: ['https://static1.purebreak.com/articles/0/14/19/70/@/582025-mamadou-segpa-le-youtubeur-condamne-a-diapo-2.jpg']
        }
      },
      /*methods: {
        test() {
         const userId = 'cRZV9g91mEUjvbC35Qn2';
          const db = firebase.firestore();
          db.collection('users').doc(userId).get().then((snapshot) => {
            console.log(snapshot.data())
          });
        }
      },*/
      created() {
        const db = firebase.firestore();
        const userId = 'cRZV9g91mEUjvbC35Qn2'; // Remplacer par l'id de l'utilisateur actuellement connecté

        db.collection('users').get().then((querySnapshot) => {
          querySnapshot.forEach((doc)=>{
            //console.log(doc.data())
            console.log(doc.id, ' => ', doc.data())
            this.civility  = doc.data().civility
            this.first_name = doc.data().first_name
            this.last_name = doc.data().last_name
            this.birthday = doc.data().birthday
            this.phone_number =  doc.data().phone_number
            this.organ_donor =  doc.data().organ_donor
            this.blood_type = doc.data().blood_type
            this.social_security_number = doc.data().social_security_number
            this.license_number = doc.data().license_number

            this.adress_number = doc.data().adress.number
            this.adress_street = doc.data().adress.street
            this.adress_complement = doc.data().adress.complement
            this.adress_city = doc.data().adress.city
            this.adress_postal_code = doc.data().adress.postal_code
            this.adress_state = doc.data().adress.state
            this.adress_country = doc.data().adress.country

            this.diseases_keyword = doc.data().diseases.keyword
            this.diseases_explanation = doc.data().diseases.explanation
            this.hospitalization_keyword = doc.data().hospitalization.keyword
            this.hospitalization_explanation = doc.data().hospitalization.explanation
            this.allergy_keyword = doc.data().allergy.keyword
            this.allergy_explanation = doc.data().allergy.explanation
            this.treatment_keyword = doc.data().treatment.keyword
            this.treatment_explanation = doc.data().treatment.explanation

            this.contact_first_name = doc.data().contact.first_name
            this.contact_last_name = doc.data().contact.last_name
            this.contact_phone_number = doc.data().contact.phone_number

            this.doctor_first_name = doc.data().doctor.first_name
            this.doctor_last_name = doc.data().doctor.last_name
            this.doctor_phone_number = doc.data().doctor.phone_number
            this.doctor_city = doc.data().doctor.city
          })
        })
      }
    }
          //})
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
