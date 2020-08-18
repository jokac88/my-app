<template>
  <section class="langueages">
    <div class="header">
      <div class="heading">
        <img
          src="~/assets/icon/languages.png"
          class="icon"
          alt="~/assets/icon/languages.png"
          title="Languages"
        />
        <h4 class="mb-0">Languages</h4>
      </div>
      <div class="btn-collapse">
        <b-button class="switch" v-b-toggle.languages title="Hide">
          <span class="slider"></span>
        </b-button>
      </div>
    </div>
    <b-collapse id="languages" visible>
      <ul>
        <li v-for="language in data.languages" :key="language.language">
          <p>{{ language.language }}</p>
          <p>{{ language.level }}</p>
        </li>
      </ul>
    </b-collapse>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
</style>