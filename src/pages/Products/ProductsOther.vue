<template>
  <div class="products-view">
    <products-demo page="otherPage" filter="other"></products-demo>
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
  .products-main {
    flex-grow: 4;
    background-color: rgb(245, 158, 148);
    padding: 0rem $distance-window;
      h1 {
        text-align: center;
      }
  }
</style>