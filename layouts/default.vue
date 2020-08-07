<template>
  <div>
    <router-link :to="{ name: 'index' }" exact>EN</router-link>
    <router-link :to="{ name: 'rs' }">RS</router-link>
    <Nuxt />
  </div>
</template>

