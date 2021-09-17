import axios from 'axios';
export default {
  async fetchData(context,checkRoute) {
    const response = await axios.get("https://resume-store-fd4de-default-rtdb.firebaseio.com/products.json");
    const download = [];
    for (const fireId in response.data) {
      download.push({
        data: response.data[fireId],
      });
      // this.productsList = download[0].data;
      context.state.productsDownAll = download[0].data; // test
    }
    context.commit("prodLoading", false); //test
    // 新增屬性: 每個prod有什麼color的array
    // 1.先把每個產品color 抓出
    let eachColorCollection = [];
    for (let eachProd in context.state.productsDownAll) {
      var tmpArr = [];
      for (let eachColor in context.state.productsDownAll[eachProd].color) {
        tmpArr.push(context.state.productsDownAll[eachProd].color[eachColor].colorName);
      }
      eachColorCollection.push(tmpArr);
    }
    // 2.每個產品新增一個新屬性colorCollection依序push回給原本的產品
    for (let eachProd in context.state.productsDownAll) {
      context.state.productsDownAll[eachProd].colorCollection = eachColorCollection[eachProd];
    }
    context.state.filterResult = context.state.productsDownAll.filter(products => products.prodCategory === checkRoute.params.mainPage);
    context.commit('updateFilter', checkRoute );
  }
}
