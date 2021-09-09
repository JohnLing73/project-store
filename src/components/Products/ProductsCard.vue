<template>
  <div class="prod-card" :key="eachData.name">
    <router-link to="/"></router-link>
    <div class="prod-img-container">
      <img :src="eachData.imgSrc" alt="">
      <span v-if="eachData.bestSeller" class="best-seller-label">Best seller</span>
    </div>
      <div class="prod-info">
        <ul class="color-circle">
          <li 
            v-for="color in eachData.color" 
            :key="color.colorName" 
            :style="{backgroundColor: color.colorName}"
          >
          </li>
        </ul>
        <h4 class="prod-info-title">{{ eachData.name }}</h4>
        <p class="prod-info-brief">{{ eachData.prodInfoBrief }}</p>
        <div class="rating-overall">
          <font-awesome-icon 
            v-for="(item, idx) in eachData.avgRating" 
            :key="idx" 
            :icon= "['fas','star']" 
            size="1x" 
            :style="{ color: '#ffa41c' }">
          </font-awesome-icon>
        </div>
        <span class="price">$ {{ eachData.price }}</span>
      </div>
  </div>
</template>
<script>
export default {
  props:['prod-data', 'each-data'],
  data() {
    return {
      colorChoice:['black','white','blue','red','gray'],
      feedbackData:[]
    }
  },
  beforeMount() {
    // 計算出每個商品的avg rating assign 給 feedbackData
    for(let i = 0 ; i < this.prodData.length; i++) {
      let sum = 0;
      for( let j in this.prodData[i].feedback) {
        sum += this.prodData[i].feedback[j].rating;
      }
        var avg = Math.floor((sum / this.prodData[i].feedback.length));
        this.feedbackData.push(avg);
    }

    //將 feeedbackData 裡的avg rating assign 給 propData
    for(let i = 0; i < this.prodData.length; i++) {
      this.prodData[i].avgRating = this.feedbackData[i]; 
    }
  },
  computed:{
    feedbackDataComputed() {
      return this.feedbackData;
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .prod-card {
    flex-basis: 20%;
    border: 3px solid gold;
    margin: $distance-window;
    min-width: 250px;
    position: relative;
      a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        z-index: index($list: $z-index, $value: a);
      }
  }
  .prod-img-container {
    position: relative;
    width: 100%;
    height: 280px;
    background-color: white;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: index($list: $z-index, $value: img);
      }
      .best-seller-label{
        position: absolute;
        left: 0;
        top: 10px;
        color: $white;
        width: 85px;
        padding: 5px;
        font-size: $h5;
        background-color: $label-color;
        &::after {
          content:'';
          position: absolute;
          top: 0px;
          right: 0;
          transform: translateX(96%);
          border-top: 27px solid $label-color;
          border-right: 12px solid transparent;
        }
      }
  }

  .prod-info {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  }
  
  .color-circle {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin: 0.5rem 0;
      li {
        border: 1px solid white;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        margin-right: 10px;
        cursor: pointer;
      }
  }

  .color-circle.dark-mode {
    background-color: transparent !important;
  }

  .prod-rating-stars {
    color: $spinner-blue;
    border: 1px solid black;
  }

  .rating-overall {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  h4,
  p,
  .price {
    text-align: center;
    margin: 0.5rem 0;
    margin-top: 0;
  }
  .price {
    color: red;
  }
</style>