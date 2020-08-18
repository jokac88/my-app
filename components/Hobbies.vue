<template>
  <section class="hobbies">
    <div class="header">
      <div class="heading">
        <img
          src="~/assets/icon/hobbies.png"
          class="icon"
          alt="~/assets/icon/hobbies.png"
          title="Hobbies"
        />
        <h4 class="mb-0">Hobbies</h4>
      </div>
      <div class="btn-collapse">
        <b-button class="switch" v-b-toggle.hobbies title="Hide">
          <span class="slider"></span>
        </b-button>
      </div>
    </div>
    <b-collapse id="hobbies" visible>
      <div class="wrapper">
        <ul>
          <li v-for="hobby in data.hobbies" :key="hobby">{{ hobby }}</li>
        </ul>
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
#hobbies {
  .wrapper {
    padding: 0 50px 20px;
  }

  li {
    position: relative;
    font-size: 18px;
    margin: 15px 0;
    padding: 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: " ";
      position: absolute;
      top: 4.5px;
      left: -25px;
      width: 18px;
      height: 18px;
      background: url("~assets/arrow.png") center no-repeat;
      background-size: cover;
    }
  }
}
</style>