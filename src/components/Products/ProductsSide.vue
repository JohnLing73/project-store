<template>
  <div class="side-container">
    <div class="filter-group">
      <h4>Filter by category</h4>
      <label for="man-clothes">Clothes</label>
      <input type="checkbox" id="man-clothes">
      <label for="man-shoes">Shoes</label>
      <input type="checkbox" id="man-shoes">
      <label for="man-watches">Watches</label>
      <input type="checkbox" id="man-watches">
    </div>
    <div class="filter-group">
      <h4>Filter by color</h4>
      <label for="man-clothes">Clothes</label>
      <input type="checkbox" id="man-clothes">
      <label for="man-shoes">Shoes</label>
      <input type="checkbox" id="man-shoes">
      <label for="man-watches">Watches</label>
      <input type="checkbox" id="man-watches">
    </div>
    <div class="filter-group">
      <h4>Filter by rating</h4>
      <label for="man-three-star">3&#9733;+</label>
      <input type="checkbox" id="man-three-star">
      <label for="man-four-star">4&#9733;+</label>
      <input type="checkbox" id="man-four-star">
      <label for="man-five-star">5&#9733;+</label>
      <input type="checkbox" id="man-five-star">
      
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .side-container {
    flex-grow: 1;
    background-color: rgb(231, 228, 44);
  }
</style>