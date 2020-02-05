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

            <p id="email-link">Not fond of contact forms? <a href="mailto:nikola.stamenkovski.web@gmail.com">Send me</a> an email.</p>

            <form name="contact" method="post" style="display:none;" data-netlify="true">

              <div class="form-group">
                <label for="name">Name</label>
                <input class="form-control" type="text" name="name" id="name" placeholder="Your name">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" type="text" name="email" id="email" placeholder="Your email">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" name="message" id="message" placeholder="Write your message..."></textarea>
              </div>
              <button class="btn btn-primary" type="submit" id="submit-form">Send</button>
            </form>
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

<style scoped>
  /* Media Queries - For screens wider than 850px (Desktop version) */
  @media only screen and (min-width: 850px) {

    #about-right{
      background-color: rgba(69, 156, 117, 0.6);
      display: block;
      height: 100vh;
    }

    #contact{
      margin-top: 30%;
      margin-right: 10%;
      margin-left: 10%;
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

    #email-link{
      color: white;
      text-align: center;
      font-size: 18px;
      margin-top: 10%;
    }

    #email-link a{
      text-decoration: none;
      font-weight: bold;
      color: #459c75;
    }

  }

  /* Responsive */
  @media only screen and (max-width: 849px) {

    .rowflex{
      flex-direction: column-reverse;
    }

    #contact{
      margin: 10% 8% 10% 8%;
    }

    #contact-text{
      margin-top: 15%;
      margin-left: 15%;
    }

    #contact-text p{
      font-family: Segoe UI;
      font-size: 1em;
      color: white;
      text-align: center;
      background-color: rgba(30, 30, 30, .6);
      padding: 25px 30px 25px 30px;
      width: 80%;
      height: auto;
    }

    #email-link{
      color: white;
      text-align: center;
      font-size: 14px;
      margin-top: 8%;
    }

    #email-link a{
      text-decoration: none;
      font-weight: bold;
      color: #459c75;
    }

  }
</style>