<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-form class="registration-form">
        <Menu></Menu>
        <h1>Mon Panier</h1>
        <b-table striped :fields="fields" :items="items">

        </b-table>
        <b-table striped hover :fields="paiement">

          <template slot="total_hc" slot-scope="data">

          </template>

        </b-table>
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
        total:0,
        items: [],
        fields: [
          { key: 'color', label: 'Couleur' },
          { key: 'quantity', label: 'Quantité' },
          { key: 'shape', label: 'Forme' },
          { key: 'size', label: 'Size' },
          { key: 'theme', label: 'Theme' },
          { key: 'prix', label: 'Prix' },
          { key: 'prix_total', label: 'Prix Total' },
        ],
        paiement:[
          { key:'total_hc', label:'Total HC' },
          /*,{ Total: 'Total TTC', Prix: this.total*1.2},
          { Total: 'Total TTC frais de port', Prix: (this.total*1.2)+3 }*/],
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
        alert(error);
      });
    },
  };
</script>

<style scoped>
  .btn {
    margin: 8px;
  }
</style>
