<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <Menu></Menu>
      <h1>Mon Panier</h1>
      <div class="custom-card">
        <div class="table-responsive">
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

              <div id="input_div">
                <b-row>
                  <b-col>
                    <b-button class=table-btn value="-" id="moins" v-on:click="addProduct(item, -1)"> -</b-button>
                  </b-col>
                  <b-col>
                    <p class="text-center">{{item.quantity}}</p>
                  </b-col>
                  <b-col>
                    <b-button class=table-btn value="+" id="plus" v-on:click="addProduct(item , 1)">+</b-button>
                  </b-col>
                </b-row>
              </div>

            </td>
            <td class="text-right">{{item.prix}}€</td>
            <td class="text-right">
              <b-button class="table-btn" v-on:click="deleteItem(item)">
                <i class="fa fa-trash"></i></b-button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total du panier</td>
            <td class="text-right">{{this.total}}€</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Frais de port</td>
            <td class="text-right">3€</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><strong>Total</strong></td>
            <td class="text-right"><strong>{{this.total==0?0:this.total+3}}€</strong></td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
      <PaymentMethod v-if="validated"></PaymentMethod>
      <br/>
      <br/>
      <b-row>
        <b-col>
          <b-button class="button-validate btn-danger text-uppercase" v-if="validated" v-on:click="leftPayment()">
            Annuler le paiement
          </b-button>
        </b-col>
        <b-col>
          <b-button class="button-validate btn-warning text-uppercase" v-on:click="goPayment()">Valider</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import Navbar from '../components/Navbar.vue';
  import PaymentMethod from "../components/PaymentMethod.vue"
  import db from '../firebase.js';

  export default {
    name: 'Mon_Panier',
    components: {
      Navbar,
      PaymentMethod
    },
    data() {
      return {
        validated: false,
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
        this.total = this.total - (item.quantity * item.prix);
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
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i] === item) {
            this.items.splice(i, 1);
          }
        }
      },
      addProduct: function (item, i) {
        if ((item.quantity >= 1 && i < 0) || (item.quantity >= 0 && i > 0)) {
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
          for (var j = 0; j < this.items.length; j++) {
            if (this.items[j] === item) {
              this.items[j].quantity = this.items[j].quantity + i;
              this.total = this.total + (i * this.items[j].prix);
            }
          }

        }
      },
      goPayment() {
        this.validated = true;
      },
      leftPayment() {
        this.validated = false;
      }
    },
  };
</script>

<style scoped>
  .stickers {
    width: auto;
    height: 30px;
  }

  .button-validate {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    width: 50%;
    padding: 15px;
    color: white;
    margin-top: 1em;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 4em;
  }

  .button-validate:hover, .button-delete:hover {
    color: #fff;
  }

  .table-btn {
    background-color: #7f0000;
  }

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

  @media (max-width: 991.98px) {
    .btn{
      font-size: 10px;
    }
    .btn-danger{
      width: auto;
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
