<template>
  <button v-if= "!link" :class= "mode">
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
    },
    mode: {
      type: String,
      required:false,
      default:null
    }
  }
}
</script>
<style lang="scss" scoped>
  button {
    @include button-style();
  }
  a {
    text-decoration: none;
    color: rgb(228, 81, 208);
      &:hover{
        cursor: pointer;
        }

  }
  button.minor {
    @include button-style;
    background-color: $white;
    color: $base-button-bck;
    transition: all ease 0.5s;
    &:hover {
        background-color: $base-button-minor-bck;
    }
  }
</style>