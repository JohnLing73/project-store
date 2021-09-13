<template>
  <p>manprods: {{ manprods }}</p>
  <p> route : {{ this.$route.query}}</p>
  <div class="products-view">
    <products-demo page="Man" filter='man'></products-demo>
  </div>
</template>
<script>
export default {
  props: ['manprods']
};
</script>
