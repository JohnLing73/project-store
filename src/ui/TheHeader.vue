<template>
  <header>
    <the-logo logoWidth="75" logoHeight="75"></the-logo>
    <input type="text" ref="searchBar" size="30" placeholder="Search..." class= "search-input"/>
    <nav>
      <div class="icon-link" @click = "toggleList">
        <img v-if= "storeTheme === 'dark'" :src= "profileFigDark" alt="profile" />
        <img v-else :src= "profileFigLight" alt="profile" />
        <ul ref= "list">
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Your Wishlist</li>
          <li>
            <base-button :link = "false">Sign Up / In</base-button>
          </li>
        </ul>
      </div>
      <div class="icon-link">
        <img v-if= "storeTheme === 'dark'" :src= "cartFigDark" alt="cart" />
        <img v-else :src= "cartFigLight" alt="cart" />
        <router-link to="/cart"></router-link>
      </div>
      <div @click = 'switchTheme' id="themeIcon">
        <svg
          id="darkMode"
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
  data() {
    return {
      moonPath:
        "M15 26.5C15 41.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15 11.3122 15 26.5Z", // store the moon path at first
      sunPath:
        "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z",
      icon: 'moon',
      toggle: false,
      toggleListValue: false
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

      // Changing the icon and adding animation
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
    toggleList() {
      const list = this.$refs.list.style;
      if(!this.toggleListValue){
        list.opacity = 1;
        list.zIndex = 5;
        list.transform = 'translate(-3rem,7px)';
      }else {
        list.opacity = 0;
        list.zIndex = -5;
        list.transform = 'translate(-3rem,-3rem)';
      }
      this.toggleListValue = !this.toggleListValue;
    }
  },
  watch: {
    storeTheme(newVal) {
      // Changing the body and the header's color
      const body = document.querySelector("body");
      const header = document.querySelector("header");
      const ul = document.querySelectorAll("ul");
      const a = document.querySelectorAll("a");
      const card = document.querySelectorAll('.card');
      const form = document.querySelectorAll('form');
      const footer = document.querySelector('footer');
      (newVal === "light") ? (body.setAttribute("class", "dark-mode")) : (body.removeAttribute("class", "dark-mode"));
      (newVal === "light") ? (header.setAttribute("class", "dark-mode")) :(header.removeAttribute("class", "dark-mode"));
      (newVal === "light") ? (footer.setAttribute("class", "dark-mode")) :(footer.removeAttribute("class", "dark-mode"));

      //Both of form and  a tag, their dark-mode class will be remove after clicked the router-link
      // Add the darkMode class and bind them on the component which contain these two tags.
      for(let i=0; i < form.length; i++) {
        (newVal === 'light') ? (form[i].setAttribute('class', 'darkMode')) : ( form[i].removeAttribute('class', 'darkMode'));
      }
      for(let i=0; i < ul.length; i++) {
        (newVal === 'light') ? (ul[i].setAttribute('class', 'dark-mode')) : ( ul[i].removeAttribute('class', 'dark-mode'));
      }
      for(let i=0; i < a.length; i++) {
        (newVal === 'light') ? (a[i].setAttribute('class', 'darkMode')) : (a[i].removeAttribute('class', 'darkMode'));
      }
      for(let i=0; i < card.length; i++) {
        (newVal === 'light') ? (card[i].setAttribute('class', 'card dark-mode')) : (card[i].setAttribute('class', 'card'));
      }
    }
  }
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
  transition: all 0.5s ease;
}

input.search-input {
  @include input-style;
  background-image: url("https://img.icons8.com/material-outlined/24/000000/search--v1.png");
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

.swiper-button-prev,
.swiper-button-next {
  transition: all 0.3s linear;
    &:hover {
    background-color: aliceblue;
  }
}

.icon-link {
  position: relative;
    > a {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    ul {
      position: absolute;
      z-index: -1;
      background-color: $white;
      width: 10rem;
      transform: translate(-3rem,-2rem);
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      transition: all 0.8s ease;
      opacity: 0;
      border:1px solid #ccc;
      box-shadow: $box-shadow;
        li {
          padding: 0.7rem;
          transition: all 0.5s ease;
          &:hover {
            text-decoration: underline;
            color: $aqua;
            text-decoration-color: $aqua;
          }
        }
    }
}
</style>
