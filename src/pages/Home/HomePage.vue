<template>
  <div>
    <transition name="wrapper">
      <landing-page v-if="animate && showOnce" @mouseover="triggerLeave"></landing-page>
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
            <div id="sign-up-slogan">
              <h3>Sign Up For More...</h3>
              <ol>
                <li>Buy the product.</li>
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
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      animate: false,
      animateText: false,
      enterInterval: "",
    };
  },
  computed: {
    ...mapGetters(['showOnce']),
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
  created() {
    this.animate = true;
  },
  methods: {
    triggerLeave() {
      this.animate = false;
      this.$store.commit('showOnceOff');
    },
    toSignPage() {
      this.$router.replace('sign');
    }
  },
};
</script>

<style lang="scss" scoped>
  .part {
      display: flex;
      flex-flow: row nowrap; 
      justify-content: space-between;
      align-items: stretch;
        >div {
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
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        // margin: 0.5rem;
        flex-basis: 50%;
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

@media (max-width: 1552px) {
  .promote-container {
    > div {
      width: 186px;
    }
  }
}
@media(max-width: 1200px) {
  .font-banner-container {
    @include flex-model($dir: row, $wrap: wrap );
     > div {
       width: 50%;
     }
  }
}

@media (max-width: 1431px) {
  .part {
    @include flex-model($dir: column, $content: center, $align: center);
      > div {
        width: 100%;
      }
  }
  .promote-container {
    > div {
      flex-basis: auto;
      margin: 0 $distance-window;
    }
  }
}

@media (max-width: 1067px) {
  .promote-container {
    > div {
      margin: 0;
    }
  }
}
@media (max-width: 944px) {
  .part {
    > div {
      width: 411px;
    }
  }
}

@media (max-width: 725px) {
  .font-banner-container {
    @include flex-model($dir: column, $align: center);
    > div {
      width: 293px;
      margin: 0.5rem auto;
    }
  }
}
</style>