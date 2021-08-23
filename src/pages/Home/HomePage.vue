<template>
<button @click = 'click'>click</button>
  <div>
    <transition 
      name="wrapper"
      >
      <section v-if= "animate">
          <div class="banner-container">
            <img src="../../assets/images/HomePage/shoppingBanner.jpg" alt="" />
            <transition name= "wrappertext" 
              @before-enter = 'beforeEnter'
              @enter = 'enter'>
              <h2 v-if= "animateText">I shop, therefore I am.</h2>
            </transition>
          </div>
      </section>
    </transition>
  </div>
</template>
<script>
import gsap from 'gsap';
export default {
  data() {
    return {
      animate: false,
      animateText: false,
      enterInterval: '',
    }
  },
  mounted() {
    this.animate = true;
    // this.animateText = true;
    this.gsapAnimation();
  },
  methods: {
    click() {
      this.animateText = !this.animateText;
    },
    gsapAnimation() {
      const text = this.$refs.wrapperText;
      console.log(text);
      // gsap.to(text, {
      //   duration: 1,
      //   y:0,
      //   opacity: 1,
      //   ease: 'bounce.out'
      // })
    },
    beforeEnter(el) {
      el.style.transform = 'translateX(-100px)';
      el.style.opacity = 0;
    },
    enter(el) {
      gsap.to(el, {
        duration:1,
        y:0,
        opacity:1,
        ease: 'bounce.out'
      })
    }
    // beforeEnter(el)  {
    //   console.log(el);
    //   el.style.opacity = 0;
    // },
    // enter(el, done) {
    //   console.log(el);
    //   let round = 1;
    //   this.enterInterval = setInterval(() => { //要改成 arrow function
    //     el.style.opacity = round * 0.01;
    //     round ++;
    //     if(round > 100){
    //       clearInterval(this.enterInterval); // 因為這裡要用到data 裡面的值 所以這個function 要改成 arrow function , this 才能 refer到跟外面一樣的 this
    //       done(); //要加不然因為 single thread 的關係，這邊還沒執行完就直接跳到 afterEnter 的 lifecycle hook
    //     }
    //   },20)
    // }
  },
};
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    height: 80vh;
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

  .wrappertext-enter-from {
    opacity: 0;
    transform: translateX(-100px);
  }
  .wrappertext-enter-active {
    transition: all 1.5s ease;
  }
  .wrappertext-enter-to {
    opacity: 1;
    transform: translateX(0px); 
  }
</style>
