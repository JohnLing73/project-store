<template>
  <div class="products-view">
    <products-side
      :selected-page="page"
      :filter-category="filter"
      @user-filter="updateData"
    >
    </products-side>
    <products-main :content="productsPage"></products-main>
  </div>
</template>
<script>
import { mapGetters } from "vuex"; // 資料在local端時測試用
import axios from "axios";
export default {
  props: ["page", "filter"],
  data() {
    return {
      productsList: [],

      filterCondition: {},

      filterResult: {}
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "prodIsLoading",
      //   products: 'productsAll' // 資料在local端時測試用
    }),
    products() {
      return this.productsList;
    },
    productsPage() {
      if(Object.keys(this.filterCondition).length > 0){
        return this.filterResult;
        }else{
        return this.products.filter( (product) => product.prodCategory === this.page);
      }
    },
  },
  methods: {
    updateData(payload) {
      console.log("payload", payload); //test
      this.filterCondition = payload;
      console.log("filterCondition", this.filterCondition);
      this.updateFilter();
    },
    updateFilter() {
      this.filterResult = this.products;
      if(this.filterCondition){
      //  一般化寫法，但資料格式關係只適用於分類(eg:)男裝,男鞋等等minorCategory
      // for (let eachKey in this.filterCondition) {
      //   this.filterResult = this.products.filter( prod =>  prod[eachKey] === this.filterCondition[eachKey]);
      // }
        if(this.filterCondition.prodCategory) {
          this.filterResult = this.filterResult.filter( products => products.prodCategory === this.filterCondition.prodCategory);
        }
        if(this.filterCondition.prodCategoryMinor) {
          this.filterResult = this.filterResult.filter( products => products.prodCategoryMinor === this.filterCondition.prodCategoryMinor);
        }
        //1. 把每個 product 與 filterResult 中的 顏色只要有一個相符的都顯示
        //1.1 把每個 product的color 先抓出來放到一個array裡當成等等要用的idx 
        //
        if(this.filterCondition.color.length > 0) {
         this.filterResult = this.filterResult.filter( products => {
           for(let colors in this.filterCondition.color) {
             for(let eachColor in products.color) {
               return products.color[eachColor].colorName.includes(this.filterCondition.color[colors]);
             }
           }
         }) 
        }
      console.log(this.filterResult);
      }
    }
  },
  mounted() {
    this.$store.commit("prodLoading", true); //test
    this.filterResult = {};
    this.filterCondition = {};
    axios
      .get(
        "https://resume-store-fd4de-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        const download = [];
        for (const fireId in response.data) {
          download.push({
            data: response.data[fireId],
          });
          this.productsList = download[0].data;
          this.$store.state.productsDownAll = download[0].data;
        }
        this.$store.commit("prodLoading", false);  //test
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
};
</script>
<style lang="scss">
.products-view {
  display: flex;
  flex-flow: row nowrap;
}
</style>
