<template>
  <section id="projects" class="projects">
    <HeaderLeft :heading="$route.path === '/' ? 'Projects' : 'Projekti'" property="projects" />
    <b-collapse id="projects-collapse" visible>
      <div class="projects-wrapper">
        <b-row>
          <Project
            v-for="project in projects"
            :key="project.project || project.projekat"
            :project="project"
            :projectImage="project.image || project.slika"
          />
        </b-row>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import HeaderLeft from "@/components/left/HeaderLeft.vue";
import Project from "@/components/Project.vue";

export default {
  props: {
    projects: Array,
  },
  components: {
    HeaderLeft,
    Project,
  },
};
</script>

<style lang="scss">
.projects {
  &-wrapper {
    padding: 0 25px 15px;
  }

  .item {
    padding: 0 5px;
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
      color: var(--color-left) !important;
      -webkit-transition: $transition-2 !important;
      -moz-transition: $transition-2 !important;
      -o-transition: $transition-2 !important;
      -ms-transition: $transition-2 !important;
      transition: $transition-2 !important;

      @include media-breakpoint-up(xl) {
        opacity: 0.5;
        -webkit-transition: $transition;
        -moz-transition: $transition;
        -o-transition: $transition;
        -ms-transition: $transition;
        transition: $transition;

        &:hover {
          opacity: 1;
          bottom: 5px;
        }
      }

      .icon {
        width: 64px;
        height: 64px;
      }
    }
  }
}
</style>