<template>
  <div>
    <Menu></Menu>
    <b-container>
      <b-form class="create_stickers">
        <h1>Créer son autocollant</h1>
        <b-row>
          <b-col>
            <h3>Choisir un thème:</h3>
            <select title="Choix du thème" class="form-control">
              <option selected disabled>Choix du thème</option>
              <option value="Moto">Moto</option>
              <option value="Ski">Ski</option>
              <option value="Vélo">Vélo</option>
              <option value="Skate">Skate</option>
              <option value="Trotinette">Trotinette</option>
              <option value="Autre">Autre</option>
            </select>
          </b-col>
          <b-col>
            <b-form-group label="Choix de la forme">
              <b-form-radio v-model="selected" value="Carré">Carré</b-form-radio>
              <b-form-radio v-model="selected" value="Rond">Rond</b-form-radio>
            </b-form-group>
            <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
          </b-col>
        </b-row>
      </b-form>

      <b-row>
        <b-col>
          <h3>Couleurs:</h3>
          <select title="Couleurs" class="form-control">
            <option selected disabled>Choix de la couleur</option>
            <option value="Noir">Noir</option>
            <option value="Rouge">Rouge</option>
            <option value="Argent">Argent</option>
            <option value="Vert">Vert</option>
            <option value="Bleu">Bleu</option>
            <option value="Rose">Rose</option>
            <option value="Orange">Orange</option>
          </select>
        </b-col>
        <b-col>
          <h3>Tailles:</h3>
          <select title="Taille" class="form-control">
            <option selected disabled>Choix de la taille</option>
            <option value="Petit">Petit</option>
            <option value="Moyen">Moyen</option>
            <option value="Grand">Grand</option>
          </select>
        </b-col>
      </b-row>
      <h3>Appercue</h3>

      <b-button variant="outline-primary">Enregistrer</b-button>
    </b-container>
  </div>
</template>

<script>
  import Menu from '../components/Menu.vue';

  export default {
    name: "create_stickers",
    components: {
      Menu,
    },
    data() {
      return {
        selected: ''
      }
    }
  }

</script>

<style scoped>

</style>
