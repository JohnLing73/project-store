<template>
  <section id="wrapper">
    <div class="slider" ref="slider"></div>
    <div class="banner-container" ref="containerRef">
      <img src="../../assets/images/homepage/shoppingBanner.jpg" alt="" />
      <h2 ref="wrappertext">I shop, therefore I am.</h2>
    </div>
  </section>
</template>
<script>
import { gsap, Power2 } from 'gsap';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['landingFinished'])
  },
  methods: {
    async animation() {
      const tl = gsap.timeline();
      await tl.fromTo(this.$refs.containerRef, 
        {height: '0%'},
        {height: '80%', duration: 1, ease: Power2.easeInOut},
        )
        .fromTo(this.$refs.containerRef, 
          {width: '100%'},
          {width: '80%', duration: 1.2, ease: Power2.easeInOut},
        )
        .fromTo(this.$refs.slider,
          {x: '-100%'},
          {x: '0%', duration: 1.2, ease: Power2.easeInOut}, 
          '-=1.2'
        )
        .fromTo(this.$refs.wrappertext,
          {x: '-10%', opacity: '0'},
          {x: '0%', opacity: '1', duration:1, ease: Power2.easeIn},
          '-=1',
        )
      setTimeout(()=> {
        this.$store.commit('showOnceOff')
      },700);
    },
  },
  mounted() {
    this.animation();
  },
};
</script>
<style lang="scss" scoped>
#wrapper {
  display: flex;
  height: calc(100vh - 127px);
  justify-content: center;
  align-items: center;
  background: $white;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10;
  .banner-container {
    height: 80%;
    width: 100%;
    position: relative;
    img {
      object-fit: cover;
      object-position: 0px 15%;
      height: 100%;
      width: 100%;
      z-index: 2;
    }
    h2 {
      position: absolute;
      font-size: 4.5rem;
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
  .slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: lightblue;
  }

  //RWD
  @media(max-width: 1400px) {
    
  }

  @media(max-widtH: 1200px) {
    #wrapper {
      .banner-container {
        h2 {
          left: 6%;
        }
      }
    }
  }
  @media(max-widtH: 1100px) {
    #wrapper {
      .banner-container {
        h2 {
          font-size: 3.7rem;
          left: 5%;
        }
      }
    }
  }

  @media(max-widtH: 970px) {
    #wrapper {
      .banner-container {
        h2 {
          font-size: 3.5rem;
          left: 3%;
        }
      }
    }
  }

  @media(max-widtH: 850px) {
    #wrapper {
      .banner-container {
        h2 {
          font-size: 3rem;
        }
      }
    }
  }

  @media(max-widtH: 720px) {
    #wrapper {
      .banner-container {
        h2 {
          font-size: 2.5rem;
        }
      }
    }
  }

   @media(max-widtH: 620px) {
    #wrapper {
      .banner-container {
        h2 {
          font-size: 2rem;
        }
      }
    }
  }
</style>
