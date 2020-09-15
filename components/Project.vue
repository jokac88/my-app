<template>
  <b-col class="item text-center" cols="6">
    <a
      :href="project.url || project.link"
      class="link"
      :title="project.project || project.projekat"
      target="_blank"
    >
      <h6 v-html="project.project || project.projekat" class="mb-3"></h6>
      <template v-if="projectImage">
        <img
          :src="require('~/assets/logo/' + projectImage)"
          :title="project.project || project.projekat"
          :alt="require('~/assets/logo/' + projectImage)"
          class="icon"
        />
      </template>
      <DefaultImage v-else class="default-image" />
    </a>
  </b-col>
</template>

<script>
import DefaultImage from "~/assets/svg/image.svg?inline";

export default {
  props: {
    project: Object,
    projectImage: String,
  },
  components: {
    DefaultImage,
  },
};
</script>

<style lang="scss">
.default-image {
  width: 64px;
  height: 64px;

  .path {
    fill: var(--color-left);
  }
}
</style>