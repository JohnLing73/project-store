<template>
  <div class="prod-detail" :class="{darkMode: this.$store.getters.themeMode}">
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
        <h3 class="price">$ {{ theProduct.price }}</h3>
        <form class="select-style" :class="{darkMode: this.$store.getters.themeMode}" @click.prevent="submitChoice">
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
          <div class="select-quatity">
            <h4>Quantity: </h4>
            <input type="number">
          </div>
          <div class="cart-whishlist">
        <base-card>
          <h3>To buy, select the size and color</h3>
          <base-button :link='false' mode='minor'>Add to Cart</base-button>
          <base-button :link='false'>Buy Now</base-button>
        </base-card>
      </div>
        </form>
          <div class="stock-left">
            <h4>Stock: </h4>
            <p>{{theProduct.stock}} <span>in stock!</span></p>
          </div>
        <div class="prod-info-list">
          <ul :class="{darkMode: this.$store.getters.themeMode}">
            <li 
              v-for="(info, idx) in theProduct.productInfo"
              :key="idx"
              >
              {{ info }}
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <hr>
    <div class="prod-detail-feedback">
      <h3>Reviews</h3>
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
  .prod-detail {
    background-color: $product-main-bg;
  }
  .prod-detail-main {
    display: flex;
    flex-flow: row nowrap;
    padding: $distance-window;
    justify-content: space-evenly;
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

  .cart-whishlist {
      h3 {
        margin: 1rem 0;
      }
      .card{
        @include flex-model($dir: column, $align: center);
      }
      button {
        margin: $distance-text 0;
        @include size-width(10rem);
      }
  }
  
  li {
    list-style-type: disc;
    margin: $distance-text  0rem;
    margin-left: 1rem;
    margin-top: $distance-list;
  }

  .price,
  .stock-left > p {
    color: $price-red;
  }
  h4,
  h3, 
  p {
    margin: $distance-text  0rem;
  }

  .prod-detail-feedback {
    width: 325px;
    margin: 0 auto;
    @include flex-model($dir: column, $align: flex-start);
      h3 {
        margin: 1rem 0;
      }
      div {
        width: 100%;
        margin: $distance-text  0rem;
      }
  }

  .pic-and-name {
    margin-bottom: $distance-text;
      span {
        padding-left: 0.8rem;
      }
  }

  .each-rating {
    margin-bottom: $distance-text;
  }
  ul.darkMode,
  .prod-detail.darkMode,
  .select-style.darkMode {
    background-color: $product-dark-mode !important;
  }

  .select-quatity {
    input {
      width: 70px;
    }
  }
</style>