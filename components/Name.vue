<template>
  <section class="name">
    <h1 class="text-center m-0">{{ data.name }}</h1>
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
.name {
  background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  -moz-background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  -webkit-background-image: linear-gradient(135deg, #007db3 0, #77ac39 100%);
  letter-spacing: 3px;
  font-weight: bold;
  padding: 10px 15px;
}
</style>