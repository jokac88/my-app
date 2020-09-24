export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  router: {
    base: "/ivan-jovkovic/"
  },
  server: {
    port: 8000,
    host: "0.0.0.0"
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
   ** Customize the progress-bar color
   */
  loading: "~/components/Loading.vue",
  /*
   ** Global CSS
   */
  css: [
    "~assets/scss/_base.scss",
    "~assets/css/circle.css",
    "~assets/css/hamburgers.min.css"
  ],
  styleResources: {
    scss: ["~assets/scss/_variables.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~plugins/filters.js",
    "~/plugins/bus.js",
    "~/plugins/touchEvents.js",
    "~/plugins/scrollActive.js"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/svg", "@nuxtjs/color-mode"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources"
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  pwa: {
    manifest: {
      short_name: "ij-app"
    },
    meta: {
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no",
      name: "Ivan Jovkovic | Front-End Developer",
      theme_color: "#0082c3",
      author: "Ivan Jovkovic",
      description:
        "HTML5, CSS3, JavaScript, jQuery, SASS, Bootstrap 4, Vue.js, Nuxt.js, React, React Native, WordPress, Photoshop, Laravel"
    }
  },
  env: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://api.jsonbin.io/"
        : "http://localhost:3000"
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
