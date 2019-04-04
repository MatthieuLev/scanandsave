<template>
  <div>
    <Navbar></Navbar>
      <h1>Mon dossier médical</h1>
      <h2>Informations générales</h2>

      <b-row>
        <b-col>
          <p>Civilité: </p>
          <p></p>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="col-lg-4">
          <p>Nom: </p>
        </b-col>
        <b-col class="col-lg-1">
          <p></p>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="col-lg-4">
          <p>Prenom: </p>
        </b-col>
        <b-col class="col-lg-1">
          <p></p>
        </b-col>
      </b-row>

    <b-row>
      <b-col class="col-lg-4">
        <p>Date de naissance : </p>
      </b-col>
      <b-col class="col-lg-1">
        <p></p>
      </b-col>
      </b-row>

    <b-row>
      <b-col class="col-lg-4">
        <p>Téléphone : </p>
      </b-col>
      <b-col class="col-lg-1">
        <p>06 27 19 06 66 </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-lg-4">
        <p>Photo d'identité : </p>
      </b-col>
      <b-col class="col-lg-1">
        <div class = "text-center">
          <b-img v-for = "img in image" v-bind:src="img" fluid alt="Right-rounded image"/>
        </div>
      </b-col>
    </b-row>


      <h2>Adresse</h2>

      <b-row>
        <b-col class="col-lg-4">
          <p>Numéro : </p>
          </b-col>
        <b-col class="col-lg-1">
          <p>48</p>
        </b-col>

        <b-col class="col-lg-4">
          <p>Nom de voie : </p>
          </b-col>
        <b-col class="col-lg-1">
          <p>Rue du Hâ</p>
            <h5>Lemarquand</h5>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="col-lg-4">
          <p>Complément d'adresse </p>
        </b-col>
        <b-col class="col-lg-1">
          <p>App. 2ème étage</p>
        </b-col>
      </b-row>

      <b-row>
      <b-col class="col-lg-4">
        <p>Ville : </p>
      </b-col>
      <b-col class="col-lg-1">
        <p>Bordeaux </p>
      </b-col>
    </b-row>

      <b-row>
        <b-col class="col-lg-4">
          <p>Etat/Province : </p>
        </b-col>
        <b-col class="col-lg-1">
          <p>GIRONDE</p>
        </b-col>
      </b-row>


      <b-row>
        <b-col>
          <p>Code Postal :</p>
          <p>33000</p>
        </b-col>

        <b-col class="col-lg-4">
          <p>Pays : </p>
        </b-col>
        <b-col class="col-lg-1">
          <p>FRANCE</p>
        </b-col>
      </b-row>

      <h2>Informations vitales : MHTA</h2>

      <b-row>
        <b-col class="col-lg-2">
          <h5>M : Maladie(s)</h5>
        </b-col>
        <b-col class="col-lg-4">
          <p>Mot clé :</p>
        </b-col>
        <b-col>
          <p>Asthmatique</p>
        </b-col>
      </b-row>

        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous des problèmes médicaux ? (Problèmes cardiaques, diabète, épilepsie, asthme, etc) </p>
          </b-col>
        </b-row>
       <b-row>
          <b-col>
          <p>Détail de ma maladie</p>
        </b-col>
        </b-row>

        <b-row>
          <b-col class="col-lg-4">
            <h5>H : Hospitalisation(s)</h5>
          </b-col>
          <b-col class="col-lg-4">
            <p>Mot clé: </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi? </p>
          </b-col>
        </b-row>

      <b-row>
        <b-col class="col-lg-4">
          <h5>T : Traitement(s)</h5>
        </b-col>
        <b-col class="col-lg-4">
          <p>Mot clé: </p>
        </b-col>
        <b-col class="col-lg-4">
          <p>Ventoline</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-lg-12">
          <p>Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?</p>
        </b-col>
        <b-col class="col-lg-12">
          <p>Deux pulvérisations en cas de crise </p>
        </b-col>
      </b-row>

        <b-row>
          <b-col class="col-lg-4">
            <h5>A : Allergie(s)</h5>
          </b-col>
          <b-col class="col-lg-4">
            <p>Mot clé:</p>
          </b-col>
          <b-col class="col-lg-4">
          <p>Oeuf</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité</p>
          </b-col>
          <b-col class="col-lg-12">
            <p>Si je mange des oeufs, je meurs</p>
          </b-col>
        </b-row>

      <b-row>
        <b-col class="col-lg-4">
          <h5>Donneur d'organes ? : </h5>
        </b-col>
        <b-col class="col-lg-1">
          <p>oui</p>
        </b-col>
      </b-row>
    <b-row>
        <b-col class="col-lg-4">
          <h5>Groupe sanguin: </h5>
        </b-col>
        <b-col class="col-lg-1">
          <p>A+</p>
        </b-col>
      </b-row>


      <h2>Autres informations</h2>

      <b-row>
        <b-col class="col-lg-4">
          <h5>Numéro de sécurité sociale</h5>
        </b-col>
        <b-col class="col-lg-1">
          <p>000001883531OO1</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="col-lg-4">
          <h5>Permis de conduire</h5>
        </b-col>
        <b-col class="col-lg-1">
          <p>Mon numéro de permis</p>
        </b-col>
      </b-row>

      <h2>Contacts</h2>
    <b-container>
      <h3>Personne à contacter en cas d'urgence</h3>

      <b-row>
        <b-col class="col-lg-2">
          <h5>Prénom : </h5>
        </b-col>
        <b-col class="col-lg-1">
          <p>Valérie </p>
        </b-col>
        <b-col class="col-lg-2">
          <h5>Nom : </h5>
        </b-col>
        <b-col class="col-lg-1">
          <p>Le Marquand</p>
        </b-col>
        <b-col class="col-lg-2">
          <h5>Téléphone : </h5>
        </b-col>
        <b-col class="col-lg-1">
          <p>06 12 18 09 00</p>
        </b-col>
      </b-row>

      <h3>Coordonnées de votre médecin traitant</h3>
      <b-row>
        <b-col>
          <h5>Prenom : </h5>
        </b-col>
        <b-col>
          <h5>Gilles</h5>
        </b-col>
        <b-col>
          <h5>Nom : </h5>
        </b-col>
        <b-col>
          <h5>Barrère</h5>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h5>Telephone : </h5>
        </b-col>
        <b-col>
          <h5>05 57 12 01 31</h5>
        </b-col>
        <b-col>
          <h5>Ville : </h5>
        </b-col>
        <b-col>
          <h5>Gradignan</h5>
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
          image: ['https://static1.purebreak.com/articles/0/14/19/70/@/582025-mamadou-segpa-le-youtubeur-condamne-a-diapo-2.jpg']
        }
      },
      methods: {},
      created() {
        const db = firebase.firestore();
        db.collection('users').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data())
            this.first_name = doc.data().first_name
            this.last_name = doc.data().last_name
            this.last_name = doc.data().last_name
          })
        })
      }
    }
          //})
</script>

<style scoped>

</style>
