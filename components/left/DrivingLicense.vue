<template>
  <section id="driving-license" class="driving-license">
    <HeaderLeft
      :heading="$route.path === '/' ? 'Driving License' : 'Vozačka Dozvola'"
      property="driving-license"
    />
    <b-collapse id="driving-license-collapse" visible>
      <div class="driving-license-wrapper">
        <p v-html="drivingLicense"></p>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import HeaderLeft from "@/components/left/HeaderLeft.vue";

export default {
  props: {
    drivingLicense: String,
  },
  components: {
    HeaderLeft,
  },
};
</script>

<style lang="scss">
.driving-license {
  &-wrapper {
    padding: 0 30px 15px;
  }
}
</style>