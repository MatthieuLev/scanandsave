<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-form @submit.prevent="saveStickers" class="create_stickers">
        <h1>Créer son autocollant</h1>

        <b-row>
          <b-col>
            <label>Choisir un autocollant :</label>
            <select v-model="theme" title="Choix du thème" class="form-control">
              <option value="motoFemme">Moto femme</option>
              <option value="motoFlamme">Moto flamme</option>
              <option value="kawasaki">Kawasaki</option>
            </select>
          </b-col>

          <b-col>
            <label>Choisir la forme :</label>
            <select v-model="shape" title="Formes" class="form-control">
              <option value="square">Carré</option>
              <option value="round">Rond</option>
            </select>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label>Choisir la couleur :</label>
            <select v-model="color" title="Couleurs" class="form-control">
              <option value="black">Noir</option>
              <option value="red">Rouge</option>
              <option value="yellow">Jaune</option>
            </select>
          </b-col>

          <b-col>
            <label>Choisir la taille :</label>
            <select v-model="size" title="Taille" class="form-control">
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
        <b-row>
          <b-col>
            <b-button variant="outline-primary" type="submit">Enregistrer</b-button>
            <p class="error" v-if="errorMessage">{{errorMessage}}</p>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
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
</style>
