<template>
  <section class="personalInfo">
    <div class="header">
      <div class="heading">
        <img
          src="~/assets/icon/personal-info.png"
          class="icon"
          alt="~/assets/icon/personal-info.png"
          title="Personal Info"
        />
        <h4 class="mb-0">Personal Info</h4>
      </div>
      <div class="btn-collapse">
        <b-button class="switch" v-b-toggle.personalInfo title="Hide">
          <span class="slider"></span>
        </b-button>
      </div>
    </div>
    <b-collapse id="personalInfo" visible>
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
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
#personalInfo {
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