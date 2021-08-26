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
    <base-slide :wrapper-data="wrapperData"></base-slide>
    <main>
      <section class="part">
        <base-card v-for = "(cardList, index) in cardLists" :key= "index">
          <h2>{{ cardList.title }}</h2>
          <div class="promote-container">
              <div v-for= "(eachFig, idx) in cardList.imgs" :key = "idx" >
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
    </main>
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
        flex-basis: 50%;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
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
