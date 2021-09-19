<template>
  <div class="container">
    <div class="container-each">
      <div class="img-container">
        <img :src="orders.orderItems[0].prodImgUrl" alt="">
      </div>
      <div class="info-one info">
        <h3>{{ orders.orderItems[0].prodName}}</h3>
        <h4>color: {{ orders.orderItems[0].prodColor}}</h4>
        <h4>size: {{ orders.orderItems[0].prodSize }}</h4>
      </div>
      <div class="info-two info">
        <h4>Price</h4>
        <h4>{{ orders.orderItems[0].prodEachPrice * orders.orderItems[0].prodQuantity }}</h4>
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
    orders() {
      return this.members[0].orders[0];
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
  }

  .img-container {
    width: 135px;
    height: 135px;
    background-color: $white;
    @include flex-model($content: center);
      > img {
        object-position: 50% 50%;
        height:  100%;
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