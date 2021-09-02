<template>
  <div class="member-page">
    <div class="member-info">
      <h2>Member Center</h2>
    </div>
    <div class="member-side-bar">
      <button class="member-tab-btn" @click="switchTab('member-orders')">Member Orders</button>
      <button class="member-tab-btn" @click="switchTab('member-cart')">Member Cart</button>
      <button class="member-tab-btn" @click="switchTab('member-wishlists')">Member Wishlists</button>
      <button class="member-tab-btn" @click="switchTab('member-profile')">Member Profile</button>
    </div>
    <div class="member-main-part">
      <keep-alive>
        <component :is='tab'></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import MemberOrders from '../../components/Member/MemberOrders.vue';
import MemberCart from '../../components/Member/MemberCart.vue';
import MemberWishlists from '../../components/Member/MemberWishlists.vue';
import MemberProfile from '../../components/Member/MemberProfile.vue';
export default {
  components:{
    'member-orders': MemberOrders,
    'member-cart': MemberCart,
    'member-wishlists': MemberWishlists,
    'member-profile': MemberProfile
  },
  data() {
    return {
      tab: 'member-profile'
    }
  },
  methods:{
    switchTab(tab) {
      this.tab = tab;
    }
  }
}
</script>
<style lang="scss">
  .member-page {
    @include flex-model($wrap: wrap) ;
    padding: $distance-window ;
  }

  .member-info {
    flex-basis: 100%;
      h2 {
        text-align: center;
      }
  }

  .member-side-bar {
    @include flex-model($dir: column);
  }

  .member-tab-btn {
    padding: 1rem 0.8rem;
    font-size: 1rem;
    font-family: 'Play', sans-serif;
    background-color: $base-button-bck;
  }
</style>