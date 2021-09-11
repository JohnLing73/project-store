import axios from 'axios';
export default {
  productDownload(context) {
    context.commit("prodLoading", true);
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
          context.state.productsDownAll = download[0].data;
        }
        context.commit("prodLoading", false);  //test
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}
