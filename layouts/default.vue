<template>
  <div>
    <router-link to="/">EN</router-link>
    <router-link :to="{ name: 'rs' }">RS</router-link>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { charset: "utf-8" },
        { name: "author", content: "Ivan Jovkovic" },
        {
          hid: "description",
          name: "description",
          content: "Ivan Jovkovic - Front-End Developer",
        },
        {
          name: "keywords",
          content:
            "HTML5, CSS3, JavaScript, jQuery, SASS, Bootstrap, Vue.js, React, React Native, WordPress, Photoshop, Laravel, MySQL",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#007db3" },
        { name: "msapplication-navbutton-color", content: "#007db3" },
        { name: "apple-mobile-web-app-status-bar-style", content: "#007db3" },
      ],
      title: "Ivan Jovkovic | Front-End Developer",
    };
  },
};
</script>

<style>
</style>
