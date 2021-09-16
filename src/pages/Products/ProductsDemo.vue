<template>
  <div class="products-view">
    <products-side
      :side-info="mainPage"
      @user-filter="showUpload"
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
    productsPage() {
        return this.filterResult;
    },
    renewFilter() {
      return this.$route.query;
    }
  },
  watch:{
    $route(newRoute) {
      this.fetchData(newRoute);
    }
  },
  methods: {
    updateData() {
      this.filterCondition = this.renewFilter;
    },
    updateFilter(newRoute) {
      if(Object.keys(newRoute.query).length > 0) {
        if (newRoute.query.prodCategoryMinor) {
          this.filterResult = this.filterResult.filter( 
            products => products.prodCategoryMinor === newRoute.query.prodCategoryMinor
          );
        }
        if(newRoute.query.color) { //若沒有該變數，下方直接取得該變數的屬性(長度)會報錯
          if (newRoute.query.color.length > 0) {
            console.log('this.$route.query.color', newRoute.query.color);
            console.log(this.filterResult);
            this.filterResult = this.filterResult.filter( 
              products => {
                //迴圈在filter無法使用?
                for(const key in newRoute.query.color) {
                  return products.colorCollection.includes(newRoute.query.color[key]);
                }
              }
            );
            console.log(this.filterResult);
          }
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
    async fetchData(checkRoute) {
      const response = await axios.get("https://resume-store-fd4de-default-rtdb.firebaseio.com/products.json");
      const download = [];
      for (const fireId in response.data) {
        download.push({
          data: response.data[fireId],
        });
        this.productsList = download[0].data;
        this.$store.state.productsDownAll = download[0].data; // test
      }
      this.$store.commit("prodLoading", false); //test
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
      this.updateFilter(checkRoute);
    },
    showUpload() {
      // console.log(this.$route);
    }
  },
  created() {
    this.$store.commit("prodLoading", true); //test
    this.fetchData(this.$route);
  },
};
</script>
<style lang="scss">
.products-view {
  display: flex;
  flex-flow: row nowrap;
}
</style>
