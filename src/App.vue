<template>
  <the-header></the-header>
  <button @click = "changeTheme">{{ storeTheme }}</button>
  <base-loading></base-loading>
  <p> {{ storeTheme }}</p>
</template>
<script>
export default {
  data(){
    return {
      spinning: false,
      colorTheme: 'dark',
    }
  },
  computed:{
    storeTheme() {
      return this.$store.state.normal.colorTheme;
    }
  },
  methods: {
    changeTheme() {
      this.$store.commit('switchTheme');
    }
  },
  watch: {
    storeTheme(newVal) {
      const body = document.querySelector('body');
      const header = document.querySelector('header');
      (newVal === 'light')? ( body.setAttribute('class', 'dark-mode')) : (body.removeAttribute('class', 'dark-mode'));
      (newVal === 'light')? ( header.setAttribute('class', 'dark-mode')) : (header.removeAttribute('class', 'dark-mode'));
    },
  }
}
</script>
<style lang='scss'>
  /* @import url('https://fonts.googleapis.com/css2?family=Play&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: $white;
    color: $black;
    font-family: 'Play', sans-serif;
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
    transform: translate(2px,2px) rotate(120deg);
  }
  .logo > span:nth-child(3) {
    transform: translate(-2px,2px) rotate(240deg);
  }
  button {
    margin:2rem;
  }

  .spinning {
    animation: spinner 1s ease-in-out;
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