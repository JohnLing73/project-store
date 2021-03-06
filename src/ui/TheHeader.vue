<template>
  <header :class="{darkMode: this.themeMode}">
    <base-dialog 
      :showdialog='!!toMemWithoutLog'
      title='Login issue'
      content='You should login before heading to the page!'
      btnText='Go to sign page'
      @close='closeDialog'
    ></base-dialog>
    <div class="logo-container">
      <the-logo logoWidth="70" logoHeight="70"></the-logo>
      <span>Shop</span>
      <router-link to="/home"></router-link>
    </div>
    <nav>
      <div class="icon-link" @click.stop="toggleList">
        <img v-if= "storeTheme === 'dark'" :src= "profileFigDark" alt="profile" id="toggleIcon"/>
        <img v-else :src= "profileFigLight" alt="profile" id="toggleIcon"/>
        <ul id="accountToggleList">
          <li>
            <a @click.prevent="goTo('/profile')" :class="{darkMode: this.$store.state.colorTheme === 'light'}">Your Account</a> 
          </li>
          <li>
            <a @click.prevent="goTo('/orders')" :class="{darkMode: this.$store.state.colorTheme === 'light'}">Your Orders</a>
          </li>
          <li>
            <a @click.prevent="goTo('/wishlists')" :class="{darkMode: this.$store.state.colorTheme === 'light' }">Your Wishlist</a>
          </li>
          <li v-if="!userId">
            <base-button :link = "false" @click= "signPage">Sign Up / In</base-button>
          </li>
          <li v-else>
            <base-button :link = "false" @click= "logout">Log Out</base-button>
          </li>
        </ul>
      </div>
      <div class="icon-link" @click="goTo('/cart')">
        <img v-if= "storeTheme === 'dark'" :src= "cartFigDark" alt="cart" />
        <img v-else :src= "cartFigLight" alt="cart" />
        <transition name="hint-circle">
          <div class="hint-circle" v-if="memCart.length > 0">{{memCart.length}}</div>
        </transition>
      </div>
      <div @click="switchTheme" id="themeIcon">
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
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      moonPath:
        "M15 26.5C15 41.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15 11.3122 15 26.5Z", // store the moon path at first
      sunPath:
        "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z",
      icon: 'moon',
      toggle: false,
      toggleListValue: false,

      toMemWithoutLog: false,
    };
  },
  computed: {
    ...mapGetters(['themeMode', 'toMemberPage','memEmail','userId', 'memCart']),
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
      this.$store.commit('toggleList', true);
    },
    signPage() {
      this.$router.replace('/sign');
    },
    closeDialog() {
      this.toMemWithoutLog = false;
      this.$router.push('/sign');
    },
    goTo(page) {
      if(this.userId) {
        page = '/member/' + this.memEmail + page;
        this.$router.push(page);
      }else {
        this.toMemWithoutLog = true;
      }
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/sign');
    }
  },
  watch: {
    storeTheme(newVal) {
      // Changing the element's color
      const body = document.querySelector("body");
      const ul = document.querySelectorAll("ul");
      const a = document.querySelectorAll("a");
      const card = document.querySelectorAll('.card');
      const form = document.querySelectorAll('form');
      const footer = document.querySelector('footer');
      const colorCircle = document.querySelectorAll('.color-circle');


      (newVal === "light") ? (body.setAttribute("class", "dark-mode")) : (body.removeAttribute("class", "dark-mode"));
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

      for(let i=0; i < colorCircle.length; i++) {
        (newVal === 'light') ? (colorCircle[i].setAttribute('class', 'color-circle dark-mode')) : (colorCircle[i].setAttribute('class', 'color-circle'));
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
  transition: all 0.5s ease;
}

a {
  transition: all 0.3s;
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
    ul {
      position: absolute;
      z-index: -1;
      background-color: $white;
      width: 10rem;
      transform: translate(-3rem,-2rem);
      transition: all 0.8s ease;
      opacity: 0;
      border:1px solid #ccc;
      box-shadow: $box-shadow;
        li {
          padding: 0.7rem;
          width: 141px;
          margin: 0 auto;
          transition: all 0.5s ease;
           > a {
             @include list-link-color();
           }
           &:last-child {
             width: auto;
           }
           > button {
             margin: 0 auto;
             display: block;
           }
        }
    }
}
  .exact-router-link {
    color: $aqua !important;
  }

  .logo-container {
    @include flex-model($align: center);
    position: relative;
      > span {
        font-size: 3rem;
        line-height: 100%;
        font-family: 'Lobster', cursive;
      }
    a {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .hint-circle {
    @include circle-model($r: 20px);
    position: absolute;
    top: -8px;
    left: 20px;
    @include flex-model($content:center, $align: center);
    transition: all 0.5s ease;
  }

  .hint-circle-enter-from,
  .hint-circle-leave-to {
    opacity: 0;
    transform: translateY(50px) scale(2);
  }
  .hint-circle-enter-to,
  .hint-circle-leave-from {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
  .hint-circle-enter-active {
    transition: all 0.5s ease;
  } 
  .hint-circle-leave-active {
    transition: all 0.5s ease-in;
  }
// RWD

@media (max-width: 1200px) {
  input.search-input {
    width: 300px;
  }
}

@media (max-width: 768px) {
  input.search-input {
    width: 200px;
    background-image:none;
    padding: 0.5rem 1.1rem;
  }
}

@media(max-width: 700px) {
  input.search-input {
      display: none;
  }
}

@media(max-width: 576px) {
  // .logo-container {
  //     >span {
  //       font-size: 0;
  //     }
  // }
}
</style>
