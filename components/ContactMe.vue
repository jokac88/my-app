<template>
  <section class="contact-me">
    <ul>
      <li>
        <a :href="personalInfo.linkedin" title="LinkedIn" target="_blank">
          <LinkedIn class="icon" />
        </a>
      </li>
      <li>
        <a :href="personalInfo.github" title="GitHub" target="_blank">
          <GitHub class="icon" />
        </a>
      </li>
      <li>
        <a :href="'mailto:' + personalInfo.email" title="Contact me">
          <Gmail class="icon" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import LinkedIn from "@/assets/svg/profile/linkedin.svg?inline";
import GitHub from "@/assets/svg/profile/github.svg?inline";
import Gmail from "@/assets/svg/profile/gmail.svg?inline";

export default {
  props: {
    personalInfo: Object,
  },
  components: {
    LinkedIn,
    GitHub,
    Gmail,
  },
};
</script>

<style lang="scss">
.contact-me {
  position: fixed;
  top: 240px;
  left: 0;
  width: 60px;
  height: 180px;
  z-index: 4;

  @include media-breakpoint-down(sm) {
    top: 0;
    width: 80%;
    height: 55px;
    z-index: 2;
  }

  @include media-breakpoint-only(sm) {
    width: 60%;
  }

  ul {
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @include media-breakpoint-down(sm) {
      flex-direction: row;
    }

    li {
      position: relative;
      left: 0;
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;

      @include media-breakpoint-up(xl) {
        &:hover {
          left: 10px;
        }
      }

      .icon {
        width: 36px;
        height: 36px;

        .path {
          fill: var(--color-svg-profile);
          -webkit-transition: $transition-2;
          -moz-transition: $transition-2;
          -o-transition: $transition-2;
          -ms-transition: $transition-2;
          transition: $transition-2;
        }
      }
    }
  }
}
</style>