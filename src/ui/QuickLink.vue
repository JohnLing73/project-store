<template>
  <div>
    <router-link to= "/manProducts" @click="selectPage('manPage')">Man Prodcuts</router-link>
    <router-link to= "/womanProducts" @click="selectPage('womanPage')">Woman Prodcuts</router-link>
    <router-link to= "/otherProducts" @click="selectPage('otherPage')">Other Prodcuts</router-link>
  </div>
</template>
<script>
export default {
  methods: {
    selectPage(page) {
      this.$store.dispatch('pageChanged',page);
    }
  }
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