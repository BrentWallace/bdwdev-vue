<template>
  <div id="app">
    <app-navigation></app-navigation>
    <app-jumbotron>
      <h1
        class="display-1 my-4 py-4"
        data-aos="fade"
        data-aos-easing="ease-in"
      >&lt;Hello, world!&gt;</h1>
      <p class="display-4 my-4 py-4" data-aos="fade" data-aos-easing="ease-in">
        I am a full-stack developer
        <br />based in Raleigh, NC.
      </p>
      <hr class="my-4 border-white" data-aos="fade" data-aos-easing="ease-in" data-aos-delay="1500" />
      <h2 class="my-4 py-4" data-aos="fade" data-aos-easing="ease-in">
        Let me help you build your next project!
      </h2>
      <a
        class="btn btn-light btn-lg"
        data-aos="fade"
        data-aos-easing="ease-in"
        href="#"
        role="button"
        data-toggle="modal"
        data-target="#contactModal"
      >
        Contact
        Me
      </a>
    </app-jumbotron>
    <app-project-list></app-project-list>
  </div>
</template>

<script>
import appNavigation from "./components/Navigation.vue";
import appJumbotron from "./components/Jumbotron.vue";
import appProjectList from "./components/ProjectList.vue";

export default {
  name: "App",
  components: {
    appNavigation,
    appJumbotron,
    appProjectList
  }
};
</script>

<style>
  html {
    scroll-behavior:smooth;
  }
</style>
