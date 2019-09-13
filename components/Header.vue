<template>
  <div class="header">
    <font-awesome-icon class="sidebar_menu" icon="align-justify" v-on:click="toggle(isViewNavi)"/>
    <p class="text">Hello Blog!</p>
    <Sidebar/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Sidebar from '~/components/Sidebar.vue'
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
    position: absolute;
    background-color: #9966FF;
    width: 100%;
    height: 55px;
  }
  .header .left {
    position: relative;
    width: 15%;
    color: #FFFFFF;
  }
  .header .sidebar_menu {
    font-size: 20px;
    position:absolute;
    left:50%;
    transform: translate(-50%, -75%);
  }

  .header .center {
    position: relative;
    width: 70%;
    display: inline-block;
    text-align: center;
    color: #FFFFFF;
    font-size: 20px;
  }
  .header .center p {
    margin: 0;
  }

</style>
