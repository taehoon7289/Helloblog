<template>
  <div class="header">
    <div class="left">
      <font-awesome-icon class="sidebar_menu" icon="align-justify" v-on:click="toggle(isViewNavi)"/>
    </div>
    <div class="center">
      <h1>Hello Blog!</h1>
    </div>
    <Sidebar/>
  </div>
</template>

<script>
  import Sidebar from '~/components/Sidebar.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      Sidebar
    },
    computed: {
      isViewNavi () {
        return this.$store.state.header.isViewNavi
      }
    },
    methods: {
      ...mapMutations({
        toggle: 'header/toggle'
      })
    }
  }
</script>

<style>
  .header {
    background-color: #9966FF;
  }
  .header .left {
    position: relative;
    width: 15%;
    display: inline-block;
    color: #FFFFFF;
  }
  .header .center {
    position: relative;
    width: 70%;
    display: inline-block;
    text-align: center;
    color: #FFFFFF;
  }

  .header .sidebar_menu {
    font-size: 30px;
    position:absolute;
    left:50%;
    transform: translate(-50%, -75%);
  }
</style>
