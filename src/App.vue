<template>
  <the-header></the-header>
  <section>
    <transition name="wrapper" @beforeenter="beforeEnter">
      <div class="banner-container">
        <img src="./assets/images/HomePage/shoppingBanner.jpg" alt="" />
        <h2>I shop, therefore I am.</h2>
      </div>
    </transition>
  </section>
</template>
<script>
export default {
  data() {
    return {
      spinning: false,
      colorTheme: "dark",
    };
  },
  computed: {},
  methods: {
    // beforeEnter(el) {
    //   console.log(el);
    //   el.style.transform = "translate(200px,200px)";
    // },
    // enter(el, done) {
    //   console.log(el);
    //   el.style.transform = "translate(200px,200px)";
    //   done();
    // },
  },
  watch: {},
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap");
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: $white;
  color: $black;
  font-family: "Play", sans-serif;
}
.dark-mode {
  background-color: $black;
  color: $white;
}
header.dark-mode {
  background-color: $header-footer-dark;
  color: $white;
}
.logo {
  position: relative;
  display: inline-block;
}
.logo > span {
  position: absolute;
  font-size: 2rem;
}
.logo > span:nth-child(2) {
  transform: translate(2px, 2px) rotate(120deg);
}
.logo > span:nth-child(3) {
  transform: translate(-2px, 2px) rotate(240deg);
}
button {
  margin: 2rem;
}

.spinning {
  animation: spinner 1s ease-in-out;
}

.banner-container {
  width: 100%;
  height: calc(100vh - 10vh);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
}
</style>
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
