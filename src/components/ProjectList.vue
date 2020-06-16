<template>
  <div class="container-fluid bg-secondary">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg">
          <a name="projects" class="anchor">
            <h1
              class="text-center text-light display-4 pb-4 mb-4"
              data-aos="fade"
              data-aos-easing="ease-in"
            >Projects</h1>
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
  data() {
    return {
      projects: [
        {
          title: "Carefield Living Corporate Website",
          image: "carefieldliving.jpg",
          description: "Corporate website for Carefield Living communities. Carefield living builds and operates senior living communities throughout California.",
          url: "https://carefieldliving.com",
          technologies: ['Django','Python'],
        },
        {
          title: "Madonna Gardens",
          image: "madonnagardens.jpg",
          description: "Marketing website for Madonna Gardens Assisted Living & Memory Care, a senior living community in Salinas, CA.",
          url: "https://madonnagardens.com",
          technologies: ['Node.js','Javascript'],
        },
        {
          title: "Park Visalia",
          image: "parkvisalia.jpg",
          description: "Marketing website for Park Visalia Assisted Living & Memory Care, a senior living community in Visalia, CA",
          url: "https://parkvisalia.com",
          technologies: ['Node.js','Javascript'],
        },
        {
          title: "Carefield Castro Valley",
          image: "carefieldcastrovalley.jpg",
          description: "Marketing website for Carefield Castro Valley Assisted Living & Memory Care, a senior living community in Castro Valley, CA",
          url: "https://carefieldcastrovalley.com",
          technologies: ['Node.js','Javascript'],
        },
        {
          title: "Carefield Pleasanton",
          image: "carefieldpleasanton.jpg",
          description: "Marketing website for Carefield Pleasanton Memory Care, a senior living community in Pleasanton, CA",
          url: "https://carefieldpleasanton.com",
          technologies: ['Node.js','Javascript'],
        },
        {
          title: "Motoquest",
          image: "motoquest.jpg",
          description: "Marketing website for Motoquest, a motorcycle rental company and adventure tour operator based in Anchorage, AK.",
          url: "https://motoquest.com",
          technologies: [ 'Wordpress', 'MySQL', 'PHP' ],
        },
      ]
    };
  }
};
</script>

<style scoped>
</style>