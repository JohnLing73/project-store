<template>
  <div class="container" v-if="memCart.length > 0">
    <div 
      class="container-each"
      v-for="(prod, idx) in memCart"
      :key="prod.id"
      >
      <div class="img-container">
        <img :src="prod.prodImg" alt="">
      </div>
      <div class="info-one info">
        <h3><router-link :to="'/productDetail/' + prod.prodId">{{ prod.prodName }}</router-link></h3>
        <div>
          <h4>color: {{ prod.color}}</h4>
          <h4>size: {{ prod.size }}</h4>
          <h4>quantity: {{ prod.quantity }}</h4>
        </div>
      </div>
      <div class="info-two info">
        <h4>Price</h4>
        <h4>{{ prod.total }}</h4>
      </div>
      <div class="info-last info">
        <span>Remove</span>
        <font-awesome-icon
          @click="removeFromCart(idx)"
          :icon="['fas', 'trash-alt']"
            size="1x"
        ></font-awesome-icon>
      </div>
    </div>
    <div class="total"></div>
    <div class="total-check">
      <p>Total: ${{ totalCart }}</p>
      <base-button :link='false'>Checkout</base-button>
    </div>
  </div>
  <div class="container" v-else>
    <h2>Oops! You have not add any product to your cart!</h2>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      cartList: this.$store.state.member.theFinalMembers[0].cart
    }
  },
  computed:{
    ...mapGetters(['members','memCart']),
    cart() {
      // 測試第一位user 的 cartlist
      return this.members[0].cart;
    },
    totalCart() {
      let total = 0;
      for(const key in this.memCart) {
        total += this.memCart[key].total;
      }
      return total;
    }
  },
  methods: {
    async removeFromCart(idx) {
      this.$store.commit('mutateCart', idx);
      await this.$store.dispatch('modifyList','cart');
    }
  },
}
</script>
<style lang="scss" scoped>
  .container {
    @include flex-model($dir: column, $align: center);
    margin: 0 auto;
    width: 750px;
  }

  .container-each {
    @include flex-model();
    border: 1px solid $white;
    border-radius: 12px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 750px;
  }

  .img-container {
    width: 135px;
    height: 135px;
    background-color: white;
    @include flex-model($content: center);
      > img {
        object-position: 50% 50%;
        height:  100%;
        width: 100%;
        object-fit: scale-down;
      }
  }
  .info-one,
  .info-two,
  .info-last {
    flex-grow: 1;
    padding-left: 1rem;
    @include flex-model($dir: column);
  }


  .info-one {
    justify-content: center;
    width: 70%;
      h3 {
          flex-grow: 1;
          padding-top: 1rem;
        }
  }

  .info-last,
  .info-two {
    justify-content: center;
    align-items: center;
      > svg {
        &:hover {
          cursor: pointer;
        }
      }
  }

  .info-last {
    margin-right: 1rem;
  }

  .info { 
    > div {
      @include flex-model($content: space-between);
      padding-bottom: 1rem;
    }
  }
  h3, 
  h4 {
    margin: 0;
  }

  .total {
    width: 100%;
    height: 3px;
    background-color: $white;
    margin-top: $distance-window;
  }

  .total-check {
    align-self: flex-end;
    padding-right: $distance-window;
    @include flex-model($dir: column, $align: flex-end);
    > p {
      font-size: $h3;
    }
  }
@media (max-width: 1217px) {
  .container {
      width: 650px;
  }
  .container-each {
    width: 100%;    
  }
}

//
@media (max-width: 757px) {
  .container {
    width: 100%;
  }
  .container-each {
    width: 500px;
    flex-wrap: wrap;
    .info-one {
      flex-basis: calc(100% - 180px);
    }
    .info {
      > div {
        justify-content: space-evenly;
      }
    }
  }
}


</style>