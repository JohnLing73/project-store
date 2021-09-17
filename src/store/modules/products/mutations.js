export default {
  prodLoading(state, payload) {
    state.prodIsLoading = payload;
  },
  updateFilter(state, newRoute) {
    if(Object.keys(newRoute.query).length > 0) {
      if (newRoute.query.prodCategoryMinor) {
        state.filterResult = state.filterResult.filter( 
          products => products.prodCategoryMinor === newRoute.query.prodCategoryMinor
        );
      }
      if(newRoute.query.color) { //若沒有該變數，下方直接取得該變數的屬性(長度)會報錯
        if (newRoute.query.color.length > 0) {
          console.log('this.$route.query.color', newRoute.query.color);
          console.log(state.filterResult);
          state.filterResult = state.filterResult.filter( 
            products => {
              //迴圈在filter無法使用?
              for(const key in newRoute.query.color) {
                return products.colorCollection.includes(newRoute.query.color[key]);
              }
            }
          );
          console.log(state.filterResult);
        }
      }
      if (newRoute.query.min) {
        state.filterResult = state.filterResult.filter(
          products => products.price >= newRoute.query.min
        );
      }
      if (newRoute.query.max) {
        state.filterResult = state.filterResult.filter(
          products => products.price <= newRoute.query.max
        );
      }
      if(newRoute.query.avgRating) {
        state.filterResult = state.filterResult.filter(
          products => products.avgRating >= newRoute.query.avgRating
        )
      }
    }
  },
  filterResult(state, payload) {
    state.filterResult = payload;
  },
  specificProduct(state, payload) {
    state.specificProduct = payload;
  }
}
