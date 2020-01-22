<template>
  <form @submit="submit" method="post" action="">

    <div class="form-group">
      <label for="name">Name</label>
      <input class="form-control" type="text" name="name" id="name" placeholder="Your name" v-model="name">
      <span v-if="nameErrors.length" class="form-error" id="name-error"><p v-for="error in nameErrors" v-bind:key="error">{{error}}</p></span>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input class="form-control" type="text" name="email" id="email" placeholder="Your email" v-model="email">
      <span v-if="emailErrors.length" class="form-error" id="email-error"><p v-for="error in emailErrors" v-bind:key="error">{{error}}</p></span>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea class="form-control" name="message" id="message" placeholder="Write your message..." v-model="message"></textarea>
      <span v-if="messageErrors.length" class="form-error" id="message-error"><p v-for="error in messageErrors" v-bind:key="error">{{error}}</p></span>
    </div>
    <button class="btn btn-primary" type="submit" id="submit-form">Send</button>
  </form>
</template>

<script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        isSubmitted: false,
        isError: false,
        emailErrors: [],
        nameErrors: [],
        messageErrors: [],
        name: '',
        email: '',
        message: '',
      }
    },
    methods: {
      submit: function(e){
        this.emailErrors = [];
        this.nameErrors = [];
        this.messageErrors = [];

        if(!this.name){
          this.nameErrors.push("Please enter your name")
        }

        if(!this.message){
          this.messageErrors.push("Please enter your message")
        }

        if (!this.email) {
          this.emailErrors.push('Please enter your email');
        }
        else if (!this.validEmail(this.email)) {
          this.emailErrors.push('Please enter valid email format.');
        }

        if (!this.emailErrors.length && !this.messageErrors.length && !this.nameErrors.length) {
          return true;
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