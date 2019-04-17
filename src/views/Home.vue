<template>
  <div class="bg">
    <Navbar></Navbar>
    <!-- Indicators -->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
          <img
            src="../img/scan_save-1.png"
            slot="img"
            alt="image slot"
            class="d-block img-fluid w-100"
          >
        </b-carousel-slide>

        <b-carousel-slide>
          <img
            src="../img/scan_save-2.png"
            slot="img"
            alt="image slot"
            class="d-block img-fluid w-100"
          >
        </b-carousel-slide>

        <b-carousel-slide>
        <img
          src="../img/scan_save-3.png"
          slot="img"
          alt="image slot"
          class="d-block img-fluid w-100"
        >
        </b-carousel-slide>
        <b-carousel-slide>
          <img
            src="../img/scan_save-4.png"
            slot="img"
            alt="image slot"
            class="d-block img-fluid w-100"
          >
        </b-carousel-slide>
      </b-carousel>
      <br>
      <br>
      <br>
    </div>
    <div>
      <h1 id="haut">  </h1>
    <div class="container text-center">
      <!-- Pour qui ? -->
      <div class="row">

        <div class="col-sm-6">
          <div class="well">
            <br>
            <h3>Pour qui ?</h3><br>
            <ol>
              <p>Motards</p>
              <p>Cyclistes</p>
              <p>Scooters</p>
              <p>Skateurs</p>
              <p>Skieurs</p>
              <p>Ouvriers de chantiers</p>
            </ol>
          </div>
        </div>
        <div class="col-sm-6">
          <img src="../img/scooter.png" class="img-responsive" style="width:100%" alt="Image">
        </div>
        <br><br><br>
      </div>

      <!-- Quelles infos ? -->
      <div class="row">
        <div class="col-sm-6">
          <img src="../img/mountain-biking.jpg" class="img-responsive" style="width:100%" alt="Image">
        </div>

        <div class="col-sm-6">
          <div class="well">
            <br><br><br>
            <h3>Quelles infos ?</h3><br>
            <ol>
              <p>Votre photo, Nom, Prénom, date de naissance.</p>
              <p>Groupe sanguin, Allergies, Donneur d'organes.</p>
              <p>N° sécurité sociale, N° permis de conduire.</p>
              <p>Premier et deuxième contact avec leurs téléphones.</p>
              <p>Le changement de vos données est gratuit à vie.</p>
            </ol>
          </div>
        </div>
        <br><br><br>
      </div>

      <!-- Comment ça marche ? -->

      <div class="row">


        <div class="col-sm-6">
          <div class="well">
            <br><br><br>
            <h3>Comment ça marche ?</h3><br>
            <ol>
              <p>Je remplis mes données personnelles afin de configuer mon stickers.</p>
              <p>Je choisi un visuel parmi une large game de stickers.</p>
              <p>Je reçois mon stickers 24h plus tard !</p>
            </ol>
          </div>
        </div>

        <div class="col-sm-6">
          <img src="../img/casque.png" class="img-responsive" style="width:100%" alt="Image">
        </div>
      </div>

      <!-- Sécurité et confidentialité ? -->

      <div class="row">
        <div class="col-sm-6">
          <img src="../img/biker.jpg" class="img-responsive" style="width:100%" alt="Image">
        </div>
        <div class="col-sm-6">
          <div class="well">
            <br><br><br>
            <h3>Sécurité et confidentialité</h3><br>
            <ol>
              <p>La lecture des données se fait en scannant le QR code .</p>
              <p>Vos données vitales sont stockées dans les serveurs Scan&Save sécurisés.</p>
              <p>Aucune onde n'est émise.</p>
              <p>Ni pile, ni batterie.</p>
            </ol>
          </div>
        </div>
      </div>

    </div>
      <div><a id="cRetour" class="cInvisible" href="#haut"></a></div>
    </div>


    <br><br><br>

<div>
  <b-button class = "b1"><router-link to="Auth">Je me lance !</router-link></b-button>
  <br><br><br>
</div>

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
      <br>
      <p>Scan and Save ! Frissons et sensations fortes en toute sécurité !</p>


    </footer>
  </div>

</template>

<script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'Welcome',
    components: {
      Navbar,
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
  });
</script>

<style scoped>

  h3 {
    color: #90081d;
  }
  .footer container-fluid text-center {
    background-color: #f2f2f2;
    padding: 25px;
  }

  .carousel .item {
    height: 400px
  }
.col-sm-4 img {
  width: 203px;
  height: 270px;
}
.btn btn-secondary{
  margin-left: auto;
  margin-right: auto;
  width: 80px;
}


  .b1 {
    background-color: #B9121B !important;
    border-color: transparent;
    padding-right: 20px;
    padding-left: 20px;
  }

  .b1:hover {
    background-color: #BD8D46 !important;
  }

  a{
    color: #f6fff7 !important;
  }

  .bg{
    background-color: white;
  }
  a#cRetour{
    border-radius:3px;
    padding:10px;
    font-size:15px;
    text-align:center;
    color:#fff;
    background:rgba(0, 0, 0, 0.25);
    position:fixed;
    right:20px;
    opacity:1;
    z-index:99999;
    transition:all ease-in 0.2s;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    text-decoration: none;
  }
  a#cRetour:before{ content: "\25b2"; }
  a#cRetour:hover{
    background:rgba(0, 0, 0, 1);
    transition:all ease-in 0.2s;
  }
  a#cRetour.cInvisible{
    bottom:-35px;
    opacity:0;
    transition:all ease-in 0.5s;
  }

  a#cRetour.cVisible{
    bottom:20px;
    opacity:1;
  }

</style>
