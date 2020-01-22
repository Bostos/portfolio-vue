<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
  //import your components here
  import Navigation from './components/Navigation.vue'
  export default {
    components: {
      'Navigation': Navigation
    } 
  }   
</script>

<style>
  * {
    border-radius: 0 !important;
  }

  body {
    font-family: Segoe UI;
    height: 100vh;
    margin: 0;
  }

  #app{
    display: flex;
  }

  .rowflex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .columnflex {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }

  .row{
    margin: 0px !important;
  }

  #main{
    display: flex;
  }

  .container-fluid{
    padding: 0px;
  }

  #hello-text{
    margin-top: 30%;
    font-size: 0.7em;
    z-index: 999;
  }

  #hello-text h1{
    color: #459c75;
    padding-left: 10%;
  }

  #hello-text-small{
    font-size: 1em;
    color: white;
    text-align: justify;
    margin-top: 8%;
    padding: 0 10%;
    z-index: 999;
  }

  #side-navbar{
    width: 60px;
    background-color: #1e1e1e;
    color: #459c75;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #side-navbar ul{
    list-style: none;
    margin-right: 2em;
  }

  #side-navbar li{
    padding: 15px 0;
  }

  #side-navbar a{
    color: #3d3d3d;
  }

  #logo{
    height: 80px;
    width: 30px;
    margin-top: 15px;
  }

  .logo-images{
    width: 50px;
    height: 50px;
  }

  .sidebar-row{
    flex: 1;
  }

  .sidebar-row .active svg{
    color: #459c75;
  }

  #content{
    background-color: #000;
    background-image: url("assets/img/dots-background.png");
    height: 100vh;
    flex: 1;
  }

  #profile{
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-left: 5%;
  }

  #my-img{
    width: 90%;
    height: auto;
  }

  #logos{
    border: 1px solid yellow;
    margin-top: 100px;
  }


  /* About Page */
  #text{
    margin-left: 15%;
    margin-top: 15%;
  }

  #text p{
    font-family: Segoe UI;
    font-size: 1em;
    color: white;
    text-align: center;
    background-color: rgba(30, 30, 30, .6);
    padding: 45px 30px 45px 30px;
    width: 80%;
    height: auto;
  }

  /* Navbar on mobile */
  .side-navbar-mobile {
    overflow: hidden;
    background-color: #1e1e1e;
    position: relative;
    display: none;
  }

  .side-navbar-mobile a {
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
  }

  .side-navbar-mobile a.icon {
    background: black;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }

  .side-navbar-mobile a:hover {
    background-color: #ddd;
    color: black;
  }

  .active-mobile {
    background-color: #459c75;
    color: white;
  }

  /* Stranica Kontakt */
  #contact{
    margin: 8% 8%;
  }

  #contact form{
    font-size: 0.9em;
  }

  #contact label{
    color: white;
  }

  #contact input, #contact textarea{
    padding: 10px;
    font-size: 0.9em;
    border: 1px solid #459c75;
    background-color: rgba(30, 30, 30, .9);
    color: white;
  }

  #contact button{
    width: 100%;
    margin-top: 5%;
    padding: 12px 35px;
    font-size: 0.9em;
    background-color: #459c75;
    border: none;
  }

  #contact button:hover{
    background-color: #367c5d;
    cursor: pointer;
  }

  .form-error{
    color: red;
    font-size: 0.9em;
    padding-top: 5px;
    font-style: italic;
  }

  #contact-text{
    margin-top: 10%;
    margin-left: 15%;
  }

  #contact-text p{
    font-family: Segoe UI;
    font-size: 1em;
    color: white;
    text-align: center;
    background-color: rgba(30, 30, 30, .6);
    padding: 45px 30px 45px 30px;
    width: 80%;
    height: auto;
  }


  /* Media Queries - For screens wider than 800px (Desktop version) */
  @media only screen and (min-width: 850px) {

    #side-navbar{
      width: 100px;
    }

    #logo{
      height: 120px;
      width: 50px;
      margin-top: 30px;
    }

    #my-img{
      width: 90%;
      height: auto;
    }

    .columnflex{
      flex: 1;
    }

    #profile{
      display: block;
      position: fixed;
      bottom: 0;
      width: 50%;
      right: 0;
    }

    #hello-text{
      margin-top: 25%;
      font-size: 1em;
    }

    #hello-text h1{
      color: #459c75;
      font-size: 3.5em;
      padding-top: 0;
      padding-left: 30%;
    }

    #hello-text-small{
      margin-top: 5%;
      padding-left: 30%;
      font-size: 1.1em;
    }

    #text{
      margin-top: 25%;
    }

    #text p {
      font-size: 1.2em;
    }

    #about-right{
      background-color: rgba(69, 156, 117, 0.6);
      display: block;
      height: 100vh;
    }

    #contact{
      margin-top: 30%;
      margin-right: 15%;
    }

    #contact form{
      font-size: 1.1em;
    }

    #contact label{
      color: white;
    }

    #contact input, #contact textarea{
      font-size: 0.9em;
      padding: 22px;
      border: 1px solid #459c75;
      background-color: rgba(30, 30, 30, .9);
      color: white;
    }

    #contact button{
      margin-left: 35%;
      width: 30%;
      padding: 12px 35px;
      background-color: #459c75;
      border: none;
    }

    #contact button:hover{
      background-color: #367c5d;
      cursor: pointer;
    }

    .form-error{
      color: red;
      font-size: 0.9em;
      padding-top: 5px;
      font-style: italic;
    }

    #contact-text{
      margin-top: 40%;
      margin-left: 15%;
    }

    #contact-text p{
      font-family: Segoe UI;
      font-size: 2em;
      color: white;
      text-align: center;
      background-color: rgba(30, 30, 30, .8);
      padding: 45px 30px 45px 30px;
      width: 80%;
      height: auto;
    }

  }

  @media only screen and (max-width: 849px) {
    #side-navbar{
      display: none;
    }

    .side-navbar-mobile{
      display: block;
    }
  }

  @media only screen and (min-width: 1450px) {
    #text{
      margin-top: 25%;
    }

    #text p{
      font-size: 1.5em;
    }
  }


</style>
