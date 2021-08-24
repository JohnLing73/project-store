<template>
  <div>
    <transition name="wrapper">
      <section id="wrapper" v-if="animate" @mousemove="triggerLeave">
        <div class="banner-container">
          <img src="../../assets/images/homepage/shoppingBanner.jpg" alt="" />
          <transition name="wrappertext">
            <h2 ref="wrappertext">I shop, therefore I am.</h2>
          </transition>
        </div>
      </section>
    </transition>
    <base-slide :wrapper-data="wrapperData"></base-slide>
  </div>
</template>
<script>
// import { onMounted, ref } from 'vue'
// import gsap from 'gsap';
export default {
  // setup() {
  //   const wrapperTxt = ref();
  //   let animation = null;
  //     onMounted(() => {
  //       animation = gsap
  //                   .timeline()
  //                   .from(wrapperTxt.value, { y: -200, duration: 1})
  //                   .to(wrapperTxt.value, { rotatino: 100, duration: 1});
  //                   console.log(wrapperTxt);
  //     });
  //     const play = () => animation.play();
  //     return {
  //       play,
  //       wrapperTxt,
  //     }
  // },
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
  },
  mounted() {
    this.animate = true;
    // this.animateText = true;
  },
  methods: {
    triggerLeave() {
      this.animate = false;
    },
  },
};
</script>

<style lang="scss" scoped>
section#wrapper {
  display: flex;
  height: calc(100vh - 90px);
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
    // &:first-child {
    //   height: calc(100vh - 90px);
    // }
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
