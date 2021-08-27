<template>
  <div>
    <div class="banner-icon">
      <font-awesome-icon :icon= "propsIcon" size="2x" ></font-awesome-icon>
    </div>
    <div>
      <h3>{{ fontTitle }}</h3>
      <p>{{ fontDescription }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props:['font-title', 'font-description','props-icon']
}
</script>
<style lang="scss" scoped>
   .banner-icon {
      float: left;
    }
    h3,
    p {
      margin: 0.3rem 1rem;
    }
    svg {
      color: #36e2e2;
    }
    
</style>