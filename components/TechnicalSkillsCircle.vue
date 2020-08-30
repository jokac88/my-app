<template>
  <b-col cols="6" md="4" class="technical-skills-circle">
    <p
      class="technical-skills-text"
      :class="'p-' + [technology.class || technology.klasa]"
      :style="{ color: technology.color || technology.boja }"
    >{{ technology.technology || technology.tehnologija }}</p>
    <div
      class="c100"
      :class="[{ 'dark-mode' : darkMode }, technology.class || technology.klasa, technology.percentage || technology.procenat]"
    >
      <span>
        <img
          :src="require('~/assets/icon/' + technologyImage + '.png')"
          :title="technology.technology || technology.tehnologija"
          :alt="require('~/assets/icon/' + technologyImage + '.png')"
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
    technologyImage: String,
    darkMode: Boolean,
  },
};
</script>

<style>
</style>