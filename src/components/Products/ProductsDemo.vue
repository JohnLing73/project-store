<template>
  <p> route : {{ this.$route.query }}</p>
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

      filterResult: {},
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "prodIsLoading",
      // products: 'productsDownAll' // 資料在local端時測試用
    }),
    products() {
      return this.productsList;
    },
    productsPage() {
      if (Object.keys(this.filterCondition).length > 0) {
        return this.filterResult;
      } else {
        return this.products.filter(
          (product) => product.prodCategory === this.page
        );
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
      if (this.filterCondition) {
        //  一般化寫法，但資料格式關係只適用於分類(eg:)男裝,男鞋等等minorCategory
        // for (let eachKey in this.filterCondition) {
        //   this.filterResult = this.products.filter( prod =>  prod[eachKey] === this.filterCondition[eachKey]);
        // }
        if (this.filterCondition.prodCategory) {
          this.filterResult = this.filterResult.filter(
            products =>
              products.prodCategory === this.filterCondition.prodCategory
          );
        }
        if (this.filterCondition.prodCategoryMinor) {
          this.filterResult = this.filterResult.filter(
            products =>
              products.prodCategoryMinor ===
              this.filterCondition.prodCategoryMinor
          );
        }
        if (this.filterCondition.color.length > 0) {
          this.filterResult = this.filterResult.filter(
            products => {
              for(let i = 0; i < this.filterCondition.color.length; i++) {
                return products.colorCollection.includes(this.filterCondition.color[i]);
              }
            }
          )
        }
        if (this.filterCondition.min) {
          this.filterResult = this.filterResult.filter(
            products => products.price >= this.filterCondition.min
          );
        }
        if (this.filterCondition.max) {
          this.filterResult = this.filterResult.filter(
            products => products.price <= this.filterCondition.max
          );
        }
        if(this.filterCondition.avgRating) {
          this.filterResult = this.filterResult.filter(
            products => products.avgRating >= this.filterCondition.avgRating
          )
        }
        console.log(this.filterResult);
      }
    },
    fetchData() {
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
          this.$store.state.productsDownAll = download[0].data; // test
        }
        this.$store.commit("prodLoading", false); //test
      })
      .then(() => {
        // 新增屬性: 每個prod有什麼color的array
        // 1.先把每個產品color 抓出
        let eachColorCollection = [];
        for (let eachProd in this.productsList) {
          var tmpArr = [];
          for (let eachColor in this.productsList[eachProd].color) {
            tmpArr.push(this.productsList[eachProd].color[eachColor].colorName);
          }
          eachColorCollection.push(tmpArr);
        }
        // 2.每個產品新增一個新屬性colorCollection依序push回給原本的產品
        for (let eachProd in this.productsList) {
          this.productsList[eachProd].colorCollection = eachColorCollection[eachProd];
        }
        console.log("productsList", this.productsList);
      })
      .catch((error) => {
        console.log("error", error);
      });
    }
  },
  beforeMount() {
    this.$store.commit("prodLoading", true); //test
    this.filterResult = {};
    this.filterCondition = {};
    this.fetchData();
  },
};
</script>
<style lang="scss">
.products-view {
  display: flex;
  flex-flow: row nowrap;
}
</style>
