<template>
  <swiper
    :slides-per-view = "1"
    :space-between = "0"
    :loop='true'
    :pagination= "{ clickable: true }" 
    :scrollbar = "{ draggable: true }"
    :autoplay='autoplaySet'
  >
    <swiper-slide 
      v-for = "wrapperEach in wrapperData" 
      :key = "wrapperEach.id"
    >
      <img :src= "wrapperEach.src">
    </swiper-slide>
  </swiper>
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
  components:{
    Swiper,
    SwiperSlide
  },
  props:['wrapper-data'],
  computed: {
    autoplaySet() {
       return {
        "delay": 2000,
        "disableOnInteraction": false
      }
    }
  }
}
</script>
<style lang="scss">
  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    // height: 400px;
      img {
       width: 100%;
      }
  }
</style>