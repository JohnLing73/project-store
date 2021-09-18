import axios from 'axios';
export default {
  // 抓products/:mainPage + 抓product/:prodId
  async fetchData(context,checkRoute) {
    await axios.get("https://resume-store-fd4de-default-rtdb.firebaseio.com/products.json")
        .then( response => {
          let download = [];
          for (const fireId in response.data) {
            download.push({
              data: response.data[fireId],
            });
            download = download[0].data; // test
          }
          context.commit("prodLoading", false); //test
          // 新增屬性: 每個prod有什麼color的array
          // 1.先把每個產品color 抓出
          let eachColorCollection = [];
          for (let eachProd in download) {
            var tmpArr = [];
            for (let eachColor in download[eachProd].color) {
              tmpArr.push(download[eachProd].color[eachColor].colorName);
            }
            eachColorCollection.push(tmpArr);
          }
          // 2.每個產品新增一個新屬性colorCollection依序push回給原本的產品
          for (let eachProd in download) {
            download[eachProd].colorCollection = eachColorCollection[eachProd];
          }
          if(checkRoute.params.mainPage) {
            let filterArray = [];
            filterArray = download.filter(products => products.prodCategory === checkRoute.params.mainPage);
            context.commit('filterResult', filterArray);
            context.commit('updateFilter', checkRoute );
          }
          if(checkRoute.params.prodId) {
            let specificArray = [];
            specificArray = download.filter(products => products.prodId === checkRoute.params.prodId);
            context.commit('specificProduct', specificArray[0]);
          }
        })
        .catch(error => {
          console.error('error', error.message);
        })
  },
  // async fetchSpecificProduct(context) {
  //   const response = await axios.get('https://resume-store-fd4de-default-rtdb.firebaseio.com/products.json');
  //   const
  // }
}
