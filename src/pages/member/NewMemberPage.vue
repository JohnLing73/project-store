<template>
  <div
    class="member-page"
    :class="{ darkMode: this.$store.state.normal.colorTheme === 'light' }"
  >
    <div class="member-info">
      <h2>Member Center</h2>
      <p>Member Center >> Member {{ breadCrumb }}</p>
      <p>{{breadCrumbBtn}}</p>
    </div>
    <div class="member-side-bar">
      <button
        v-for="(tab, idx) in tabs"
        :key="idx"
        class="member-tab-btn"
        :class="{ selecting: tab === this.breadCrumbBtn }"
        @click="switchTab(this.tabs[idx])"
      >
        {{ tab }}
      </button>
    </div>
    <div class="member-main-part">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      tab: "MemberProfile",
      tabs: ["MemberProfile", "MemberOrders", "MemberCart", "MemberWishlists"],
      breadCrumb: 'Member'
    };
  },
  computed: {
    ...mapGetters(['memId']),
    tabPage() {
      return 'member-' + this.tab.slice(6).toLowerCase();
    },
    breadCrumbBtn() {
      return 'Member' + this.breadCrumb;
    }
  },
  methods: {
    switchTab(page) {
      this.tab = page;
      page = page.slice(6);
      page = page.charAt(0).toLowerCase() + page.slice(1);
      this.$router.push(page);
    },
    async fetchUserData() {
      await this.$store.dispatch('loginGet');
    },
    crumbCreator(newRoute) {
      let crumb = newRoute.name;
      crumb = crumb.slice(7);
      crumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);
      return crumb;
    }
  },
  async created() {
    await this.$store.dispatch('loginGet');
    this.breadCrumb = this.crumbCreator(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.breadCrumb =  this.crumbCreator(newRoute);
      console.log(newRoute.name);
    }
  }
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
</style>
