<template>
  <b-col cols="6" lg="4" class="technical-skills-circle">
    <p
      class="technical-skills-text"
      :class="'p-' + technologyImage | substring"
      :style="{ color: technology.color || technology.boja }"
    >{{ technology.technology || technology.tehnologija }}</p>
    <div
      class="c100"
      :class="[technology.percentage || technology.procenat, technologyImage.substring(0, technologyImage.length - 4)]"
    >
      <span>
        <img
          :src="require('~/assets/icon/' + technologyImage)"
          :title="technology.technology || technology.tehnologija"
          :alt="require('~/assets/icon/' + technologyImage)"
          class="logo"
        />
      </span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    technology: Object,
    technologyImage: {
      type: String,
      default: "image.svg",
    },
  },
};
</script>

<style>
</style>