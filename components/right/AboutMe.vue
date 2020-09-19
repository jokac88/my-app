<template>
  <section id="about-me" class="about-me">
    <HeaderRight :heading="$route.path === '/' ? 'About Me' : 'O Meni'" property="about-me" />
    <b-collapse id="about-me-collapse" visible>
      <div class="about-me-wrapper">
        <p class="text">{{ aboutMe }}</p>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import HeaderRight from "@/components/right/HeaderRight.vue";

export default {
  props: {
    aboutMe: String,
  },
  components: {
    HeaderRight,
  },
};
</script>

<style lang="scss">
.about-me {
  &-wrapper {
    padding: 0 15px 15px;
  }

  .text {
    font-size: 16px;
    text-indent: 30px;
    text-align: justify;
    text-align-last: left;
    line-height: 1.4;
  }
}
</style>