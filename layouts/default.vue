<template>
  <div>
    <section class="container">
      <Header/>
      <nuxt/>
      <Footer/>
    </section>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  .container {
    font-family: 'Nanum Gothic', sans-serif;
  }
</style>

