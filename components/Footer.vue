<template>
  <div class="footer">
    <nuxt-link tag="button" to="/">
      <font-awesome-icon icon="home" /><br>
      HOME
    </nuxt-link>
    <nuxt-link tag="button" to="/intro">
      <font-awesome-icon icon="edit" /><br>
      INTRO
    </nuxt-link>
    <nuxt-link tag="button" to="/post">
      <font-awesome-icon icon="edit" /><br>
      POST
    </nuxt-link>
    <nuxt-link tag="button" to="/yet">
      <font-awesome-icon icon="edit" /><br>
      ??
    </nuxt-link>
  </div>
</template>

<style>
  .footer {
    border-top: 1px solid black;
    position: absolute;
    width: 100vw;
    bottom: 0;
  }
  .footer button {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: #EEEEEE;
    float: left;
    width: 25%;
    height: 50px;
  }
  .footer button.nuxt-link-exact-active {
    background-color: #DDDDDD;
  }
</style>
