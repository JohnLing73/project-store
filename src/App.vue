<template>
  <the-header></the-header>
  <router-view></router-view>
  
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