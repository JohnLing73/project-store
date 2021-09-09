<template>
  <div class="products-main" :class="{darkMode: this.$store.getters.themeMode}">
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
}
</script>
<style lang="scss">
  .products-main {
    width: calc(100vw - 200px);
    background-color: $product-main-bg;
    padding:  $distance-window;
      h1 {
        text-align: center;
      }
    display: flex;
    flex-flow: row wrap;
  }
  .products-main.darkMode {
    background-color: $product-dark-mode !important;
  }
</style>