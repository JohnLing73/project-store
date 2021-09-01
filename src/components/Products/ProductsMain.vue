<template>
  <div class="products-main">
    <products-card :prod-data="this.productsManGetters" v-for="(item, idx) in 20" :key="idx"></products-card>
  </div>
</template>
<script>
import ProductsCard from './ProductsCard.vue'
import { mapGetters } from 'vuex';

export default {
  components: { ProductsCard },
  computed: {
    ...mapGetters(['productsManGetters'])
  },
}
</script>
<style lang="scss">
  .products-main {
    flex-grow: 4;
    background-color: $product-main-bg;
    padding:  $distance-window;
      h1 {
        text-align: center;
      }
    display: flex;
    flex-flow: row wrap;
  }
</style>