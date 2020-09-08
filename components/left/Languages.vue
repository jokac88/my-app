<template>
  <section class="languages">
    <Header :heading="$route.path === '/' ? 'Languages' : 'Jezici'" property="languages" />
    <b-collapse id="languages" visible>
      <div class="languages-wrapper">
        <div v-for="language in languages" :key="language.language || language.jezik">
          <p class="language">{{ language.language || language.jezik }}</p>
          <div class="meter">
            <span :style="{ width: language.percentage || language.procenat + '%' }"></span>
          </div>
          <p class="level">{{ language.level || language.nivo }}</p>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import Header from "@/components/left/Header.vue";

export default {
  components: {
    Header,
  },
  props: {
    languages: Array,
  },
};
</script>

<style lang="scss">
.languages {
  &-wrapper {
    padding: 0 25px 20px;
  }

  .language {
    padding: 0 10px 5px;
    font-weight: 700;
  }

  .meter {
    height: 30px;
    position: relative;
    background-color: var(--bg-meter);
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    padding: 10px;
    -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.2);
    -webkit-transition: $transition-2;
    -moz-transition: $transition-2;
    -o-transition: $transition-2;
    -ms-transition: $transition-2;
    transition: $transition-2;

    & > span {
      display: block;
      height: 100%;
      -moz-border-radius: 20px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
      -webkit-box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.2);
      -moz-box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.2);
      box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.2),
        inset 0 -2px 6px rgba(0, 0, 0, 0.4);
      position: relative;
      overflow: hidden;
      background-size: 30px 30px;
      -moz-background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      -webkit-background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      animation: animate-stripes 3s linear infinite;
    }

    @keyframes animate-stripes {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: 60px 0;
      }
    }
  }

  .level {
    padding: 5px 10px 20px;
    text-align: right;

    &:last-child {
      padding-bottom: 0;
    }
  }
}
</style>