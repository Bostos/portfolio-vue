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