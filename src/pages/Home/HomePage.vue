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
    <section class="part">
      <base-card v-for = "(cardList, index) in cardLists" :key= "index">
        <h1>{{ cardList.title }}</h1>
        <div class="promote-container">
              <img v-for= "(eachFig, idx) in cardList.src" :key = "idx" :src= "eachFig" class= "promote-each-fig">
              <span v-for= "(eachCategory, idx) in cardList.categories" :key= "idx" class= "promote-each-text">
                <strong>{{ eachCategory }}</strong>
              </span>
        </div>
      </base-card>
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
      align-items: center;
    > h2 {
      text-align: center;
     } 
  }
  .promote-container {
    border: 1px solid red;
    width: 400px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
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
