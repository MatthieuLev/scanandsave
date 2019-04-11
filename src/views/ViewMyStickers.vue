<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mes autocollants</h1>
      <div class="custom-card">

        <b-table striped :fields="fields" :items="stickers">
          <template slot="index" slot-scope="data">
            {{ data.index + 1 }}
          </template>

          <template slot="preview" slot-scope="data">
            <b-img class="stickers" :src="require(`../img/stickers/${data.item.theme}/${data.item.color}.png`)" fluid
                   alt="Stickers picture"></b-img>
          </template>

          <template slot="addtoCart" slot-scope="data">
            <b-form-checkbox :id="'checkbox'+data.index+1" name="checkbox" v-model="data.item.in_order"
                             @change="check($event, data.item)">
            </b-form-checkbox>
          </template>
        </b-table>
        <p class="error" v-if="errorMessage">{{errorMessage}}</p>

      </div>
      <router-link class="button-validate" to="StickersCreation" replace>Créer un nouvel autocollant</router-link>
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
        fields: [
          'index',
          { key: 'theme', label: 'Theme' },
          { key: 'color', label: 'Couleur' },
          { key: 'size', label: 'Taille' },
          { key: 'shape', label: 'Forme' },
          { key: 'preview', label: 'Aperçu' },
          { key: 'addtoCart', label: 'Ajouter au panier' },
        ],
      };
    },
    created() {
      const self = this;
      db.collection('stickers')
        .doc(firebase.auth().currentUser.uid)
        .collection('userStickers')
        .get()
        .then(querySnapshot => {
          if (querySnapshot.empty) {
            console.log('no stickers documents found from userStickers collection');
          } else {
            // go through all the results
            querySnapshot.forEach(documentSnapshot => {
              const data = documentSnapshot.data();
              console.log(data);
              data['id'] = documentSnapshot.id;
              self.stickers.push(data);
            });
          }
        })
        .catch(error => {
        this.errorMessage = error;
      });
    },

    methods: {
      check(e, item) {
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
    color: grey;
  }

  .custom-card {
    color: white;
    background-color: #dc3545;
    border-radius: 4px;
    margin: 1em 0;
  }

  .button-validate {
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

  .button-validate:hover {
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
  }

  .table {
    color: white;
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
</style>
