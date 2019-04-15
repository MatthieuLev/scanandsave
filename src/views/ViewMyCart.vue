<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <Menu></Menu>
      <h1>Mon Panier</h1>
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Produit</th>
          <th scope="col">Disponibilité</th>
          <th scope="col" class="text-center">Quantité</th>
          <th scope="col" class="text-right">Prix</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items">
          <td>
            <b-img class="stickers" :src="require(`../img/stickers/${item.theme}/${item.color}.png`)" fluid
                   alt="Stickers picture"></b-img>
          </td>
          <td>{{item.theme}} {{item.color}} {{item.size}}</td>
          <td>In stock</td>
          <td>
            <!--<input class="form-control" type="number" value="1" />-->

            <div id="input_div">
              <b-row>
                <b-col>
              <b-button class =btn-secondary value="-" id="moins" v-on:click="addProduct(item, -1)"> - </b-button>
                </b-col>
                <b-col>
              <p class ="text-center">{{item.quantity}}</p>
                </b-col>
                  <b-col>
              <b-button class =btn-secondary value="+" id="plus" v-on:click="addProduct(item , 1)">+</b-button>
                  </b-col>
              </b-row>
            </div>

          </td>
          <td class="text-right">{{item.prix}}€</td>
          <td class="text-right">
            <b-button class="btn btn-sm btn-danger" v-on:click="deleteItem(item)">
              <i class="fa fa-trash"></i></b-button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Sub-Total</td>
          <td class="text-right">{{this.total}}€</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Shipping</td>
          <td class="text-right">3€</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><strong>Total</strong></td>
          <td class="text-right"><strong>{{this.total+3}}€</strong></td>
        </tr>
        </tbody>
      </table>

      <div class="col mb-2">
        <div class="row">
          <div class="col-sm-12  col-md-6">
            <button class="btn btn-block btn-light">Continue Shopping</button>
          </div>
          <div class="col-sm-12 col-md-6 text-right">
            <button class="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import Navbar from '../components/Navbar.vue';
  import db from '../firebase.js';

  export default {
    name: 'Mon_Panier',
    components: {
      Navbar,
    },
    data() {
      return {
        errorMessage: '',
        total: 0,
        items: [],
        theme: null
      };
    },
    created() {
      const self = this;
      db.collection('stickers')
        .doc(firebase.auth().currentUser.uid)
        .collection('userStickers')
        .where('in_order', '==', true)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.empty) {
            console.log('no stickers documents ordered found from userStickers collection');
          } else {
            // go through all the results
            querySnapshot.forEach(documentSnapshot => {
              const data = documentSnapshot.data();
              data['id'] = documentSnapshot.id;
              console.log(data);
              if (data.size === 'small')
                data.prix = 5;
              else if (data.size === 'medium')
                data.prix = 6;
              else data.prix = 7;

              data.prix_total = data.prix * data.quantity;
              self.items.push(data);
              self.total += data.prix_total;
            });
          }
        })
        .catch(error => {
          this.errorMessage = error;
        });
    },
    methods: {
      deleteItem: function (item) {
        db.collection('stickers')
          .doc(firebase.auth().currentUser.uid)
          .collection('userStickers')
          .doc(item.id)
          .update({
            in_order: !item.in_order,
            quantity: !item.in_order ? 1 : item.quantity,
          })
          .then(() => {
            console.log('[LOG] ViewMyStickers : The update of the badge in the shopping cart was successful');
          })
          .catch(error => {
            console.log('[LOG] ViewMyStickers : The update of the badge in the shopping cart failed');
            this.errorMessage = error;
          });
      },
      addProduct: function (item, i) {
        db.collection('stickers')
          .doc(firebase.auth().currentUser.uid)
          .collection('userStickers')
          .doc(item.id)
          .update({
            quantity: item.quantity + i
          })
          .then(() => {
            console.log('[LOG] ViewMyStickers : The update of the badge in the shopping cart was successful');
          })
          .catch(error => {
            console.log('[LOG] ViewMyStickers : The update of the badge in the shopping cart failed');
            this.errorMessage = error;
          });
        for( var j = 0; j < this.items.length; j++){
          if ( this.items[j] === item) {
            this.items[j].quantity = this.items[j].quantity + i;
          }
        }
      }
    },
  };
</script>

<style scoped>
  .stickers {
    width: auto;
    height: 30px;
  }

  .btn-secondary{
    background-color: white;
    border: 2px solid #555555;
    color: black;
  }
</style>
