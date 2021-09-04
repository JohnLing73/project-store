<template>
  <div class="container">
    <div 
      class="container-each" 
      v-for="(object ,idx) in objects"
      :key="idx"
      >
      <div class="img-container">
        <img v-if="memberCart" :src="object.orders.orderItems[idx].prodImgUrl" alt="">
        <img v-else :src="object.wishProductUrl" alt="">
      </div>
      <div v-if="memberCart" class="info-one info">
        <h3>{{ object.orders.orderItems[idx].prodName}}</h3>
        <h4>color: {{ object.orders.orderItems[idx].prodColor}}</h4>
        <h4>size: {{ object.orders.orderItems[idx].prodSize }}</h4>
      </div>
      <div v-else class="info-one info">
        <h3>{{ object.wishlists[idx].wishProductName}}</h3>
        <h4>color: {{ object.wishlists[idx].wishProductColor}}</h4>
      </div>
      <div v-if="memberCart" class="info-two info">
        <h4>Price</h4>
        <h4>{{ object.orders.orderItems[idx].prodEachPrice * object.orders.orderItems[idx].prodQuantity }}</h4>
      </div>
      <div v-else class="info-two info">
        <h4>Price</h4>
        <h4>{{ object.wishlists[idx].wishProductPrice }}</h4>
      </div>
      <div class="info-last info">
        <span>Remove</span>
        <font-awesome-icon
          @click="remove"
          :icon="['fas', 'trash-alt']"
            size="1x"
        ></font-awesome-icon>
      </div>
    </div>
    <base-button
      v-if="memberCart" 
      :link='false'
      @click="check"
      >
      Check
    </base-button>
  </div>
</template>
<script>
export default {
  // 當成是member-cart 跟 member-wishlist 的模板
  props:{
    memberCart:{
      type: Object,
      required: false
    },
    memberWishlist: {
      type: Object,
      required: false
    }
  },
  computed:{
    objects() {
      if(this.memberCart){
        return this.memberCart[0];
      }else {
        return this.memberWishlist[0];
      }
    }
  },
  methods: {
    check() {
      console.log('check');
    },
    remove() {
      console.log('remove');
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    @include member-tab-container();
    @include flex-model($dir:column);
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
      h4 {
        &:last-child{
          padding-bottom: 0.5rem;
        }
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

  button {
    align-self: flex-end;
    margin: 1rem;
  }
</style>