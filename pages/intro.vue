<template>
  <section class="intro">
    <div class="introImage">
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'adjust']"  />
      <font-awesome-icon icon="dollar-sign"  style="font-size: 30px"/>
      <font-awesome-icon icon="cog"/>
      <font-awesome-layers class="fa-4x">
        <font-awesome-icon icon="circle"/>
        <font-awesome-icon icon="check" transform="shrink-6" :style="{ color: 'white' }"/>
      </font-awesome-layers>
      <font-awesome-layers full-width class="fa-4x">
        <font-awesome-icon icon="calendar"/>
        <font-awesome-layers-text transform="shrink-8 down-3" value="27" class="fa-inverse" />
      </font-awesome-layers>
    </div>
    <div class="subject">
      <h2>소개</h2>
    </div>
    <div class="content">
      <p>Hello Blog</p>
      <ul>
        <li>archor : taehoon.kim</li>
        <li>시작일 : 2019-09-11</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
  .intro li {
    list-style: none;
  }
  .introImage {
    background-image: url('~assets/images/intro_image.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 250px;
  }
</style>

