<template>
  <b-col class="item text-center" cols="6">
    <a
      :href="project.url || project.link"
      class="link"
      :title="project.project || project.projekat"
      target="_blank"
    >
      <h6 v-html="project.project || project.projekat" class="mb-3"></h6>
      <img
        :src="require('~/assets/logo/' + projectImage)"
        :title="project.project || project.projekat"
        :alt="require('~/assets/logo/' + projectImage)"
        class="icon"
      />
    </a>
  </b-col>
</template>

<script>
export default {
  props: {
    project: Object,
    projectImage: String,
  },
};
</script>

<style>
</style>