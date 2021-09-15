<template>
  <div class="products-view">
    <!-- <p>renewFilter: {{ renewFilter }}</p> -->
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
    productsList(newList) { // productsList 會先被careated但不會更新，所以改成watch
      this.productsList = newList;
      this.filterResult = this.productsList.filter(products => products.prodCategory === this.mainPage);
      this.updateFilter();
    },
    async $route() {
      await this.fetchData();
      this.updateFilter();
    }
  },
  methods: {
    updateData() {
      this.filterCondition = this.renewFilter;
    },
    updateFilter() {
      // this.productsList = this.productsList;
      if (this.$route.query.prodCategoryMinor) {
        this.filterResult = this.filterResult.filter( 
          products => products.prodCategoryMinor === this.$route.query.prodCategoryMinor
        );
      }
      if (this.$route.query.color) {
        this.filterResult = this.filterResult.filter( 
          products => this.$route.query.color.includes(products)
          );
      }
      if (this.$route.query.min) {
        this.filterResult = this.filterResult.filter(
          products => products.price >= this.$route.query.min
        );
      }
      if (this.$route.query.max) {
        this.filterResult = this.filterResult.filter(
          products => products.price <= this.$route.query.max
        );
      }
      if(this.$route.query.avgRating) {
        this.filterResult = this.filterResult.filter(
          products => products.avgRating >= this.$route.query.avgRating
        )
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
  },
};
</script>
<style lang="scss">
.products-view {
  display: flex;
  flex-flow: row nowrap;
}
</style>
