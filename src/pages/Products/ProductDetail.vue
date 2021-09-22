<template>
  <base-dialog :showdialog="isLoading" :confirmExist="false" title="Loading Product Detail...">
    <base-loading></base-loading>
  </base-dialog>
  <div class="prod-detail" :class="{ darkMode: darkMode }">
    <div class="prod-detail-main">
      <div class="img-container">
        <img ref='img' :src="imgSrc" alt="" />
      </div>
      <div class="detail-info">
        <h4 class="brand">{{ specificProduct.brand }}</h4>
        <p class="prod-name">{{ specificProduct.prodName }}</p>
        <div class="prod-rating">
          <font-awesome-icon
            v-for="(item, idx) in 5"
            :key="idx"
            :icon="['fas', 'star']"
            size="1x"
            :style="{ color: '#ffa41c' }"
          >
          </font-awesome-icon>
          <span class="rating-count">
            {{ totalRating }} rating<span v-if="totalRating >= 2">s</span>
          </span>
        </div>
        <div>
          <h4>Price:</h4>
          <h3 class="price content">$ {{ specificProduct.price }}</h3>
        </div>
        <div class="stock-left ">
          <h4>Stock:</h4>
          <p class="content">{{ specificProduct.stock }} <span>in stock!</span></p>
        </div>
        <div class="key-word">
          <h4>Key Words:</h4>
          <span class="key-word-tag content"
            v-for="(tag, idx) in specificProduct.tags"
            :key="idx"
            >
            {{ tag }}
            </span>
        </div>
        <form
          class="select-style"
          :class="{ darkMode: this.$store.getters.themeMode }"
          @submit.prevent
        >
          <div class="select-size">
            <h4>Size:</h4>
            <select name="size" v-model="selectSize" class="content">
              <option
                v-for="(prod, idx) in specificProduct.size"
                :key="idx"
                :value="prod"
              >
                {{ prod }}
              </option>
            </select>
          </div>
          <div class="select-color">
            <h4>Color: <span>{{ selectColor }}</span></h4>
            <div class="color-choices-container content">
              <div
                class="color-choice-each"
                v-for="(color,idx) in specificProduct.color"
                :key="color.colorName"
              >
                <img :src="color.imgSrc" />
                <input 
                type="radio" 
                :value="color.colorName" 
                name="color" 
                :id="color.colorName"
                v-model='selectColor'
                hidden
                >
                <label 
                  :for="color.colorName" 
                  :title="color.colorName"
                  :class="{selectingColor: color.colorName === this.selectColor}"
                  @click="changeBigImg(idx)"
                  ></label>
              </div>
            </div>
          </div>
          <div class="select-quatity">
            <h4>Quantity:</h4>
            <input type="number" class="content" v-model="selectQuantity"/>
          </div>
          <div class="cart-whishlist">
            <div class="submit-button">
              <base-button :link="false" @click="buy">Buy Now</base-button>
              <base-button :link="false" mode="minor" @click="addCart">Add to Cart</base-button>
              <base-button :link="false" mode="minor" @click="addWishlist">Add to Wishlist</base-button>
            </div>
          </div>
        </form>

        <div class="prod-info-list">
          <ul :class="{ darkMode: this.$store.getters.themeMode }">
            <li v-for="(info, idx) in specificProduct.productInfo" :key="idx">
              {{ info }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div class="prod-detail-feedback">
      <h3>Reviews</h3>
      <div
        class="each-feedback"
        v-for="(feedback, idx) in specificProduct.feedback"
        :key="idx"
      >
        <div class="each-feedback-account">
          <div class="pic-and-name">
            <font-awesome-icon
              :icon="['fas', 'user-circle']"
              size="2x"
              :style="{ color: '#ffa41c' }"
            >
            </font-awesome-icon>
            <span>{{ feedback.memberId }}</span>
          </div>
          <div class="each-rating">
            <font-awesome-icon
              v-for="(item, idx) in feedback.rating"
              :key="idx"
              :icon="['fas', 'star']"
              size="1x"
              :style="{ color: '#ffa41c' }"
            >
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
import { mapGetters } from "vuex";
export default {
  props:['prodId'],
  data() {
    return {
      imgSrc: '',
      totalRating: 0,
      isLoading: false,
      // data for v-model
      selectSize: '',
      selectColor: '',
      selectQuantity: 1,
      
    };
  },
  computed: {
    ...mapGetters(["productsManGetters", 'specificProduct']),
    darkMode() {
      return this.$store.getters.themeMode;
    }
  },
  methods: {
    buy() {
      console.log('buy');
      console.log('Size');
      console.log(this.selectSize);
      console.log('Color');
      console.log(this.selectColor);
      console.log('Quantity');
      console.log(this.selectQuantity);
      this.selectSize = this.$store.state.products.specificProduct.size[0];
      this.selectColor = this.$store.state.products.specificProduct.color[0].colorName;
      this.selectQuantity = 1;
    },
    addCart() {
      console.log('addCart');
    },
    changeBigImg(idx) {
      this.$refs.img.src = this.$store.state.products.specificProduct.color[idx].imgSrc;
    },
    addWishlist() {
      console.log('addWishlist');
    },
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch('fetchData',this.$route);
    this.isLoading = false;
    this.imgSrc = this.$store.state.products.specificProduct.color[0].imgSrc;
    this.totalRating = this.$store.state.products.specificProduct.feedback.length;
    // Initialized v-model
    this.selectSize = this.$store.state.products.specificProduct.size[0];
    this.selectColor = this.$store.state.products.specificProduct.color[0].colorName;
  }
  // watch:{//該頁面變動只能透過 url 變動，所以只需要 created()，故不須偵聽route改變
  //   async $route(newRoute) {
  //     await this.$store.dispatch('fetchData', newRoute);
  //     console.log('watch FetchData', this.$store.state.products.specificProduct);
  //   }
  // }
};
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
   .img-container {
      background-color: white;
      width: 280px;
      height: 340px;
    img {
      height: 100%;
      width: 100%;
      object-fit: scale-down;
    }
  }
}

.detail-info {
  width: 500px;
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
  position: relative;
  label {
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: index($list: z-index, $value: label);
  }
  img {
    z-index: index($list: z-index, $value: img);
  }
  > img {
    height: 75px;
    width: 100%;
    object-fit: contain;
  }
}

.cart-whishlist {
  h3 {
    margin: 1rem 0;
  }
  .card {
    @include flex-model($dir: column, $align: center);
  }
  button {
    margin: $distance-text 0;
    @include size-width(10rem);
  }
}

li {
  list-style-type: disc;
  margin: $distance-text 0rem;
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
  margin: $distance-text 0rem;
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
    margin: $distance-text 0rem;
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

.submit-button {
  button {
    margin-right: 1rem;
  }
}

.content {
  margin-left: 1rem;
}

.selectingColor {
  border: 1px solid red;
}

.rating-count {
  padding-left: 1rem;
}

.key-word-tag {
  background-color: rgb(248, 248, 113);
  color: $black;
  display: inline-block;
  font-size: $h5;
  padding: 0.1rem 0.5rem;
  margin-right: 1rem;
  position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 0%;
      border-right: 7px solid transparent;
      border-top: 10.5px solid rgb(248, 248, 113);
      border-left: 7px solid rgb(248, 248, 113);
      border-bottom: 10px solid rgb(248, 248, 113);
    }
}

.select-color {
  h4 {
    > span {
      text-transform: capitalize;
      font-size: inherit;
    }
  }
}

</style>
