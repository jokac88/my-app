<template>
  <section class="projects">
    <Header :heading="$route.path === '/' ? 'Projects' : 'Projekti'" property="projects" />
    <b-collapse id="projects" visible>
      <div class="wrapper">
        <b-row>
          <b-col
            v-for="project in projects"
            :key="project.project || project.projekat"
            class="item text-center"
            cols="6"
          >
            <a
              :href="project.url || project.link"
              class="link"
              :title="project.project || project.projekat"
              target="_blank"
            >
              <h6 v-html="project.project || project.projekat" class="mb-3"></h6>
              <!-- <template v-else>
                <h1>Ana</h1>
              </template>
              <img
                v-else
                :src="require('~/assets/logo/' + project.slika)"
                :alt="require('~/assets/logo/' + project.slika)"
                class="icon"
              />-->
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
    projects: Array,
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

      @include media-breakpoint-up(lg) {
        opacity: 0.5;
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