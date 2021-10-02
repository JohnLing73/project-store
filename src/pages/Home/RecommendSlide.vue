<template>
<base-card>
    <h2>Recommend For You! 4 Stars+ Products</h2>
    <swiper
      :slides-per-view ='perView'
      :space-between = "0"
      navigation
      :loop='false'
      :autoplay='autoplaySet'
      :pagination= "{ clickable: true }" 
      :scrollbar = "{ draggable: true }"
    >
      <swiper-slide 
        v-for = "recommendList in recommendLists" 
        :key = "recommendList.name"
      >
        <img :src= "recommendList.imgSrc">
      </swiper-slide>
    </swiper>
</base-card>
</template>
<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default {
  data() {
    return {
      innerWidth: window.innerWidth
    }
  },
  components:{
    Swiper,
    SwiperSlide
  },
  computed:{
    recommendLists() {
      return this.$store.getters.recommendLists;
    },
    autoplaySet() {
      return {
        "delay": 1500,
        "disableOnInteraction": false
      }
    },
    perView() {
      if(this.innerWidth >= 1200) {
        return 5;
        }
      else if(this.innerWidth >= 960) {
          return 4;
      }else if(this.innerWidth >= 640){
          return 3;
      }else if(this.innerWidth >= 500){
        return 2;
      }else {
        return 1;
      }
    }
  },
  mounted() {
    this.innerWidth = window.innerWidth;
    window.onresize = () => {
      this.innerWidth = window.innerWidth;
    }
  }
}
</script>
<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    height: 150px;
    background-color: #fff;
      img {
        object-fit: contain;
        height: 100%;
      }
  }
  h2 {
    text-align: center;
  }
</style>