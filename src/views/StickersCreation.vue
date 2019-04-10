<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-form class="create_stickers">
        <h1>Créer son autocollant</h1>

        <b-row>
          <b-col>
            <label>Choisir un thème:</label>
            <select v-model="theme" title="Choix du thème" class="form-control">
              <option value="1">Moto femme</option>
              <option value="2">Moto flamme</option>
              <option value="3">Kawasaki</option>
            </select>
          </b-col>

          <b-col>
            <b-form-group label="Choix de la forme">
              <b-form-radio v-model="shape" value="1">Carré</b-form-radio>
              <b-form-radio v-model="shape" value="2">Rond</b-form-radio>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label>Couleurs:</label>
            <select v-model="color" title="Couleurs" class="form-control">
              <option value="1">Noir</option>
              <option value="2">Rouge</option>
              <option value="3">Jaune</option>
            </select>
          </b-col>

          <b-col>
            <label>Tailles:</label>
            <select v-model="size" title="Taille" class="form-control">
              <option value="1">Petit</option>
              <option value="2">Moyen</option>
              <option value="3">Grand</option>
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
            <b-img class="stickers" :src="require(`../img/stickers/${this.theme}/${this.color}.png`)" fluid alt="Stickers picture"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button variant="outline-primary">Enregistrer</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'StickersCreation',
    components: {
      Navbar,
    },
    data() {
      return {
        theme: 1,
        shape: 1,
        color: 1,
        size: 1,
      };
    },
  };

</script>

<style scoped>
.stickers{
  max-width: 500px;
}
</style>
