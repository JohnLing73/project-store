<template>
  <div class="products-view">
    <products-demo :page="manPage" filter='man'></products-demo>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      
    };
  },
  computed:{
    ...mapGetters(
        {
          manPage:'manPageGetters'
        }
    )
  }
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
