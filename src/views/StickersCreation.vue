<template xmlns="http://www.w3.org/1999/html">
  <div>
    <Navbar></Navbar>
    <b-container>
      <br>
      <h1>Créer son autocollant</h1>
      <br>
      <div class="card">
        <div class="card-body">
        <br>
        <b-form @submit.prevent="saveStickers" class="create_stickers">
          <b-row>
            <b-col>
              <label for="theme">Choisir un autocollant :</label>
              <select id="theme" v-model="theme" title="Choix du thème" class="form-control">
                <option value="motoFemme">Moto femme</option>
                <option value="motoFlamme">Moto flamme</option>
                <option value="kawasaki">Kawasaki</option>
              </select>
            </b-col>

            <b-col>
              <label for="shape">Choisir la forme :</label>
              <select id="shape" v-model="shape" title="Formes" class="form-control">
                <option value="square">Carré</option>
                <option value="round">Rond</option>
              </select>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <label for="color">Choisir la couleur :</label>
              <select id="color" v-model="color" title="Couleurs" class="form-control">
                <option value="black">Noir</option>
                <option value="red">Rouge</option>
                <option value="yellow">Jaune</option>
              </select>
            </b-col>

            <b-col>
              <label for="size">Choisir la taille :</label>
              <select id="size" v-model="size" title="Taille" class="form-control">
                <option value="small">Petit</option>
                <option value="medium">Moyen</option>
                <option value="high">Grand</option>
              </select>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <h3>Aperçu</h3>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-img class="stickers" :src="require(`../img/stickers/${this.theme}/${this.color}.png`)" fluid
                     alt="Stickers picture"></b-img>
            </b-col>
          </b-row>
        </b-form>
        </div>
      </div>
      <br>
      <b-row>
        <b-col>
          <b-button class ="button-validate btn-warning" type="submit">Enregistrer</b-button>
          <p class="error" v-if="errorMessage">{{errorMessage}}</p>
        </b-col>
      </b-row>
    </b-container>

  <br><br>

    <footer class="container-fluid text-center">
      <div class="row">
        <div class="col-sm-4">
          <img src="../img/skateboard.jpg" class="img-responsive" style="width:100%" alt="Image">
        </div>

        <div class="col-sm-4">
          <img src="../img/utah.jpg" class="img-responsive" style="width:100%" alt="Image">
        </div>

        <div class="col-sm-4">
          <img src="../img/ski.png" class="img-responsive" style="width:100%" alt="Image">
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  import db from '../firebase.js';
  import firebase from 'firebase';
  import router from '../router';
  import Navbar from '../components/Navbar.vue';
  import ViewMyStickers from "./ViewMyStickers";

  export default {
    name: 'StickersCreation',
    components: {
      Navbar,
    },
    data() {
      return {
        errorMessage: '',
        theme: "motoFemme",
        shape: "square",
        color: "black",
        size: "small",
      };
    },
    methods: {
      saveStickers() {
        db.collection('stickers')
          .doc(firebase.auth().currentUser.uid)
          .collection('userStickers')
          .add({
            theme: this.theme,
            shape: this.shape,
            color: this.color,
            size: this.size,
            in_order: false,
            quantity: 1,
          })
          .then(() => {
            router.push(ViewMyStickers);
          })
          .catch(error => {
            this.errorMessage = error;
          });
      },
    },
  };

</script>

<style scoped>
  .stickers {
    max-width: 500px;
  }
  .error {
    color: #5e0000;
    font-size: 12px;
  }

  h1{
    color: white;
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

  .button-validate:hover {
    color: #fff;
  }

</style>
