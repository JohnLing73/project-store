<template>
  <div class="prod-detail">
    <div class="prod-detail-main">
      <div class="img-container">
        <img :src="theProduct.color[0].imgs.bigImgSrc" alt="">
      </div>
      <div class="detail-info">
        <h4 class="brand">{{ theProduct.brand }}</h4>
        <p class="prod-name">{{ theProduct.prodName }}</p>
        <div class="prod-rating">
          <font-awesome-icon 
              v-for="(item, idx) in 5" 
              :key="idx" 
              :icon= "['fas','star']" 
              size="1x" 
              :style="{ color: '#ffa41c' }">
          </font-awesome-icon>
          <span class="raing-count">
            {{ totalRating }} rating<span v-if= "totalRating >= 2">s</span>
          </span>
        </div>
        <h3 class="price">599</h3>
        <form class="select-style" @click.prevent="submitChoice">
          <div class="select-size">
            <h4>Size:</h4>
            <select name="size" v-model="selectSize">
              <option 
                v-for="(prod, idx) in theProduct.size" 
                :key="idx" 
                :value="prod">
                  {{ prod }}
                </option>
            </select>
          </div>
          <div class="select-color">
            <h4>Color: </h4>
            <div class="color-choices-container">
              <div class="color-choice-each"
                v-for="color in theProduct.color"
                :key="color.colorName"
              >
                <img :src="color.imgs.bigImgSrc">
              </div>
            </div>
          </div>
        </form>
        <div class="prod-info-list">
          <ul>
            <li 
              v-for="(info, idx) in theProduct.productInfo"
              :key="idx"
              >
              {{ info }}
            </li>
          </ul>
        </div>
      </div>
      <div class="cart-whishlist"></div>
    </div>
    <div class="prod-detail-feedback">
      <h2>Reviews</h2>
      <div 
        class="each-feedback" 
        v-for="(feedback,idx) in theProduct.feedback"
        :key="idx"
          >
        <div class="each-feedback-account">
          <div class="pic-and-name">
            <font-awesome-icon 
              :icon= "['fas','user-circle']" 
              size="2x" 
              :style="{ color: '#ffa41c' }">
            </font-awesome-icon>
            <span>{{ feedback.memberId }}</span>
          </div>
          <div class="each-rating">
            <font-awesome-icon 
            v-for="(item, idx) in feedback.rating" 
            :key="idx" 
            :icon= "['fas','star']" 
            size="1x" 
            :style="{ color: '#ffa41c' }">
          </font-awesome-icon>
          </div>
          <div class="each-comment">
            {{ feedback.comment }}
          </div>
        </div>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['productsManGetters']),
    theProduct() {
      return this.productsManGetters[0];
    },
    selectSize() {
      return this.theProduct.size[0];
    },
    totalRating() {
      return this.theProduct.feedback.length;
    }
  },
  methods: {
    submitChoice() {

    }
  }
}
</script>
<style lang="scss" scoped>
  .prod-detail-main {
    display: flex;
    flex-flow: row nowrap;
    background-color: rgb(62, 172, 18);
    color: whitesmoke;
    padding: $distance-window;
  }

  .color-choices-container {
    display: flex;
    flex-flow: row nowrap;
  }

  .color-choice-each {
    margin: 0rem 5px;
    width: 59px;
    border: 0.5px solid rgb(151, 151, 151);
    background-color: white;
    display: flex;
    justify-content: center;
      > img {
        height: 75px;
      }
  }

  li {
    list-style-type: disc;
  }
</style>