<template>
  <div class="products-main">
    <products-card 
      :prod-data="content" 
      v-for="item in content"
      :each-data="item" 
      :key="item.prodId"
      >
    </products-card>
  </div>
</template>
<script>
import ProductsCard from './ProductsCard.vue'

export default {
  props:['content'],
  components: { ProductsCard },
  mounted() {
    console.log(this.content);
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