<template>
  <div class="products-main">
    <products-card></products-card>
  </div>
</template>
<script>
import ProductsCard from './ProductsCard.vue'
export default {
  components: { ProductsCard },
  
}
</script>
<style lang="scss">
  .products-main {
    flex-grow: 4;
    background-color: rgb(245, 158, 148);
    padding: 0rem $distance-window;
      h1 {
        text-align: center;
      }
    display: flex;
    flex-flow: row wrap;
  }
</style>