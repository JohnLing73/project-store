<template>
  <div class="products-view">
    <products-side
      :side-info="mainPage"
      @user-filter="updateFilter"
    >
    </products-side>
    <products-main
      :content="productsPage"
    ></products-main>
  </div>
</template>
<script>
import { mapGetters } from "vuex"; // 資料在local端時測試用
import axios from "axios";
export default {
  props:['mainPage'],
  data() {
    return {
      productsList: [],

      filterCondition: {},

      filterResult: [],
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "prodIsLoading",
    }),
    testFilterResult() {
      return this.filterResult;
    },
    productsPage() {
      // if (Object.keys(this.renewFilter).length > 0) {
        // return this.filterResult;
      // } else {
        return this.filterResult;
      // }
    },
    renewFilter() {
      return this.$route.query;
    }
  },
  watch:{
    async $route(newRoute) {
      await this.fetchData();
      console.log(this.filterResult);
      this.updateFilter(newRoute);
    }
  },
  methods: {
    updateData() {
      this.filterCondition = this.renewFilter;
    },
    updateFilter(newRoute) {
      console.log(this.filterResult);
      if(newRoute) {
        if (newRoute.query.prodCategoryMinor) {
          this.filterResult = this.filterResult.filter( 
            products => products.prodCategoryMinor === newRoute.query.prodCategoryMinor
          );
        }
        if (newRoute.query.color) {
          this.filterResult = this.filterResult.filter( 
            products => newRoute.query.color.includes(products)
            );
        }
        if (newRoute.query.min) {
          this.filterResult = this.filterResult.filter(
            products => products.price >= newRoute.query.min
          );
        }
        if (newRoute.query.max) {
          this.filterResult = this.filterResult.filter(
            products => products.price <= newRoute.query.max
          );
        }
        if(newRoute.query.avgRating) {
          this.filterResult = this.filterResult.filter(
            products => products.avgRating >= newRoute.query.avgRating
          )
        }
      }
    },
    async fetchData() {
      axios.get("https://resume-store-fd4de-default-rtdb.firebaseio.com/products.json")
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
          this.filterResult = this.productsList.filter(products => products.prodCategory === this.mainPage);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    showUpload() {
      console.log(this.$route.query);
    }
  },
  created() {
    this.$store.commit("prodLoading", true); //test
    this.filterResult = [];
    this.filterCondition = {};
    this.fetchData();
    this.updateFilter(this.$route);
  },
};
</script>
<style lang="scss">
.products-view {
  display: flex;
  flex-flow: row nowrap;
}
</style>
