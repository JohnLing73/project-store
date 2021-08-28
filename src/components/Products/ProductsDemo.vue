<template>
  <div class="products-view">
    <products-side></products-side>
    <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>
<style lang= "scss">
  .products-view {
    display: flex;
    flex-flow: row nowrap;
  }

</style>