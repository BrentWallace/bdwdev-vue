<template>
  <div class="container-fluid bg-secondary">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg">
          <a name="projects" class="anchor">
            <h2
              class="text-center text-light display-3 pb-4 mb-4"
              data-aos="fade"
              data-aos-easing="ease-in"
            >Selected Projects</h2>
          </a>
        </div>
      </div>
      <div class="row text-dark">
        <app-project
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :url="project.url"
          :image="project.image"
          :technologies="project.technologies"
        ></app-project>
      </div>
    </div>
  </div>
</template>

<script>
import appProject from "./Project.vue";

export default {
  components: {
    appProject
  },
  computed: {
    projects() {
      return this.$store.getters.getProjects
    },
  }
}
</script>

<style scoped>
</style>