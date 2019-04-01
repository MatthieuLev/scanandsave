<template>
  <div>
  <Menu></Menu>
  <b-container>
    <b-form class="registration-form">
      <h1>Mon dossier médical</h1>
        <h2>Informations générales</h2>
          <b-row>
            <b-col>
              <select title = "Civilité" class="form-control">
                <option selected disabled>Civilité</option>
                <option value="madame">Madame</option>
                <option value="monsieur">Monsieur</option>
                <option value="mademoiselle">Mademoiselle</option>
              </select>
            </b-col>
            <b-col>
              <b-form-input v-model="text" required placeholder="Nom"></b-form-input>
            </b-col>
            <b-col>
              <b-form-input v-model="text" required placeholder="Prenom"></b-form-input>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="col-lg-4">
              <b-form-group label="Date de naissance : ">
                <b-form-input type ="date" required placeholder="Date de naissance"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="col-lg-4">
              <b-form-group label="Photo d'identité : ">
                <b-form-file v-model="file" :state="Boolean(file)">
                </b-form-file>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="col-lg-4">
              <b-form-group label="Téléphone : ">
                <b-form-input type ="tel" label ="Téléphone" required placeholder="Téléphone"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>


      <h2>Adresse</h2>

      <b-row>
        <b-col>
          <b-form-group label="Numéro : ">
            <b-form-input v-model="text" type="number" required placeholder="Numéro"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Nom de voie : ">
            <b-form-input v-model="text" required placeholder="Nom de voie"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Complément d'adresse : ">
            <b-form-input v-model="text"  required placeholder="Complément d'adresse"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Ville : ">
            <b-form-input v-model="text" required placeholder="Ville"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Etat/Province : ">
            <b-form-input v-model="text" required placeholder="Etat/Province"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Code Postal : ">
            <b-form-input v-model="text" type="number" required placeholder="Code Postal"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Pays : ">
            <b-form-input v-model="text" required placeholder="Pays"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>


      <h2>Informations vitales : MHTA</h2>

      <b-form-group>
        <b-row>
          <b-col class="col-lg-4">
            <p>M : Maladie(s)</p>
          </b-col>
          <b-col class="col-lg-4">
            <p>Choisir un mot clé.</p>
          </b-col>
          <b-col class="col-lg-4">
            <b-form-input v-model="text" required ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-12">
              <p>Avez-vous des problèmes médicaux ? (Problèmes cardiaques, diabète, épilepsie, asthme, etc) </p>
              <b-form-input v-model="text" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row>
          <b-col class="col-lg-4">
            <p>H : Hospitalisation(s)</p>
          </b-col>
          <b-col class="col-lg-4">
            <p>Choisir un mot clé.</p>
          </b-col>
          <b-col class="col-lg-4">
            <b-form-input v-model="text" required ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous des subit des hospitalisations ? Si oui, quand et pourquoi? </p>
            <b-form-input v-model="text" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>


      <b-form-group>
        <b-row>
          <b-col class="col-lg-4">
            <p>T : Traitement(s)</p>
          </b-col>
          <b-col class="col-lg-4">
            <p>Choisir un mot clé.</p>
          </b-col>
          <b-col class="col-lg-4">
            <b-form-input v-model="text" required ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous un traitement ? Si oui, quelle fréquence et pourquoi ?</p>
            <b-form-input v-model="text" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row>
          <b-col class="col-lg-4">
            <p>A : Allergie(s)</p>
          </b-col>
          <b-col class="col-lg-4">
            <p>Choisir un mot clé.</p>
          </b-col>
          <b-col class="col-lg-4">
            <b-form-input v-model="text" required ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-lg-12">
            <p>Avez-vous des des allergies ? Pensez à mentionner la cause et la sévérité</p>
            <b-form-input v-model="text" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-row>
        <b-col class="col-lg-4">
          <p>Donneur d'organes ? : </p>
        </b-col>
        <b-col class="col-lg-1">
          <b-form-radio v-model="selected" name="some_radios" value="oui">Oui</b-form-radio>
        </b-col>
        <b-col class="col-lg-1">
          <b-form-radio v-model="selected" name="some_radios" value="non">Non</b-form-radio>
        </b-col>
        <b-col class="col-lg-4">
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
        </b-col>
      </b-row>

      <h2>Autres informations</h2>
      <b-row>
        <b-col class="col-lg-4">
          <b-form-group label="Numéro de sécurité sociale">
            <b-form-input v-model="text" type="number" required placeholder="Numéro de sécurité sociale"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-lg-4">
          <b-form-group label="Permis de conduire">
            <b-form-input v-model="text" type="number" required placeholder="Numéro de permis"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="col-lg-4">
          <b-form-file v-model="file" :state="Boolean(file)">
          </b-form-file>
        </b-col>
      </b-row>

      <h2>Contacts</h2>
        <h3>Personne à contacter en cas d'urgence</h3>
      <b-row>
        <b-col>
          <b-form-group label="Prenom : ">
            <b-form-input v-model="text" required placeholder="Prenom"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Nom : ">
            <b-form-input v-model="text" required placeholder="Numéro"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-lg-6">
          <b-form-group label="Telephone : ">
            <b-form-input type ="tel" required placeholder="Téléphone"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <h3>Coordonnées de votre médecin traitant</h3>
      <b-row>
        <b-col>
          <b-form-group label="Prenom : ">
            <b-form-input v-model="text" required placeholder="Prenom"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Nom : ">
            <b-form-input v-model="text" required placeholder="Numéro"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Telephone : ">
            <b-form-input type ="tel" required placeholder="Téléphone"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Ville : ">
            <b-form-input v-model="text" required placeholder="Ville"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <div>
        <b-button variant="outline-primary">Valider</b-button>
      </div>
    </b-form>
  </b-container>
  </div>
</template>

<script>
  import Menu from '../components/Menu';
  export default {
    name: "Medical File",
    components:{
      Menu
    },
  }
</script>

<style scoped>

</style>
