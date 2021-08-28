<template>
  <div>
    <router-link to= "/manProducts">Man Prodcuts</router-link>
    <router-link to= "/womanProducts">Woman Prodcuts</router-link>
    <router-link to= "/otherProducts">Other Prodcuts</router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang= "scss" scoped>
  div {
    background-color: #0f1111;
    display: flex;
    flex-flow: row nowrap;
  }

  a {
    padding: 0.45rem 1rem;
    text-decoration: none;
    color: $white;
    flex-basis: 15%;
  }

  
</style>