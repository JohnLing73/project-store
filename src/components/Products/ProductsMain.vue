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
    // width: calc(100vw - 184px);
    background-color: $product-main-bg;
    padding:  $distance-window;
    justify-items: center;
    justify-content: center;
      h1 {
        text-align: center;
      }
    display: flex;
    flex-flow: row wrap;
  }
  .products-main.darkMode {
    background-color: $product-dark-mode !important;
  }

  //RWD
  @media (max-width: 505px) {
    .products-main {
      padding: 1.5rem 0;
    }
  }
</style>