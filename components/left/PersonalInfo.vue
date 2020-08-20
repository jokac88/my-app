<template>
  <section class="personalInfo">
    <Header heading="Personal Info" property="personal-info" />
    <b-collapse id="personal-info" visible>
      <div class="wrapper">
        <p class="property">Date of birth</p>
        <p class="value" v-html="data.personalInfo.dateOfBirth"></p>
        <p class="property">City</p>
        <p class="value">{{ data.personalInfo.city }}</p>
        <p class="property">Nationality</p>
        <p class="value">{{ data.personalInfo.nationality }}</p>
        <p class="property">Residence</p>
        <p class="value">{{ data.personalInfo.residence }}</p>
        <p class="property">Mobile</p>
        <p class="value">{{ data.personalInfo.mobile }}</p>
        <p class="property">E-mail</p>
        <a
          href="mailto:ivan.jovkovic88@gmail.com"
          class="value link"
          title="Contact me"
        >{{ data.personalInfo.email }}</a>
        <p class="property">Website</p>
        <a
          :href="data.personalInfo.website"
          class="value link"
          title="Website"
          target="_blank"
        >{{ data.personalInfo.website }}</a>
        <p class="property">LinkedIn</p>
        <a
          :href="data.personalInfo.linkedin"
          class="value link"
          title="LinkedIn"
          target="_blank"
        >{{ data.personalInfo.linkedin }}</a>
        <p class="property">GitHub</p>
        <a
          :href="data.personalInfo.github"
          class="value link"
          title="GitHub"
          target="_blank"
        >{{ data.personalInfo.github }}</a>
        <p class="property">Skype</p>
        <p class="value">{{ data.personalInfo.skype }}</p>
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
#personal-info {
  .wrapper {
    padding: 0 30px 20px;
  }

  .property {
    font-weight: bold;
  }

  .value {
    padding-bottom: 10px;

    &:last-child {
      padding-bottom: 0;
    }
  }
  a {
    border-bottom: 1px solid transparent;
    transition: $transition;

    &:hover {
      border-color: $white;
    }

    &.link {
      margin-bottom: 10px;
      padding-bottom: 0;
    }
  }
}
</style>