<template>
  <div class="products-view">
    <products-side :selected-page="page" :filter-category="filter"></products-side>
    <products-main :content="productsPage"></products-main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex' // 資料在local端時測試用
import axios from 'axios';
export default {
  props:['page', 'filter'],
  data() {
    return {
      productsList: [],
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'prodIsLoading'
    //   products: 'productsAll' // 資料在local端時測試用
    }),
    products() {
      return this.productsList;
    },
    productsPage() {
      if(this.page ==='man') {
        return this.products.filter( product => product.prodCategory === 'Man');
      }else if(this.page === 'woman'){
        return this.products.filter( product => product.prodCategory === 'Woman');
      }else{
        return this.products.filter( product => product.prodCategory === 'Other');
      }
    },
  },
  mounted() {
    this.$store.commit('prodLoading', true);
    axios.get('https://resume-store-fd4de-default-rtdb.firebaseio.com/products.json')
      .then( response => {
        console.log('axios');
        const download = [];
        for(const fireId in response.data) {
          download.push({
            data: response.data[fireId]
          });
          this.productsList = download[0].data;
        }
        this.$store.commit('prodLoading', false);
      })
      .catch( error => {
        console.log('error', error);
      })
  },
}
</script>
<style lang="scss">
  .products-view {
      display: flex;
      flex-flow: row nowrap;
    }
</style>