<template>
  <div id="app">
    <app-navigation></app-navigation>
    <app-jumbotron :background="'DSC07868-HDR.jpg'">
      <div class="align-self-center">
        <h1
          class="display-1 my-4 py-4"
          data-aos="fade"
          data-aos-easing="ease-in"
        >Brent Wallace</h1>
        <p class="display-4 my-4 py-4" data-aos="fade" data-aos-easing="ease-in">
          a full-stack developer based in Raleigh, NC.
        </p>
      </div>
    </app-jumbotron>
    <app-about-me></app-about-me>
    <app-project-list></app-project-list>
    <app-modal>
      <form id="contactForm">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" class="form-control" name="name" v-model.trim="contactForm.name" />
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" class="form-control" v-model.trim="contactForm.email" />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" class="form-control" v-model.trim="contactForm.subject">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            name="message"
            id
            cols="30"
            rows="10"
            class="form-control"
            v-model.trim="contactForm.message"
          ></textarea>
        </div>
        <button class="btn btn-block bg-info text-white" v-on:click.prevent="sendForm">Send</button>
        <div id="formResponse" class="mt-2">
          <div v-if="this.contactForm.status=='loading'" class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="alert alert-success" v-if="this.contactForm.status == 200">{{ this.contactForm.response }}</div>
          <div class="alert alert-danger" v-if="this.contactForm.status == 500">{{ this.contactForm.response }}</div>
        </div>
      </form>
    </app-modal>
  </div>
</template>

<script>
import appNavigation from "./components/Navigation.vue";
import appJumbotron from "./components/Jumbotron.vue";
import appProjectList from "./components/ProjectList.vue";
import appAboutMe from "./components/AboutMe.vue";
import appModal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    appNavigation,
    appJumbotron,
    appProjectList,
    appAboutMe,
    appModal
  },
  data() {
    return {
      pageLoading: true,
      contactForm: {
        name: "test",
        email: "test@test.com",
        subject: 'test subject',
        message: "testing123",
        status: "",
        response: ""
      }
    };
  },
  methods: {
    sendForm: async function() {
      this.contactForm.status = "loading";
      try {
        setTimeout(() => {
          this.contactForm.status = 200;
          this.contactForm.response =
            "Thank you for sending your request! I will get back to you as soon as I can.";
        }, 1000);
      } catch (e) {
        this.contactForm.status = 500;
      }
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.anchor {
  margin-top: -4rem;
  padding-top: 4rem;
}
</style>
