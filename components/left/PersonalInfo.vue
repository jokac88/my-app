<template>
  <section class="personal-info">
    <Header
      :heading="$route.path === '/' ? 'Personal Info' : 'Lični Podaci'"
      property="personal-info"
    />
    <b-collapse id="personal-info" visible>
      <div class="personal-info-wrapper">
        <p v-if="$route.path === '/'" class="property">Date of birth</p>
        <p v-else class="property">Datum rođenja</p>
        <p class="value" v-html="personalInfo.dateOfBirth || personalInfo.datumRođenja"></p>

        <p v-if="$route.path === '/'" class="property">City</p>
        <p v-else class="property">Grad</p>
        <p class="value">{{ personalInfo.city || personalInfo.grad }}</p>

        <p v-if="$route.path === '/'" class="property">Nationality</p>
        <p v-else class="property">Državljanstvo</p>
        <p class="value">{{ personalInfo.nationality || personalInfo.državljanstvo }}</p>

        <p v-if="$route.path === '/'" class="property">Residence</p>
        <p v-else class="property">Prebivalište</p>
        <p class="value">{{ personalInfo.residence || personalInfo.prebivalište }}</p>

        <p v-if="$route.path === '/'" class="property">Mobile</p>
        <p v-else class="property">Mobilni</p>
        <a
          v-for="mobile in personalInfo.mobile || personalInfo.mobilni"
          :href="'tel:' + [mobile.number || mobile.broj]"
          class="value link"
        >{{ mobile.text || mobile.tekst }}</a>

        <p class="property">E-mail</p>
        <a
          :href="'mailto:' + personalInfo.email"
          class="value link"
          title="Contact me"
        >{{ personalInfo.email }}</a>

        <p class="property">Website</p>
        <a
          :href="personalInfo.website"
          class="value link"
          title="Website"
          target="_blank"
        >{{ personalInfo.website }}</a>

        <p class="property">LinkedIn</p>
        <a
          :href="personalInfo.linkedin"
          class="value link"
          title="LinkedIn"
          target="_blank"
        >{{ personalInfo.linkedin }}</a>

        <p class="property">GitHub</p>
        <a
          :href="personalInfo.github"
          class="value link"
          title="GitHub"
          target="_blank"
        >{{ personalInfo.github }}</a>

        <p class="property">Skype</p>
        <p class="value">{{ personalInfo.skype }}</p>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import Header from "@/components/left/Header.vue";

export default {
  props: {
    personalInfo: Object,
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.personal-info {
  &-wrapper {
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
      color: var(--color-left) !important;
      margin-bottom: 10px;
      padding-bottom: 0;
    }
  }
}
</style>