<template>
  <div 
    @click='toggleBar' 
    class="bar-container"
    :class="{slide: barPosition}"
    >
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
export default {
  props:['bar-position'],
  methods: {
    toggleBar() {
      this.$emit('toggle');
    }
  }
}
</script>
<style lang="scss" scoped>
  .bar-container {
    border: 1px solid black;
    @include flex-model($dir: column, $content: space-evenly, $align: center);
    padding: 0.5rem 0.1rem;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.5s ease-in;
    > div {
      width: 1.2rem;
      height: 3px;
      background-color: $black;
      margin: 0.1rem 0.3rem;
    }
  }
  .slide {
    transform: translateX(184px);
  }
</style>