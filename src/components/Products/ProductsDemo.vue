<template>
  <div class="products-view">
    <products-side :selected-page="page" :filter-category="filter"></products-side>
    <products-main :content="productsPage"></products-main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props:['page', 'filter'],
  computed: {
    ...mapGetters({
      products: 'productsAll'
    }),
    productsPage() {
      if(this.page ==='man') {
        return this.products.filter( product => product.prodCategory === 'Man');
      }else if(this.page === 'woman'){
        return this.products.filter( product => product.prodCategory === 'Woman');
      }else{
        return this.products.filter( product => product.prodCategory === 'Other');
      }
    }
  }
}
</script>
<style lang="scss">
  .products-view {
      display: flex;
      flex-flow: row nowrap;
    }
  .products-main {
    flex-grow: 4;
    background-color: rgb(245, 158, 148);
    padding: 0rem $distance-window;
      h1 {
        text-align: center;
      }
  }
</style>