<template>
  <section class="driving-license">
    <Header heading="Driving License" property="driving-license" />
    <b-collapse id="driving-license" visible>
      <div class="wrapper">
        <p v-html="data.drivingLicense"></p>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import Header from "@/components/left/Header.vue";

export default {
  props: {
    data: Object,
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#driving-license {
  .wrapper {
    padding: 0 30px 20px;
  }
}
</style>