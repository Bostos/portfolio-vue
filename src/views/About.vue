<template>
  <div id="content">

  	  <div class="side-navbar-mobile">
        <router-link to="/" active-class="active-mobile"><img style="width: 4%;" src="../assets/img/logo-white.png" alt="logo"><span style="margin-left: 33%;">About</span></router-link>
        <div id="myLinks" v-if="mobileNavVisible">
            <router-link to="/">Home</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
        <a href="javascript:void(0);" class="icon" v-on:click="mobileNavVisible = !mobileNavVisible">
          <i class="fa fa-bars" style="width: 30px; height: auto;"></i>
        </a>
      </div>

  	<div class='rowflex'>
  	    <div class='columnflex'>
  	    	<div id="text">
  	    		<p>I am a professional full stack web developer with more than 3 years of experience.<br><br>
              I have a diverse set of skills, ranging from web design with HTML + CSS + JavaScript, using frontend frameworks such as Vue.JS all the way to backend technologies such as PHP, MySQL, MongoDB, Laravel framework and Node.JS.<br><br>
              I have done several projects such as web applications for tourist and rent-a-car agencies, restaurants and other business organizations.
            </p>
  	    	</div>
  	    </div>
  	    <div class="columnflex">
  	    	<div id="about-right">
            <div id="about-text">
              <p>ABOUT ME</p>
            </div>
  	    	</div>
  	    </div>
  	</div>
  </div>
</template>

<script>
  export default{
    data: () => ({
      mobileNavVisible: false,
    })
  }
</script>

<style scoped>
  /* Media Queries - For screens wider than 850px (Desktop version) */
  @media only screen and (min-width: 850px) {

    #text{
      margin-top: 15%;
      margin-left: 15%;
    }

    #text p {
      font-size: 1.2em;
      font-family: Segoe UI;
      color: white;
      text-align: center;
      background-color: rgba(30, 30, 30, .8);
      padding: 45px 30px 45px 30px;
      width: 80%;
      height: auto;
    }

    #about-right{
      background-color: rgba(69, 156, 117, 0.6);
      display: block;
      height: 100vh;
    }

    #about-text{
      margin-top: 42vh;
      margin-left: 15%;
      text-align: center;
      justify-content: center;

    }

    #about-text p{
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



  /* Extra Large Screens */
  @media only screen and (min-width: 1450px) {

    #text{
      margin-top: 20vh;
    }

    #text p{
      font-size: 1.5em;
    }

  }

  /* Responsive */
  @media only screen and (max-width: 849px) {

    .rowflex{
      flex-direction: column-reverse;
    }

    #text{
      margin-left: 15%;
      margin-top: 5%;
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

    #about-text{
      margin-top: 10%;
      margin-left: 15%;
    }

    #about-text p{
      font-family: Segoe UI;
      font-size: 1em;
      color: white;
      text-align: center;
      padding: 5px;
      width: 80%;
      height: auto;
    }

  }
  
</style>