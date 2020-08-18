<template>
  <section class="langueages">
    <div class="header">
      <div class="heading">
        <img
          src="~/assets/icon/driving-license.png"
          class="icon"
          alt="~/assets/icon/driving-license.png"
          title="Driving License"
        />
        <h4 class="mb-0">Driving License</h4>
      </div>
      <div class="btn-collapse">
        <b-button class="switch" v-b-toggle.drivingLicense title="Hide">
          <span class="slider"></span>
        </b-button>
      </div>
    </div>
    <b-collapse id="drivingLicense" visible>
      <div class="wrapper">
        <p v-html="data.drivingLicense"></p>
      </div>
    </b-collapse>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
#drivingLicense {
  .wrapper {
    padding: 20px 30px;
  }
}
</style>