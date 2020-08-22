<template>
  <section class="projects">
    <Header heading="Projects" property="projects" />
    <b-collapse id="projects" visible>
      <div class="wrapper">
        <b-row>
          <b-col
            v-for="project in data.projects"
            :key="project.project"
            cols="6"
            class="item text-center"
          >
            <a :href="project.url" class="link" :title="project.project" target="_blank">
              <h6 v-html="project.project" class="mb-3"></h6>
              <img
                :src="require('~/assets/logo/' + project.image)"
                class="icon"
                :alt="require('~/assets/logo/' + project.image)"
                :title="project.project"
              />
            </a>
          </b-col>
        </b-row>
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
#projects {
  .wrapper {
    padding: 0 25px 20px;
  }

  .item {
    padding: 0 10px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .link {
      position: relative;
      bottom: 0;
      display: block;
      height: 100%;
      padding: 10px;

      @include media-breakpoint-up(lg) {
        opacity: 0.5;
        transition: $transition;

        &:hover {
          opacity: 1;
          bottom: 5px;
        }
      }

      .icon {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>