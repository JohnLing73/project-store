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
      productsPage: 'filterResult'
    }),
    renewFilter() {
      return this.$route.query;
    }
  },
  watch:{
    $route(newRoute) {
      this.$store.dispatch('fetchData', newRoute )
    }
  },
  methods: {
    updateData() {
      this.filterCondition = this.renewFilter;
    },
    showUpload() {
      // console.log(this.$route);
    }
  },
  created() {
    this.$store.commit("prodLoading", true); //test
    this.$store.dispatch('fetchData', this.$route);
  },
};
</script>
<style lang="scss">
.products-view {
  display: flex;
  flex-flow: row nowrap;
}
</style>
