<template>
  <section class="hobbies">
    <Header :heading="$route.path === '/' ? 'Hobbies' : 'Hobiji'" property="hobbies" />
    <b-collapse id="hobbies" visible>
      <div class="wrapper">
        <ul>
          <li v-for="hobby in hobbies" :key="hobby">{{ hobby }}</li>
        </ul>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import Header from "@/components/left/Header.vue";

export default {
  props: {
    hobbies: Array,
  },
  components: {
    Header,
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