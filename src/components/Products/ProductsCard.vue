<template>
  <div class="prod-card">
    <div class="prod-img-container">
      <img src="../../assets/images/Products/ProdCard/man-cloth1.jpg" alt="">
      <span class="best-seller-label">Best seller</span>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .prod-card {
    flex-basis: 20%;
  }
  .prod-img-container {
    position: relative;

      .best-seller-label{
        position: absolute;
        left: 0;
        top: 20px;
        color: $white;
        background-color: rgba(165, 42, 42, 0.658);
        &::after {
          content:'';
          border-top: 26px solid;
          border-right: 10px solid transparent;
          width: 26px;
          height: 10px;
        }
      }
  }
</style>