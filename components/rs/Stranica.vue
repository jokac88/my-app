<template>
  <b-col lg="10" class="page px-0">
    <b-row no-gutters>
      <b-col md="5" lg="4" class="left">
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
          <h1 class="text-center">{{ data.ime }}</h1>
        </section>

        <!-- Headline -->
        <section class="headline">
          <em>{{ data.naslov }}</em>
        </section>

        <!-- QR Code -->
        <section class="qr-code">
          <img src="~/assets/qr-code.svg" alt="~/assets/qr-code.svg" title="QR Code" />
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
          <p class="property">Datum rođenja</p>
          <p class="value">{{ data.ličniPodaci.datumRođenja }}</p>
          <p class="property">Grad</p>
          <p class="value">{{ data.ličniPodaci.grad }}</p>
          <p class="property">Državljanstvo</p>
          <p class="value">{{ data.ličniPodaci.državljanstvo }}</p>
          <p class="property">Prebivalište</p>
          <p class="value">{{ data.ličniPodaci.prebivalište }}</p>
          <p class="property">Mobilni</p>
          <p class="value">{{ data.ličniPodaci.mobilni }}</p>
          <p class="property">E-mail</p>
          <p class="value">{{ data.ličniPodaci.e-mail }}</p>
          <p class="property">Website</p>
          <p class="value">{{ data.ličniPodaci.website }}</p>
          <p class="property">LinkedIn</p>
          <p class="value">{{ data.ličniPodaci.linkedin }}</p>
          <p class="property">GitHub</p>
          <p class="value">{{ data.ličniPodaci.github }}</p>
          <p class="property">Skype</p>
          <p class="value">{{ data.ličniPodaci.skype }}</p>
        </section>

        <!-- Languages -->
        <section>
          <h1>Jezici</h1>
          <ul>
            <li v-for="jezik in data.jezici" :key="jezik.jezik">
              <p>{{ jezik.jezik }}</p>
              <p>{{ jezik.level }}</p>
            </li>
          </ul>
        </section>

        <!-- Hobbies -->
        <section>
          <h1>Hobiji</h1>
          <ul>
            <li v-for="hobi in data.hobiji" :key="hobi">
              <a>{{ hobi }}</a>
            </li>
          </ul>
        </section>
      </b-col>
      <b-col md="7" lg="8" class="p-4">
        <section>
          <h1>O Meni</h1>
          <div>{{ data.oMeni }}</div>
        </section>
        <section>
          <h1>Tehničke Veštine</h1>
          <b-row>
            <b-col
              v-for="tehnologija in data.tehničkeVeštine"
              :key="tehnologija.tehnologija"
              cols="4"
              class="technical-skills-circle"
            >
              <p
                class="technical-skills-text"
                :class="tehnologija.klasa + '-p'"
                :style="{ color: tehnologija.boja }"
              >{{ tehnologija.tehnologija }}</p>
              <div class="c100" :class="[tehnologija.klasa, 'p' + tehnologija.procenat]">
                <span>
                  <img
                    class="logo"
                    :src="require('~/assets/icon/' + tehnologija.klasa + '.png')"
                    :title="tehnologija.tehnologija"
                    :alt="require('~/assets/icon/' + tehnologija.klasa + '.png')"
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
  // border: 3px double $orient;
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
  background-image: $gradient-right;
  -moz-background-image: $gradient-right;
  -webkit-background-image: $gradient-right;
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
  background-image: $gradient-right;
  -moz-background-image: $gradient-right;
  -webkit-background-image: $gradient-right;
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
    // background-image: $gradient-right;
    color: $white;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    -webkit-transition: $transition-2;
    transition: $transition-2;
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
      // background-image: $gradient-left;
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
    width: 100px;
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