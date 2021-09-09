<template>
  <div class="products-view">
    <products-demo page="man" filter='man'></products-demo>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
.products-view {
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid #ccc;
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
