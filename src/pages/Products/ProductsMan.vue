<template>
  <div class="products-view">
    <products-side selected-page="manPage"></products-side>
    <products-main></products-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
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
