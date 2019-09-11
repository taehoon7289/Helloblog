<template>
  <div class="header">
    <h1>Hello Blog!</h1>
    <Navi/>
  </div>
</template>

<script>
  import Navi from '~/components/Navi.vue'
  export default {
    components: {
      Navi
    }
  }
</script>

<style>
  .header {
    border: 1px solid black;
    background-color: #9966FF;
    color: #FFFFFF;
  }
</style>
