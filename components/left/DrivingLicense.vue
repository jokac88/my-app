<template>
  <section class="driving-license">
    <Header
      :heading="$route.path === '/' ? 'Driving License' : 'Vozačka Dozvola'"
      property="driving-license"
    />
    <b-collapse id="driving-license" visible>
      <div class="driving-license-wrapper">
        <p v-html="drivingLicense"></p>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import Header from "@/components/left/Header.vue";

export default {
  props: {
    drivingLicense: String,
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.driving-license {
  &-wrapper {
    padding: 0 30px 20px;
  }
}
</style>