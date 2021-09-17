<template>
  <div>
    <router-link to="/products/Man" >Man Prodcuts</router-link>
    <router-link to="/products/Woman">Woman Prodcuts</router-link>
    <router-link to= "/products/Other">Other Prodcuts</router-link>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex';
export default {
  // computed: {
  //   ...mapGetters(['toManProducts', 'toWomanProducts', 'toOtherProducts'])
  // }
}
</script>
<style lang="scss" scoped>
  div {
    background-color: #0f1111;
    display: flex;
    flex-flow: row nowrap;
  }

  a {
    padding: 0.45rem 1rem;
    text-decoration: none;
    color: $white;
      &:hover {
        color: $aqua;
      }
  }

  
</style>