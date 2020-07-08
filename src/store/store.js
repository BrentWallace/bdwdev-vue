import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    projects: [
      {
        title: "Carefield Living Corporate Website",
        image: "carefieldliving.jpg",
        description: "Corporate website for Carefield Living communities. Carefield living builds and operates senior living communities throughout California.",
        url: "https://carefieldliving.com",
        technologies: ['Django', 'Python'],
      },
      {
        title: "Madonna Gardens",
        image: "madonnagardens.jpg",
        description: "Marketing website for Madonna Gardens Assisted Living & Memory Care, a senior living community in Salinas, CA.",
        url: "https://madonnagardens.com",
        technologies: ['Node.js', 'Javascript'],
      },
      {
        title: "Park Visalia",
        image: "parkvisalia.jpg",
        description: "Marketing website for Park Visalia Assisted Living & Memory Care, a senior living community in Visalia, CA",
        url: "https://parkvisalia.com",
        technologies: ['Node.js', 'Javascript'],
      },
      {
        title: "Carefield Castro Valley",
        image: "carefieldcastrovalley.jpg",
        description: "Marketing website for Carefield Castro Valley Assisted Living & Memory Care, a senior living community in Castro Valley, CA",
        url: "https://carefieldcastrovalley.com",
        technologies: ['Node.js', 'Javascript'],
      },
      {
        title: "Carefield Pleasanton",
        image: "carefieldpleasanton.jpg",
        description: "Marketing website for Carefield Pleasanton Memory Care, a senior living community in Pleasanton, CA",
        url: "https://carefieldpleasanton.com",
        technologies: ['Node.js', 'Javascript'],
      },
      {
        title: "Motoquest",
        image: "motoquest.jpg",
        description: "Marketing website for Motoquest, a motorcycle rental company and adventure tour operator based in Anchorage, AK.",
        url: "https://motoquest.com",
        technologies: ['Wordpress', 'MySQL', 'PHP'],
      },
    ],
  },
  getters: {
    getProjects: state => {
      return state.projects;
    }
  }
})