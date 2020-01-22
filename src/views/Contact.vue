<template>
  <div id="content">
  			
  	<div class="side-navbar-mobile">
        <router-link to="/contact" active-class="active-mobile" exact><img style="width: 4%;" src="../assets/img/logo-white.png" alt="bostos web logo"><span style="margin-left: 33%;">Contact</span></router-link>
        <div id="myLinks" v-if="mobileNavVisible">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/portfolio">Portfolio</router-link>
        </div>
        <a href="javascript:void(0);" class="icon" v-on:click="mobileNavVisible = !mobileNavVisible">
            <i class="fa fa-bars" style="width: 30px; height: auto;"></i>
        </a>
    </div>

  	<div class='rowflex'>

  	    <div class='columnflex'>
  	    	<div id="contact">
  	    		<ContactForm></ContactForm>
  	    	</div>
  	    </div>

        <div class="columnflex">
          <div id="about-right">
            <div id="contact-text">
              <p>Need a coder? Feel free to contact me</p>
            </div>
          </div>
        </div>

  	</div>

  </div>
</template>

<script>
  import ContactForm from '../components/ContactForm.vue';

  export default {
    components: {
      ContactForm: ContactForm
    },
    data: () => ({
      mobileNavVisible: false,
    })
  }
</script>