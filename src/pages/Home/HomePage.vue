<template>
  <div>
    <transition name="wrapper">
      <section id="wrapper" v-if="animate" @mousemove="triggerLeave">
        <div class="banner-container">
          <img src="../../assets/images/homepage/shoppingBanner.jpg" alt="" />
          <h2 ref="wrappertext">I shop, therefore I am.</h2>
        </div>
      </section>
    </transition>
    <base-slide :wrapper-data= "wrapperData"></base-slide>
    <main>
      <section class="part">
        <base-card v-for = "(cardList, index) in cardLists" :key= "index">
          <h2>{{ cardList.title }}</h2>
          <div class="promote-container">
              <div v-for= "(eachFig, idx) in cardList.imgs" :key = "idx" >
                <router-link :to="eachFig.prodRoute"></router-link>
                <img :src= "eachFig.src" class= "promote-each-fig">
                <span class= "promote-each-text">
                  <strong>{{ eachFig.category }}</strong>
                </span>
              </div>
          </div>
        </base-card>
      </section>
      <section>
        <base-card>
          <div class="font-banner-container">
              <font-awesome-banner 
                v-for= "fontIcon in fontIconLists" 
                :key= "fontIcon.title"
                :props-icon = "fontIcon.icon"
                :font-title = "fontIcon.title"
                :font-description = "fontIcon.description"
                >
              </font-awesome-banner>
          </div>
        </base-card>
      </section>
      <section id="recommend-slide">
        <recommend-slide></recommend-slide>
      </section>
    </main>
      <section id="sign-up-banner">
        <div>
          <div id="sign-icon-container">
            <sign-icon
              :color= "svgTheme"
            >
            </sign-icon>
          </div>
            <div id="sign-up-slogan">
              <h3>Sign Up For More Member's Advantage!</h3>
              <ol>
                <li>Get the coupon.</li>
                <li>Build your own whishlists.</li>
                <li>Check your orders.</li>
                <li>
                  <base-button :link = "false" @click= "toSignPage">Sign Up / In</base-button>
                </li>
              </ol>
            </div>
        </div>
        <finger-icon
          :color= "svgTheme"
        >
        </finger-icon>
      </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animate: false,
      animateText: false,
      enterInterval: "",
    };
  },
  computed: {
    wrapperData() {
      return this.$store.getters.slideData;
    },
    cardLists() {
      return this.$store.getters.cardLists;
    },
    fontIconLists() {
      return this.$store.getters.fontIconLists;
    },
    svgTheme() {
      return this.$store.getters.svgTheme;
    }
  },
  mounted() {
    this.animate = true;
    // this.animateText = true;
  },
  methods: {
    triggerLeave() {
      this.animate = false;
    },
    toSignPage() {
      this.$router.replace('sign');
    }
  },
};
</script>

<style lang="scss" scoped>
section#wrapper {
  display: flex;
  height: calc(100vh - 127px);
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
      object-fit: cover;
      object-position: 0px 15%;
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
  .part {
      display: flex;
      flex-flow: row nowrap; 
      justify-content: space-between;
      align-items: stretch;
        div {
          flex-basis: 30%;
        }
        h2 {
          text-align: center;
        }
      > h2 {
      text-align: center;
     }
  }
  .promote-container {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
      > div {
        position: relative;
        flex-basis: 50%;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
          > a {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
              &:hover {
                cursor: pointer;
              }
          }
      }
  }

  .font-banner-container {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
      > div {
        display: flex;
        align-items: center;
      }
  }
  #sign-up-banner {
    background-image: linear-gradient(120deg, #6bd692 0%, #8fd3f4 100%);
    padding: 2rem;
    padding-top: 6rem;
    padding-bottom: 3rem;  
    > div {
      display: flex;
      justify-content: center;
    }
  }
  #sign-icon-container {
    height: 200px;
    float: left;
    margin-right: 1.5rem;
  }
  ol {
    padding: 0;
    margin: 0;
      li {
        font-size: $h3;
        margin-bottom: 0.8rem;
      }
  }
  #sign-up-slogan {
    margin-right: -5rem;
    > h3 {
      margin: 0 auto 0.5rem;
      font-size: $h2;
    }
  }

.wrapper-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.wrapper-enter-active {
  transition: all 1.5s ease;
}

.wrapper-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.wrapper-leave-from {
  height: 100%;
  opacity: 1;
  transform: translateX(0px);
}
.wrapper-leave-active {
  transition: all 1s ease-out;
}
.wrapper-leave-to {
  height: 70%;
  opacity: 0;
  transform: translateX(-150px);
}
</style>
