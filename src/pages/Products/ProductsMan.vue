<template>
  <div class="products-view">
    <products-demo 
      page="Man" 
      filter='man' 
      :renewFilter="newUpdateFilter"
    >
    </products-demo>
  </div>
</template>
<script>
export default {
  props:['manprods'],
  computed: {
    newUpdateFilter() {
      return this.$route.query;
    }
  },
  watch: {
    $route(newRoute) {
      this.$store.state.newUpdateFilter = newRoute.query;
      console.log(this.$route.query);
    },
  },
};
</script>
