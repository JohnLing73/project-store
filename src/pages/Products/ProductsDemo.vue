<template>
  <div class="products-view" :class="{darkMode: this.$store.getters.themeMode}">
    <transition name="side">
      <products-side
        v-if="showSide || toggleVal"
        :side-info="mainPage"
        @user-filter="showUpload"
      >
      </products-side>
    </transition>
    <products-main
      :content="productsPage"
    ></products-main>
    <transition name="toggle-btn">
      <pop-bar 
        v-if="!showSide"
        @toggle='toggleBar'
        :bar-position='showSide || toggleVal'
        >
      </pop-bar>
    </transition>
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

      toggleVal: false
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "prodIsLoading",
      productsPage: 'filterResult',
      innerWidth: 'innerWidth'
    }),
    renewFilter() {
      return this.$route.query;
    },
    showSide() {
      if(this.innerWidth < 555) {
        return false;
      }
      return true;
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
    },
    toggleBar() {
      console.log('from popbar.vue to proddemo.vue toggle');
      this.toggleVal = !this.toggleVal;
    }
  },
  created() {
    this.$store.commit("prodLoading", true); //test
    this.$store.dispatch('fetchData', this.$route);
  },
  mounted() {
    this.$store.commit('mutateInnerWidth');
    window.onresize = () => {
      this.$store.commit('mutateInnerWidth');
    }
  }
};
</script>
<style lang="scss">
.products-view {
  display: flex;
  flex-flow: row nowrap;
  background-color: $product-main-bg;
  position: relative;
}
.products-view.darkMode {
    background-color: $product-dark-mode !important;
  }

.side-enter-from,
.side-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.side-enter-to,
.side-leave-from {
  opacity: 1;
  transform: translateX(0);

}
.side-leave-active,
.side-enter-active {
 transition: all 0.5s ease-in;
}

.toggle-btn-enter-from,
.toggle-btn-leave-to {
  opacity: 0;
  transform: translateX(-38px);
}
.toggle-btn-enter-to,
.toggle-btn-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.toggle-btn-enter-active,
.toggle-btn-leave-active {
  transition: all 0.5s ease-in;
}

  //RWD
@media (max-width: 555px) {
  .products-view {
    justify-content: center;
  }
}
</style>
