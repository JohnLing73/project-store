<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .card {
    border-radius: 12px;
    box-shadow: $box-shadow;
    padding: 1rem;
    margin: 2rem 0;
  }
  .card.dark-mode {
    box-shadow: 0px 2px 8px rgba(248, 241, 241, 0.66);
  }
</style>