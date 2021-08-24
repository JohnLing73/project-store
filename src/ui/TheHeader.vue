<template>
  <header>
    <the-logo logoWidth="75" logoHeight="75"></the-logo>
    <input type="text" ref="searchBar" size="30" placeholder="Search...">
    <nav>
      <img :src = "profileFig" alt="">
      <img :src= "cartFig" alt="">
      <button @click="switchTheme">{{ storeTheme }}</button>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    storeTheme() {
      return this.$store.getters.theme;
    },
    profileFig() {
      return this.$store.getters.profileFig;
    },
    cartFig() {
      return this.$store.getters.cartFig;
    }
  },
  methods: {
    switchTheme() {
      this.$store.commit("switchTheme");
    },
  },
  watch: {
    storeTheme(newVal) {
      const body = document.querySelector("body");
      const header = document.querySelector("header");
      newVal === "light"
        ? body.setAttribute("class", "dark-mode")
        : body.removeAttribute("class", "dark-mode");
      newVal === "light"
        ? header.setAttribute("class", "dark-mode")
        : header.removeAttribute("class", "dark-mode");
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
header {
  height: 90px;
  background-color: whitesmoke;
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input {
  background: $white;
  border-radius: 1rem;
  border: 1px solid transparent;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  outline: none;
  background-image: url('https://img.icons8.com/material-outlined/24/000000/search--v1.png');
  background-repeat: no-repeat;
  background-position: 13px;
}
</style>
