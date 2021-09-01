import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      manPage: [
        { id: "man-clothes", label: "Clothes" },
        { id: "man-shoes", label: "Shoes" },
        { id: "man-watches", label: "Watches" },
      ],
      womanPage: [
        { id: "woman-clothes", label: "Clothes" },
        { id: "woman-bags", label: "bags" },
        { id: "woman-jewellery", label: "Jewellery" },
      ],
      otherPage: [
        { id: "other-mobile", label: "Mobile" },
        { id: "other-earphone", label: "Earphone" },
        { id: "other-others", label: "Others" },
      ],
      ratingFilter: [
        { id: "three-star", label: "3" },
        { id: "four-star", label: "4" },
        { id: "five-star", label: "5" },
      ],
      pricingFilter: [
        { id: "under-five-hundred", label: "$499-" },
        { id: "under-one-thousand", label: "$1000-" },
        { id: "over-one-thousand", label: "$1000+" },
      ],
      productsMan: [
        {
          name: "Van Heusen",
          prodName: "Allen Solly Men's Polo",
          tags: ["man-cloth", "Van Heusen", "T-shirt"],
          price: 599,
          brand: "Van Heusen",
          deadline: {
            is: false,
            leftTime: {},
          },
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/81mE0KcpjJL._AC_UL480_FMwebp_QL65_.jpg',
          size:['S','M','L','XL','2XL'],
          color: [
            {
              colorName: 'green',
              imgs: {
                bigImgSrc:'https://m.media-amazon.com/images/I/81mE0KcpjJL._AC_UL480_FMwebp_QL65_.jpg',
              }
            },
            {
              colorName: "blue",
              imgs: {
                bigImgSrc:'https://m.media-amazon.com/images/I/81QVEO08vrL._UL1500_.jpg',
                // bigImg: require("../../assets/images/homepage/flash-sale/flash-sale1-big-img1.jpg"),
                // smallImg: require("../../assets/images/homepage/flash-sale/flash-sale1-small-img1.jpg"),
              },
            },
            {
              colorName: "black",
              imgs: {
                bigImgSrc: 'https://m.media-amazon.com/images/I/81D76vnOAsS._UL1500_.jpg',
                // smallImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-small-img2.jpg"),
              },
            },
          ],
          stock:326,
          views: 205,
          prodInfoBrief:"Men's Solid Regular Fit Polo",
          productInfo: [
            "Care Instructions: Wash with mild detergent, do not bleach, dry in shade",
            "Fit Type: regular fit",
            "60% cotton and 40% polyester",
            "Regular fit",
            'Banded collar',
            'Half sleeve',
            'Wash with mild detergent, do not bleach, dry in shade'
          ],
          feedback: [
            {
              memberId: "Bruce",
              rating: 5,
              comment: 'This cloth is so amazing!'
            },
            {
              memberId: "Joane",
              rating: 3,
              comment: "My boyfreind doesn't like it! It makes him look like creepy."
            },
          ],
        },
        {
          name: "AELOMART",
          tags: ["phone", "mi", "electronics"],
          price: 489,
          brand: "",
          deadline: {
            is: false,
            leftTime: {},
          },
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/71kIhgERsfL._AC_UL480_FMwebp_QL65_.jpg',
          color: [
            {
              colorName: "silver",
              imgs: {
                // bigImg: require("../../assets/images/homepage/flash-sale/flash-sale1-big-img1.jpg"),
                // smallImg: require("../../assets/images/homepage/flash-sale/flash-sale1-small-img1.jpg"),
              },
            },
            {
              colorName: "black",
              imgs: {
                // bigImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-big-img2.jpg"),
                // smallImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-small-img2.jpg"),
              },
            },
            {
              colorName: "white",
              imgs: {
                // bigImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-big-img3.jpg"),
                // smallImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-small-img3.jpg"),
              },
            },
          ],
          stock: 503,
          views: 205,
          prodInfoBrief:"Men's Solid Regular Fit Polo",
          productInfo: [
            "Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool",
            "Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera",
            "Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology",
          ],
          feedback: [
            {
              memberId: "Bruce",
              rating: 3,
            },
            {
              memberId: "Joane",
              rating: 3,
            },
          ],
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
