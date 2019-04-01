<template>
  <b-form class="registration-form">
    <h1>Mon dossier médical</h1>

      <h2>Informations générales</h2>

        <select title = "Civilité" class="form-control">
            <option selected disabled>Civilité</option>
            <option value="madame">Madame</option>
            <option value="monsieur">Monsieur</option>
            <option value="mademoiselle">Mademoiselle</option>
        </select>

        <b-form-input v-model="text" required placeholder="Nom"></b-form-input>

        <b-form-input v-model="text" required placeholder="Prenom"></b-form-input>

        <b-form-group label="Téléphone : ">
          <b-form-input type ="tel" label ="Téléphone" required placeholder="Téléphone"></b-form-input>
        </b-form-group>

        <b-form-group label="Date de naissance : ">
          <b-form-input type ="date" required placeholder="Date de naissance"></b-form-input>
        </b-form-group>

    <h2>Adresse</h2>

      <b-form-input v-model="text" type="number" required placeholder="Numéro"></b-form-input>
      <b-form-input v-model="text" required placeholder="Nom de voie"></b-form-input>
      <b-form-input v-model="text"  required placeholder="Complément d'adresse"></b-form-input>
      <b-form-input v-model="text" type="number" required placeholder="Code Postal"></b-form-input>
      <b-form-input v-model="text" required placeholder="Ville"></b-form-input>
      <b-form-input v-model="text" required placeholder="Etat/Province"></b-form-input>
      <b-form-input v-model="text" required placeholder="Pays"></b-form-input>

    <h2>Informations vitales : MHTA</h2>

      <b-form-group label="M : Maladie(s)">
        <b-form-input
          v-model="text" required placeholder="Choisir un mot clé : "></b-form-input>
        <b-form-input
          v-model="text" required placeholder="Avez-vous des problèmes médicaux ? (Problèmes cardiaques, diabète, épilepsie, asthme, etc"></b-form-input>
      </b-form-group>

      <b-form-group label="H : Hospitalisation(s)">
        <b-form-input
          v-model="text" required placeholder="Choisir un mot clé : "></b-form-input>
        <b-form-input
          v-model="text" required placeholder="Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi?"></b-form-input>
      </b-form-group>

      <b-form-group label="T : Traitement(s)">
        <b-form-input
          v-model="text" required placeholder="Choisir un mot clé : "></b-form-input>
        <b-form-input
          v-model="text" required placeholder="Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?"></b-form-input>
      </b-form-group>

      <b-form-group label="A : Allergie(s)">
        <b-form-input v-model="text" required placeholder="Choisir un mot clé : "></b-form-input>
        <b-form-input v-model="text" required placeholder="Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité"></b-form-input>
      </b-form-group>

      <p>Donneur d'organes ? : </p>
      <b-form-group>
        <b-form-group id="checkboxes-4">
          <b-form-radio v-model="selected" name="some_radios" value="oui">Oui</b-form-radio>
          <b-form-radio v-model="selected" name="some_radios" value="non">Non</b-form-radio>
        </b-form-group>
      </b-form-group>

      <select class="form-control">
          <option selected disabled>Groupe sanguin</option>
          <option value="a+">A+</option>
          <option value="a-">A-</option>
          <option value="b+">B+</option>
          <option value="b+">B-</option>
          <option value="ab">AB</option>
          <option value="o+">O+</option>
          <option value="o-">O-</option>
      </select>

    <h2>Autres informations</h2>

      <b-form-input v-model="text" type="number" required placeholder="Numéro de sécurité sociale"></b-form-input>
      <b-form-input v-model="text" type="number" required placeholder="Numéro de permis"></b-form-input>

    <h2>Contacts</h2>

      <h3>Personne à contacter en cas d'urgence</h3>
        <b-form-input v-model="text" required placeholder="Prenom"></b-form-input>
        <b-form-input v-model="text" required placeholder="Numéro"></b-form-input>
        <b-form-input type ="tel" required placeholder="Téléphone"></b-form-input>

    <h3>Coordonnées de votre médecin traitant</h3>
        <b-form-input v-model="text" required placeholder="Prenom"></b-form-input>
        <b-form-input v-model="text" required placeholder="Numéro"></b-form-input>
        <b-form-input type ="tel" required placeholder="Téléphone"></b-form-input>
    <b-form-input v-model="text" required placeholder="Ville"></b-form-input>
    <div>
      <b-button variant="outline-primary">Valider</b-button>
    </div>
  </b-form>

</template>

<script>
  export default {
    name: "Medical File"
  }
</script>

<style scoped>

</style>
