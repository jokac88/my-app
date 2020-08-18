<template>
  <section class="projects">
    <div class="header">
      <div class="heading">
        <img
          src="~/assets/icon/projects.png"
          class="icon"
          alt="~/assets/icon/projects.png"
          title="Projects"
        />
        <h4 class="mb-0">Projects</h4>
      </div>
      <div class="btn-collapse">
        <b-button class="switch" v-b-toggle.projects title="Hide">
          <span class="slider"></span>
        </b-button>
      </div>
    </div>
    <b-collapse id="projects" visible>
      <div class="wrapper">
        <b-row>
          <b-col
            v-for="project in data.projects"
            :key="project.project"
            md="6"
            class="item text-center"
          >
            <a :href="project.url" class="link" :title="project.project" target="_blank">
              <h6 v-html="project.project" class="mb-3"></h6>
              <img
                :src="require('~/assets/logo/' + project.image)"
                :title="project.project"
                :alt="require('~/assets/logo/' + project.image)"
                class="icon"
              />
            </a>
          </b-col>
        </b-row>
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
      height: 100%;
      display: block;
      position: relative;
      bottom: 0;
      padding: 10px;
      opacity: 0.4;
      transition: $transition;
      border-radius: 3px;

      &:hover {
        opacity: 1;
        bottom: 5px;
      }

      .icon {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>