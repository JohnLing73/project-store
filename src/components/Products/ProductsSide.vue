<template>
  <div class="side-container">
    <div v-if="selectedPage ==='manPage'" class="filter-group">
      <h4>Filter by category</h4>
      <label for="man-clothes">Clothes</label>
      <input type="checkbox" id="man-clothes">
      <label for="man-shoes">Shoes</label>
      <input type="checkbox" id="man-shoes">
      <label for="man-watches">Watches</label>
      <input type="checkbox" id="man-watches">
    </div>
    <div v-else-if="selectedPage === 'womanPage'" class="filter-group">
      <h4>Filter by category</h4>
      <label for="woman-clothes">Clothes</label>
      <input type="checkbox" id="woman-clothes">
      <label for="woman-bags">Bags</label>
      <input type="checkbox" id="woman-bags">
      <label for="woman-jewellery">Jewellery</label>
      <input type="checkbox" id="woman-jewellery">
    </div>
    <div v-else class="filter-group">
      <h4>Filter by category</h4>
      <label for="other-mobile">Mobile</label>
      <input type="checkbox" id="other-mobile">
      <label for="other-earphone">Earphone</label>
      <input type="checkbox" id="other-earphone">
      <label for="other-jewellery">Jewellery</label>
      <input type="checkbox" id="other-jewellery">
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
  computed: {
    selectedPage() {
      return this.$store.getters.pageSelecting;
    }
  }
}
</script>
<style lang="scss" scoped>
  .side-container {
    flex-grow: 1;
    background-color: rgb(231, 228, 44);
  }
</style>