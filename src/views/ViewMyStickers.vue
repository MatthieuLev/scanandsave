<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <h1>Mes autocollants</h1>
      <div class="custom-card">
        <b-table striped :items="stickers"></b-table>
      </div>
      <router-link class="button-validate" to="StickersCreation" replace>Créer un nouvel autocollant</router-link>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import db from '../firebase.js';
  import firebase from 'firebase';

  export default {
    name: 'ViewMyStickers',
    components: {
      Navbar,
    },
    data() {
      return {
        stickers: [],
      };
    },
    created() {
      let self = this;
      db.collection('stickers')
        .doc(firebase.auth().currentUser.uid)
        .collection('userStickers')
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            console.log('no stickers documents found from userStickers collection');
          } else {
            // go through all the results
            querySnapshot.forEach(function (documentSnapshot) {
              let data =documentSnapshot.data();
              console.log(data);
              self.stickers.push(data);
            });
          }
        }).catch(error => {
        alert(error)
      });
    }
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

  @media (max-width: 991px) {
    .table {
      display: block;
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }

  a:hover {
    text-decoration: none;
  }
</style>
