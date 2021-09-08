<template>
  <div :class="{ darkMode: this.$store.getters.theme === 'light'}" class="side-container">
    <form
      @submit.prevent="submitForm"
      :class="{ darkMode: this.$store.getters.theme === 'light' }"
    >
      <div v-if="selectedPage === 'manPage'" class="filter-group">
        <h2>Man</h2>
        <h4>Filter by category</h4>
        <div v-for="(item, idx) in manPage" :key="idx" class="each-filter">
          <label>
            {{ item.label }}
            <input
              type="radio"
              name="manCategory"
              :value="item.id"
              v-model="manCategory"
            />
          </label>
        </div>
      </div>
      <div v-else-if="selectedPage === 'womanPage'" class="filter-group">
        <h2>Woman</h2>
        <h4>Filter by category</h4>
        <div v-for="(item, idx) in womanPage" :key="idx" class="each-filter">
          <label>
            {{ item.label }}
            <input
              type="radio"
              name="womanCategory"
              :value="item.id"
              v-model="womanCategory"
            />
          </label>
        </div>
      </div>
      <div v-else-if="selectedPage === 'otherPage'" class="filter-group">
        <h2>Other</h2>
        <h4>Filter by category</h4>
        <div v-for="(item, idx) in otherPage" :key="idx" class="each-filter">
          <label>
            {{ item.label }}
            <input
              type="radio"
              name="otherCategory"
              :value="item.id"
              v-model="otherCategory"
            />
          </label>
        </div>
      </div>
      <div class="filter-group">
        <h4>Filter by color</h4>
          <input type="checkbox" id="color-black" value="black" hidden v-model="filterColor"/>
          <label class="label-color" for="color-black"></label>
          <input type="checkbox" id="color-white" value="white" hidden v-model="filterColor"/>
          <label class="label-color" for="color-white"></label>
          <input type="checkbox" id="color-blue" value="blue" hidden v-model="filterColor"/>
          <label class="label-color" for="color-blue"></label>
          <input type="checkbox" id="color-red" value="red" hidden v-model="filterColor"/>
          <label class="label-color" for="color-red"></label>
          <input type="checkbox" id="color-gray" value="gray" hidden v-model="filterColor"/>
          <label class="label-color" for="color-gray"></label>
      </div>
      <div class="filter-group">
        <h4>Filter by price</h4>
        <div class="each-filter">
          <label>$<input type="number" name="min" v-model="min"/></label>
        </div>
        <span class="priceInterval">~</span>
        <div class="each-filter">
          <label>$<input type="number" name="max" v-model="max"/></label>
        </div>
      </div>
      <div class="filter-group">
        <h4>Filter by rating</h4>
        <div v-for="(item, idx) in ratingFilter" :key="idx" class="each-filter">
          <label>
            {{ item.label }}&#9733;+
            <input type="radio" name="rating" :value="item.label" v-model="rating"/>
          </label>
        </div>
      </div>
      <base-button :link="false">FILTER</base-button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["selected-page"],
  emits:['user-filter'],
  data() {
    return {
      manCategory: null,
      womanCategory: null,
      otherCategory: null,
      filterColor:[],
      min: null,
      max: null,
      rating: null
    };
  },
  computed: {
    ...mapGetters({
      manPage: "manPageGetters",
      womanPage: "womanPageGetters",
      otherPage: "otherPageGetters",
      pricingFilter: "pricingFilterGetters",
      ratingFilter: "ratingFilterGetters",
    }),
    // selectedPage() {
    //   return this.$store.getters.pageSelecting;
    // },
  },
  methods: {
    submitForm() {
      if (this.manCategory) {
        console.log("Man Radio category");
        console.log(this.manCategory);
      }
      if (this.womanCategory) {
        console.log("WomanRadio category");
        console.log(this.womanCategory);
      }
      if (this.otherCategory) {
        console.log("otherCategory");
        console.log(this.otherCategory);
      }
      if (this.filterColor) {
        console.log('filterColor');
        console.log(this.filterColor);
      }
      if (this.min && this.max) {
        console.log('min');
        console.log(this.min);
        console.log('max');
        console.log(this.max);
      }
      if (this.rating) {
        console.log('rating');
        console.log(this.rating);
      }
      this.$emit('user-filter',{
        page: this.selectedPage,
        color: this.filterColor,
        min: this.min,
        max: this.max,
        rating: this.rating
      })
    },
  },
};
</script>
<style lang="scss" scoped>
.side-container {
  flex-basis: 200px;
  form {
    padding: 0 $distance-window $distance-window $distance-window;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-top: 0;
    padding-top: 1.3rem;
  }
}

.side-container.darkMode {
  background-color: $header-footer-dark !important;
}

.each-filter {
  width: 130px;
  position: relative;
  input {
    position: absolute;
    top: 3px;
    right: 15px;
  }
}

.priceInterval {
  padding-left: 53px;
  margin-top: 5px;
  display: inline-block;
}

input {
  outline: none;
}

input[type="number"] {
  width: 118px;
  background-image: url("../../assets/images/Other/dollar-sign.svg");
  background-repeat: no-repeat;
  background-size: 16px;
  background-position-y: 3px;
  padding: 2px 0px 0px 18px;
  font-size: 0.9rem;
  border-width: 1px;
}

button {
  margin-top: 1rem;
}

.label-color {
  @include filter-color(black);
}

.label-color  { 
  &:nth-child(5) {
   @include filter-color(white);
  }
}

.label-color  { 
  &:nth-child(7) {
   @include filter-color(blue);
  }
}

.label-color  { 
  &:nth-child(9) {
   @include filter-color(red);
  }
}
.label-color  { 
  &:nth-child(11) {
   @include filter-color(gray);
  }
}

#color-black {
  &:checked + .label-color {
    &::after {
      @include filter-clicked();
    }
  }
}
#color-white {
  &:checked + .label-color {
    &::after {
      @include filter-clicked(black);
    }
  }
}
#color-blue {
  &:checked + .label-color {
    &::after {
      @include filter-clicked();
    }
  }
}
#color-red {
  &:checked + .label-color {
    &::after {
      @include filter-clicked();
    }
  }
}
#color-gray {
  &:checked + .label-color {
    &::after {
      @include filter-clicked();
    }
  }
}
</style>
