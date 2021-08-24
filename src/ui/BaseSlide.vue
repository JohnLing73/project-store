<template>
  <swiper
    :slides-per-view = "1"
    :space-between = "50"
    navigation
    :pagination= "{ clickable: true }" 
    :scrollbar = "{ draggable: true }"
  
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
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
  components:{
    Swiper,
    SwiperSlide
  },
  props:['wrapper-data'],
  methdos:{
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    }
  }
}
</script>
<style lang="scss">
  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    height: 400px;
      img {
       width: 100%;
      }
  }
</style>