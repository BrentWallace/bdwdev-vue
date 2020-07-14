import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    projects: [
      {
        title: 'BDW.dev',
        image: '/DSC07868-HDR.jpg',
        description: 'A personal profile page for myself! The page was created with VueJS, Vuex and Bootstrap, packaged for production with Vue CLI and is served from an AWS S3 bucket with Cloudfront CDN.',
        technologies: ['VueJS', 'Vuex', 'Vue CLI', 'Bootstrap', 'AWS', 'S3','Route 53','Cloudfront'],
        url: '#',
      },
      {
        title: "Carefield Living Corporate Website",
        image: "/carefieldliving.jpg",
        description: "Corporate website for Carefield Living communities. The backend of the site was constructed with the Django framework, while the front end is constructed with Material Design Bootstrap. The application is hosted on a Digital Ocean droplet. In addition to the customer facing section of the site, it also includes a secured portal for employees to access reference materials and information.",
        url: "https://carefieldliving.com",
        technologies: ['Django', 'Python', 'MDBootstrap'],
      },
      {
        title: "Carefield Community Websites",
        image: "/carefieldpleasanton.jpg",
        description: "Marketing websites for each of the Carefield living communities. Each community website is a Node application that renders each page using the Handlebars templating engine and bootstrap. Each of the community pages is hosted on a Digital Ocean droplet.",
        technologies: ['Node.js', 'Handlebars', 'Bootstrap', 'Javascript'],
        url:'https://carefieldpleasanton.com'
      },
      {
        title: "Motoquest",
        image: "/motoquest.jpg",
        description: "Marketing website for Motoquest, a motorcycle rental company and adventure tour operator based in Anchorage, AK. The site is a self-hosted wordpress application, with several custom api connections to additional services including CRM and email alerts.",
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