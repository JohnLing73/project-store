<template>
  <div
    class="member-page"
    :class="{ darkMode: this.$store.state.normal.colorTheme === 'light' }"
  >
    <div class="member-info">
      <h2>Member Center</h2>
      <p>Member Center >> {{ tab }}</p>
    </div>
    <div class="member-side-bar">
      <button
        v-for="(tab, idx) in tabs"
        :key="idx"
        class="member-tab-btn"
        :class="{ selecting: this.tab === tab }"
        @click="switchTab(this.tabs[idx])"
      >
        {{ tab }}
      </button>
    </div>
    <div class="member-main-part">
      <keep-alive>
        <component :is="tab"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import MemberOrders from "../../components/Member/MemberOrders.vue";
import MemberCart from "../../components/Member/MemberCart.vue";
import MemberWishlists from "../../components/Member/MemberWishlists.vue";
import MemberProfile from "../../components/Member/MemberProfile.vue";
export default {
  components: {
    MemberOrders,
    MemberCart,
    MemberWishlists,
    MemberProfile,
  },
  data() {
    return {
      tab: "MemberProfile",
      tabs: ["MemberProfile", "MemberOrders", "MemberCart", "MemberWishlists"],
    };
  },
  methods: {
    switchTab(tab) {
      this.tab = tab;
    },
  },
};
</script>
<style lang="scss" scoped>
.member-page {
  @include flex-model($wrap: wrap);
  padding: $distance-window;
  background-color: $product-main-bg;
  width: 1200px;
  margin: auto;
}

.member-page.darkMode {
  background-color: $product-dark-mode !important;
}

.member-main-part {
  width: calc(100% - 197px);
}

.member-info {
  flex-basis: 100%;
  h2 {
    text-align: center;
  }
  p {
    padding-left: 170px;
  }
}

.member-side-bar {
  @include flex-model($dir: column);
}

.member-tab-btn {
  padding: 0.7rem 0.3rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: "Play", sans-serif;
  background-color: $base-button-bck;
  color: $white;
  display: inline-block;
  margin-right: $distance-window;
}
.card {
  margin: 0 auto !important;
  width: 750px;
}

button {
  transition: all 0.5s ease;
}
.selecting {
  background-color: #488a5a;
}

@media (max-width: 1217px) {
  .container {
      width: 650px;
  }
  .container-each {
    width: 100%;    
  }
  
}
</style>
