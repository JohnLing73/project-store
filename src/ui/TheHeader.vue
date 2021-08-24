<template>
  <header>
    <the-logo logoWidth="75" logoHeight="75"></the-logo>
    <input type="text" ref="searchBar" size="30" placeholder="Search..." :value= "toggle" />
    <nav>
      <div>
        <img v-if= "storeTheme === 'dark'" :src= "profileFigDark" alt="profile" />
        <img v-else :src= "profileFigLight" alt="profile" />
      </div>
      <div>
        <img v-if= "storeTheme === 'dark'" :src= "cartFigDark" alt="cart" />
        <img v-else :src= "cartFigLight" alt="cart" />
      </div>
      <div @click = 'switchTheme' id="themeIcon">
        <svg
          id="darkMode"
          ref= "darkMode"
          class= "sun"
          width="27"
          height="27"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref= 'path'
            class= "sun"
            :d= "sunPath"
            fill="#FFD600"
          />
        </svg>
      </div>
    </nav>
  </header>
</template>
<script>
import anime from "animejs/lib/anime.es.js";
export default {
  // mounted() {
  //   anime({
  //     targets: "div",
  //     translateX: 250,
  //     rotate: "1turn",
  //     backgroundColor: "#FFF",
  //     duration: 800,
  //   });
  // },
  data() {
    return {
      moonPath:
        "M15 26.5C15 41.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15 11.3122 15 26.5Z", // store the moon path at first
      sunPath:
        "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z",
      icon: 'moon',
      toggle: false
    };
  },
  computed: {
    storeTheme() {
      return this.$store.getters.theme;
    },
    themeIcon() {
      return this.moonPath;
    },
    profileFigDark() {
      return this.$store.getters.profileFigDark;
    },
    profileFigLight() {
      return this.$store.getters.profileFigLight;
    },
    cartFigDark() {
      return this.$store.getters.cartFigDark;
    },
    cartFigLight() {
      return this.$store.getters.cartFigLight;
    },
  },
  methods: {
    switchTheme() {
      this.$store.commit("switchTheme");
    },
  },
  watch: {
    storeTheme(newVal) {
      // Changing the body and the header's color
      const body = document.querySelector("body");
      const header = document.querySelector("header");
      newVal === "light"
        ? body.setAttribute("class", "dark-mode")
        : body.removeAttribute("class", "dark-mode");
      newVal === "light"
        ? header.setAttribute("class", "dark-mode")
        : header.removeAttribute("class", "dark-mode");

      // Changing the icon and adding some animation
      const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
      });
      timeline.add({
        targets: ".sun",
        d: [
          { value: this.toggle ? (this.sunPath) : (this.moonPath) }
        ]
      })
      .add(
        {
          targets:"#darkMode",
          rotate: 320
        },
        "-= 350"
      );      
      if(!this.toggle) {
        this.toggle = true;
      }else {
        this.toggle = false;
      }
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
  background-image: url("https://img.icons8.com/material-outlined/24/000000/search--v1.png");
  background-repeat: no-repeat;
  background-position: 13px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 1.5rem;
    margin-right: 1rem;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}


</style>
