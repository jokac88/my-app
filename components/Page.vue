<template>
  <b-col class="page p-0" cols="10">
    <b-row no-gutters>
      <b-col cols="4" class="left">
        <!-- Picture -->
        <section class="picture py-4 text-center">
          <div id="lightgallery" lg-uid="lg0">
            <a class="item-img" href="~/assets/picture.png" lg-event-uid="&amp;1&amp;2">
              <img src="~/assets/picture.png" alt="~/assets/picture.png" :title="data.name" />
            </a>
          </div>
        </section>

        <!-- Name -->
        <section class="name">
          <h1 class="text-center m-0">{{ data.name }}</h1>
        </section>

        <!-- Headline -->
        <section class="headline">
          <em>{{ data.headline }}</em>
        </section>

        <!-- QR Code -->
        <section class="qr-code">
          <img src="~/assets/qr-code.png" alt="~/assets/qr-code.png" title="QR Code" />
        </section>

        <!-- Portfolio -->
        <section class="portfolio">
          <router-link
            :to="{ name: 'portfolio' }"
            class="btn btn-portfolio"
            target="_blank"
          >Portfolio</router-link>
        </section>

        <!-- Personal Info -->
        <section>
          <div class="header">
            <img src="~/assets/icon/personal-info.png" alt="~/assets/icon/personal-info.png" />
            <h4 class="mb-0">Personal Info</h4>
          </div>
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
          <p class="value">{{ data.personalInfo.email }}</p>
          <p class="property">Website</p>
          <p class="value">{{ data.personalInfo.website }}</p>
          <p class="property">LinkedIn</p>
          <p class="value">{{ data.personalInfo.linkedin }}</p>
          <p class="property">GitHub</p>
          <p class="value">{{ data.personalInfo.github }}</p>
          <p class="property">Skype</p>
          <p class="value">{{ data.personalInfo.skype }}</p>
        </section>

        <!-- Languages -->
        <section>
          <h1>Languages</h1>
          <ul>
            <li v-for="language in data.languages" :key="language.language">
              <p>{{ language.language }}</p>
              <p>{{ language.level }}</p>
            </li>
          </ul>
        </section>

        <!-- Hobbies -->
        <section>
          <h1>Hobbies</h1>
          <ul>
            <li v-for="hobby in data.hobbies" :key="hobby">
              <a>{{ hobby }}</a>
            </li>
          </ul>
        </section>
      </b-col>
      <b-col cols="8">
        <section>
          <h1>About Me</h1>
          <div>{{ data.aboutMe }}</div>
        </section>
        <section>
          <h1>Technical Skills</h1>
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
        </section>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
.page {
  // background-color: blue;
  margin: 15px auto;
  // background-color: #ffffff;
  // border: 3px double $blue-dark;
  border: 3px double black;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  position: relative;
  // transition: $transition-2;
  z-index: 1;

  &.active {
    transform: translate3d(80%, 0, 0);
  }
}
.left {
  background-color: #007db3;
  color: #ffffff;
}
.header {
  position: relative;
  background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  -moz-background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  -webkit-background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  margin-bottom: 20px;

  img {
    margin: 8px 0 8px 20px;
    width: 35px;
  }

  h4 {
    position: absolute;
    line-height: 0;
    top: 50%;
    left: 70px;
    transform: translate(0, -50%);
  }
}
.property {
  margin: 0;
  font-weight: bold;
}
.value {
  margin: 0;
  padding-bottom: 10px;
}
.picture {
  img {
    width: 150px;
    height: 180px;
    border: 3px double #005c85;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
  }
}
.name {
  background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  -moz-background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  -webkit-background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  letter-spacing: 3px;
  font-weight: bold;
  padding: 8px 0;
}
.headline {
  padding: 10px 0 15px;
  text-align: center;
}

.portfolio {
  text-align: center;
  margin-bottom: 20px;

  .btn-portfolio {
    // background-image: $r-gradient;
    color: $white;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    // -webkit-transition: $transition-2;
    // transition: $transition-2;
    z-index: 1;

    &:hover {
      &:after {
        opacity: 1;
      }
    }

    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background-image: $l-gradient;
      // -webkit-transition: $transition-2;
      // transition: $transition-2;
      border-radius: 5px;
      opacity: 0;
      z-index: -1;
    }
  }
}
.qr-code {
  text-align: center;
  margin-bottom: 20px;
  img {
    width: 120px;
  }
}
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

#technicalSkillsCollapse {
  .c100 {
    margin-bottom: 25px;
  }
}
</style>