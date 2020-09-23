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
          v-if="projectImage.slice(projectImage.length - 3) === 'png'"
          :src="require('~/assets/logo/' + projectImage)"
          :title="project.project || project.projekat"
          :alt="require('~/assets/logo/' + projectImage)"
          class="icon"
        />
        <component
          v-else
          :is="projectImage.substring(0, projectImage.length - 4)"
          class="icon-svg"
          :class="`icon-svg-${projectImage.substring(0, projectImage.length - 4)}`"
        />
      </template>
      <DefaultImage v-else class="default-image" />
    </a>
  </b-col>
</template>

<script>
import EderHotel from "~/assets/svg/projects/eder-hotel.svg?inline";
import HairSaloon from "~/assets/svg/projects/hair-saloon.svg?inline";
import Spotter from "~/assets/svg/projects/spotter.svg?inline";
import DefaultImage from "~/assets/svg/default-image.svg?inline";

export default {
  props: {
    project: Object,
    projectImage: String,
  },
  components: {
    EderHotel,
    HairSaloon,
    Spotter,
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