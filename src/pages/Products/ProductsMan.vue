<template>
  <p>manprods: {{ manprods }}</p>
  <div class="products-view">
    <products-demo page="Man" filter='man'></products-demo>
  </div>
</template>
<script>
export default {
  props: ['manprods']
};
</script>
