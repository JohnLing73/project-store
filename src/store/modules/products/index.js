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
    };
  },
  getters,
  mutations,
  actions,
};
