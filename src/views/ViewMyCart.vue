<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-form class="registration-form">
        <Menu></Menu>
        <h1>Mon Panier</h1>
        <b-table striped hover :items="items"></b-table>
        <b-table striped hover :items="paiement"></b-table>
        <div>
          <b-row>

            <b-col>
              <b-button variant="success">Valider</b-button>
              <b-button variant="danger">Annuler</b-button>
            </b-col>

          </b-row>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import firebase from 'firebase';
  import db from '../firebase.js';

  export default {
    name: 'Mon_Panier',
    components: {
      Navbar,
    },
    data() {
      return {

        items: [
        ],
        paiement:[
          { Total: 'Total HC', Prix: '10.56' },
          { Total: 'Total TTC', Prix: '11.56' },
          { Total: 'Total TTC frais de port', Prix: '12.40' }    ]
      };
    },
    created() {
      let self = this;
      db.collection('stickers')
        .doc(firebase.auth().currentUser.uid)
        .collection('userStickers')
        .where("in_order", "==", true)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            console.log('no stickers documents ordered found from userStickers collection');
          } else {
            // go through all the results
            querySnapshot.forEach(function (documentSnapshot) {
              let data =documentSnapshot.data();
              console.log(data);
              self.items.push(data);
            });
          }
        }).catch(error => {
        alert(error)
      });
    }
  };
</script>

<style scoped>
  .btn {
    margin: 8px;
  }
</style>
