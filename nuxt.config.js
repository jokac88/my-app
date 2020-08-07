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
    base: "/my-app/"
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Ivan Jovkovic | Front-End Developer",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "Ivan Jovkovic" },
      {
        hid: "description",
        name: "description",
        content: "Ivan Jovkovic - Front-End Developer"
      },
      {
        name: "keywords",
        content:
          "HTML5, CSS3, JavaScript, jQuery, SASS, Bootstrap, Vue.js, React, React Native, WordPress, Photoshop, Laravel, MySQL"
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#007db3" },
      { name: "msapplication-navbutton-color", content: "#007db3" },
      { name: "apple-mobile-web-app-status-bar-style", content: "#007db3" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "favicon.ico"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#007db3" },
  /*
   ** Global CSS
   */
  css: [],
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
    "@nuxtjs/axios"
  ],
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
