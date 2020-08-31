<template>
  <section class="about-me">
    <HeaderShape :heading="$route.path === '/' ? 'About Me' : 'O Meni'" property="about-me" />
    <b-collapse id="about-me" visible>
      <p class="text">{{ aboutMe }}</p>
    </b-collapse>
  </section>
</template>

<script>
import HeaderShape from "@/components/right/HeaderShape.vue";

export default {
  props: {
    aboutMe: String,
  },
  components: {
    HeaderShape,
  },
};
</script>

<style lang="scss">
#about-me {
  .text {
    font-size: 16px;
    text-indent: 30px;
    text-align: justify;
    text-align-last: left;
    line-height: 1.4;
    margin-bottom: 15px;
  }
}
</style>