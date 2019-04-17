<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mes autocollants</h1>
      <div v-if="userHaveAccount">
        <div class="custom-card">

          <b-table responsive striped :fields="fields" :items="stickers">
            <template slot="index" slot-scope="data">
              {{ data.index + 1 }}
            </template>

            <template slot="preview" slot-scope="data">
              <b-img class="stickers" :src="require(`../img/stickers/${data.item.theme}/${data.item.color}.png`)" fluid
                     alt="Stickers picture"></b-img>
            </template>

            <template slot="addtoCart" slot-scope="data">
              <b-form-checkbox :id="'checkbox'+data.index+1" name="checkbox" v-model="data.item.in_order"
                               @change="checkAddToCart($event, data.item)">
              </b-form-checkbox>
            </template>
          </b-table>
          <p class="error" v-if="errorMessage">{{errorMessage}}</p>

        </div>
        <b-row class="btn-container">
          <b-col>
            <router-link class="button-validate" to="StickersCreation" replace>Créer un nouvel autocollant</router-link>
          </b-col>
        </b-row>

      </div>
      <div v-else>
        <p>Vous devez créer un dossier médical avant de pouvoir générer un autocollant.</p>

        <router-link class="button-validate btn" to="MedicalFileCreation" replace>Générer un dossier médical
        </router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import firebase from 'firebase';
  import db from '../firebase.js';

  export default {
    name: 'ViewMyStickers',
    components: {
      Navbar,
    },
    data() {
      return {
        stickers: [],
        errorMessage: '',
        userHaveAccount: false,
        fields: [
          'index',
          {key: 'theme', label: 'Theme'},
          {key: 'color', label: 'Couleur'},
          {key: 'size', label: 'Taille'},
          {key: 'shape', label: 'Forme'},
          {key: 'preview', label: 'Aperçu'},
          {key: 'addtoCart', label: 'Ajouter au panier'},
        ],
      };
    },
    created() {
      db.collection('medicalFiles')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((doc) => {
          this.userHaveAccount = true;
          this.check();
        });
    },

    methods: {
      check(){
        const self = this;
        db.collection('stickers')
          .doc(firebase.auth().currentUser.uid)
          .collection('userStickers')
          .get()
          .then(querySnapshot => {
            if (!querySnapshot.empty) {
              this.userHaveStickers = true;
              // go through all the results
              querySnapshot.forEach(documentSnapshot => {
                const data = documentSnapshot.data();
                data['id'] = documentSnapshot.id;
                self.stickers.push(data);
              });
            }
          })
          .catch(error => {
            this.errorMessage = error;
          });
      },
      checkAddToCart(e, item) {
        db.collection('stickers')
          .doc(firebase.auth().currentUser.uid)
          .collection('userStickers')
          .doc(item.id)
          .update({
            in_order: !item.in_order,
            quantity: !item.in_order ? 1 : item.quantity,
          })
          .catch(error => {
            this.errorMessage = error;
          });
      },
    },
  };
</script>

<style scoped>
  h1 {
    margin: 1em 0;
    color: #ffffff;
  }

  .custom-card {
    color: #b71c1c;
    background-color: #ffffff;
    border-radius: 4px;
    margin: 1em 0;
  }

  .button-validate {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    width: 50%;
    padding: 15px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 4em;
    background-color: #ffc107;
    border-color: #ffc107;
    border-radius: 0.25rem;
  }

  .btn-container{
    margin-top: 1em;
  }

  .button-validate:hover {
    color: #fff;
    background-color: #d39e00;
    border-color: #c69500;
  }

  a:hover {
    text-decoration: none;
  }

  .stickers {
    width: auto;
    height: 30px;
  }

  .error {
    color: #5e0000;
    font-size: 12px;
  }
  @media (max-width: 991.98px) {
    .button-validate{
      font-size: 10px;
    }
    .custom-card{
      font-size: 10px;
    }
    .table th, .table td {
      padding: 0.50rem;
    }
    .stickers{
      height: auto;
      width: 40px;
      max-width: initial;
    }
  }
</style>
