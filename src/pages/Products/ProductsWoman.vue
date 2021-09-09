<template>
  <div class="products-view">
    <products-demo page="woman" filter='woman'></products-demo>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      womanPage: 'womanPageGetters'
    })
  }
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