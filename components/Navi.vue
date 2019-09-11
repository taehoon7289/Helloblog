<template>
  <div class="navi">
    <ul>
      <li><nuxt-link to="/" tag="button">Home</nuxt-link></li>
      <li><nuxt-link to="/intro" tag="button">Intro</nuxt-link></li>
      <li><nuxt-link to="/Post" tag="button">Post</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
    }
  }
</script>

<style>
  .navi {
    border: 1px solid black;
  }
  .navi ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .navi li {
    display: inline;
  }
</style>
