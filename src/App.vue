<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>
<script>
import TheFooter from './ui/TheFooter.vue';
export default {
  components:{
    'the-footer': TheFooter
  },
  data() {
    return {
      spinning: false,
    };
  },
  computed: {},
  methods: {
    
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
  transition: all 0.5s ease;
  // overflow: hidden;
}
.dark-mode {
  background-color: $black;
  color: $white;
}
header.dark-mode,
ul.dark-mode {
  background-color: $header-footer-dark !important;
  color: $white !important;
  li {
    text-decoration-color: $blue !important;
  }
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
// .logo {
//   position: relative;
//   display: inline-block;
// }
// .logo > span {
//   position: absolute;
//   font-size: 2rem;
// }
// .logo > span:nth-child(2) {
//   transform: translate(2px, 2px) rotate(120deg);
// }
// .logo > span:nth-child(3) {
//   transform: translate(-2px, 2px) rotate(240deg);
// }

// .spinning {
//   animation: spinner 1s ease-in-out;
// }

.banner-container {
  width: 100%;
  height: calc(100vh - 10vh);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// @keyframes spinner {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(720deg);
//   }
// }
</style>