<template>
  <div>
    <h1>This is HomePage</h1>
    <section>
    <transition name="wrapper" @beforeenter="beforeEnter">
      <div class="banner-container">
        <img src="../../assets/images/HomePage/shoppingBanner.jpg" alt="" />
        <h2>I shop, therefore I am.</h2>
      </div>
    </transition>
  </section>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  background: lightblue;
  .banner-container {
    height: 80%;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    h2 {
      position: absolute;
      font-size: 2rem;
      text-shadow: 0px 0px 3px $black;
      color: $white;
      top: 65%;
      left: 10%;
      z-index: 3;
    }
    &::after {
      content: "";
      background: black;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.3;
    }
  }
}
</style>
