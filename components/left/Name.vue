<template>
  <section class="name">
    <div class="name-wrapper">
      <h1>{{ name }}</h1>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    name: String,
  },
};
</script>

<style lang="scss">
.name {
  position: relative;
  -moz-background: $gradient-right;
  -webkit-background: $gradient-right;
  background: $gradient-right;

  &-wrapper {
    padding: 10px 30px;

    h1 {
      font-weight: 700;
      text-align: center;
      letter-spacing: 3px;
    }
  }
}
</style>