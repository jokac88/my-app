<template>
  <section>
    <HeaderShape heading="Technical Skills" property="technical-skills" />
    <b-collapse id="technical-skills" visible>
      <b-row>
        <b-col
          v-for="technology in data.technicalSkills"
          :key="technology.technology"
          cols="4"
          class="technical-skills-circle"
        >
          <p
            class="technical-skills-text"
            :class="technology.class + '-p'"
            :style="{ color: technology.color }"
          >{{ technology.technology }}</p>
          <div class="c100" :class="[technology.class, 'p' + technology.percentage]">
            <span>
              <img
                class="logo"
                :src="require('~/assets/icon/' + technology.class + '.png')"
                :title="technology.technology"
                :alt="require('~/assets/icon/' + technology.class + '.png')"
              />
            </span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-collapse>
  </section>
</template>

<script>
import HeaderShape from "@/components/right/HeaderShape.vue";

export default {
  props: {
    data: Object,
  },
  components: {
    HeaderShape,
  },
};
</script>

<style lang="scss">
#technical-skills {
  .technical-skills-text {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  .logo {
    width: 70px;
  }

  .c100 {
    margin: 0 auto 25px;
    float: none;
  }
}
</style>