<template>
  <button v-if= "!link">
    <slot></slot>
  </button>
  <router-link v-else :to= "route">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props:{
    link: {
      type: Boolean,
      required: true,
      default: false
    },
    route: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: #3cb75c;
    color: $white;
    border: none;
    outline: none;
    font-family: "Play", sans-serif;
      &:hover{
        cursor: pointer;
        }
  }
  a {
    text-decoration: none;
    color: rgb(228, 81, 208);
      &:hover{
        cursor: pointer;
        }

  }
</style>