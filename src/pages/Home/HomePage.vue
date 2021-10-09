<template>
  <div id="whole-container">
    <transition name="wrapper">
      <landing-page
        v-if="showOnce"
        @mouseover="triggerLeave"
      ></landing-page>
    </transition>
    <base-slide :wrapper-data="wrapperData"></base-slide>
    <main>
      <section class="part">
        <base-card v-for="(cardList, index) in cardLists" :key="index">
          <h2>{{ cardList.title }}</h2>
          <div class="promote-container">
            <div v-for="(eachFig, idx) in cardList.imgs" :key="idx">
              <router-link :to="eachFig.prodRoute"></router-link>
              <img :src="eachFig.src" class="promote-each-fig" />
              <span class="promote-each-text">
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
              v-for="fontIcon in fontIconLists"
              :key="fontIcon.title"
              :props-icon="fontIcon.icon"
              :font-title="fontIcon.title"
              :font-description="fontIcon.description"
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
              <base-button :link="false" @click="toSignPage"
                >Sign Up / In</base-button
              >
            </li>
          </ol>
        </div>
      </div>
      <div id="finger-icon">
        <svg
          width="106"
          height="85"
          ref="finger"
          viewBox="0 0 106 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M98.0985 25.5797L77.5895 3.04157C73.5313 -1.01661 66.9204 -1.02198 62.8241 3.0743C61.526 4.37239 60.6424 5.92694 60.1842 7.5853C56.1043 4.45984 50.2187 4.77075 46.4604 8.52902C45.1677 9.82712 44.2841 11.3817 43.8149 13.0344C39.735 9.91993 33.8494 10.2252 30.0968 13.9835C28.8258 15.2545 27.9531 16.7707 27.4786 18.3853L17.813 8.71976C13.7549 4.66157 7.14395 4.6562 3.04767 8.75248C-1.01589 12.8107 -1.01589 19.4216 3.04767 23.4851L40.1822 60.6196L18.1567 64.0777C12.2057 64.9286 7.71668 70.0995 7.71668 76.116C7.71668 80.627 11.3875 84.2978 15.8985 84.2978H67.3295C75.3423 84.2978 82.8749 81.1777 88.5421 75.5105L97.122 66.9306C102.784 61.2742 105.898 53.7469 105.898 45.7451C105.898 38.2722 103.127 31.1106 98.0985 25.5797ZM93.2656 63.0742L84.6857 71.6541C80.0494 76.2904 73.8857 78.8431 67.3292 78.8431H15.8982C14.3928 78.8431 13.1709 77.6212 13.1709 76.1157C13.1709 72.7993 15.6472 69.9466 18.969 69.4721L46.3236 65.1738C47.3382 65.0156 48.1727 64.3012 48.4946 63.3247C48.8109 62.3539 48.5547 61.2793 47.8291 60.5539L6.90386 19.6287C4.96758 17.6924 4.96758 14.5396 6.93122 12.5706C7.90205 11.6051 9.17304 11.1196 10.444 11.1196C11.715 11.1196 12.9858 11.6051 13.9569 12.576L41.2461 39.8651C42.3097 40.9288 44.0389 40.9288 45.1025 39.8651C45.6315 39.3305 45.899 38.6325 45.899 37.9342C45.899 37.236 45.6318 36.538 45.0971 36.0033L33.9535 24.8597C32.0172 22.9234 32.0172 19.776 33.9862 17.807C35.9171 15.876 39.0753 15.876 41.0062 17.807L52.1552 28.956C53.2189 30.0196 54.9481 30.0196 56.0117 28.956C56.5407 28.4213 56.8081 27.7233 56.8081 27.0251C56.8081 26.3268 56.541 25.6288 56.0063 25.0941L50.3171 19.405C48.3809 17.4687 48.3809 14.3212 50.3499 12.3522C52.2808 10.4213 55.439 10.4213 57.3699 12.3522L63.0862 18.0685C63.0972 18.0739 63.0915 18.0739 63.0915 18.0739L63.0969 18.0792C63.1023 18.0846 63.1023 18.0846 63.1023 18.0846C63.1076 18.09 63.1076 18.09 63.1076 18.09H63.113C63.1184 18.09 63.1184 18.0954 63.1184 18.0954C64.1874 19.1099 65.8785 19.0882 66.9201 18.0409C67.9837 16.9773 67.9837 15.2481 66.9201 14.1844L66.6856 13.95C65.7475 13.0119 65.2293 11.7626 65.2293 10.4372C65.2293 9.11172 65.7419 7.86808 66.713 6.89725C68.6549 4.96634 71.7967 4.97171 73.6458 6.80444L94.0677 29.25C98.1747 33.7722 100.444 39.6304 100.444 45.7451C100.444 52.2905 97.8965 58.4433 93.2656 63.0742Z"
            :fill="svgTheme"
          />
        </svg>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default {
  data() {
    return {
      animateText: false,
      enterInterval: "",
    };
  },
  computed: {
    ...mapGetters(["showOnce","landingFinished"]),
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
    },
  },
  created() {
  },
  methods: {
    triggerLeave() {
      if(this.landingFinished){
        this.$store.commit("showOnceOff");
      }
    },
    toSignPage() {
      this.$router.replace("sign");
    },
    animation() {
      const tl = gsap.timeline({
        scrollTrigger: {
          start: "-50 center",
          end: "+=430 40%",
          trigger: "#sign-up-banner",
          toggleActions: "play pause reverse reset",
          scrub: true,
        },
      });
      const { finger } = this.$refs;
      tl.set(finger,
        { xPercent: 850, yPercent: -250, opacity: 0.3 }
      )
      tl.to(finger, {
        motionPath: {
          path: [
            { xPercent: 250, yPercent: 70, opacity: 0.5 },
            { xPercent: 50, yPercent: 50, opacity: 0.7 },
            { x: 0, y: 0, opacity: 1 },
          ],
        },
      }).to(
        finger,
        {
          rotation: 45,
          x: -45,
          duration: 0.5,
        },
      );
    },
  },
  mounted() {
    this.animation();
  },
};
</script>

<style lang="scss" scoped>
#whole-container {
  position: relative;
}

.part {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
  > div {
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
  padding: 6rem 2rem;
  position: relative;
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
    position: relative;
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

.box {
  width: 100px;
  height: 100px;
  background-color: rgb(247, 81, 233);
  border: 8px;
  box-shadow: 0px 2px 2px rgba(252, 252, 235, 0.863);
}
#finger-icon {
  position: relative;
}

@media (max-width: 1552px) {
  .promote-container {
    > div {
      width: 186px;
    }
  }
}
@media (max-width: 1200px) {
  .font-banner-container {
    @include flex-model($dir: row, $wrap: wrap);
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
