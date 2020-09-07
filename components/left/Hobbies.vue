<template>
  <section class="hobbies">
    <Header :heading="$route.path === '/' ? 'Hobbies' : 'Hobiji'" property="hobbies" />
    <b-collapse id="hobbies" visible>
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
import Header from "@/components/left/Header.vue";
import Arrow from "@/assets/svg/arrow.svg?inline";

export default {
  props: {
    hobbies: Array,
  },
  components: {
    Header,
    Arrow,
  },
};
</script>

<style lang="scss">
.hobbies {
  &-wrapper {
    padding: 0 30px 20px;
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
        transition: $transition-2;
        fill: var(--color-left);
      }
    }
  }
}
</style>