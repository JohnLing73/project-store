<template>
  <div class="card" :class="{darkMode: this.$store.state.normal.colorTheme === 'light'}">
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
  .card.darkMode {
    box-shadow: 0px 2px 8px #9a9a9aa1 !important;
  }
</style>