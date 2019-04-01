<template>
  <Menu></Menu>
  <div>
  </div>
  <b-form-select v-model="themes" :options="themes"></b-form-select>
    <title>Créer son autocollant</title>

  <div>
    <b-form-group label="Choix de la forme:">
      <b-form-checkbox-group id="checkbox-group-1" v-model="selected" name="flavour-1">
        <b-form-checkbox value="Carré">Orange</b-form-checkbox>
        <b-form-checkbox value="Rond">Apple</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </div>

  <div>Selected: <strong>{{ selected }}</strong></div>
</template>

<script>
  import Menu from '../components/Menu.vue';

  export default {
    name: "create_stickers",
    components: {
      Menu,
    }
  }
  export default {
    data(){
      return {
        selected: [], // Affichage de la selection forme
        option : [
      {text: 'Carré', value: 'Carré'},
      {text: 'Rond', value: 'Rond'}
      ]
      }
    }
  }
</script>

<style scoped>

</style>
