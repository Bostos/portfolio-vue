<template>

  <form @submit.prevent="submit" method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
    <span class="form-message"><p v-for="message in formMessages" v-bind:key="message">{{message}}</p></span>
    <div class="form-group">
      <input type="hidden" name="bot-field"/>
      <label for="name">Name</label>
      <input class="form-control" type="text" name="name" id="name" placeholder="Your name" v-model="form.name">
      <span v-if="nameErrors.length" class="form-error" id="name-error"><p v-for="error in nameErrors" v-bind:key="error">{{error}}</p></span>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input class="form-control" type="text" name="email" id="email" placeholder="Your email" v-model="form.email">
      <span v-if="emailErrors.length" class="form-error" id="email-error"><p v-for="error in emailErrors" v-bind:key="error">{{error}}</p></span>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea class="form-control" name="message" id="message" placeholder="Write your message..." v-model="form.message"></textarea>
      <span v-if="messageErrors.length" class="form-error" id="message-error"><p v-for="error in messageErrors" v-bind:key="error">{{error}}</p></span>
    </div>
    <button class="btn btn-primary" type="submit" id="submit-form">Send</button>
  </form>
</template>

<script>
  // import axios from "axios";

  export default {
    name: 'ContactForm',
    data: () => ({
      /*return {*/
        form: {
          name: '',
          email: '',
          message: ''
        },
        isSubmitted: false,
        isError: false,
        emailErrors: [],
        nameErrors: [],
        messageErrors: [],
        formMessages: [],
        /*name: '',
        email: '',
        message: '',*/
      /*}*/
    }),
    methods: {
      encode (data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      submit: function(e){

        // const axiosConfig = {
        //   header: { "Content-Type": "application/x-www-form-urlencoded" }
        // };

        this.emailErrors = [];
        this.nameErrors = [];
        this.messageErrors = [];
        this.formMessages = [];

        if(!this.form.name){
          this.nameErrors.push("Please enter your name")
        }

        if(!this.form.message){
          this.messageErrors.push("Please enter your message")
        }

        if (!this.form.email) {
          this.emailErrors.push('Please enter your email');
        }
        else if (!this.validEmail(this.form.email)) {
          this.emailErrors.push('Please enter valid email format.');
        }


        if (!this.emailErrors.length && !this.messageErrors.length && !this.nameErrors.length) {
          // this.name = '';
          // this.email = '';
          // this.message = '';

          // this.formMessages.push('Thank you for your interest! I will contact you shortly.');

          fetch('/', {
            method: 'post',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: this.encode({
              "form-name": "contact",
              ...this.form
            })
          })
          .then(() => {
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
            this.formMessages.push('Thank you for your interest! I will contact you shortly.');
            //this.$router.push('success')
          })
          .catch(() => {
            this.$router.push('404')
          })
          
        }

        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  } 
</script>

<style scoped>
  /* Media Queries - For screens wider than 850px (Desktop version) */
  @media only screen and (min-width: 850px) {

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

    .form-message{
      color: white;
      font-size: 20px;
      text-align: center;
    }

  }

  /* Responsive */
  @media only screen and (max-width: 849px){

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

    .form-message{
      color: white;
      text-align: center;
      font-size: 16px;
    }

  }
</style>