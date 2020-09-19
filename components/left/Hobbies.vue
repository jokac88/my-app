<template>
  <section id="hobbies" class="hobbies">
    <HeaderLeft :heading="$route.path === '/' ? 'Hobbies' : 'Hobiji'" property="hobbies" />
    <b-collapse id="hobbies-collapse" visible>
      <div class="hobbies-wrapper">
        <ul>
          <li v-for="hobby in hobbies" :key="hobby">
            <Arrow class="arrow" />
            {{ hobby }}
          </li>
        </ul>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import HeaderLeft from "@/components/left/HeaderLeft.vue";
import Arrow from "@/assets/svg/arrow.svg?inline";

export default {
  props: {
    hobbies: Array,
  },
  components: {
    HeaderLeft,
    Arrow,
  },
};
</script>

<style lang="scss">
.hobbies {
  &-wrapper {
    padding: 0 30px 15px;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin: 15px 0;
    padding: 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    .arrow {
      width: 12px;
      height: 12px;
      margin-right: 10px;

      polygon {
        fill: var(--color-left);
        -webkit-transition: $transition-2;
        -moz-transition: $transition-2;
        -o-transition: $transition-2;
        -ms-transition: $transition-2;
        transition: $transition-2;
      }
    }
  }
}
</style>