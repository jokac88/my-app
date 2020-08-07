<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  layout: "error-layout",
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