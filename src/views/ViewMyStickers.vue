<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mes autocollants</h1>
      <div v-if="userHaveAccount">
        <div class="custom-card">
          <!--<table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Theme</th>
              <th scope="col">Couleur</th>
              <th scope="col">Taille</th>
              <th scope="col">Forme</th>
              <th scope="col">Apperçu</th>
              <th scope="col">Ajouter au panier</th>
              <th scope="col" class="align-content-center">Supprimer</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="sticker in stickers">
              <td>{{ data.index + 1 }}</td>
              <td>{{sticker.theme}}</td>
              <td>{{sticker.color}}</td>
              <td>{{sticker.size}}</td>
              <td>{{sticker.shape}}</td>
              <td>
                <b-img class="stickers"
                       :src="require(`../img/stickers/${sticker.theme}/${sticker.color}.png`)"
                       fluid
                       alt="Stickers picture"></b-img>
              </td>
              <td>
                <b-form-checkbox> :id="'checkbox'+data.index+1"
                                 name="checkbox"
                                 v-model="data.item.in_order"
                                 @change="checkAddToCart(data.item)"
                </b-form-checkbox>
              </td>
              <td class="text-right">
                <b-button class="table-btn"
                          v-on:click="deleteItem(item)">
                  <i class="fa fa-trash"></i></b-button>
              </td>
            </tr>
            </tbody>
          </table>-->

          <b-table responsive striped :fields="fields" :items="stickers">
            <template slot="index" slot-scope="data">
              {{ data.index + 1 }}
            </template>

            <template slot="preview" slot-scope="data">
              <b-img class="stickers"
                     :src="require(`../img/stickers/${data.item.theme}/${data.item.color}.png`)"
                     fluid
                     alt="Stickers picture"></b-img>
            </template>

            <template slot="addtoCart" slot-scope="data">
              <b-form-checkbox :id="'checkbox'+data.index+1"
                               name="checkbox"
                               v-model="data.item.in_order"
                               @change="checkAddToCart($event, data.item)">
              </b-form-checkbox>
            </template>

            <template slot="deleteSticker" slot-scope="data">
              <b-button class="table-btn" :id="'delete'+data.index+1"
                        v-on:click="deleteSticker(data.item)">
                <i class="fa fa-trash"></i></b-button>
            </template>
          </b-table>
          <p class="error" v-if="errorMessage">{{errorMessage}}</p>

        </div>
        <b-row class="btn-container">
          <b-col>
            <router-link class="button-validate" to="StickersCreation" replace>
              Créer un nouvel autocollant</router-link>
          </b-col>
        </b-row>
      </div>
      <div v-else>
        <p>Vous devez créer un dossier médical avant de pouvoir générer un autocollant.</p>

        <router-link class="button-validate btn" to="MedicalFileCreation" replace>
          Générer un dossier médical
        </router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import Navbar from '../components/Navbar.vue';
  import db from '../firebase';

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
        index:0,
        fields: [
          'index',
          { key: 'theme', label: 'Theme' },
          { key: 'color', label: 'Couleur' },
          { key: 'size', label: 'Taille' },
          { key: 'shape', label: 'Forme' },
          { key: 'preview', label: 'Aperçu' },
          { key: 'addtoCart', label: 'Ajouter au panier' },
          { key: 'deleteSticker', label: 'Supprimer' }
        ],
      };
    },
    created() {
      db.collection('medicalFiles')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then(() => {
          this.userHaveAccount = true;
          this.check();
        });
    },

    methods: {
      check() {
        const self = this;
        db.collection('stickers')
          .doc(firebase.auth().currentUser.uid)
          .collection('userStickers')
          .get()
          .then((querySnapshot) => {
            if (!querySnapshot.empty) {
              // go through all the results
              querySnapshot.forEach((documentSnapshot) => {
                const data = documentSnapshot.data();
                data.id = documentSnapshot.id;
                self.stickers.push(data);
              });
            }
          })
          .catch((error) => {
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
          .catch((error) => {
            this.errorMessage = error;
          });
      },
      deleteSticker(item) {
        db.collection('stickers')
          .doc(firebase.auth().currentUser.uid)
          .collection('userStickers')
          .doc(item.id)
          .delete()
          .catch((error => {
            this.errorMessage = error;
          }));
        for (let i = 0; i < this.stickers.length; i += 1) {
          if (this.stickers[i] === item) {
            this.stickers.splice(i, 1);
          }
        }
      }
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
  @media (max-width: 992px) {
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
