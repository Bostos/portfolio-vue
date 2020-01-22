<template>
 <div id="content">

 	<div class="side-navbar-mobile">
 	    <router-link to="/" active-class="active-mobile" exact><img style="width: 4%;" src="../assets/img/logo-white.png" alt="bostos web logo"><span style="margin-left: 33%;">Home</span></router-link>
 	    <div id="myLinks" v-if="mobileNavVisible">
 	          <router-link to="/about">About</router-link>
 	          <router-link to="/portfolio">Portfolio</router-link>
 	          <router-link to="/contact">Contact</router-link>
 	    </div>
 	    <a href="javascript:void(0);" class="icon" v-on:click="mobileNavVisible = !mobileNavVisible">
 	        <i class="fa fa-bars" style="width: 30px; height: auto;"></i>
 	    </a>
 	</div>

	<div class='rowflex'>
	    <div class='columnflex'>
	      	<div id="hello-text">
	      		<h1>Hello, I'm Nikola.<br>I'm a full-stack web developer.</h1>
	      	</div>
	      	<div id="hello-text-small">
	      		<p>I'm a software developer living and working in Belgrade, Serbia. I've been working in my field for several years and I have experience in both frontend and backend web development.</p>
	      	</div>
	    </div>
	    <div class='columnflex'>
	    	<div id="profile">
	    		<img id="my-img" src="../assets/img/profile.png" alt="Nikola Stamenkovski">
	    	</div>
	    </div>
	  </div>
  </div>
</template>

<script>
export default {
  	data: () => ({
    	mobileNavVisible: false,
    })
}
</script>
