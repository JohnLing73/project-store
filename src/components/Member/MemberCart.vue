<template>
  <div class="container">
    <div 
      class="container-each"
      v-for="(item,idx) in cart"
      :key="idx"
      >
      <div class="img-container">
        <img :src="item.cartProductUrl" alt="">
      </div>
      <div class="info-one info">
        <h3>{{ item.cartProductName}}</h3>
        <h4>color: {{ item.cartProductColor}}</h4>
        <h4>size: {{ item.cartProductSize }}</h4>
      </div>
      <div class="info-two info">
        <h4>Price</h4>
        <h4>{{ item.cartProductPrice }}</h4>
      </div>
      <div class="info-last info">
        <span>Remove</span>
        <font-awesome-icon
          @click="click"
          :icon="['fas', 'trash-alt']"
            size="1x"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters(['members']),
    cart() {
      // 測試第一位user 的 cartlist
      return this.members[0].cart;
    }
  },
  methods: {
    click() {
      console.log('click');
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    @include member-tab-container();
  }

  .container-each {
    @include flex-model();
    border: 1px solid $black;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .img-container {
    width: 135px;
    height: 135px;
    background-color: $white;
    @include flex-model($content: center);
      > img {
        object-position: 50% 50%;
        height:  100%;
        width: 100%;
        object-fit: cover;
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

  h3, 
  h4 {
    margin: 0;
  }
</style>