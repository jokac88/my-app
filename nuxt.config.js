export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  router: {
    base: "/ivan-jovkovic/"
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    meta: [
      {
        name: "keywords",
        content:
          "HTML5, CSS3, JavaScript, jQuery, SASS, Bootstrap 4, Vue.js, Nuxt.js, React, React Native, WordPress, Photoshop, Laravel"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/circle.css"],
  styleResources: {
    scss: ["@/assets/scss/variables.scss", "@/assets/scss/base.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources"
  ],
  pwa: {
    icon: {
      targetDir: "static"
    },
    manifest: {
      short_name: "ij-app"
    },
    meta: {
      name: "Ivan Jovkovic | Front-End Developer",
      theme_color: "#007db3",
      author: "Ivan Jovkovic",
      description:
        "HTML5, CSS3, JavaScript, jQuery, SASS, Bootstrap 4, Vue.js, Nuxt.js, React, React Native, WordPress, Photoshop, Laravel"
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
