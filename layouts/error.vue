<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.message,
    };
  },
  computed: {
    message() {
      return this.error.message;
    },
  },
};
</script>

<style>
</style>