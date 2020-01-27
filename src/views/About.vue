<template>
  <div id="content">

  	  <div class="side-navbar-mobile">
        <router-link to="/about" active-class="active-mobile" exact><img style="width: 4%;" src="../assets/img/logo-white.png" alt="bostos web logo"><span style="margin-left: 33%;">About</span></router-link>
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
  	    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.<br><br>
  	    		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
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
      margin-top: 25%;
      margin-left: 15%;
    }

    #text p {
      font-size: 1.2em;
    }

    #about-right{
      background-color: rgba(69, 156, 117, 0.6);
      display: block;
      height: 100vh;
    }

    #about-text{
      margin-top: 40%;
      margin-left: 15%;
    }

    #about-text p, #text p{
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
      margin-top: 25%;
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