<template>
  <div class="sidebar">
    <div class="cover" v-bind:class="{'invisible': !isViewSidebar}" v-on:click="toggle(isViewSidebar)"></div>
    <div class="menu" v-bind:class="{'invisible': !isViewSidebar}">
      <ul>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
        <li><p>가나다라마바사</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    isViewSidebar () {
      return this.$store.state.header.isViewSidebar
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
  .sidebar .cover {
    background: rgba(0,0,0,.4);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 50;
  }
  .sidebar .menu {
    position: fixed;
    z-index: 55;
    width: 55vw;
    height: calc(100% - 200px);
    background-color: #FFFFFF;
    transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    overflow-x: hidden;
  }
  .sidebar .menu.invisible, .sidebar .cover.invisible {
    width: 0px;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sidebar li {
    background-color: #FFFFFF;
    text-align: center;
  }
  .sidebar li:hover {
    background-color: #EEEEEE;
  }
  .sidebar li p {
    margin: 0px;
    padding: 10px;
    font-size: 25px;
  }
</style>
