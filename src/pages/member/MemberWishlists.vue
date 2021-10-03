<template>
  <div class="container" v-if="memWishlist.length > 0">
    <div 
      class="container-each"
      v-for="(prod, idx) in memWishlist"
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
  </div>
  <div class="container" v-else>
    <h2>Oops! You have not add any product to your wishlist!</h2>
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
    ...mapGetters(['members','memWishlist']),
    cart() {
      // 測試第一位user 的 cartlist
      return this.members[0].cart;
    }
  },
  methods: {
    removeFromCart(idx) {
      this.$store.commit('mutateWishlist', idx);
      this.$store.dispatch('modifyList','wishlist');
    }
  },
}
</script>
<style lang="scss" scoped>
  .container {
    @include flex-model($dir: column, $align: center);
  }

  .container-each {
    @include flex-model();
    border: 1px solid $white;
    border-radius: 12px;
    overflow: hidden;
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

  @media (max-width: 1217px) {
  .container {
      width: 650px;
  }
  .container-each {
    width: 100%;    
  }
}
</style>