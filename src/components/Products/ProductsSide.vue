<template>
  <div :class="{ darkMode: this.$store.getters.theme === 'light'}" class="side-container">
    <form
      @submit.prevent
      :class="{ darkMode: this.$store.getters.theme === 'light' }"
    >
      <div class="filter-group">
        <h2 v-if="filterCategory === 'man'">Man</h2>
        <h2 v-else-if="filterCategory === 'woman'">Woman</h2>
        <h2 v-else>Other</h2>
        <h4>Filter by category</h4>
        <div v-for="(item, idx) in theChosenPage" :key="idx" class="each-filter">
          <label>
            {{ item.label }}
            <input
              type="radio"
              name="category"
              :value="item.id"
              v-model="category"
            />
          </label>
        </div>
      </div>
      <div class="filter-group">
        <h4>Filter by color</h4>
          <div v-for="color in colorChoose" :key="color.id" class="color-group-each">
            <input type="checkbox" :id="color.id" :value="color.value" hidden v-model="filterColor">
            <label 
              class="label-color" 
              :for="color.id" 
              :style="{backgroundColor:color.value}"
              ></label>
          </div>
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
      <base-button :link="false" @click="submitForm">FILTER</base-button>
      <!-- <base-button :link='false' @click="submitData">SubmitData</base-button> -->
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: ["selected-page","filter-category"],
  emits:['user-filter'],
  data() {
    return {
      category: null,
      filterColor:[],
      min: 0,
      max: 0,
      rating: null,

      colorChoose:[
        { id:"color-black", value: "black"},
        { id:"color-white", value: "white"},
        { id:"color-blue", value: "blue"},
        { id:"color-red", value: "red"},
        { id:"color-gray", value:"gray"},
        { id:"color-yellow", value: "yellow"},
        { id:"color-green", value:"green"},
      ]
    };
  },
  computed:{
    ...mapGetters({
      ratingFilter: 'ratingFilterGetters',
      prodAll: 'productsAll',
      manPage: 'manPageGetters',
      womanPage: 'womanPageGetters',
      otherPage: 'otherPageGetters',
    }),
    theChosenPage() {
      if(this.filterCategory === 'man') {
        return this.manPage;
      }else if(this.filterCategory === 'woman') {
        return this.womanPage;
      }else {
        return this.otherPage;
      }
    },
    // labelStyle() {
    //   return {backgroundColor: }
    // }
  },
  methods: {
    submitForm() {
      //把filterCondition存起來等等會傳到route，若是用v-model的話會因為需要刪掉而遺失filterCondition
      const page = this.selectedPage.toLowerCase() + 'Products';
      const category = this.category;
      const filterColor = this.filterColor;
      const min = this.min;
      const max = this.max;
      const rating = this.rating;

      this.$emit('user-filter',{
        prodCategory: this.selectedPage,
        prodCategoryMinor: this.category,
        color: this.filterColor,
        min: this.min,
        max: this.max,
        avgRating: this.rating
      })
      // Reset Conditions
      this.category = null;
      this.filterColor =[];
      this.min = 0;
      this.max = 0;
      this.rating = null;
      
      // this.$router.push('/' + page + '/' + category + filterColor + min + max + rating);
      this.$router.push({
        name: 'manprods', 
        params: {manprods:'filter'},
        query:{ 
          main: page,
          minor: category,
          color: filterColor,
          min: min,
          max: max,
          avgRating: rating
          }
      })

      window.scrollTo(0,0);
    },
    submitData() {
      console.log(this.prodAll);
      fetch('https://resume-store-fd4de-default-rtdb.firebaseio.com/products.json',{
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.prodAll)
      })
      .then( response => {
        if(response.ok){
          console.log('Success!');
        }else {
          throw new Error('Upload Error!');
        }
      })
      .catch( error => {
        console.log(error);
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.color-group-each {
  display: inline-block;
  margin-right: 0.3rem;
  > label {
    @include filter-color();
  }
}

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


@each $color in $color-labels {
  #color-#{$color} {
    + .label-color {
      box-shadow: 2px 2px 3px #ccc;
    }
    &:checked + .label-color {
      &::after {
        @include filter-clicked();
      }
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

</style>
